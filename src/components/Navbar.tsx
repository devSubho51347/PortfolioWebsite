import React from 'react';
import { Menu, X, Github, Linkedin, Twitter, Download } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: isHomePage ? '#about' : '/#about' },
    { title: 'Projects', href: isHomePage ? '#projects' : '/#projects' },
    { title: 'Blog', href: isHomePage ? '#blog' : '/#blog' },
    { title: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') || (href.includes('#') && !isHomePage)) {
      e.preventDefault();
      const targetId = href.split('#')[1];
      const element = document.getElementById(targetId);
      if (element) {
        if (!isHomePage) {
          window.location.href = href;
        } else {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex-shrink-0 font-bold text-xl text-primary-900">
            devSubho
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.title}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5 space-x-4">
              <a href="https://github.com" className="text-gray-600 hover:text-primary-600">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-primary-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-primary-600">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;