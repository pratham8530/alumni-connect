import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Info, X } from 'phosphor-react';
import { useAppStore } from '../store/appStore';

interface Notification {
  id: string;
  text: string;
  type: 'success' | 'error' | 'info';
  timestamp: Date;
}

interface NotificationToastProps {
  notification: Notification;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ notification }) => {
  const { removeNotification } = useAppStore();

  const icons = {
    success: CheckCircle,
    error: XCircle,
    info: Info
  };

  const colors = {
    success: 'text-success',
    error: 'text-danger', 
    info: 'text-primary'
  };

  const backgroundColors = {
    success: 'bg-success/10 border-success/20',
    error: 'bg-danger/10 border-danger/20',
    info: 'bg-primary/10 border-primary/20'
  };

  const Icon = icons[notification.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.95 }}
      className={`flex items-start space-x-3 rounded-2xl border p-4 shadow-lg backdrop-blur-sm ${backgroundColors[notification.type]}`}
    >
      <Icon size={20} className={colors[notification.type]} />
      
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">
          {notification.text}
        </p>
      </div>

      <button
        onClick={() => removeNotification(notification.id)}
        className="rounded-lg p-1 text-muted-text hover:text-foreground"
      >
        <X size={16} />
      </button>
    </motion.div>
  );
};

export default NotificationToast;