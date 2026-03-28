import { useNavigate } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

export function StickyInquiry() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/contact')}
      className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-110 z-40 flex items-center gap-2"
      aria-label="Send Inquiry"
    >
      <MessageSquare size={24} />
      <span className="hidden sm:inline font-medium">Send Inquiry</span>
    </button>
  );
}
