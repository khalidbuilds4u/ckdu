import { 
  Activity, Droplets, Flame, Search, ArrowRight, ShieldCheck, 
  Stethoscope, Syringe, HeartPulse, Scale, AlertTriangle, User,
  Microscope, Star, Award, Scissors, FileText, CheckCircle2
} from "lucide-react";

export type TreatmentData = {
  slug: string;
  name: string;
  shortDescription: string;
  heroImage: string;
  overview: {
    text: string[];
    summary: string;
  };
  symptoms: { title: string; icon: string }[];
  causes: { title: string; desc: string }[];
  diagnosis: { title: string; desc: string }[];
  options: { title: string; desc: string; type: "Medical" | "Surgical" | "Minimally Invasive" | "Reconstructive" }[];
  journey: { step: string; title: string; desc: string }[];
  recovery: { time: string; stay: string; avoid: string; care: string };
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const TREATMENTS: Record<string, TreatmentData> = {
  "kidney-transplant-surgery": {
    slug: "kidney-transplant-surgery",
    name: "Kidney Transplant Surgery",
    shortDescription: "Advanced, life-saving kidney transplantation procedures with comprehensive pre and post-operative care.",
    heroImage: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000&auto=format&fit=crop",
    overview: {
      text: [
        "A kidney transplant is a surgical procedure to place a healthy kidney from a living or deceased donor into a person whose kidneys no longer function properly.",
        "When kidneys lose their filtering ability, harmful levels of fluid and waste accumulate in the body. A transplant is often the treatment of choice for end-stage renal disease (ESRD), offering a better quality of life and longer survival than dialysis.",
        "Dr. D. K. Chugh brings decades of expertise in complex transplant surgeries, ensuring precise anatomical placement, optimal vascular connections, and vigilant post-operative management."
      ],
      summary: "With over 600 successful kidney transplants, Dr. Chugh provides world-class transplant care, including minimally invasive donor surgeries and autotransplantation."
    },
    symptoms: [
      { title: "Chronic Fatigue", icon: "Activity" },
      { title: "Severe Swelling (Edema)", icon: "Droplets" },
      { title: "Nausea & Vomiting", icon: "HeartPulse" },
      { title: "Shortness of Breath", icon: "AlertTriangle" },
      { title: "High Blood Pressure", icon: "Activity" }
    ],
    causes: [
      { title: "Diabetes", desc: "Long-standing, uncontrolled diabetes is the leading cause of kidney failure." },
      { title: "Hypertension", desc: "Chronic high blood pressure damages the delicate filtering units of the kidney." },
      { title: "Glomerulonephritis", desc: "Inflammation of the kidney's filtering units." },
      { title: "Polycystic Kidney Disease", desc: "A genetic disorder causing numerous cysts to grow in the kidneys." }
    ],
    diagnosis: [
      { title: "Blood Tests", desc: "To check serum creatinine, GFR, and blood type compatibility." },
      { title: "Tissue Typing (HLA)", desc: "To match the donor and recipient immune systems." },
      { title: "Crossmatching", desc: "A critical test to ensure the recipient's body will not immediately reject the donor kidney." }
    ],
    options: [
      { title: "Kidney Transplant Surgery", desc: "The primary procedure of transplanting a healthy donor kidney into the recipient.", type: "Surgical" },
      { title: "Kidney Autotransplantation", desc: "Relocating a patient's own kidney to a different part of the body to preserve function or manage complex ureteral issues.", type: "Surgical" },
      { title: "Donor Nephrectomy", desc: "Minimally invasive or laparoscopic removal of a kidney from a healthy donor for transplantation.", type: "Minimally Invasive" }
    ],
    journey: [
      { step: "01", title: "Evaluation", desc: "Comprehensive medical, psychological, and financial evaluation for transplant candidacy." },
      { step: "02", title: "Matching", desc: "Identifying a compatible living donor or joining the national deceased donor waiting list." },
      { step: "03", title: "The Surgery", desc: "A 3-4 hour procedure where the new kidney is placed in the lower abdomen." },
      { step: "04", title: "Hospital Recovery", desc: "Close monitoring in the ICU and transplant ward for 5-7 days." },
      { step: "05", title: "Immunosuppression", desc: "Starting anti-rejection medications that must be taken for life." },
      { step: "06", title: "Long-term Care", desc: "Frequent initial follow-ups tapering to routine lifelong monitoring." }
    ],
    recovery: {
      time: "4-8 weeks for a return to normal activities.",
      stay: "5 to 7 days in the hospital for recipients; 2-3 days for donors.",
      avoid: "Heavy lifting, strenuous sports, and exposure to sick individuals.",
      care: "Strict adherence to anti-rejection medications and a balanced diet."
    },
    faqs: [
      { question: "How long does a transplanted kidney last?", answer: "On average, a living donor kidney lasts 15-20 years, while a deceased donor kidney lasts 10-15 years. Results vary based on compatibility and post-operative care." },
      { question: "Can the donor live a normal life with one kidney?", answer: "Yes. The remaining kidney compensates and provides normal filtering capacity, allowing the donor to live a completely normal, healthy life." }
    ],
    related: ["kidney-stones", "kidney-cancer-surgery", "kidney-infections-uti"]
  },
  
  "kidney-cancer-surgery": {
    slug: "kidney-cancer-surgery",
    name: "Kidney Cancer Surgery",
    shortDescription: "Precision-driven robotic and laparoscopic surgeries aimed at removing tumors while maximally preserving healthy kidney tissue.",
    heroImage: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?q=80&w=2000&auto=format&fit=crop",
    overview: {
      text: [
        "Kidney cancer (renal cell carcinoma) is a disease in which malignant cells form in the tubules of the kidney. Surgery is the primary and most effective treatment for localized kidney cancer.",
        "Our approach focuses on 'nephron-sparing' techniques whenever possible. This means we aggressively target and remove the cancerous tumor while saving as much of your healthy kidney as possible to maintain long-term renal function.",
        "Utilizing state-of-the-art robotic systems, Dr. Chugh performs highly complex dissections with extreme precision, resulting in less bleeding, smaller scars, and faster recovery."
      ],
      summary: "We offer advanced kidney sparing and radical nephrectomies, utilizing robotic precision to cure cancer while preserving organ function."
    },
    symptoms: [
      { title: "Blood in Urine (Hematuria)", icon: "Droplets" },
      { title: "Pain in the Side or Lower Back", icon: "AlertTriangle" },
      { title: "A Mass or Lump in the Abdomen", icon: "Search" },
      { title: "Unexplained Weight Loss", icon: "Scale" },
      { title: "Fever (Not from cold)", icon: "Flame" }
    ],
    causes: [
      { title: "Smoking", desc: "Smokers have a significantly higher risk of developing kidney cancer." },
      { title: "Obesity", desc: "Excess weight causes hormonal changes that may lead to renal cell carcinoma." },
      { title: "Hypertension", desc: "High blood pressure has been strongly linked to kidney cancer." },
      { title: "Family History", desc: "Genetic conditions like von Hippel-Lindau disease increase risk." }
    ],
    diagnosis: [
      { title: "CT/MRI Scan", desc: "Detailed cross-sectional images to evaluate the tumor's size, depth, and spread." },
      { title: "Ultrasound", desc: "Used to differentiate between benign fluid-filled cysts and solid tumors." },
      { title: "Biopsy", desc: "In some cases, a small sample of tissue is extracted and examined." }
    ],
    options: [
      { title: "Kidney Sparing Surgery", desc: "Techniques designed to preserve the healthy portion of the kidney while removing the tumor.", type: "Minimally Invasive" },
      { title: "Partial Nephrectomy", desc: "Surgical removal of the tumor and a small margin of healthy tissue, leaving the rest of the kidney intact.", type: "Surgical" },
      { title: "Radical Nephrectomy", desc: "Complete removal of the affected kidney, the attached adrenal gland, and surrounding fatty tissue.", type: "Surgical" },
      { title: "Bilateral Nephrectomy", desc: "The surgical removal of both kidneys, usually requiring the patient to undergo dialysis or a transplant.", type: "Surgical" }
    ],
    journey: [
      { step: "01", title: "Oncological Evaluation", desc: "Detailed staging of the cancer using advanced imaging." },
      { step: "02", title: "Surgical Planning", desc: "Determining if a partial or radical nephrectomy is required based on tumor size and location." },
      { step: "03", title: "Minimally Invasive Surgery", desc: "Robotic or laparoscopic removal of the tumor for precision and rapid healing." },
      { step: "04", title: "Pathology Analysis", desc: "Examining the removed tissue to ensure clear margins and stage the cancer accurately." },
      { step: "05", title: "Recovery", desc: "Early mobilization and careful monitoring in the hospital." },
      { step: "06", title: "Surveillance", desc: "Routine scans every 6-12 months to monitor for any recurrence." }
    ],
    recovery: {
      time: "2-4 weeks for robotic surgery; up to 6 weeks for open surgery.",
      stay: "2 to 4 days in the hospital.",
      avoid: "Lifting anything over 10 lbs for 4 weeks.",
      care: "Keep incisions clean and monitor blood pressure and kidney function."
    },
    faqs: [
      { question: "Is partial nephrectomy better than radical?", answer: "When technically feasible, partial nephrectomy is preferred because it preserves kidney function, which reduces the long-term risk of chronic kidney disease and cardiovascular events." },
      { question: "Do I need chemotherapy?", answer: "Kidney cancer is often resistant to traditional chemotherapy. If the cancer is localized, surgery alone is usually curative. Advanced cases may require targeted therapy or immunotherapy." }
    ],
    related: ["kidney-transplant-surgery", "kidney-stones"]
  },

  "kidney-stones": {
    slug: "kidney-stones",
    name: "Kidney Stones",
    shortDescription: "Comprehensive management of kidney stones ranging from non-surgical medical therapy to advanced laser procedures.",
    heroImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop",
    overview: {
      text: [
        "Kidney stones are hard deposits made of minerals and salts that form inside your kidneys. They can be incredibly painful when they pass through the urinary tract.",
        "While small stones can often be passed naturally with increased fluid intake, larger stones require medical intervention to prevent severe complications, blockages, or kidney damage.",
        "Dr. D. K. Chugh specializes in a comprehensive suite of advanced, minimally invasive stone removal techniques that require no incisions, ensuring you return to your normal life as quickly as possible."
      ],
      summary: "Offering the complete spectrum of care, from Medical Expulsive Therapy to RIRS, PCNL, and Laser surgeries, for 100% stone clearance."
    },
    symptoms: [
      { title: "Severe back or side pain", icon: "AlertTriangle" },
      { title: "Blood in urine", icon: "Droplets" },
      { title: "Burning sensation during urination", icon: "Flame" },
      { title: "Frequent urge to urinate", icon: "Activity" }
    ],
    causes: [
      { title: "Dehydration", desc: "Not drinking enough water is the most common cause, allowing minerals to crystallize." },
      { title: "Dietary Factors", desc: "Diets high in protein, sodium, and sugar can increase the risk of some types of kidney stones." },
      { title: "Genetics", desc: "A family history of kidney stones significantly increases your likelihood of developing them." }
    ],
    diagnosis: [
      { title: "Ultrasound", desc: "A quick, non-invasive imaging test to identify the presence and location of stones." },
      { title: "CT Scan", desc: "High-resolution imaging to detect even the smallest stones and evaluate urinary tract blockages." }
    ],
    options: [
      { title: "Non-Surgical Treatment", desc: "Medical expulsive therapy and dietary management to dissolve or pass small stones.", type: "Medical" },
      { title: "Laser Stone Surgery", desc: "Using high-powered lasers to break stones into fine dust.", type: "Minimally Invasive" },
      { title: "PCNL / Mini PCNL", desc: "Percutaneous Nephrolithotomy: A keyhole surgery through the back for very large or complex stones.", type: "Minimally Invasive" },
      { title: "RIRS", desc: "Retrograde Intrarenal Surgery: A no-cut laser procedure using a flexible scope through the natural urinary tract.", type: "Minimally Invasive" },
      { title: "URSL", desc: "Ureteroscopic Lithotripsy: Used specifically for stones trapped in the ureter.", type: "Minimally Invasive" },
      { title: "Laparoscopic Stone Surgery", desc: "Used for massive stones or when anatomical abnormalities are present.", type: "Surgical" },
      { title: "Open Stone Surgery", desc: "Rarely performed today, reserved for extremely complex cases.", type: "Surgical" }
    ],
    journey: [
      { step: "01", title: "Diagnostic Imaging", desc: "A quick CT scan or Ultrasound to precisely locate the stone and determine its size." },
      { step: "02", title: "Treatment Planning", desc: "Dr. Chugh recommends the most effective procedure based on stone size and location." },
      { step: "03", title: "The Procedure", desc: "Performed in a world-class facility, usually taking less than an hour under anesthesia." },
      { step: "04", title: "Recovery", desc: "Most patients are discharged the same day and can resume normal activities within 24-48 hours." }
    ],
    recovery: {
      time: "24 to 48 hours for minimally invasive procedures.",
      stay: "Day care or 1 overnight stay depending on the procedure.",
      avoid: "Heavy lifting, strenuous exercise, and high-sodium diets.",
      care: "Drink at least 3-4 liters of water daily and take prescribed medications."
    },
    faqs: [
      { question: "Is laser stone surgery painful?", answer: "Minimally invasive surgeries like RIRS and Mini-PCNL are performed under anesthesia. Post-operative discomfort is minimal and easily managed." },
      { question: "What is PCNL?", answer: "PCNL is a keyhole surgery used for large stones (staghorn calculi) where a small tract is made in the back directly to the kidney to extract the stone." }
    ],
    related: ["kidney-infections-uti", "reconstructive-kidney-surgery"]
  },

  "reconstructive-kidney-surgery": {
    slug: "reconstructive-kidney-surgery",
    name: "Reconstructive Kidney Surgery",
    shortDescription: "Highly specialized surgical procedures to repair, reconstruct, and restore normal anatomy and function of the kidneys and ureters.",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop",
    overview: {
      text: [
        "Reconstructive Urology involves highly specialized surgical procedures designed to restore both the structure and function of the genitourinary tract.",
        "Kidney and ureteral reconstruction is often required due to congenital defects, traumatic injuries, surgical complications, or severe scarring from recurrent infections or stones.",
        "Dr. Chugh utilizes both traditional and minimally invasive robotic techniques to perform intricate reconstructions, preventing kidney loss and restoring normal urinary flow."
      ],
      summary: "Expertise in Pyeloplasty, Ureteric Reimplantation, and complex anatomical repairs to restore kidney health and urinary function."
    },
    symptoms: [
      { title: "Recurrent Kidney Infections", icon: "Flame" },
      { title: "Severe Flank Pain (due to obstruction)", icon: "AlertTriangle" },
      { title: "Decreased Kidney Function", icon: "Activity" }
    ],
    causes: [
      { title: "Congenital Defects", desc: "Conditions like PUJ obstruction present from birth." },
      { title: "Trauma or Injury", desc: "Damage to the ureter from accidents or previous surgeries." },
      { title: "Strictures", desc: "Scar tissue blocking the normal flow of urine." }
    ],
    diagnosis: [
      { title: "IVP or CT Urogram", desc: "Specialized contrast imaging to visualize the urinary tract architecture and identify blockages." },
      { title: "Renal Scan (DTPA/MAG3)", desc: "Nuclear imaging to assess kidney function and drainage efficiency." }
    ],
    options: [
      { title: "Pyeloplasty for PUJO", desc: "Surgical reconstruction of the renal pelvis to drain and decompress the kidney, treating Pelvi-Ureteric Junction Obstruction.", type: "Reconstructive" },
      { title: "Kidney Cyst Decortication", desc: "Surgical removal of the outer layer of large, painful kidney cysts.", type: "Minimally Invasive" },
      { title: "Ureterocalicostomy", desc: "A complex salvage procedure bypassing the renal pelvis and attaching the ureter directly to the lower kidney calyx.", type: "Reconstructive" },
      { title: "Ureteroureterostomy", desc: "Surgical excision of a narrowed or damaged section of the ureter and rejoining the healthy ends.", type: "Reconstructive" },
      { title: "Ureteric Reimplantation", desc: "Reconnecting the ureter to a new, healthy location on the bladder.", type: "Reconstructive" },
      { title: "Nephropexy", desc: "Surgical fixation of a 'floating' or hypermobile kidney that causes pain.", type: "Surgical" }
    ],
    journey: [
      { step: "01", title: "Anatomical Mapping", desc: "Detailed imaging to understand the specific structural defect." },
      { step: "02", title: "Surgical Reconstruction", desc: "Meticulous repair using robotic or laparoscopic instruments." },
      { step: "03", title: "Stenting", desc: "A temporary stent is often placed to support the new surgical connections during healing." },
      { step: "04", title: "Follow-up Imaging", desc: "Post-operative scans to confirm normal urinary flow." }
    ],
    recovery: {
      time: "2 to 6 weeks depending on the complexity of the reconstruction.",
      stay: "2 to 4 days in the hospital.",
      avoid: "Heavy lifting and strenuous activity for 4-6 weeks.",
      care: "Maintain good hydration; a stent may remain in place for a few weeks."
    },
    faqs: [
      { question: "What is PUJ Obstruction?", answer: "Pelvi-Ureteric Junction Obstruction is a blockage where the kidney meets the ureter, preventing urine from draining and causing kidney damage. Pyeloplasty corrects this." },
      { question: "Is robotic surgery used for reconstruction?", answer: "Yes, robotic-assisted laparoscopy is highly preferred for reconstructive urology because it provides 3D magnification and extreme precision for suturing delicate tissues." }
    ],
    related: ["kidney-stones", "kidney-transplant-surgery"]
  },

  "kidney-infections-uti": {
    slug: "kidney-infections-uti",
    name: "Kidney Infections & UTI",
    shortDescription: "Expert diagnosis, treatment, and long-term prevention strategies for severe kidney infections and chronic UTIs.",
    heroImage: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2000&auto=format&fit=crop",
    overview: {
      text: [
        "Urinary Tract Infections (UTIs) are incredibly common, but when an infection travels up the urinary tract and reaches the kidneys (Pyelonephritis), it becomes a serious medical condition.",
        "Kidney infections require prompt medical attention. If left untreated, they can cause permanent kidney damage or spread to the bloodstream, causing a life-threatening infection.",
        "Dr. Chugh provides acute treatment for severe infections and investigates the root cause of recurrent UTIs to provide long-term preventative care."
      ],
      summary: "Comprehensive management of acute pyelonephritis and recurrent UTIs to prevent permanent kidney scarring."
    },
    symptoms: [
      { title: "High Fever and Chills", icon: "Flame" },
      { title: "Flank or Groin Pain", icon: "AlertTriangle" },
      { title: "Painful, Frequent Urination", icon: "Activity" },
      { title: "Cloudy or Foul-smelling Urine", icon: "Droplets" }
    ],
    causes: [
      { title: "Bacterial Travel", desc: "Bacteria (usually E. coli) entering the urethra and traveling up to the bladder and kidneys." },
      { title: "Urinary Blockages", desc: "Kidney stones or enlarged prostates trapping urine and bacteria." },
      { title: "Weakened Immunity", desc: "Diabetes or immunosuppression making infections more likely." }
    ],
    diagnosis: [
      { title: "Urinalysis & Culture", desc: "To identify the exact bacteria causing the infection and determine the best antibiotic." },
      { title: "Ultrasound or CT", desc: "To check for structural abnormalities, stones, or abscesses in the kidney." }
    ],
    options: [
      { title: "Targeted Antibiotic Therapy", desc: "Oral or intravenous antibiotics tailored to the specific bacterial culture.", type: "Medical" },
      { title: "Hospitalization", desc: "For severe cases requiring IV fluids and continuous monitoring.", type: "Medical" },
      { title: "Surgical Drainage", desc: "If a kidney abscess develops, it may need to be drained percutaneously.", type: "Minimally Invasive" },
      { title: "Corrective Surgery", desc: "Fixing anatomical defects or removing stones that cause recurrent infections.", type: "Surgical" }
    ],
    journey: [
      { step: "01", title: "Rapid Diagnosis", desc: "Immediate urine and blood cultures to identify the infection source." },
      { step: "02", title: "Acute Treatment", desc: "Starting broad-spectrum antibiotics to rapidly control symptoms." },
      { step: "03", title: "Targeted Therapy", desc: "Refining medication once culture results return." },
      { step: "04", title: "Root Cause Analysis", desc: "Investigating why the infection occurred (e.g., checking for stones)." }
    ],
    recovery: {
      time: "Symptoms improve within 48-72 hours, but full recovery takes 1-2 weeks.",
      stay: "Outpatient or 2-3 days inpatient for severe cases.",
      avoid: "Holding urine for long periods and dehydration.",
      care: "Complete the entire course of antibiotics even if feeling better."
    },
    faqs: [
      { question: "How is a kidney infection different from a bladder infection?", answer: "A bladder infection (cystitis) causes burning and frequent urination. A kidney infection (pyelonephritis) causes those symptoms plus high fever, chills, and severe back/flank pain." },
      { question: "Can recurrent UTIs damage my kidneys?", answer: "Yes, repeated kidney infections can lead to scarring and permanent loss of kidney function over time, which is why treating the underlying cause is crucial." }
    ],
    related: ["kidney-stones", "reconstructive-kidney-surgery"]
  },

  "av-fistula": {
    slug: "av-fistula",
    name: "AV Fistula",
    shortDescription: "Expert creation and maintenance of Arteriovenous (AV) Fistulas to provide optimal, long-lasting vascular access for hemodialysis.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
    overview: {
      text: [
        "For patients with End-Stage Renal Disease (ESRD) requiring hemodialysis, reliable vascular access is a lifeline. An Arteriovenous (AV) Fistula is the gold standard for this access.",
        "An AV fistula is created by surgically connecting a vein directly to an artery, usually in the forearm. This causes more blood to flow into the vein, making it grow larger and stronger, allowing it to withstand the repeated needle insertions required for dialysis.",
        "Dr. Chugh performs precision vascular surgery to create AV fistulas that mature properly and provide reliable, long-term access with the lowest risk of infection or clotting."
      ],
      summary: "AV Fistula is the preferred method for dialysis access, offering the longest lifespan and lowest complication rate."
    },
    symptoms: [
      { title: "Kidney Failure requiring Dialysis", icon: "Activity" }
    ],
    causes: [
      { title: "End-Stage Renal Disease", desc: "The need for long-term hemodialysis necessitates vascular access." }
    ],
    diagnosis: [
      { title: "Vessel Mapping Ultrasound", desc: "Detailed Doppler ultrasound to evaluate the size and health of your arteries and veins before surgery to select the best location." }
    ],
    options: [
      { title: "AV Fistula Creation", desc: "Surgically connecting an artery and a vein in the arm.", type: "Surgical" },
      { title: "AV Graft", desc: "Using a synthetic tube to connect the artery and vein if natural veins are too small.", type: "Surgical" },
      { title: "Fistula Salvage/Repair", desc: "Interventions to repair a failing, clotted, or poorly maturing fistula.", type: "Minimally Invasive" }
    ],
    journey: [
      { step: "01", title: "Vascular Mapping", desc: "Doppler ultrasound to find the optimal vessels in the arm." },
      { step: "02", title: "Outpatient Surgery", desc: "A minor procedure performed under local or regional anesthesia." },
      { step: "03", title: "Maturation", desc: "Waiting 6-8 weeks for the vein to thicken and mature." },
      { step: "04", title: "Dialysis Access", desc: "The fistula is now ready to be used safely for hemodialysis." }
    ],
    recovery: {
      time: "2-4 weeks for the surgical site to heal; 6-8 weeks for the fistula to 'mature'.",
      stay: "Outpatient day-care procedure.",
      avoid: "Wearing tight clothing, watches, or taking blood pressure on the fistula arm.",
      care: "Perform squeeze exercises (like squeezing a rubber ball) to help the vein mature."
    },
    faqs: [
      { question: "Why is an AV Fistula better than a catheter?", answer: "Catheters have a very high risk of serious infections and blood clots. An AV fistula is created from your own blood vessels, so it is much less prone to infection, lasts longer, and provides better blood flow for more efficient dialysis." },
      { question: "How do I know if my fistula is working?", answer: "You should feel a 'thrill' (a buzzing sensation) when you place your hand over the fistula, which indicates strong, healthy blood flow." }
    ],
    related: ["kidney-transplant-surgery"]
  }
};
