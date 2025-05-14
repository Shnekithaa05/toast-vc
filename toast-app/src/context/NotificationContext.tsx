import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { BaseNotification, NotificationContextType, NotificationType } from '../types/notification.types';
import NotificationContainer from '../components/NotificationContainer';

// Create the context
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

// Custom hook to use notifications
export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};

// Generate a unique ID for each notification
const generateId = () => Math.random().toString(36).substring(2, 9);

// Provider component
interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notifications, setNotifications] = useState<BaseNotification[]>([]);
  
  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const addNotification = useCallback((message: string, type: NotificationType, duration?: number) => {
    const id = generateId();
    const notification = { id, message, type, duration };
    
    setNotifications(prev => [...prev, notification]);
    
    if (duration) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }
    
    return id;
  }, [removeNotification]);

  const toast = useCallback((message: string, type: NotificationType, duration = 3000) => {
    return addNotification(message, type, duration);
  }, [addNotification]);
  
  const snackbar = useCallback((message: string, type: NotificationType, duration = 5000) => {
    return addNotification(message, type, duration);
  }, [addNotification]);
  
  const alert = useCallback((message: string, type: NotificationType) => {
    return addNotification(message, type);
  }, [addNotification]);
  
  const errorMessage = useCallback((message: string) => {
    return addNotification(message, 'error');
  }, [addNotification]);

  const value = {
    notifications,
    toast,
    snackbar,
    alert,
    errorMessage,
    removeNotification
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
      <NotificationContainer />
    </NotificationContext.Provider>
  );
};