export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  metrics: Array<{
    label: string;
    value: string;
    prefix?: string;
    suffix?: string;
  }>;
  demoUrl?: string;
  githubUrl?: string;
  slug: string;
  problemStatement: string;
  solution: string;
  technologies: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
  gallery: Array<{
    url: string;
    caption: string;
  }>;
  challenges: string[];
  learnings: string[];
}

export const projects: Project[] = [
  {
    title: 'Custom BERT-Based Next Best Action System',
    description: 'Developed a sophisticated recommendation system using BERT to predict optimal customer actions in real-time.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1000',
    tags: ['PyTorch', 'BERT', 'Docker', 'FastAPI'],
    metrics: [
      { label: 'Improvement in Accuracy', value: '40', suffix: '%' },
      { label: 'Inference Time Reduction', value: '60', suffix: '%' },
      { label: 'Daily Predictions', value: '100', suffix: 'K+' }
    ],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/bert-nba',
    slug: 'bert-nba-system',
    problemStatement: 'Financial institutions struggled with providing personalized, timely recommendations to customers, resulting in low engagement rates and missed opportunities for both customers and the business.',
    solution: 'Implemented a custom BERT model fine-tuned on historical customer interaction data to predict and recommend the most relevant next actions for customers in real-time. The system processes multiple data points including transaction history, customer profile, and current context to generate accurate predictions.',
    technologies: [
      {
        name: 'PyTorch',
        description: 'Deep learning framework used for model development and training',
        icon: 'https://pytorch.org/assets/images/pytorch-logo.png'
      },
      {
        name: 'BERT',
        description: 'Pre-trained transformer model customized for our use case',
        icon: 'https://huggingface.co/front/assets/huggingface_logo.svg'
      },
      {
        name: 'Docker',
        description: 'Containerization for consistent deployment',
        icon: 'https://www.docker.com/sites/default/files/d8/2019-07/vertical-logo-monochromatic.png'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
        caption: 'System Architecture Diagram'
      },
      {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
        caption: 'Performance Metrics Dashboard'
      }
    ],
    challenges: [
      'Optimizing model inference time while maintaining high accuracy',
      'Handling large-scale data processing in real-time',
      'Ensuring data privacy and security compliance',
      'Managing model drift and maintaining performance',
      'Scaling the system to handle peak loads efficiently'
    ],
    learnings: [
      'Effective techniques for BERT model optimization',
      'Strategies for handling imbalanced datasets',
      'Best practices for deploying ML models in production',
      'Importance of continuous monitoring and model retraining'
    ]
  },
  {
    title: 'LLM-Powered Anime Character Chatbot',
    description: 'Created an engaging chatbot that mimics anime characters using fine-tuned LLAMA and DistilBERT models.',
    image: 'https://images.unsplash.com/photo-1633536726481-465c3676851d?auto=format&fit=crop&q=80&w=1000',
    tags: ['LLAMA', 'DistilBERT', 'HuggingFace', 'StreamLit'],
    metrics: [
      { label: 'Character Personality Retention', value: '95', suffix: '%' },
      { label: 'Conversations Generated', value: '500', suffix: 'K+' },
      { label: 'Response Time', value: '100', prefix: '<', suffix: 'ms' }
    ],
    demoUrl: 'https://demo.example.com/anime-chat',
    githubUrl: 'https://github.com/example/anime-chat',
    slug: 'anime-character-chatbot',
    problemStatement: 'Existing chatbots lacked personality and engagement, failing to provide authentic character interactions for anime enthusiasts.',
    solution: 'Developed a sophisticated chatbot system using LLAMA and DistilBERT models, fine-tuned on extensive anime character dialogue datasets to maintain authentic personality traits and conversation styles.',
    technologies: [
      {
        name: 'LLAMA',
        description: 'Large language model for generating contextual responses',
        icon: 'https://raw.githubusercontent.com/facebookresearch/llama/main/llama.png'
      },
      {
        name: 'HuggingFace',
        description: 'Platform for model deployment and fine-tuning',
        icon: 'https://huggingface.co/front/assets/huggingface_logo.svg'
      },
      {
        name: 'StreamLit',
        description: 'Web interface for chatbot interaction',
        icon: 'https://streamlit.io/images/brand/streamlit-mark-color.png'
      }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1633536726481-465c3676851d?auto=format&fit=crop&q=80&w=1000',
        caption: 'Chatbot Interface'
      },
      {
        url: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=1000',
        caption: 'Character Selection Screen'
      }
    ],
    challenges: [
      'Maintaining consistent character personalities across conversations',
      'Handling context and memory in long dialogues',
      'Optimizing response generation speed',
      'Managing inappropriate content filtering',
      'Scaling the system for multiple concurrent users'
    ],
    learnings: [
      'Advanced techniques in LLM fine-tuning',
      'Methods for maintaining conversation context',
      'Strategies for character personality preservation',
      'Real-time response optimization'
    ]
  }
];