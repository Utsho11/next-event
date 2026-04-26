import AboutHero from "@/components/about/AboutHero";
import CTASection from "@/components/about/CTASection";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import VelocitySection from "@/components/about/VelocitySection";

const Page = () => {
  return <main className="">
    <AboutHero/>
      <StorySection />
      <ValuesSection />
      <VelocitySection />
      <CTASection />
  </main>;
};

export default Page;
