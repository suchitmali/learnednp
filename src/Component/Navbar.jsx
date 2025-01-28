import {useState,useEffect} from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Prevent default behavior
        event.preventDefault();
        
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;
  
        // Using scrollTo with smooth behavior
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setActiveSection(sectionId);
      }
    };
  
    // Handle active section on scroll
    useEffect(() => {
      const handleScroll = () => {
        const sections = ['home', 'gallery', 'projects', 'about', 'contact'];
        const scrollPosition = window.scrollY;
  
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const elementTop = element.offsetTop - 100;
            const elementBottom = elementTop + element.offsetHeight;
  
            if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
   
  return (
    <>
    <div id="hero">
      <nav className="flex justify-between px-10 bg-slate-800 bg-opacity-89 text-white text-xl h-20 items-center font-medium  [&>*]:cursor-pointer md:px-8 md:text-lg sm:px-5 fixed top-0 left-0 w-full z-50 font-Monst ">
            <span className="flex gap-4">
            <img src="./src/assets/images/logo.png" alt="not found" className="h-12 w-12"></img>
            <p className="text-3xl font-bold font-Monst" onClick={() => scrollToSection('hero')}>LearnED</p></span>
            <ul className="hidden md:flex gap-7 ">
                <li className="menuUnderline"><a href="./home" onClick={() => scrollToSection('home')}>Home</a> </li> 
                <li className="menuUnderline"><a href="./gallery"  onClick={() => scrollToSection('gallery')}>Gallery</a></li>
                <li className="menuUnderline"><a href="./our-projects"  onClick={() => scrollToSection('projects')}>Our Projects</a></li>
                <li className="menuUnderline"><a href="./about"  onClick={() => scrollToSection('about')}>About</a></li>
                <li className="menuUnderline"><a href="./contact"  onClick={() => scrollToSection('contact')}>Contact us</a></li>
            </ul>

            <div className="md:hidden">
                <span  onClick={() => setMenu(!menu)}> 
                {menu ? (<>
                    <i className="fa-solid fa-xmark transition-transform duration-300 ease-in-out rotate-180"></i>
             
                    
            </> ) : (
                    <i className="fa-solid fa-bars transition-transform duration-300 ease-in-out"></i>
                             )}                
      </span>
    </div>

        </nav>  

        {/* Mobile View Navbar */}
        <nav>
        {menu && (
                <div className="md:hidden fixed top-20 left-0 w-full bg-slate-900 bg-opacity-89 text-white z-50 flex flex-col items-center"> {/* Overlay styles */}
                <hr className="underline w-full text-white h-4"/>
                    <ul className="flex flex-col items-center py-4 gap-4 w-full "> {/* Added padding and width */}
                        <li className="mobileHover w-full  "><a href="./" onClick={() => scrollToSection('home')}>Home</a></li>
                        <li className="mobileHover w-full "><a href="#" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
                        <li className="mobileHover w-full "><a href="#" onClick={() => scrollToSection('projects')}>Our Projects</a></li>
                        <li className="mobileHover w-full "><a href="#" onClick={() => scrollToSection('about')}>About</a></li>
                        <li className="mobileHover w-full "><a href="#" onClick={() => scrollToSection('contact')}>Contact us</a></li>
                    </ul>
                </div>
            )}
        </nav>
    </div>
    <section className="relative bg-[url('src/assets/images/home-bg.JPG')]  bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

  <div className="relative mx-auto max-w-screen-xl px-4 py-32  sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right mt-24">
      <h1 className="text-3xl font-extrabold text-rose-500 sm:text-5xl hover:text-rose-400 cursor-pointer">
      LearnED
        <strong className="block font-extrabold text-rose-500">  </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed ">
      Unifying Diveristy Through Education
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        

        <a href="./" className="block md:w-full rounded bg-slate-100 hover:bg-slate-300 px-12 py-3 text-sm w-full font-medium text-rose-600 shadow hover:text-rose-400 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        onClick={() => scrollToSection('home')}>
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
       
    </>
  )
}

export default Navbar