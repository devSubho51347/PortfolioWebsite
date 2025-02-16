import React from 'react';
import { ArrowRight, Brain, Database, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen pt-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
        <div className="animate-fade-in">
          {/* Floating Icons */}
          <div className="relative w-full h-24 mb-8">
            <Brain className="absolute left-1/4 top-0 h-8 w-8 text-primary-600 animate-float" />
            <Database className="absolute left-1/2 top-1/3 h-8 w-8 text-primary-500 animate-float-delayed" />
            <Bot className="absolute right-1/4 top-0 h-8 w-8 text-primary-700 animate-float" />
          </div>

          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Hi, I'm Subhadeep Choudhury</span>
            <span className="block text-primary-600 mt-3">Data Scientist & Transformer Enthusiast</span>
          </h1>

          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Specializing in building state-of-the-art AI solutions with transformers 
            and deep learning. Turning complex data into actionable insights.
          </p>

          <div className="mt-10 flex justify-center gap-x-6">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-primary-200 rounded-md text-base font-medium text-primary-700 bg-white hover:bg-primary-50 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-primary-600">2</div>
            <div className="mt-2 text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-primary-500">5+</div>
            <div className="mt-2 text-gray-600">Projects Completed</div>
          </div>
          {/* <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-4xl font-bold text-primary-700">15+</div>
            <div className="mt-2 text-gray-600">Happy Clients</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;