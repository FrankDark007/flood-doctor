
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface EmergencyData {
  dateTime: string;
  activeCrews: number;
  responseTime: number;
  isEmergencyMode: boolean;
  triggerEmergency: () => void;
  resetEmergency: () => void;
}

const EmergencyContext = createContext<EmergencyData | undefined>(undefined);

// Simple seeded random number generator
const getSeededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const EmergencyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  
  const [data, setData] = useState({
    dateTime: '',
    activeCrews: 8,
    responseTime: 45
  });

  const triggerEmergency = () => setIsEmergencyMode(true);
  const resetEmergency = () => setIsEmergencyMode(false);

  useEffect(() => {
    const updateStatus = () => {
        const now = new Date();
        const currentTimestamp = now.getTime();
        const hourMs = 3600000;

        const options: Intl.DateTimeFormatOptions = { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric', 
            hour: 'numeric', 
            minute: '2-digit',
            second: '2-digit'
        };
        const dateTimeStr = now.toLocaleString('en-US', options);

        // 2. Response Time: Updates every 4 hours, Range 45-60 (Better metrics for sales)
        const responseSeed = Math.floor(currentTimestamp / (4 * hourMs)); 
        const randomResponse = getSeededRandom(responseSeed);
        const calculatedResponseTime = Math.floor(randomResponse * (60 - 45 + 1) + 45);

        // 3. Crews Active: Updates every 8 hours, Range 5-14
        const crewsSeed = Math.floor(currentTimestamp / (8 * hourMs));
        const randomCrews = getSeededRandom(crewsSeed + 100); 
        const calculatedCrews = Math.floor(randomCrews * (14 - 5 + 1) + 5);
        
        setData({
            dateTime: dateTimeStr,
            activeCrews: calculatedCrews,
            responseTime: calculatedResponseTime
        });
    };
    
    updateStatus();
    const interval = setInterval(updateStatus, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <EmergencyContext.Provider value={{ ...data, isEmergencyMode, triggerEmergency, resetEmergency }}>
      {children}
    </EmergencyContext.Provider>
  );
};

export const useEmergencyData = () => {
  const context = useContext(EmergencyContext);
  if (context === undefined) {
    throw new Error('useEmergencyData must be used within an EmergencyProvider');
  }
  return context;
};
