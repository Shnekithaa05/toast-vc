import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;
  
  return (
    <div className="flex items-center gap-2 text-red-600 mt-1 text-sm" role="alert">
      <AlertCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;