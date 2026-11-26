'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

const CARD_GRADIENTS = [
  'from-blue-950 via-indigo-900 to-slate-900',
  'from-slate-900 via-purple-950 to-slate-950',
  'from-emerald-950 via-teal-900 to-slate-900',
  'from-rose-950 via-pink-900 to-slate-900',
];

type TProps = {
  project: TProject;
  index: number;
};

export const Project = ({ project, index }: TProps) => {
  const { title, category, description, links } = project;
  const technologies: ReadonlyArray<string> = project.technologies;
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

  return (
    <motion.div
      className="border-border bg-card group relative overflow-hidden rounded-2xl border"
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Screenshot / gradient placeholder */}
      <div
        className={`relative h-44 w-full bg-gradient-to-br ${gradient} sm:h-52`}
      >
        {/* Faint grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Top bar: label + visit link */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="text-xs font-medium text-white/60">{category}</span>
          {links.preview && (
            <a
              href={links.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Visit <ArrowUpRight className="size-3" />
            </a>
          )}
        </div>

        {/* Center: large initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold text-white/10">
            {title
              .split(' ')
              .slice(0, 2)
              .map((w) => w[0])
              .join('')}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3 className="text-foreground mb-2 font-semibold">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm leading-relaxed">
          {description}
        </p>
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="border-border bg-muted text-muted-foreground rounded-full border px-2.5 py-0.5 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
