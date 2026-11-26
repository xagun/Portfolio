'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Minus, Plus } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref: sectionRef } = useSectionInView('Experience');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="my-16 w-full scroll-mt-20"
    >
      <SectionHeading
        heading="Experience"
        content="Professional roles across logistics, education, and marketing platforms."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="border-border mt-2 border-t"
      >
        {experiencesData.map(
          ({ title, company, location, description, date }, index) => (
            <motion.div
              key={`${company}-${index}`}
              variants={fadeInUp}
              className="border-border border-b"
            >
              {/* Accordion trigger */}
              <button
                onClick={() => toggle(index)}
                className="hover:text-primary flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground/50 font-mono text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-foreground text-base font-medium sm:text-lg">
                    {title}
                    <span className="text-muted-foreground ml-2 text-sm font-normal">
                      — {company}
                    </span>
                  </span>
                </div>
                <div className="text-muted-foreground shrink-0">
                  {openIndex === index ? (
                    <Minus className="size-4" />
                  ) : (
                    <Plus className="size-4" />
                  )}
                </div>
              </button>

              {/* Accordion content */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-8">
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        {location && (
                          <span className="text-muted-foreground/70 flex items-center gap-1 text-xs">
                            <MapPin className="size-3" />
                            {location}
                          </span>
                        )}
                        <span className="border-border text-muted-foreground rounded-full border px-3 py-0.5 text-xs">
                          {date}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
};
