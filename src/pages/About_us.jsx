import { useState } from "react";

// Team member card component
const TeamMemberCard = ({ member }) => (
  <div className="relative h-full w-full">
    <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl transform transition-all duration-500 ease-in-out">
      <div className="h-full p-6 flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative w-48 h-48 mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transform -rotate-6" />
          <img 
            src={member.image}
            alt={member.name}
            className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          {member.name}
        </h2>
        <p className="text-lg text-purple-600 font-medium mb-4 text-center">
          {member.role}
        </p>

        {/* Contact Info */}
        <div className="space-y-3 text-gray-600">
          <div className="flex items-center gap-2 group">
            <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="group-hover:text-purple-500 transition-colors">{member.email}</span>
          </div>
          <div className="flex items-center gap-2 group">
            <svg className="w-5 h-5 text-gray-500 group-hover:text-purple-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="group-hover:text-purple-500 transition-colors">{member.location}</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-6 flex gap-4">
          <a
            href={member.socailMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-rose-100 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-rose-500 group-hover:text-rose-600 group-hover:scale-110 transition-all duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href={member.socailMedia.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-100 hover:bg-blue-100 transition-all duration-300 group"
          >
            <svg
              className="w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Navigation button component
const NavButton = ({ onClick, direction }) => (
  <button 
    onClick={onClick}
    className="p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
  >
    <svg
      className={`w-5 h-5 text-gray-600 ${direction === 'next' ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

const About_us = () => {
  
    const teamMembers = [
      {
        name: "Chandan Vomjan",
        role: "Co-founder & Executive Director",
        email: "tylerchan707@gmail.com",
        location: "Boudha, Kathmandu",
        image: "/src/assets/images/profile-img.JPG",
        socailMedia: {
          instagram: "https://www.instagram.com/og_chandan/",
          linkedin:"https://www.linkedin.com/in/chandan-vomjan-7a7a2129a/"
        }
      },
      {
        name: "Aadesh Regmi",
        role: "Co-founder & Chief Operating Officer",
        email: "aadeshregmi7@gmail.com",
        location: "Sankhamul, Kathmandu",
        image: "/src/assets/images/landing-page.jpg",
        socailMedia: {
          instagram: "https://www.instagram.com/regmi_aadesh7/",
          linkedin:"https://www.linkedin.com/in/aadesh-regmi-5399b321b/"
        }
      },
      {
        name: "Aashray Chapagai",
        role: "Project Manager",
        email: "aashraychapagai22@gmail.com",
        location: "Bhaktapur, Nepal",
        image: "/src/assets/images/aashray.jpg",
        socailMedia: {
          instagram: "https://www.instagram.com/aashrayychapagaii/",
          linkedin:"https://www.linkedin.com/in/aashray-chapagai-0741a4232/"
        }
      },
      {
          name: "Saksham Dhakal",
          role: "Volunteer Coordinator",
          email: "sakshamdhakal111@gmail.com",
          location: "Bhaktapur, Nepal",
          image: "/src/assets/images/saksam.jpg",
          socailMedia: {
            instagram: "https://www.instagram.com/sdhakal111/",
            linkedin:"https://www.linkedin.com/in/chandan-vomjan-7a7a2129a/"
          }
        },
    ];
 
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className=" pagePadding" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-Noto leading-relaxed">
            We are a team run by like-minded high school graduates who are constantly working to bring change to the 
            education system of Nepal. We are SMIlE hunters, pursuing a new approach to Education and trying to bring 
            Smiles to every childs face while unifying through education.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative w-full max-w-md mx-auto">
          {/* Card */}
          <div className="relative h-[32rem] w-full">
            <TeamMemberCard member={teamMembers[currentIndex]} />
          </div>

          {/* Navigation */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
            <NavButton onClick={prevSlide} direction="prev" />
            <NavButton onClick={nextSlide} direction="next" />
          </div>

          {/* Dots */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-600 w-4' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_us;