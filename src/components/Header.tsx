import Image from 'next/image'
import '../styles/header.scss'
import Favicon from '../../public/favicon.svg'
import BBC from '../images/logo-bbc.png'
import BI from '../images/logo-bi.png'
import Forbes from '../images/logo-forbes.png'
import TechCrunch from '../images/logo-techcrunch.png'

const Header: React.FC<{}> = () => {

  return (
    <header className="header">
      <div className="header__svg">
        <Image src={Favicon}></Image>
      </div>
      <h3 className="heading-3 header__heading">Your own pase</h3>
      <h1 className="heading-1">
        The <span className="header__training">ultimate</span> training
      </h1>
      {/* <!-- <div className="header__seenon-text">Seen on</div>
  <div className="header__seenon-logos">
    <Image src={BBC} alt="Logo BBC" height="20"/>
    <Image src={Forbes} alt="Logo Forbes" height="20"/>
    <Image src={TechCrunch} alt="Logo Techcrucn" height="20"/>
    <Image src={BI} alt="Logo BI" height="20"/>
  </div> --> */}
    </header>)
}

export default Header;