import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Nerdearla from "../../imgs/nerdearla.jpg";
import Blog from "../../imgs/blog.jpg";
import Discord from "../../imgs/discord.jpg";
import Polemica from "../../imgs/polemica.jpg";
import AdminBirras from "../../imgs/adminbirras.jpeg";
import './Carousel.css'
import Footer from "./Footer";




const Carousel = ({setCarouselView, setNavbarView, setNerdearlaView, setBirrasView}) => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-50 items-center justify-center">
        <img src="https://timeline.sysarmy.com/wp-content/uploads/2022/09/10anios-1.svg" alt="Logo Sysarmy"/>
      </div>
      <div className="hidden md:block">
      <HorizontalScrollCarousel 
        setCarouselView = {setCarouselView}
        setNavbarView = {setNavbarView}
        setNerdearlaView = {setNerdearlaView}
        setBirrasView = {setBirrasView}
      />
      </div>
      <div className="sm:block md:hidden">
        <VerticalList 
          setCarouselView = {setCarouselView}
          setNavbarView = {setNavbarView}
          setNerdearlaView = {setNerdearlaView}
          setBirrasView = {setBirrasView}
        />
      
      </div>
      <Footer />
    </div>
  );
};

const VerticalList = ({setCarouselView, setNavbarView, setNerdearlaView, setBirrasView}) => {
  return(
    <div className="flex flex-col gap-4 items-center justify-center">
      {cards.map((card)=>{
        return <Card card={card} key={card.id}
        setCarouselView = {setCarouselView}
        setNavbarView = {setNavbarView}
        setNerdearlaView = {setNerdearlaView}
        setBirrasView = {setBirrasView}
        />;
      })}
    </div>
    
  );
};

const HorizontalScrollCarousel = ({ setCarouselView, setNavbarView, setNerdearlaView, setBirrasView }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-46%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} 
            setCarouselView = {setCarouselView}
            setNavbarView = {setNavbarView}
            setNerdearlaView = {setNerdearlaView}
            setBirrasView = {setBirrasView}
        />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card, setCarouselView, setNavbarView, setNerdearlaView, setBirrasView }) => {

    //Links a las páginas externas
    const BlogLink = "https://sysarmy.com/blog/";
    const DiscordLink = "https://discord.gg/JZN2kuPB";
    const PolemicaYtLink = "https://www.youtube.com/watch?v=-iCsIt1kGy4&list=PLPXjriojfnRUFxHXucPTF1AFQlG4z3vro&ab_channel=sysarmy";
    const TiendaLink = "https://tienda.sysarmy.com/password/";


    const cambiarVista = () => {
    
        if (card.id === 1) {
            setCarouselView(false);
            setNavbarView(true);
            setNerdearlaView(true);
            setBirrasView(false);
        } else if (card.id == 2) {
          window.open(BlogLink, "_blank")
        }else if (card.id == 3){
          window.open(DiscordLink, "_blank")
        }else if (card.id == 4){
            setCarouselView(false);
            setNavbarView(true);
            setNerdearlaView(false);
            setBirrasView(true);
        }else if (card.id == 5){
          window.open(PolemicaYtLink, "_blank")
        }else if (card.id == 6){
          window.open(TiendaLink, "_blank")
        }
    }

    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
            onClick={cambiarVista}
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};

export default Carousel;

const cards = [
  {
    url: Nerdearla,
    title: "Nerdearla",
    id: 1,
  },
  {
    url: Blog,
    title: "Blog",
    id: 2,
  },
  {
    url: Discord,
    title: "Discord",
    id: 3,
  },
  {
    url: AdminBirras,
    title: "AdminBirras",
    id: 4,
  },
  {
    url: Polemica,
    title: "Polemica en el /var",
    id: 5,
  },
  {
    url: Polemica,
    title: "Tienda",
    id: 6,
  },
];