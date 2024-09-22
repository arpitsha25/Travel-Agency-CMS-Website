import Menu from '../components/Menu/Menu'
import Slider from '../components/Slider'
import Offers from '../components/Offers/Offers'
import Packages from '../components/Packages/Packages'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'

export default function Home() {
  return (
    <div>
      <Menu/>
      <Slider/>
      <div className='main_container'>
      <Offers/>
      <Packages/>
      </div>
      <Services/>
      <Testimonials/>
    </div>
  );
}
