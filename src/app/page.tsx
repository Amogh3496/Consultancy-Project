import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ExecutiveSummary from "@/components/sections/ExecutiveSummary";
import AboutBNY from "@/components/sections/AboutBNY";
import ProblemDefinition from "@/components/sections/ProblemDefinition";
import IndustryOverview from "@/components/sections/IndustryOverview";
import FraudLandscape from "@/components/sections/FraudLandscape";
import OperationalChallenges from "@/components/sections/OperationalChallenges";
import CurrentVsFuture from "@/components/sections/CurrentVsFuture";
import AIOpportunity from "@/components/sections/AIOpportunity";
import AIUseCases from "@/components/sections/AIUseCases";
import CostBenefit from "@/components/sections/CostBenefit";
import PrioritizationMatrix from "@/components/sections/PrioritizationMatrix";
import AIGovernance from "@/components/sections/AIGovernance";
import SWOTAnalysis from "@/components/sections/SWOTAnalysis";
import ValueChain from "@/components/sections/ValueChain";
import ImplementationRoadmap from "@/components/sections/ImplementationRoadmap";
import KPIDashboard from "@/components/sections/KPIDashboard";
import RiskAssessment from "@/components/sections/RiskAssessment";
import Recommendations from "@/components/sections/Recommendations";
import References from "@/components/sections/References";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <ExecutiveSummary />
        <AboutBNY />
        <ProblemDefinition />
        <IndustryOverview />
        <FraudLandscape />
        <OperationalChallenges />
        <CurrentVsFuture />
        <AIOpportunity />
        <AIUseCases />
        <CostBenefit />
        <PrioritizationMatrix />
        <AIGovernance />
        <SWOTAnalysis />
        <ValueChain />
        <ImplementationRoadmap />
        <KPIDashboard />
        <RiskAssessment />
        <Recommendations />
        <References />
      </main>
      <Footer />
    </>
  );
}
