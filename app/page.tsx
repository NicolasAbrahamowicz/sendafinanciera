import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import RetirementPlans from "@/components/retirement-plans"
import SavingsPlans from "@/components/savings-plans"
import InvestmentPlans from "@/components/investment-plans"
import SecuritySection from "@/components/security-section"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import LeadForm from "@/components/lead-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <RetirementPlans />
      <SavingsPlans />
      <InvestmentPlans />
      <SecuritySection />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  )
}
