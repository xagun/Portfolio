import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'ImagineSys',
    category: 'School LMS',
    description:
      'Education software that brings learning tools for students and teachers into one platform, on web and mobile.',
    technologies: [],
    links: {
      preview: 'https://imagineinquirysys.com/',
    },
  },
  {
    title: 'Easy Ticket Booking',
    category: 'Bus Ticket Booking',
    description:
      'Bus ticket booking system with route search and seat selection.',
    technologies: [],
    links: {
      preview: 'https://easyticketbooking.com/',
    },
  },
  {
    title: 'ImpeXo',
    category: 'Logistics Software',
    description:
      'Logistics and freight management platform with shipment tracking and operational tools.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'REST APIs'],
    links: {
      preview: 'https://app.allimpexo.com/',
    },
  },
  {
    title: 'CEHRD Learning Portal',
    category: 'LMS',
    description:
      'E-learning platform for the Centre for Education and Human Resource Development (CEHRD), focused on accessible digital learning.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      preview: 'https://learning.cehrd.edu.np/',
    },
  },
  {
    title: 'MiFu',
    category: 'Influencer Marketing',
    description:
      'Micro-influencer marketing platform connecting brands with creators.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      preview: 'https://mifu.io/',
    },
  },
  {
    title: 'Parts24',
    category: 'Auto Parts E-Commerce',
    description:
      'Multi-vendor marketplace for used auto parts in Morocco and across Africa.',
    technologies: [],
    links: {
      preview: 'https://parts24.ma/',
    },
  },
  {
    title: 'Auto24',
    category: 'Car Listing E-Commerce',
    description:
      'Marketplace for buying and selling pre-owned cars across Africa.',
    technologies: [],
    links: {
      preview: 'https://auto24.africa/',
    },
  },
  {
    title: 'Cars2Click',
    category: 'Car Trading Platform',
    description:
      'B2B platform for cross-border car trading between sellers and buyers in 20+ countries.',
    technologies: [],
    links: {
      preview: 'https://cars2click.com/',
    },
  },
  {
    title: 'Auto24 Auction',
    category: 'Online Auctions',
    description: 'Online car auction platform from Auto24.',
    technologies: [],
    links: {
      preview: 'https://encheres.auto24.ma/',
    },
  },
  {
    title: 'BRICX',
    category: 'Construction ERP',
    description: 'ERP system for construction companies.',
    technologies: [],
    links: {
      preview: '',
    },
  },
  {
    title: 'Jaguar Capitals',
    category: 'Company Website',
    description:
      'Website for an investment firm covering funds, financial advisory and investment research.',
    technologies: ['Laravel'],
    links: {
      preview: 'https://jaguarcapital.com.np/',
    },
  },
  {
    title: 'Horion Nepal',
    category: 'Company Website',
    description:
      'Website for Horion interactive smart boards for schools and offices in Nepal.',
    technologies: ['Laravel'],
    links: {
      preview: 'https://horionnepal.com/',
    },
  },
  {
    title: 'Horion India',
    category: 'Company Website',
    description: 'Website for the Horion brand in India.',
    technologies: ['Laravel'],
    links: {
      preview: 'https://horionindia.com/',
    },
  },
  {
    title: 'Souvenir School',
    category: 'School Website',
    description: 'Website for Souvenir Boarding Secondary School.',
    technologies: ['Laravel'],
    links: {
      preview: 'https://souvenir.edu.np/',
    },
  },
  {
    title: 'AllImpexo',
    category: 'Product Website',
    description: 'Marketing website for the ImpeXo logistics platform.',
    technologies: ['Laravel'],
    links: {
      preview: 'https://allimpexo.com/',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Software Engineer',
    company: 'Asterdio Inc',
    location: 'Kathmandu, Nepal',
    description:
      'Build and ship multilingual marketplace products end to end, from customer-facing Next.js websites and admin dashboards to React Native mobile apps, used across Africa, the Middle East, and Nepal. Own features from UI to API integration, with a focus on clean, reusable components, smooth user flows, and reliable performance on both web and mobile.',
    date: 'Nov 2024 – Present',
  },
  {
    title: 'Frontend Developer',
    company: 'TechJar Pvt Ltd',
    location: 'Kathmandu, Nepal',
    description:
      'Developed interactive and responsive web apps using Next.js and Chakra UI, created reusable UI components, and integrated RESTful APIs with React Query.',
    date: 'Feb 2024 – Aug 2024',
  },
  {
    title: 'React Developer',
    company: 'Techart Trekkies Pvt Ltd',
    location: 'Balkot, Bhaktapur',
    description:
      'Worked on ticketing, school LMS, and logistics software; enhanced usability with UI/UX collaboration, contributed to Laravel projects and React Native apps, and mentored junior developers.',
    date: 'Sept 2021 – Jan 2024',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Mokshya Tech & IT Solutions',
    location: 'Kathmandu, Nepal',
    description:
      'Built responsive interfaces with React, integrated RESTful APIs, and participated in backend development using Node.js.',
    date: 'Mar 2021 – Jun 2021',
  },
] as const;

export const skillsData = [
  { name: 'HTML', icon: <Icons.html className="size-5" /> },
  { name: 'CSS', icon: <Icons.css className="size-5" /> },
  { name: 'Sass', icon: <Icons.sass className="size-5" /> },
  { name: 'Tailwind CSS', icon: <Icons.tailwind className="size-5" /> },
  { name: 'JavaScript', icon: <Icons.javascript className="size-5" /> },
  { name: 'TypeScript', icon: <Icons.typescript className="size-5" /> },
  { name: 'React', icon: <Icons.react className="size-5" /> },
  { name: 'Next.js', icon: <Icons.nextjs className="size-5" /> },
  { name: 'Redux', icon: <Icons.redux className="size-5" /> },
  { name: 'NestJS', icon: <Icons.nestjs className="size-5" /> },
  { name: 'Prisma', icon: <Icons.prisma className="size-5" /> },
  { name: 'Docker', icon: <Icons.docker className="size-5" /> },
] as const;
