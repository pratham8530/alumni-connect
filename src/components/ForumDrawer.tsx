import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUp, Plus } from 'phosphor-react';
import { useAppStore } from '../store/appStore';
import { dummyData } from '../data/dummy';

const ForumDrawer: React.FC = () => {
  const { isDrawerOpen, drawerContent, selectedForumId, closeDrawer, addNotification } = useAppStore();
  const [newQuestion, setNewQuestion] = useState('');

  const forum = selectedForumId ? dummyData.forums.find(f => f.id === selectedForumId) : null;

  const handlePostQuestion = () => {
    if (!newQuestion.trim()) return;
    addNotification('Question posted successfully!', 'success');
    setNewQuestion('');
  };

  if (drawerContent !== 'forum' || !forum) return null;

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <div className="drawer-overlay" onClick={closeDrawer} />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="drawer-content"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="border-b border-border-secondary p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">{forum.title}</h2>
                    <p className="text-sm text-muted-text">{forum.participants} members active</p>
                  </div>
                  <button
                    onClick={closeDrawer}
                    className="rounded-lg p-2 text-muted-text hover:bg-surface-secondary"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Threads */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {forum.threads.map((thread) => (
                  <div key={thread.id} className="card">
                    <div className="mb-3">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-foreground">{thread.question}</h3>
                        <div className="flex items-center space-x-1 text-muted-text">
                          <ArrowUp size={14} />
                          <span className="text-sm">{thread.upvotes}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-text">by {thread.author}</p>
                    </div>
                    
                    {thread.answers.map((answer) => (
                      <div key={answer.id} className="mt-3 rounded-lg bg-surface-secondary p-3">
                        <p className="text-sm text-foreground">{answer.text}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-muted-text">{answer.author}</span>
                          <div className="flex items-center space-x-1 text-muted-text">
                            <ArrowUp size={12} />
                            <span className="text-xs">{answer.upvotes}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Post Question */}
              <div className="border-t border-border-secondary p-6">
                <div className="space-y-3">
                  <textarea
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Ask a question to the community..."
                    rows={3}
                    className="w-full rounded-xl border border-border bg-surface-secondary px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                  <button
                    onClick={handlePostQuestion}
                    disabled={!newQuestion.trim()}
                    className="btn-primary w-full text-sm disabled:opacity-50"
                  >
                    <Plus size={16} className="mr-2" />
                    Post Question
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ForumDrawer;