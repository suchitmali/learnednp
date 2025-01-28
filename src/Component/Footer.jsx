import {useState, useEffect} from 'react';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down 200px
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);

      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);

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
    <div>
        <footer className="bg-gray-100 dark:bg-gray-900">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
     {isVisible && 
      (<a className="inline-block rounded-full bg-white p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4 dark:bg-gray-700 dark:hover:bg-gray-600" onClick={scrollToTop} >
        <span className="sr-only" >Back to top</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>)}
    </div>

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-white lg:justify-start">
         <span className="flex">
            <img src="src/assets/images/logo.png"  className="h-12 w-12"/>
            <p className="ml-5 text-3xl font-bold font-Monst">LearnED</p>
         </span>
        </div>

        <p className="mx-auto mt-6 max-w-md text-pretty md:text-center leading-relaxed text-gray-500 lg:text-left dark:text-gray-400 font-Noto" >
          LearnEd is  <strong>Non Profit Organization</strong> striving to the provide education to children from remote and rural parts of Nepal.
        </p>
      </div>

      <ul  className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12 font-Monst">
        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="./gallery" onClick={() => scrollToSection('gallery')}
          >
            Gallery
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="./our-projects" onClick={() => scrollToSection('projects')} >
            Projects
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="./about-us" onClick={() => scrollToSection('about')} >
            About
          </a>
        </li>

        <li>
          <a
            className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
            href="./contact-us" onClick={() => scrollToSection('contact')}>
            Contact us
          </a>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right dark:text-gray-400 font-Noto">
      Copyright &copy; 2025. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  )
}

export default Footer