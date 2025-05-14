// Define notification types
export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface BaseNotification {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number;
}

export interface NotificationContextType {
  notifications: BaseNotification[];
  toast: (message: string, type: NotificationType, duration?: number) => void;
  snackbar: (message: string, type: NotificationType, duration?: number) => void;
  alert: (message: string, type: NotificationType) => void;
  errorMessage: (message: string) => void;
  removeNotification: (id: string) => void;
}