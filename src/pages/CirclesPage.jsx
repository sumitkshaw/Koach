import Navigation from '../components/Navigation';
import CircleHero from '../components/circles/CircleHero';
import Footer from '../components/Footer';

import CircleDashboard from '../components/circles/CircleDashboard';

const CirclesPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ECF0F6]">
      <Navigation />
      <CircleHero />
      <CircleDashboard />
      <Footer />
    </div>
  );
};

export default CirclesPage;