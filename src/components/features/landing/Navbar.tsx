import { Button } from '@/components/ui/button';
import { CodeIcon } from 'lucide-react';

export const Navbar = () => {
  const navLinks = [
    { href: '/', title: 'Home' },
    { href: '#features', title: 'Features' },
    { href: '#how-it-works', title: 'How it Works' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full flex items-center h-16 shadow-lg shadow-gray-100/60 bg-white/90 z-40">
      <nav className="flex items-center justify-between container mx-auto">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center bg-primary rounded-lg text-white w-8 h-8">
              <CodeIcon size={14} />
            </span>
            <span className="font-medium text-xl">BoilerPlate</span>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="font-medium text-gray-500 hover:text-primary">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-x-4">
          <Button className="cursor-pointer" variant="ghost">
            Login
          </Button>
          <Button className="cursor-pointer">Get Started</Button>
        </div>
      </nav>
    </div>
  );
};
