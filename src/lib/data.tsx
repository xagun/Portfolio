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
    image: '/projects/audiophile.svg',
    title: 'CEHRD Learning Portal',
    description:
      'E-learning platform for the Centre for Education and Human Resource Development (CEHRD), focused on accessible digital learning.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      preview: 'https://learning.cehrd.edu.np/',
      github: '',
      githubApi: '',
    },
  },
  {
    image: '/projects/nextstarter.svg',
    title: 'ImpeXo (Logistics Software)',
    description:
      'Logistics and freight management platform with shipment tracking and operational tools.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'REST APIs'],
    links: {
      preview: 'https://allimpexo.com/',
      github: '',
      githubApi: '',
    },
  },
  {
    image: '/projects/audiophile.svg',
    title: 'MiFu – Micro Influencer Marketing',
    description:
      'Micro-influencer marketing platform connecting brands with creators.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      preview: 'https://www.mifu.co.uk/',
      github: '',
      githubApi: '',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Frontend Developer – Asterdio Inc',
    location: '',
    description:
      'Focused on frontend development using React and Next.js, improving UI/UX consistency and performance across web applications.',
    date: 'Nov 2024 – Present',
  },
  {
    title: 'Frontend Developer – TechJar Pvt Ltd',
    location: '',
    description:
      'Developed interactive and responsive web apps using Next.js and Chakra UI, created reusable UI components, and integrated RESTful APIs with React Query.',
    date: 'Feb 2024 – Aug 2024',
  },
  {
    title: 'React Developer – Techart Trekkies Pvt Ltd',
    location: 'Balkot, Bhaktapur',
    description:
      'Worked on ticketing, school LMS, and logistics software; enhanced usability with UI/UX collaboration, contributed to Laravel projects and React Native apps, and mentored junior developers.',
    date: 'Sept 2021 – Jan 2024',
  },
  {
    title: 'Full Stack Developer Intern – Mokshya Tech & IT Solutions',
    location: '',
    description:
      'Built responsive interfaces with React, integrated RESTful APIs, and participated in backend development using Node.js.',
    date: 'Mar 2021 – Jun 2021',
  },
] as const;

export const skillsData = [
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
] as const;
