import { redirect } from 'next/navigation';
import { config } from '@/config/app.config';
import { Navbar, Cover, Features, Steps, CTA, Footer } from '@/components/features/landing';

const Home = () => {
  if (!config.enableLanding) redirect('/login');

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Cover />
        <Features />
        <Steps />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
