import { X, AlertCircle, Info, CheckCircle, Bell } from 'lucide-react';
import type { BaseNotification } from '../types/notification.types';

interface AlertProps {
  notification: BaseNotification;
  onClose: () => void;
}

const Alert = ({ notification, onClose }: AlertProps) => {
  const { message, type } = notification;
  
  return (
    <div 
      className={`
        rounded-md shadow-lg py-4 px-6 pointer-events-auto min-w-72
        ${type === 'success' ? 'bg-green-50 border-l-4 border-green-500 text-green-800' : ''}
        ${type === 'error' ? 'bg-red-50 border-l-4 border-red-500 text-red-800' : ''}
        ${type === 'info' ? 'bg-blue-50 border-l-4 border-blue-500 text-blue-800' : ''}
        ${type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800' : ''}
      `}
      role="alertdialog"
      aria-modal="true"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          {type === 'success' && <CheckCircle className="w-6 h-6" />}
          {type === 'error' && <AlertCircle className="w-6 h-6" />}
          {type === 'info' && <Info className="w-6 h-6" />}
          {type === 'warning' && <Bell className="w-6 h-6" />}
          <div>
            <h3 className="font-semibold text-base capitalize">{type} Alert</h3>
            <p className="text-sm mt-1">{message}</p>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button 
          onClick={onClose}
          className={`
            px-3 py-1 rounded-md text-sm font-medium focus:outline-none
            ${type === 'success' ? 'bg-green-100 hover:bg-green-200 text-green-800' : ''}
            ${type === 'error' ? 'bg-red-100 hover:bg-red-200 text-red-800' : ''}
            ${type === 'info' ? 'bg-blue-100 hover:bg-blue-200 text-blue-800' : ''}
            ${type === 'warning' ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800' : ''}
          `}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default Alert;