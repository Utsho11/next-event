import CTABanner from "@/components/home/CTABanner";
import EventCatagories from "@/components/home/EventCatagories";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import HeroSection from "@/components/home/HeroSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7ff]">
      <HeroSection />
      <EventCatagories />
      <FeaturedEvents />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
