import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatCircle, X, PaperPlaneRight } from 'phosphor-react';
import { useAppStore } from '../store/appStore';

const ChatBot: React.FC = () => {
  const { isChatbotOpen, toggleChatbot, chatMessages, addChatMessage } = useAppStore();
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    addChatMessage(inputValue);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const quickButtons = [
    'Admissions',
    'Placements', 
    'Mentorship'
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all hover:bg-primary-light hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isChatbotOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChatCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isChatbotOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-80 max-w-[calc(100vw-3rem)] rounded-2xl border border-border-secondary bg-surface shadow-2xl"
          >
            {/* Header */}
            <div className="border-b border-border-secondary p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">FAQ Assistant</h3>
                  <p className="text-xs text-muted-text">Ask about admissions, placements & mentorship</p>
                </div>
                <button
                  onClick={toggleChatbot}
                  className="rounded-lg p-1 text-muted-text hover:text-foreground"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3">
              {chatMessages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`chat-message ${message.isBot ? 'bot' : 'user'}`}>
                    {message.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="chat-message bot">
                    <div className="typing-indicator">
                      <div className="typing-dot" />
                      <div className="typing-dot" />
                      <div className="typing-dot" />
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Buttons */}
            <div className="border-t border-border-secondary p-3">
              <div className="flex gap-2">
                {quickButtons.map((button) => (
                  <button
                    key={button}
                    onClick={() => addChatMessage(button)}
                    className="rounded-xl bg-surface-secondary px-3 py-1 text-xs text-muted-text transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="border-t border-border-secondary p-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about admissions, placement tips, or mentorship..."
                  className="flex-1 rounded-xl border border-border bg-surface-secondary px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="rounded-xl bg-primary p-2 text-primary-foreground transition-all hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PaperPlaneRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;