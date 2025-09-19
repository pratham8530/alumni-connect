import React, { useState } from 'react';
import TopBar from './TopBar';
import InfoModal from './modals/InfoModals';
import NotificationToast from './NotificationToast';
import ChatBot from './ChatBot';
import ForumDrawer from './ForumDrawer';
import { useAppStore } from '../store/appStore';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [modalType, setModalType] = useState<'about' | 'features' | 'demo' | 'contact' | null>(null);
  const { notifications } = useAppStore();

  const openModal = (type: 'about' | 'features' | 'demo' | 'contact') => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <div className="min-h-screen bg-surface">
      <TopBar onOpenModal={openModal} />
      
      <main className="relative">
        {children}
      </main>

      {/* Modals */}
      <InfoModal 
        isOpen={modalType !== null} 
        onClose={closeModal} 
        type={modalType || 'about'} 
      />

      {/* Notifications */}
      <div className="fixed top-20 right-4 z-40 space-y-2">
        {notifications.map((notification) => (
          <NotificationToast
            key={notification.id}
            notification={notification}
          />
        ))}
      </div>

      {/* ChatBot */}
      <ChatBot />

      {/* Forum Drawer */}
      <ForumDrawer />
    </div>
  );
};

export default Layout;