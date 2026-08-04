import PageHeader from "@/components/ui/PageHeader";
import TechnologySection from "@/components/sections/TechnologySection";
import GallerySection from "@/components/sections/GallerySection";
import LocationsSection from "@/components/sections/LocationsSection";

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader 
        title="World-Class Facilities" 
        subtitle="State-of-the-art infrastructure designed for precision and comfort." 
      />
      <TechnologySection />
      <GallerySection />
      <LocationsSection />
    </>
  );
}
