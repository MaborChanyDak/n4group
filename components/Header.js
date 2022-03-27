import HeaderItem from "./HeaderItem"
import {BsFacebook, BsInstagram, BsPhone, BsTwitter, BsYoutube, BsMailbox2} from 'react-icons/bs';
function Header() {
  return (
    <header className="flex flex-col sm:flex-row mb-2 sm:bg-yellow-500 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly items-center max-w-2xl text-blue-500">
          <HeaderItem title="FACEBOOK" Icon={BsFacebook}/>
          <HeaderItem title="INSTAGRAM" Icon={BsInstagram}/>
          <HeaderItem title="TWITTER" Icon={BsTwitter}/>
          <HeaderItem title="YOUTUBE" Icon={BsYoutube}/>
          <HeaderItem title="EMAIL" Icon={BsMailbox2}/>
          <HeaderItem title="CONTACT" Icon={BsPhone} />
          
        </div>
        <h1 className="text-2sxl text-red-500 mr-2 mb-2" >N4 CONSTRUCTION GROUP</h1>
    </header>
  )
}

export default Header