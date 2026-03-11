import React, { useState, useEffect, createContext, useContext } from 'react';

// Key for localStorage
const PROGRESS_KEY = 'granoo_progress';

const getInitialState = () => {
  const saved = localStorage.getItem(PROGRESS_KEY);
  const today = new Date().toISOString().split('T')[0];
  
  if (saved) {
    const data = JSON.parse(saved);
    
    // Check if the user is active today, or if they missed a day to reset daily stats / streaks
    if (data.lastActiveDate !== today) {
      // Calculate day difference
      const lastDate = new Date(data.lastActiveDate);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      
      let newStreak = data.streak;
      if (diffDays > 1) {
        // Streak broken
        newStreak = 0;
      }
      
      return {
        ...data,
        dailyXp: 0,
        streak: newStreak, // Doesn't increment until they do something today
        lastActiveDate: today,
        streakActiveToday: false,
      };
    }
    return data;
  }
  
  return {
    totalXp: 0,
    dailyXp: 0,
    streak: 0,
    lastActiveDate: today,
    streakActiveToday: false, // Flag to check if they completed an activity today to increment streak
  };
};

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [progress, setProgressState] = useState(getInitialState);

  // Sync to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  const addXp = (amount) => {
    setProgressState(prev => {
      const today = new Date().toISOString().split('T')[0];
      
      // If adding XP on a totally new day and state hasn't refreshed yet
      let stateToUpdate = { ...prev };
      if (prev.lastActiveDate !== today) {
         // Reset daily stuff if day changed while app remained open
         const diffTime = Math.abs(new Date(today) - new Date(prev.lastActiveDate));
         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
         stateToUpdate.dailyXp = 0;
         stateToUpdate.streak = diffDays > 1 ? 0 : prev.streak;
         stateToUpdate.lastActiveDate = today;
         stateToUpdate.streakActiveToday = false;
      }

      const newDailyXp = stateToUpdate.dailyXp + amount;
      let newStreak = stateToUpdate.streak;
      let newStreakActiveToday = stateToUpdate.streakActiveToday;

      // Condition to increment streak: earn XP
      if (!newStreakActiveToday && amount > 0) {
        newStreak += 1;
        newStreakActiveToday = true;
      }

      return {
        ...stateToUpdate,
        totalXp: stateToUpdate.totalXp + amount,
        dailyXp: newDailyXp,
        streak: newStreak,
        streakActiveToday: newStreakActiveToday
      };
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, addXp }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => useContext(ProgressContext);
