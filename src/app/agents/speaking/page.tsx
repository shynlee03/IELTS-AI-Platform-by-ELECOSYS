"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Message, SpeakingSession } from "@/types/speakingSession";
import { speakingService } from "@/services/speakingService";
import { speakingTemplates } from '@/data/speakingTemplates';
import SessionSidebar from "@/components/speaking/SessionSidebar";
import DefaultChat from "@/components/speaking/DefaultChat";
import AudioRecorder from "@/components/speaking/AudioRecorder";
import { useToast } from "@/components/ui/use-toast";

export default function SpeakingAgentPage() {
  const [activeTab, setActiveTab] = useState<string>("chat");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentSession, setCurrentSession] = useState<SpeakingSession | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isHandsFree, setIsHandsFree] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any | null>(null);
  const { toast } = useToast();
  const userId = "test-user"; // TODO: Replace with actual user ID

  useEffect(() => {
    // Load initial welcome message
    const welcomeMessage: Message = {
      role: "assistant",
      content: "Xin chào! Tôi là trợ lý luyện nói IELTS của bạn. Bạn có thể bắt đầu một phiên luyện tập mới hoặc xem lại các phiên trước đó. Bạn cần giúp đỡ gì?",
    };
    setMessages([welcomeMessage]);
  }, []);

  const handleSendMessage = async (content: string) => {
    try {
      setIsProcessing(true);
      const userMessage: Message = { role: "user", content };
      setMessages((prev) => [...prev, userMessage]);

      const response = await speakingService.sendMessage(content);
      const assistantMessage: Message = { role: "assistant", content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể gửi tin nhắn. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAudioAnalysis = async (response: string) => {
    try {
      // Add user's audio message
      const userMessage: Message = {
        role: "user",
        content: "[Audio Response]"
      };
      setMessages(prev => [...prev, userMessage]);

      // Add AI's analysis
      const assistantMessage: Message = {
        role: "assistant",
        content: response
      };
      setMessages(prev => [...prev, assistantMessage]);

      // Try to extract metrics
      try {
        const jsonMatch = response.match(/\{[\s\S]*?\}/);
        if (jsonMatch) {
          const metrics = JSON.parse(jsonMatch[0]);
          if (currentSession) {
            speakingService.updateSessionMetrics(currentSession.id, metrics);
          }
        }
      } catch (err) {
        console.error('Error parsing metrics:', err);
      }
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể phân tích audio. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    }
  };

  const handleSessionSelect = (session: SpeakingSession) => {
    setCurrentSession(session);
    if (session.messages) {
      setMessages(session.messages);
    }
  };

  const handleStartNewSession = () => {
    setSelectedTemplate(null);
    setMessages([]);
    setActiveTab("templates");
  };

  const handleTemplateSelect = async (template: any) => {
    setSelectedTemplate(template);
    const newSession = speakingService.startSession(userId, template.id);
    setCurrentSession(newSession);
    
    // Set system instruction based on template
    const systemInstruction = `You are an IELTS Speaking tutor helping students practice for Part ${template.taskType.replace('speaking_part', '')}. 
    Level: ${template.level}
    Target Band: ${template.targetBand}
    Focus Areas: ${template.criteria.join(', ')}
    
    Instructions:
    1. Evaluate student's responses based on IELTS criteria
    2. Provide feedback in both English and Vietnamese
    3. Focus on: pronunciation, fluency, grammar, vocabulary, and coherence
    4. Give specific examples for improvement
    5. Keep the conversation natural and encouraging`;

    // Send initial message
    const initialMessage = `Let's start a speaking practice session for IELTS Part ${template.taskType.replace('speaking_part', '')}. 
    
    ${template.titleVi}
    ${template.descriptionVi}
    
    I'll be your IELTS speaking tutor for this session. We'll focus on: ${template.criteria.join(', ')}
    
    Are you ready to begin?`;

    await handleSendMessage(initialMessage);
    setActiveTab("chat");
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-[inset_-12px_-8px_40px_#46464620] hover:shadow-[inset_-12px_-8px_40px_#46464620,_12px_8px_20px_#46464620] transition-all duration-300">
            <SessionSidebar
              onNewSession={handleStartNewSession}
              onSessionSelect={handleSessionSelect}
              currentSession={currentSession}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9">
          {selectedTemplate ? (
            <div className="space-y-6">
              {/* Template Info */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-[inset_-12px_-8px_40px_#46464620]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{selectedTemplate.titleVi}</h2>
                    <p className="text-gray-600 dark:text-gray-300">{selectedTemplate.descriptionVi}</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={handleStartNewSession}
                    className="rounded-xl bg-white hover:bg-gray-50 shadow-[5px_5px_10px_#b8b9be,_-5px_-5px_10px_#ffffff] hover:shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff] transition-all duration-300"
                  >
                    New Session
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff]">
                    <p className="text-sm font-medium">Level</p>
                    <p className="text-lg">{selectedTemplate.level}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff]">
                    <p className="text-sm font-medium">Target Band</p>
                    <p className="text-lg">{selectedTemplate.targetBand}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff]">
                    <p className="text-sm font-medium">Part</p>
                    <p className="text-lg">{selectedTemplate.taskType === 'free_chat' ? 'Free Chat' : selectedTemplate.taskType.replace('speaking_', '').toUpperCase()}</p>
                  </div>
                </div>
              </div>

              {/* Chat Interface */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-[inset_-12px_-8px_40px_#46464620]">
                <DefaultChat
                  messages={messages}
                  onSendMessage={handleSendMessage}
                  isProcessing={isProcessing}
                />
                <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                  <AudioRecorder
                    onAnalysisComplete={handleAudioAnalysis}
                    isHandsFree={isHandsFree}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-bold">IELTS Speaking Practice</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose a template or start a free chat with AI tutor
                </p>
              </div>

              {/* Free Chat Card */}
              <div className="mb-8">
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 shadow-[5px_5px_10px_#b8b9be,_-5px_-5px_10px_#ffffff] hover:shadow-[8px_8px_15px_#b8b9be,_-8px_-8px_15px_#ffffff]"
                  onClick={() => handleTemplateSelect(speakingTemplates.find(t => t.taskType === 'free_chat'))}
                >
                  <CardHeader>
                    <CardTitle>Trò chuyện tự do</CardTitle>
                    <CardDescription>Trò chuyện tự do với AI tutor để luyện tập tiếng Anh</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <span>Level: All Levels</span>
                      <span>Free Practice</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Tabs defaultValue="part1" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-8 p-1 bg-white dark:bg-gray-800 rounded-xl shadow-[5px_5px_10px_#b8b9be,_-5px_-5px_10px_#ffffff]">
                  <TabsTrigger 
                    value="part1"
                    className="data-[state=active]:shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff] rounded-lg"
                  >
                    Part 1
                  </TabsTrigger>
                  <TabsTrigger 
                    value="part2"
                    className="data-[state=active]:shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff] rounded-lg"
                  >
                    Part 2
                  </TabsTrigger>
                  <TabsTrigger 
                    value="part3"
                    className="data-[state=active]:shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff] rounded-lg"
                  >
                    Part 3
                  </TabsTrigger>
                  <TabsTrigger 
                    value="advanced"
                    className="data-[state=active]:shadow-[inset_5px_5px_10px_#b8b9be,_inset_-5px_-5px_10px_#ffffff] rounded-lg"
                  >
                    Advanced
                  </TabsTrigger>
                </TabsList>

                {['part1', 'part2', 'part3', 'advanced'].map((part) => (
                  <TabsContent key={part} value={part}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {speakingTemplates
                        .filter(t => t.taskType === `speaking_${part}`)
                        .map((template) => (
                          <Card 
                            key={template.id}
                            className="cursor-pointer transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 shadow-[5px_5px_10px_#b8b9be,_-5px_-5px_10px_#ffffff] hover:shadow-[8px_8px_15px_#b8b9be,_-8px_-8px_15px_#ffffff]"
                            onClick={() => handleTemplateSelect(template)}
                          >
                            <CardHeader>
                              <CardTitle>{template.titleVi}</CardTitle>
                              <CardDescription>{template.descriptionVi}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex justify-between text-sm">
                                <span>Level: {template.level}</span>
                                <span>Target: Band {template.targetBand}</span>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-1">
                                {template.criteria.map((criterion, index) => (
                                  <span 
                                    key={index}
                                    className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 shadow-[inset_2px_2px_5px_#b8b9be,_inset_-2px_-2px_5px_#ffffff]"
                                  >
                                    {criterion}
                                  </span>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
