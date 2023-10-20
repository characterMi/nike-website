import { headerLogo } from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react"

const Nav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block relative">
          <img src={hamburger} width={25} height={25} onClick={() => setToggle((prev) => !prev)} />
          <ul className={`${toggle ? "flex" : "hidden"} items-center flex-1 justify-center top-10 right-0 p-8 w-[200px] rounded-[10px] absolute flex-col bg-black gap-16`}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav