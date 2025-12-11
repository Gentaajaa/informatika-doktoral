import TabSection from '@/components/TabSection';
import Header from '../components/Header';
import HeroSlider from '../components/HeroSlider'; 
import MainContent from '../components/MainContent';
import RegistrationSection from '../components/RegistrationSection';
import StructureSection from '../components/StructureSection';

// FIX: Put your image file path HERE
const heroImages = [
  '/template-3-1500x430.webp', 
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Passing the data to the component */}
      <HeroSlider images={heroImages} />
      <MainContent />
      <TabSection />
      <RegistrationSection />
      <StructureSection />
    </main>
  );
}