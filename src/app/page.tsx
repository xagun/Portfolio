import { About } from '@/components/about';
import { AnimatedBackground } from '@/components/animated-background';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Intro } from '@/components/intro';
import { Projects } from '@/components/projects';

const Home = async () => {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="relative z-10 flex flex-col items-center">
        <Intro />
        <div className="container flex w-full flex-col items-center">
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
