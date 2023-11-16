import SecondSection from '@/components/sections/SecondSection'
import FirstSection from '../components/sections/FirstSection'
import ThirdSection from '@/components/sections/ThirdSection'
import PricingSection from '@/components/sections/PricingSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className=''>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
