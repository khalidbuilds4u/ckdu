import { notFound } from "next/navigation";
import { Metadata } from "next";
import { TREATMENTS } from "@/data/treatments";
import { TreatmentHero } from "@/components/treatments/TreatmentHero";
import { 
  TreatmentOverview, 
  TreatmentSymptoms, 
  TreatmentCauses, 
  TreatmentOptions, 
  TreatmentJourney 
} from "@/components/treatments/TreatmentSections";
import { TreatmentFAQ } from "@/components/treatments/TreatmentFAQ";
import { TreatmentAppointmentForm } from "@/components/treatments/TreatmentAppointmentForm";
import { StickyCTA } from "@/components/treatments/StickyCTA";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate Static Params for all known treatments
export function generateStaticParams() {
  return Object.keys(TREATMENTS).map((slug) => ({
    slug,
  }));
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS[slug];
  if (!treatment) return { title: "Not Found" };

  return {
    title: `${treatment.name} | Dr. D. K. Chugh | Top Urologist in Delhi`,
    description: treatment.shortDescription,
    alternates: {
      canonical: `https://ckdandurologyindia.com/treatments/${treatment.slug}`,
    },
    openGraph: {
      title: `${treatment.name} - Expert Care by Dr. D. K. Chugh`,
      description: treatment.shortDescription,
      url: `https://ckdandurologyindia.com/treatments/${treatment.slug}`,
      siteName: "Center for Kidney Disease & Urology",
      images: [
        {
          url: treatment.heroImage,
          width: 1200,
          height: 630,
          alt: treatment.name,
        }
      ],
      type: "website",
    }
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = TREATMENTS[slug];
  
  if (!treatment) {
    notFound();
  }

  // Generate Schema.org JSON-LD
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalCondition",
        "name": treatment.name,
        "description": treatment.shortDescription,
        "possibleTreatment": treatment.options.map(opt => ({
          "@type": "MedicalProcedure",
          "name": opt.title,
          "description": opt.desc
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": treatment.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <TreatmentHero 
        title={treatment.name} 
        description={treatment.shortDescription} 
        image={treatment.heroImage} 
        slug={treatment.slug} 
      />
      
      <TreatmentOverview overview={treatment.overview} />
      <TreatmentSymptoms symptoms={treatment.symptoms} />
      <TreatmentCauses causes={treatment.causes} />
      <TreatmentOptions options={treatment.options} />
      <TreatmentJourney journey={treatment.journey} />
      <TreatmentFAQ faqs={treatment.faqs} />
      
      <TreatmentAppointmentForm treatmentName={treatment.name} />
      
      <StickyCTA />
    </div>
  );
}
