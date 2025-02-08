/* eslint-disable react/prop-types */
import { useState } from "react";

const TeamMember = ({ member, isActive, onClick }) => (
  <div 
    className={`relative transition-all duration-500 ease-in-out flex-shrink-0 overflow-hidden ${
      isActive ? 'w-full md:w-96' : 'w-24 md:w-28 cursor-pointer hover:scale-105'
    }`}
    onClick={onClick}
  >
    <div className={`h-full transition-all duration-500 ease-in-out ${
      isActive ? 'rounded-3xl bg-white border border-slate-100  p-6 shadow-inner hover:shadow-red-400 transition-all duration-300 ease-in-out' : 'bg-gray-200 rounded-3xl'
    }`}>
      <div className="h-full flex flex-col items-center">
        <div className={`relative ${isActive ? 'mb-6' : 'h-full'}`}>
          <div className={`relative ${
            isActive ? 'w-40 h-40 mx-auto' : 'w-full h-full min-h-[12rem]'
          }`}>
            <img 
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110"
            />
            {!isActive && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl">
                <p className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium truncate">
                  {member.name}
                </p>
              </div>
            )}
          </div>
        </div>

        {isActive && (
          <div className="flex-1 flex flex-col text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-purple-600 font-medium mb-4">{member.role}</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">{member.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">{member.location}</span>
              </div>
            </div>

            <div className="mt-auto flex justify-center gap-8">
              {member.socialMedia?.instagram && (
                <a href={member.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-rose-100 transition-all duration-300">
                <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
             
              {member.socialMedia?.linkedin && (
                <a href={member.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-all duration-300">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg> </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Chandan Vomjan",
      role: "Co-founder & Executive Director",
      email: "tylerchan707@gmail.com",
      location: "Boudha, Kathmandu",
      image: "/src/assets/images/profile-img.JPG",
      socialMedia: {
        instagram: "https://www.instagram.com/og_chandan/",
        linkedin: "https://www.linkedin.com/in/chandan-vomjan-7a7a2129a/"
      }
    },
    {
      name: "Aadesh Regmi",
      role: "Co-founder & Chief Operating Officer",
      email: "aadeshregmi7@gmail.com",
      location: "Sankhamul, Kathmandu",
      image: "/src/assets/images/landing-page.jpg",
      socialMedia: {
        instagram: "https://www.instagram.com/regmi_aadesh7/",
        linkedin: "https://www.linkedin.com/in/aadesh-regmi-5399b321b/"
      }
    },
    {
      name: "Aashray Chapagai",
      role: "Project Manager",
      email: "aashraychapagai22@gmail.com",
      location: "Bhaktapur, Nepal",
      image: "/src/assets/images/aashray.jpg",
      socialMedia: {
        instagram: "https://www.instagram.com/aashrayychapagaii/",
        linkedin: "https://www.linkedin.com/in/aashray-chapagai-0741a4232/"
      }
    },
    {
      name: "Saksham Dhakal",
      role: "Volunteer Coordinator",
      email: "sakshamdhakal111@gmail.com",
      location: "Bhaktapur, Nepal",
      image: "/src/assets/images/saksam.jpg",
      socialMedia: {
        instagram: "https://www.instagram.com/sdhakal111/",
        linkedin: "https://www.linkedin.com/in/chandan-vomjan-7a7a2129a/"
      }
    }
  ];
 
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
        <div className="w-24 h-1 bg-purple-600 mx-auto mb-8" />
        <p className="text-gray-600 font-medium text-lg md:text-xl max-w-2xl mx-auto">
          We are a team of like-minded high school graduates working to improve Nepal&apos;s education system.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {teamMembers.map((member, index) => (
          <TeamMember key={member.name} member={member} isActive={activeIndex === index} onClick={() => setActiveIndex(index)} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
