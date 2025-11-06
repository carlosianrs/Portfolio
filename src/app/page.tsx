import Home from '@/pages/home/home';
import Projects from '@/pages/home/projects';
import Languages from '@/pages/home/languages';
import AboutMe from '@/pages/home/about-me';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Home />
      <Projects />
      <Languages />
      <AboutMe />
    </div>
  );
}
