import DuoNavigation from "@/components/duolingo/DuoNavigation";
import DuoHero from "@/components/duolingo/DuoHero";
import DuoValueProps from "@/components/duolingo/DuoValueProps";
import DuoStats from "@/components/duolingo/DuoStats";
import DuoLearningSpaces from "@/components/duolingo/DuoLearningSpaces";
import DuoSpecialPillars from "@/components/duolingo/DuoSpecialPillars";
import DuoRealWorldGaming from "@/components/duolingo/DuoRealWorldGaming";
import DuoProgramHighlights from "@/components/duolingo/DuoProgramHighlights";
import DuoParentTestimonials from "@/components/duolingo/DuoParentTestimonials";
import DuoTimeline from "@/components/duolingo/DuoTimeline";
import DuoStudentRoles from "@/components/duolingo/DuoStudentRoles";
import DuoCTA from "@/components/duolingo/DuoCTA";
import DuoFooter from "@/components/duolingo/DuoFooter";

const DuoIndex = () => {
  return (
    <div className="min-h-screen">
      <DuoNavigation />
      <DuoHero />
      <DuoValueProps />
      <DuoStats />
      <DuoLearningSpaces />
      <DuoSpecialPillars />
      <DuoRealWorldGaming />
      <DuoParentTestimonials />
      <DuoTimeline />
      <DuoStudentRoles />
      <DuoCTA />
      <DuoFooter />
    </div>
  );
};

export default DuoIndex;
