import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 flex items-center gap-2">
            <span>© {currentYear} Vidhyanand Reddy. All rights reserved.</span>
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
