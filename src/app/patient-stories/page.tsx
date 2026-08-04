import PageHeader from "@/components/ui/PageHeader";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";

export default function PatientStoriesPage() {
  return (
    <>
      <PageHeader 
        title="Patient Stories" 
        subtitle="Real impact and life-changing outcomes from our patients." 
      />
      <TestimonialsSection />
      <SuccessStoriesSection />
    </>
  );
}
