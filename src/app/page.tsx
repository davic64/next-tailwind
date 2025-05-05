import { redirect } from 'next/navigation';
import { config } from '@/config/app.config';
import { Navbar, Cover, Features, Steps, CTA, Footer } from '@/components/features/landing';

const Home = () => {
  if (!config.enableLanding) redirect('/login');

  return (
    <>
      <Navbar />
      <div>
        <Cover />
        <Features />
        <Steps />
        <CTA />
      </div>
      <Footer />
    </>
  );
};

export default Home;
