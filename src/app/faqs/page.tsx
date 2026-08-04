import PageHeader from "@/components/ui/PageHeader";
import FAQSection from "@/components/sections/FAQSection";

export default function FAQsPage() {
  return (
    <>
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common queries about our treatments and facilities." 
      />
      <FAQSection />
    </>
  );
}
