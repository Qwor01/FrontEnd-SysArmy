import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({setCarouselView, setNavbarView, setNerdearlaView, setBirrasView}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const cambiarHome = () => {
        setCarouselView(true);
        setNavbarView(false);
        setNerdearlaView(false);
        setBirrasView(false);
    }

    const cambiarAdminBirras = () =>{
        setBirrasView(true);
        setNerdearlaView(false);
    }
    const cambiarNerdearla = () =>{
        setBirrasView(false);
        setNerdearlaView(true);
    }

    //Links a las páginas externas
    const DiscordLink = "https://discord.gg/JZN2kuPB";
    const PolemicaYtLink = "https://www.youtube.com/watch?v=-iCsIt1kGy4&list=PLPXjriojfnRUFxHXucPTF1AFQlG4z3vro&ab_channel=sysarmy";
    const TiendaLink = "https://tienda.sysarmy.com/password/";
    const BlogLink = "https://sysarmy.com/blog/";

    const navLinks = [
      { onClick: cambiarHome, label: "Home" },
      { onClick: cambiarNerdearla, label: "Nerdearla" },
      { onClick: () => window.open(BlogLink, "_blank"), label: "Blog" },
      { onClick: () => window.open(DiscordLink, "_blank"), label: "Discord" },
      { onClick: cambiarAdminBirras, label: "AdminBirras" },
      { onClick: () => window.open(PolemicaYtLink, "_blank"), label: "Polemica en el /var" },
      { onClick: () => window.open(TiendaLink, "_blank"), label: "Tienda" },
    ];
    return (
      <>
        <header className="sm:px-8 px-4 py-2 z-10 w-full bg-neutral-800">
          <nav className="flex justify-between items-center max-container">
            <img src="https://timeline.sysarmy.com/wp-content/uploads/2022/09/10anios-1.svg" alt="Logo Sysarmy"/>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-white font-bold">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <button onClick={item.onClick}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>            
            <div
              className="hidden max-lg:block cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <RxHamburgerMenu className="text-4xl" />
            </div>
          </nav>
        </header>
        {isMenuOpen && (
          <div>
            <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
              <div
                className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <AiOutlineClose className="text-4xl" />
              </div>
              <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-lg text-slate-gray"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </>
    );
}

export default Navbar
