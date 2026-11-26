'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { Project } from '@/components/project';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { fadeInUp } from '@/lib/animations';
import { projectsData } from '@/lib/data';
import { cn } from '@/lib/utils';

const COLLAPSED_COUNT = 6;

export const Projects = () => {
  const { ref } = useSectionInView('Projects');
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = expanded
    ? projectsData
    : projectsData.slice(0, COLLAPSED_COUNT);

  const toggleExpanded = () => {
    // The list shrinks on collapse, so return to the top of the section
    // rather than leaving the reader further down the page.
    if (expanded) document.getElementById('projects')?.scrollIntoView();
    setExpanded(!expanded);
  };

  return (
    <section ref={ref} id="projects" className="my-16 w-full scroll-mt-20">
      {/* Heading — matches reference "Selected works" style */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-8"
      >
        <p className="text-muted-foreground/60 mb-1 text-xs font-medium uppercase tracking-[0.3em]">
          Portfolio
        </p>
        <h2 className="text-foreground text-4xl font-bold leading-none tracking-tight sm:text-5xl">
          Selected{' '}
          <span className="text-muted-foreground font-light">works</span>
        </h2>
      </motion.div>

      <div
        id="projects-grid"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visibleProjects.map((project, index) => (
          <Project key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={toggleExpanded}
          aria-expanded={expanded}
          aria-controls="projects-grid"
          className="border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium"
        >
          {expanded ? 'Collapse' : `Expand all (${projectsData.length})`}
          <ChevronDown
            className={cn('size-4', expanded && 'rotate-180')}
            aria-hidden
          />
        </button>
      </div>
    </section>
  );
};
