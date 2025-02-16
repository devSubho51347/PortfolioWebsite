import React, { useState } from 'react';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';

const Blog = () => {
  const categories = ['Transformers', 'MLOps', 'Deep Learning', 'NLP'];
  const [activeCategory, setActiveCategory] = useState('all');

  const blogs = [
    {
      title: 'Understanding Multi-Head Attention in Transformers',
      excerpt: 'Deep dive into the mechanics of attention mechanisms and how they revolutionized NLP tasks.',
      date: 'Mar 15, 2024',
      readTime: '8 min read',
      category: 'Transformers',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
      slug: 'multi-head-attention',
    },
    {
      title: 'How I Built a Custom NBA BERT Model from Scratch',
      excerpt: 'Step-by-step guide on fine-tuning BERT for sports analytics and player performance prediction.',
      date: 'Mar 10, 2024',
      readTime: '12 min read',
      category: 'Deep Learning',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1000',
      slug: 'nba-bert-model',
    },
    {
      title: 'Optimizing Model Deployment with MLOps',
      excerpt: 'Best practices for deploying ML models at scale using modern MLOps techniques.',
      date: 'Mar 5, 2024',
      readTime: '10 min read',
      category: 'MLOps',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
      slug: 'mlops-optimization',
    },
    {
      title: 'Advanced NLP Techniques for Sentiment Analysis',
      excerpt: 'Exploring state-of-the-art approaches to understanding text sentiment and emotion.',
      date: 'Mar 1, 2024',
      readTime: '15 min read',
      category: 'NLP',
      image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?auto=format&fit=crop&q=80&w=1000',
      slug: 'advanced-sentiment-analysis',
    },
  ];

  const filteredBlogs = activeCategory === 'all'
    ? blogs
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Explore My Insights on AI, Transformers, and Data Science
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dives into machine learning concepts, practical tutorials, and industry best practices.
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;