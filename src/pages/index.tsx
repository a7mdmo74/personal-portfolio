import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Header,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
} from '../components';
type Data = {
  id: number;
  title: string;
  img: string;
  company: string;
}[];
const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>a7mdmo74</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-center">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
