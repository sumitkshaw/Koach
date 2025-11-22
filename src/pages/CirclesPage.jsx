import Navigation from '../components/Navigation';
import CircleHero from '../components/circles/CircleHero';
import Footer from '../components/Footer';
import CircleSearchSection from '../components/circles/CircleSearchSection';
import CircleBrowseSection from '../components/circles/CircleBrowseSection ';

const CirclesPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ECF0F6]">
      <Navigation />
      <CircleHero />
      <CircleSearchSection />
      <CircleBrowseSection />
      <Footer />
    </div>
  );
};

export default CirclesPage;