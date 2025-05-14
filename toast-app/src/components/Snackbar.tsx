import { X, AlertCircle, Info, CheckCircle, Bell } from 'lucide-react';
import type { BaseNotification } from '../types/notification.types';

interface SnackbarProps {
  notification: BaseNotification;
  onClose: () => void;
}

const Snackbar = ({ notification, onClose }: SnackbarProps) => {
  const { message, type } = notification;
  
  return (
    <div 
      className={`
        flex items-center gap-3 rounded-md shadow-md py-3 px-4 w-full pointer-events-auto
        ${type === 'success' ? 'bg-green-600 text-white' : ''}
        ${type === 'error' ? 'bg-red-600 text-white' : ''}
        ${type === 'info' ? 'bg-blue-600 text-white' : ''}
        ${type === 'warning' ? 'bg-yellow-600 text-white' : ''}
      `}
      role="status"
    >
      {type === 'success' && <CheckCircle className="w-5 h-5" />}
      {type === 'error' && <AlertCircle className="w-5 h-5" />}
      {type === 'info' && <Info className="w-5 h-5" />}
      {type === 'warning' && <Bell className="w-5 h-5" />}
      <p className="text-sm flex-1">{message}</p>
      <button 
        onClick={onClose} 
        className="text-white hover:text-gray-200 focus:outline-none"
        aria-label="Close"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Snackbar;