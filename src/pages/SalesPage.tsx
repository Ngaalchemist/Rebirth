import { StarField } from "@/components/StarField";
import { HeaderSection } from "@/components/HeaderSection";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ProblemSection } from "@/components/ProblemSection";
import { MechanismSection } from "@/components/MechanismSection";
import { InstructorSection } from "@/components/InstructorSection";
import { ForWhomSection } from "@/components/ForWhomSection";
import { SolutionSection } from "@/components/SolutionSection";
import { CurriculumSection } from "@/components/CurriculumSection";
import { TransformationSection } from "@/components/TransformationSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhatsInsideSection } from "@/components/WhatsInsideSection";
import { PricingSection } from "@/components/PricingSection";
import { RegistrationSection } from "@/components/RegistrationSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { FooterSection } from "@/components/FooterSection";

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <StarField />
      <div className="relative z-10">
        <HeaderSection />
        <div className="h-16" />
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <MechanismSection />
        <InstructorSection />
        <ForWhomSection />
        <SolutionSection />
        <CurriculumSection />
        <TransformationSection />
        <TestimonialsSection />
        <WhatsInsideSection />
        <PricingSection />
        <RegistrationSection />
        <FaqSection />
        <FinalCtaSection />
        <FooterSection />
      </div>
    </div>
  );
}
