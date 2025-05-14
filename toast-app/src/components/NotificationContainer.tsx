import { useNotification } from '../context/NotificationContext';
import Toast from './Toast';
import Alert from './Alert';
import Snackbar from './Snackbar';

const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotification();
  
  return (
    <div className="fixed inset-0 flex flex-col items-center pointer-events-none">
      {/* Toasts - at the top */}
      <div className="fixed top-4 right-4 flex flex-col gap-2 items-end max-w-md w-full">
        {notifications.filter(notif => notif.duration === 3000).map(notification => (
          <Toast 
            key={notification.id}
            notification={notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
      
      {/* Alerts - in the center */}
      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 flex flex-col gap-2 max-w-md w-full">
        {notifications.filter(notif => !notif.duration).map(notification => (
          <Alert 
            key={notification.id}
            notification={notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
      
      {/* Snackbars - at the bottom */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col gap-2 max-w-md w-full">
        {notifications.filter(notif => notif.duration === 5000).map(notification => (
          <Snackbar 
            key={notification.id}
            notification={notification}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationContainer;