'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

import { sendEmail } from '@/actions/send-email';
import { Icons } from '@/components/icons';
import { MagneticCursor } from '@/components/magnetic-cursor';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { formSchema, TFormSchema } from '@/lib/form-schema';
import { cn } from '@/lib/utils';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: TFormSchema) => {
    setIsSubmitting(true);
    const { data, error } = await sendEmail(values);
    if (error) {
      toast.error(error);
      setIsSubmitting(false);
      return;
    }
    toast.success(data);
    reset();
    setIsSubmitting(false);
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="my-16 w-full scroll-mt-20"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left — heading + form */}
        <div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground/60 mb-3 text-xs font-medium uppercase tracking-[0.3em]">
              Contact
            </p>
            <h2 className="text-foreground mb-10 text-4xl font-light leading-tight sm:text-5xl">
              Interested in talking,{' '}
              <span className="font-semibold">let&apos;s do it.</span>
            </h2>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Email */}
            <motion.div variants={fadeInUp}>
              <input
                type="email"
                id="email"
                placeholder="Email address"
                {...register('email')}
                className={cn(
                  'text-foreground placeholder:text-muted-foreground/50 w-full border-0 border-b bg-transparent pb-3 text-sm focus:outline-none focus:ring-0',
                  errors.email?.message
                    ? 'border-destructive'
                    : 'border-border focus:border-foreground'
                )}
              />
              {errors.email?.message && (
                <p className="text-destructive mt-1 text-xs">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeInUp}>
              <textarea
                id="message"
                placeholder="Your message"
                rows={4}
                {...register('message')}
                className={cn(
                  'text-foreground placeholder:text-muted-foreground/50 w-full resize-none border-0 border-b bg-transparent pb-3 text-sm focus:outline-none focus:ring-0',
                  errors.message?.message
                    ? 'border-destructive'
                    : 'border-border focus:border-foreground'
                )}
              />
              {errors.message?.message && (
                <p className="text-destructive mt-1 text-xs">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <MagneticCursor strength={0.2}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full border px-8 py-3 text-sm font-medium uppercase tracking-widest transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Discuss Project'}
                </button>
              </MagneticCursor>
            </motion.div>
          </motion.form>
        </div>

        {/* Right — contact info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-8 lg:pl-8"
        >
          <motion.div variants={fadeInUp}>
            <p className="text-muted-foreground/60 mb-2 text-xs font-medium uppercase tracking-[0.3em]">
              Get in touch
            </p>
            <a
              href="mailto:xagun.shrestha@gmail.com"
              className="text-foreground block text-xl font-medium underline-offset-4 transition-opacity hover:opacity-70 sm:text-2xl"
            >
              xagun.shrestha@gmail.com
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-3">
            <div>
              <p className="text-muted-foreground/60 mb-0.5 text-xs uppercase tracking-wider">
                Location
              </p>
              <p className="text-foreground text-sm">Kathmandu, Nepal</p>
            </div>
            <div>
              <p className="text-muted-foreground/60 mb-0.5 text-xs uppercase tracking-wider">
                Availability
              </p>
              <p className="text-foreground text-sm">Open to opportunities</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-5">
            {[
              {
                href: 'https://www.linkedin.com/in/xagun-shrestha',
                icon: Icons.linkedin,
                label: 'LinkedIn',
              },
              {
                href: 'https://github.com/xagun',
                icon: Icons.github,
                label: 'GitHub',
              },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
