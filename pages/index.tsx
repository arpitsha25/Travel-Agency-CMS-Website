import Slider from '../components/Slider'
import Offers from '../components/Offers/Offers'
import Packages from '../components/Packages/Packages'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import NewsletterSection from '../components/Newletter/Newsletter'
import FAQSection from '../components/FAQ/faq'

export default function Home() {
  return (
    <div>
      <Slider/>
      <Offers/>
      <div className='main_container'>
      <Packages/>
      </div>
      <Services/>
      <NewsletterSection/>
      <Testimonials/>
      <FAQSection/>
    </div>
  );
}
