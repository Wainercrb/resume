import Hero from 'src/components/Hero';
import About from 'src/components/About';
import Experience from 'src/components/Experience';
import Education from 'src/components/Education';
import Certification from 'src/components/Certification';

function Home() {
  return (
    <main className="h-screen px-12 py-4">
      <div className="max-w-2xl mx-auto">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certification />
      </div>
    </main>
  );
}

export default Home;
