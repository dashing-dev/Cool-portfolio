import React from 'react';
import {GithubIcon, Linkedin, Mail,  } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/dashing-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sanjay-bhandari-dashing-dev/', label: 'LinkedIn' },
    
    { icon: Mail, href: 'mailto:yousure90@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Sanjay Bhandari</h3>
            <p className="text-gray-400 text-sm max-w-md">
              Building robotics and IT communities with code and vision.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Built by Sanjay Bhandari — Robotics. Code. Community.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;