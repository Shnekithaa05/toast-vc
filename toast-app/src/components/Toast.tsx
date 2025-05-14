import { useEffect } from 'react';
import { X, AlertCircle, Info, CheckCircle, Bell } from 'lucide-react';
import type { BaseNotification } from '../types/notification.types';

interface ToastProps {
  notification: BaseNotification;
  onClose: () => void;
}

const Toast = ({ notification, onClose }: ToastProps) => {
  const { id, message, type } = notification;
  
  useEffect(() => {
    return () => {
      console.log(`Toast ${id} unmounted`);
    };
  }, [id]);
  
  return (
    <div 
      className={`
        flex items-center justify-between gap-2 rounded-md shadow-md py-3 px-4 min-w-64 pointer-events-auto
        ${type === 'success' ? 'bg-green-100 text-green-800' : ''}
        ${type === 'error' ? 'bg-red-100 text-red-800' : ''}
        ${type === 'info' ? 'bg-blue-100 text-blue-800' : ''}
        ${type === 'warning' ? 'bg-yellow-100 text-yellow-800' : ''}
      `}
      role="alert"
    >
      <div className="flex items-center gap-2">
        {type === 'success' && <CheckCircle className="w-5 h-5" />}
        {type === 'error' && <AlertCircle className="w-5 h-5" />}
        {type === 'info' && <Info className="w-5 h-5" />}
        {type === 'warning' && <Bell className="w-5 h-5" />}
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button 
        onClick={onClose} 
        className="text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;