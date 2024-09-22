import Menu from '../components/Menu/Menu'
import Slider from '../components/Slider'
import Offers from '../components/Offers/Offers'
import Packages from '../components/Packages/Packages'

export default function Home() {
  return (
    <div>
      <Menu/>
      <Slider/>
      <div className='main_container'>
      <Offers/>
      <Packages/>
      </div>
    </div>
  );
}
