import PageHeader from "@/components/ui/PageHeader";
import ConditionsSection from "@/components/sections/ConditionsSection";
import TreatmentsSection from "@/components/sections/TreatmentsSection";

export default function TreatmentsPage() {
  return (
    <>
      <PageHeader 
        title="Treatments & Expertise" 
        subtitle="Advanced care for complex urological and kidney conditions." 
      />
      <TreatmentsSection variant="editorial" />
    </>
  );
}
