import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', url: '#' },
    { name: 'Discord', url: '#' },
  ];

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <p className="text-gray-500">© 2024 $KOKO's Cardano. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;