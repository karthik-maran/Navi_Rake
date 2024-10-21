import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-4">Coalog</h5>
            <p className="text-sm">
                  </p>
          </div>
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-gray-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-gray-400">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-gray-400">Services</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-sm hover:text-gray-400">Contact</a>
              </li>
            </ul>
          </div>
         
          <div className="w-full md:w-1/4 mb-6">
            <h5 className="font-bold text-lg mb-4">Contact Us</h5>
            <p className="text-sm mb-2"></p>
            <p className="text-sm mb-2">Email: karthickmaran007@gmail.com</p>
            <p className="text-sm mb-2">Phone: 7667115858</p>
            <div className="flex mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-400 mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.56v14.88c0 2.5-2.03 4.56-4.56 4.56H4.56A4.56 4.56 0 010 19.44V4.56C0 2.03 2.03 0 4.56 0h14.88C21.97 0 24 2.03 24 4.56zM8.11 19.44H5.01V9.36h3.1v10.08zm-1.55-11.6c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm14.28 11.6h-3.1v-5.45c0-1.3-.47-2.18-1.66-2.18-.91 0-1.45.62-1.69 1.22-.08.22-.1.53-.1.84v5.57H11.3s.04-9.04 0-10.08h3.1v1.43c.41-.64 1.15-1.56 2.8-1.56 2.05 0 3.59 1.34 3.59 4.22v5.99z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h11.04v-8.31H9.65v-3.24h3.16V9.41c0-3.14 1.92-4.85 4.72-4.85 1.34 0 2.49.1 2.83.15v3.28h-1.94c-1.52 0-1.82.72-1.82 1.78v2.33h3.64l-.48 3.24h-3.16V24h6.21A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.62 8.07 8.26 8.87v-6.28h-2.5V12h2.5v-2.35c0-2.48 1.49-3.84 3.77-3.84 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.62h-2.34v6.28c4.64-.8 8.26-4.45 8.26-8.87 0-5.52-4.48-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm3.68 8.75c-.06 4.91-3.34 8.38-8.13 8.38-1.62 0-3.14-.42-4.42-1.16a6.13 6.13 0 004.47-1.25A2.88 2.88 0 013 13.68a2.88 2.88 0 001.3-.05A2.88 2.88 0 013 10.71v-.04a2.88 2.88 0 001.3.36 2.88 2.88 0 01-.88-3.85A8.17 8.17 0 009.84 10.2a2.88 2.88 0 014.91-2.62 5.8 5.8 0 001.83-.7 2.88 2.88 0 01-1.27 1.58 5.79 5.79 0 001.67-.46 6 6 0 01-1.43 1.48z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">&copy;  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;