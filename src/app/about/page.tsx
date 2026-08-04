import PageHeader from "@/components/ui/PageHeader";
import AboutDoctor from "@/components/sections/AboutDoctor";
import PatientJourneySection from "@/components/sections/PatientJourneySection";

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Dr. D.K Chughh" 
        subtitle="A legacy of excellence in Urology and Kidney Transplants." 
      />
      <AboutDoctor />
      <PatientJourneySection />
    </>
  );
}
