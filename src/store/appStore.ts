import { create } from 'zustand';
import { dummyData, Student, Alumni } from '../data/dummy';

export type UserRole = 'student' | 'alumni' | null;

export interface OnboardingData {
  name?: string;
  college?: string;
  year?: string;
  company?: string;
  role?: string;
  gradYear?: number;
  tags?: string[];
  bio?: string;
  photo?: string;
  rollNumber?: string;
  linkedinUrl?: string;
}

interface AppState {
  // User & Authentication
  userRole: UserRole;
  currentUser: Student | Alumni | null;
  isOnboardingComplete: boolean;
  onboardingStep: number;
  onboardingData: OnboardingData;
  
  // UI State
  isDrawerOpen: boolean;
  drawerContent: 'forum' | 'chat' | null;
  selectedForumId: string | null;
  isChatbotOpen: boolean;
  
  // Chat state
  chatMessages: Array<{
    id: string;
    text: string;
    isBot: boolean;
    timestamp: Date;
  }>;
  
  // Notifications
  notifications: Array<{
    id: string;
    text: string;
    type: 'success' | 'error' | 'info';
    timestamp: Date;
  }>;

  // Actions
  setUserRole: (role: UserRole) => void;
  setOnboardingStep: (step: number) => void;
  updateOnboardingData: (data: Partial<OnboardingData>) => void;
  completeOnboarding: () => void;
  
  // UI Actions
  openDrawer: (content: 'forum' | 'chat', forumId?: string) => void;
  closeDrawer: () => void;
  toggleChatbot: () => void;
  
  // Chat Actions
  addChatMessage: (text: string, isBot?: boolean) => void;
  clearChat: () => void;
  
  // Notification Actions
  addNotification: (text: string, type?: 'success' | 'error' | 'info') => void;
  removeNotification: (id: string) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  // Initial state
  userRole: null,
  currentUser: null,
  isOnboardingComplete: false,
  onboardingStep: 1,
  onboardingData: {},
  
  isDrawerOpen: false,
  drawerContent: null,
  selectedForumId: null,
  isChatbotOpen: false,
  
  chatMessages: [
    {
      id: '1',
      text: 'Hi! I\'m here to help you with admissions, placement tips, and mentorship questions. What would you like to know?',
      isBot: true,
      timestamp: new Date()
    }
  ],
  
  notifications: [],

  // Actions
  setUserRole: (role) => set({ userRole: role }),
  
  setOnboardingStep: (step) => set({ onboardingStep: step }),
  
  updateOnboardingData: (data) => set((state) => ({
    onboardingData: { ...state.onboardingData, ...data }
  })),
  
  completeOnboarding: () => {
    const { onboardingData, userRole } = get();
    
    // Create mock user based on onboarding data
    const mockUser = userRole === 'student' 
      ? {
          id: 'new-student',
          name: onboardingData.name || 'New Student',
          college: onboardingData.college || 'University',
          year: onboardingData.year || 'Final Year',
          tags: onboardingData.tags || [],
          bio: onboardingData.bio || 'Excited to learn and grow!',
          avatar: '/images/avatars/default.png',
          progress: 25
        }
      : {
          id: 'new-alumni',
          name: onboardingData.name || 'New Alumni',
          company: onboardingData.company || 'Company',
          role: onboardingData.role || 'Software Engineer',
          gradYear: onboardingData.gradYear || 2020,
          tags: onboardingData.tags || [],
          verified: false,
          bio: onboardingData.bio || 'Ready to help students succeed!',
          avatar: '/images/avatars/default.png',
          points: 10,
          experience: 2,
          mentoring: false
        };
    
    set({
      currentUser: mockUser,
      isOnboardingComplete: true,
      onboardingStep: 1,
      onboardingData: {}
    });
  },
  
  // UI Actions
  openDrawer: (content, forumId) => set({
    isDrawerOpen: true,
    drawerContent: content,
    selectedForumId: forumId || null
  }),
  
  closeDrawer: () => set({
    isDrawerOpen: false,
    drawerContent: null,
    selectedForumId: null
  }),
  
  toggleChatbot: () => set((state) => ({
    isChatbotOpen: !state.isChatbotOpen
  })),
  
  // Chat Actions
  addChatMessage: (text, isBot = false) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date()
    };
    
    set((state) => ({
      chatMessages: [...state.chatMessages, newMessage]
    }));
    
    // Auto-respond if it's a user message
    if (!isBot) {
      setTimeout(() => {
        const responses = getBotResponse(text);
        responses.forEach((response, index) => {
          setTimeout(() => {
            get().addChatMessage(response, true);
          }, (index + 1) * 1000);
        });
      }, 500);
    }
  },
  
  clearChat: () => set({
    chatMessages: [
      {
        id: '1',
        text: 'Hi! I\'m here to help you with admissions, placement tips, and mentorship questions. What would you like to know?',
        isBot: true,
        timestamp: new Date()
      }
    ]
  }),
  
  // Notification Actions
  addNotification: (text, type = 'info') => {
    const notification = {
      id: Date.now().toString(),
      text,
      type,
      timestamp: new Date()
    };
    
    set((state) => ({
      notifications: [...state.notifications, notification]
    }));
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      get().removeNotification(notification.id);
    }, 5000);
  },
  
  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id)
  })),
}));

// Simple chatbot response logic
function getBotResponse(userMessage: string): string[] {
  const message = userMessage.toLowerCase();
  
  if (message.includes('admission') || message.includes('college')) {
    return dummyData.chatbotFAQs.admissions.slice(0, 2);
  }
  
  if (message.includes('placement') || message.includes('job') || message.includes('interview')) {
    return dummyData.chatbotFAQs.placements.slice(0, 2);
  }
  
  if (message.includes('mentor') || message.includes('guidance') || message.includes('help')) {
    return dummyData.chatbotFAQs.mentorship.slice(0, 2);
  }
  
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return ['Hello! I can help you with questions about admissions, placements, and mentorship. What would you like to know?'];
  }
  
  return [
    'I can help you with questions about admissions, placement preparation, and mentorship programs. Try asking about specific topics!',
    'You can also use quick buttons: "Admissions", "Placements", or "Mentorship" for common questions.'
  ];
}