import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import TreatmentsSection from "@/components/sections/TreatmentsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import GallerySection from "@/components/sections/GallerySection";
import AppointmentFormSection from "@/components/sections/AppointmentFormSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <WhyChooseUsSection />
      <TreatmentsSection limit={3} variant="editorial" />
      <GallerySection />
      <AppointmentFormSection />
      <ContactSection />
    </>
  );
}
