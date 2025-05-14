import { NotificationProvider } from './context/NotificationContext';
import NotificationDemo from './components/NotificationDemo';

export default function App() {
  return (
    <NotificationProvider>
      <NotificationDemo />
    </NotificationProvider>
  );
}