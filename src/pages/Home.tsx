import Hero from 'src/components/Hero';
import About from 'src/components/About';
import Experience from 'src/components/Experience';
import Education from 'src/components/Education';
import Certification from 'src/components/Certification';
import KeyboardManager from 'src/components/KeyboardManager';

function Home() {
  return (
    <main className="h-screen lg:px-12 lg:py-4 print:px-12 print:py-4 p-4">
      <div className="lg:max-w-2xl mx-auto">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certification />
        <br />
      </div>
      <KeyboardManager />
    </main>
  );
}

export default Home;
