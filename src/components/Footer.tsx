import React from 'react';

const Footer = () => {
  const links = [
    { text: 'Request Demo', href: '#' },
    { text: 'About Credly', href: '#' },
    { text: 'Terms', href: '#' },
    { text: 'Privacy', href: '#' },
    { text: 'Developers', href: '#' },
    { text: 'Support', href: '#' },
    { text: 'Cookies', href: '#' },
    { text: 'Do Not Sell My Personal Information', href: '#' },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 mb-8">
          {links.map((link, index) => (
            <React.Fragment key={link.text}>
              <a href={link.href} className="text-gray-600 hover:text-gray-800">
                {link.text}
              </a>
              {index < links.length - 1 && (
                <span className="text-gray-400">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <a href="#" aria-label="Get it on Google Play">
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className="h-10"
            />
          </a>
          <a href="#" aria-label="Download on the App Store">
            <img 
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
              alt="Download on the App Store" 
              className="h-10"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;