import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import LocationMap from './LocationMap';

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub',
      color: 'hover:text-gray-900',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
      color: 'hover:text-blue-700',
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      href: 'mailto:your.email@example.com',
      label: 'Email',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Let's Collaborate!</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss AI solutions? I'm always open to new
            opportunities and interesting collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <ContactForm />
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Me</h3>
              
              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <MapPin className="h-5 w-5" />
                <span>Pune, IN</span>
              </div>

              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-gray-600 ${link.color} transition-colors`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Global Reach</h3>
              <LocationMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;