import Link from 'next/link';
import { Copyright, Github, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 py-8">
          <div className='flex flex-row items-center gap-2 justify-center'>
            <Link className="flex p-2 bg-gradient-to-b from-gray-350 items-center text-gray-300 hover:bg-accent hover:text-accent-foreground hover:text-gray-100" href="https://instagram.com/carlosianrs">
              <Instagram size={20} strokeWidth={1.5} />
            </Link>
            <Link className="flex p-2 bg-gradient-to-b from-gray-350 items-center text-gray-300 hover:bg-accent hover:text-accent-foreground hover:text-gray-100" href="https://github.com/carlosianrs">
              <Github size={20} strokeWidth={1.5} />
            </Link>
            <Link className="flex p-2 bg-gradient-to-b from-gray-350 items-center text-gray-300 hover:bg-accent hover:text-accent-foreground hover:text-gray-100" href="https://www.linkedin.com/in/carlos-ian-08581b239/">
              <Linkedin size={20} strokeWidth={1.5} />
            </Link>
          </div>

          <div className='text-end text-gray-300 text-xs md:text-sm'>
            <p className='hover:text-gray-100'>+55 (85) 98869-8911</p>
            <p className='hover:text-gray-100'>carlosian894@gmail.com</p>
            <p className='hover:text-gray-100'>© 2025, Carlos Ian Rodrigues dos Santos</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
