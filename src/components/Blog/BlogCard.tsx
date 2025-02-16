import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  date,
  readTime,
  category,
  image,
  slug,
}) => {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
          {category}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 flex-1">{excerpt}</p>
        <a
          href={`/blog/${slug}`}
          className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;