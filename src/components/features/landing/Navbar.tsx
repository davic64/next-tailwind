'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CodeIcon, MenuIcon, XIcon } from 'lucide-react';

const navLinks = [
  { href: '/', title: 'Home' },
  { href: '#features', title: 'Features' },
  { href: '#how-it-works', title: 'How it Works' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="sticky top-0 left-0 w-full h-16 flex items-center shadow-lg shadow-gray-100/60 bg-white/90 z-50">
        <div className="max-w-7xl flex items-center justify-between w-full mx-auto px-4">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center bg-primary rounded-lg text-white w-8 h-8">
              <CodeIcon size={14} />
            </span>
            <span className="font-medium text-xl">BoilerPlate</span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-medium text-gray-500 hover:text-primary transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-x-4">
              <Button variant="ghost">Login</Button>
              <Button>Get Started</Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="cursor-pointer">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/30 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-white z-40 rounded-b-xl shadow transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="mt-16 p-4 space-y-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="block font-medium text-gray-800 hover:text-primary transition-colors"
            >
              {link.title}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-200 space-y-2">
            <Button variant="outline" className="w-full" onClick={toggleMenu}>
              Login
            </Button>
            <Button className="w-full" onClick={toggleMenu}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
