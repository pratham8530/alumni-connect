import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, User, Heart, BookOpen, Trophy } from 'phosphor-react';
import { useAppStore } from '../../store/appStore';

const ProfileCompletion: React.FC = () => {
  const { currentUser, addNotification } = useAppStore();
  
  const student = currentUser as any;
  
  const completionItems = [
    {
      id: 'bio',
      title: 'Complete Bio',
      description: 'Add a detailed bio about your goals and interests',
      completed: student?.bio && student.bio.length > 20,
      points: 10,
      icon: User
    },
    {
      id: 'interests',
      title: 'Add More Interests',
      description: 'Select at least 5 areas of interest',
      completed: student?.tags && student.tags.length >= 5,
      points: 15,
      icon: Heart
    },
    {
      id: 'skills',
      title: 'Technical Skills',
      description: 'List your programming languages and frameworks',
      completed: false, // Always false for demo
      points: 20,
      icon: BookOpen
    },
    {
      id: 'projects',
      title: 'Add Projects',
      description: 'Showcase your best projects with links',
      completed: false, // Always false for demo
      points: 25,
      icon: Trophy
    }
  ];

  const handleCompleteItem = (item: typeof completionItems[0]) => {
    if (item.completed) return;
    
    addNotification(`${item.title} completed! +${item.points} points earned 🎉`, 'success');
  };

  const totalPoints = completionItems.reduce((sum, item) => sum + (item.completed ? item.points : 0), 0);
  const completedCount = completionItems.filter(item => item.completed).length;
  const completionPercentage = Math.round((completedCount / completionItems.length) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card"
    >
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-foreground">Complete Your Profile</h3>
          <div className="text-sm text-muted-text">{completedCount}/{completionItems.length} completed</div>
        </div>
        
        <div className="h-2 w-full rounded-full bg-surface-secondary">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        
        <div className="mt-2 text-sm text-muted-text">
          {totalPoints} points earned • {70 - totalPoints} points remaining
        </div>
      </div>

      <div className="space-y-3">
        {completionItems.map((item) => {
          const IconComponent = item.icon;
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                item.completed 
                  ? 'bg-success/5 border-success/20' 
                  : 'bg-surface-secondary border-border hover:border-primary/30 cursor-pointer'
              }`}
              onClick={() => handleCompleteItem(item)}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  item.completed 
                    ? 'bg-success/10 text-success' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  {item.completed ? <CheckCircle size={20} /> : <IconComponent size={20} />}
                </div>
                
                <div>
                  <h4 className={`font-medium ${
                    item.completed ? 'text-success' : 'text-foreground'
                  }`}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-text">{item.description}</p>
                </div>
              </div>

              <div className="text-right">
                <div className={`text-sm font-medium ${
                  item.completed ? 'text-success' : 'text-primary'
                }`}>
                  +{item.points} pts
                </div>
                {!item.completed && (
                  <div className="text-xs text-muted-text">Click to complete</div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {completionPercentage === 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
        >
          <div className="text-center">
            <Trophy size={24} className="mx-auto mb-2 text-primary" />
            <h4 className="font-semibold text-foreground">Profile Complete! 🎉</h4>
            <p className="text-sm text-muted-text">You've unlocked premium mentorship features</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProfileCompletion;