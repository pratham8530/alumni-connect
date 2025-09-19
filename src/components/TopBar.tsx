import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaretDown, User, Info, Gear, ChatCircle, Phone } from 'phosphor-react';
import { useAppStore } from '../store/appStore';

interface TopBarProps {
  onOpenModal: (type: 'about' | 'features' | 'demo' | 'contact') => void;
}

const TopBar: React.FC<TopBarProps> = ({ onOpenModal }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { userRole, currentUser } = useAppStore();

  return (
    <motion.header 
      className="sticky top-0 z-40 w-full border-b border-border-secondary bg-surface/95 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo & App Name */}
        <div className="flex items-center space-x-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-light">
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="text-primary-foreground"
            >
              <path 
                d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" 
                fill="currentColor"
              />
              <path 
                d="M19 15L19.38 16.74L21 17L19.38 17.26L19 19L18.62 17.26L17 17L18.62 16.74L19 15Z" 
                fill="currentColor"
              />
              <path 
                d="M5 6L5.38 7.74L7 8L5.38 8.26L5 10L4.62 8.26L3 8L4.62 7.74L5 6Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-foreground">AlumniConnect</h1>
            <p className="text-xs text-muted-text">Track • Connect • Grow</p>
          </div>
        </div>

        {/* Right Side - Dropdown & Avatar */}
        <div className="flex items-center space-x-4">
          
          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-text transition-colors hover:bg-surface-secondary hover:text-foreground"
            >
              <span>More</span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <CaretDown size={16} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  {/* Backdrop */}
                  <div 
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  
                  {/* Dropdown Menu */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full z-20 mt-2 w-56 rounded-2xl border border-border-secondary bg-surface shadow-lg"
                  >
                    <div className="p-2">
                      {[
                        { label: 'About', icon: Info, key: 'about' as const },
                        { label: 'Features', icon: Gear, key: 'features' as const },
                        { label: 'Demo Script', icon: ChatCircle, key: 'demo' as const },
                        { label: 'Contact', icon: Phone, key: 'contact' as const },
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => {
                            onOpenModal(item.key);
                            setIsDropdownOpen(false);
                          }}
                          className="flex w-full items-center space-x-3 rounded-xl px-3 py-2 text-sm text-muted-text transition-colors hover:bg-surface-secondary hover:text-foreground"
                        >
                          <item.icon size={16} />
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* User Avatar */}
          {currentUser && (
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-foreground">{currentUser.name}</p>
                <p className="text-xs text-muted-text capitalize">{userRole}</p>
              </div>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="h-full w-full rounded-full bg-surface object-cover"
                />
              </div>
            </div>
          )}

          {!currentUser && (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-secondary">
              <User size={16} className="text-muted-text" />
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default TopBar;