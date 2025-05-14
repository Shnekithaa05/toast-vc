import { useState } from 'react';
import { useNotification } from '../context/NotificationContext';
import ErrorMessage from './ErrorMessage';
import type { NotificationType } from '../types/notification.types';

const NotificationDemo = () => {
  const { toast, snackbar, alert } = useNotification();
  const [formError, setFormError] = useState('');
  
  const showToast = (type: NotificationType) => {
    toast(`This is a ${type} toast notification`, type);
  };
  
  const showSnackbar = (type: NotificationType) => {
    snackbar(`This is a ${type} snackbar notification`, type);
  };
  
  const showAlert = (type: NotificationType) => {
    alert(`This is a ${type} alert that requires user action`, type);
  };
  
  const showError = () => {
    setFormError('This field is required and cannot be empty');
    // Clear error after 3 seconds
    setTimeout(() => setFormError(''), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Notification System Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Toast Section */}
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Toast Notifications</h2>
          <p className="text-sm text-gray-600 mb-4">Brief notifications that appear at the top right</p>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => showToast('success')}
              className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
            >
              Success Toast
            </button>
            <button 
              onClick={() => showToast('error')}
              className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Error Toast
            </button>
            <button 
              onClick={() => showToast('info')}
              className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
            >
              Info Toast
            </button>
            <button 
              onClick={() => showToast('warning')}
              className="px-3 py-1 bg-yellow-500 text-white rounded-md text-sm hover:bg-yellow-600"
            >
              Warning Toast
            </button>
          </div>
        </div>
        
        {/* Alert Section */}
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Alert Dialogs</h2>
          <p className="text-sm text-gray-600 mb-4">Modal alerts that require user action</p>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => showAlert('success')}
              className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
            >
              Success Alert
            </button>
            <button 
              onClick={() => showAlert('error')}
              className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Error Alert
            </button>
            <button 
              onClick={() => showAlert('info')}
              className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
            >
              Info Alert
            </button>
            <button 
              onClick={() => showAlert('warning')}
              className="px-3 py-1 bg-yellow-500 text-white rounded-md text-sm hover:bg-yellow-600"
            >
              Warning Alert
            </button>
          </div>
        </div>
        
        {/* Snackbar Section */}
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Snackbar Notifications</h2>
          <p className="text-sm text-gray-600 mb-4">Notifications that appear at the bottom</p>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => showSnackbar('success')}
              className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
            >
              Success Snackbar
            </button>
            <button 
              onClick={() => showSnackbar('error')}
              className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Error Snackbar
            </button>
            <button 
              onClick={() => showSnackbar('info')}
              className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
            >
              Info Snackbar
            </button>
            <button 
              onClick={() => showSnackbar('warning')}
              className="px-3 py-1 bg-yellow-500 text-white rounded-md text-sm hover:bg-yellow-600"
            >
              Warning Snackbar
            </button>
          </div>
        </div>
        
        {/* Error Message Section */}
        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Form Error Message</h2>
          <p className="text-sm text-gray-600 mb-4">Inline form validation error</p>
          
          <div className="mb-4">
            <label htmlFor="demo-input" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="demo-input"
              type="text"
              className={`border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 ${
                formError ? 'border-red-500 focus:ring-red-200' : 'focus:ring-blue-200 border-gray-300'
              }`}
              placeholder="Enter username"
            />
            <ErrorMessage message={formError} />
          </div>
          
          <button 
            onClick={showError}
            className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
          >
            Show Form Error
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationDemo;