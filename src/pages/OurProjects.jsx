import React from 'react';

const OurProjects = () => {
  return (
    
     <>
      <div className="text-center mb-12 pt-8" id='projects'>
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="font-Monst text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Projects
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
        <p className="text-gray-600 font-medium text-lg md:text-xl max-w-2xl mx-auto">
          Learn more about Projects we have done.
        </p>
      </div>

      
      <div className='pagePadding'>
     
      {/* Section 1 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="max-w-xl ">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl mb-4 font-Monst">
                Aug 2023 to Oct 2023 
                <strong className="text-nowrap text-slate-800 block font-Monst">
                  Tutoring Government Schools
                </strong>
              </h2>
              <p className="text-gray-700 text-lg font-Noto">
                We tutored around 770 students where our members initiated a new Co-cirriculmn program 
                named Good Friday. Additionally, with the help of school's head master, we were able to 
                establish new STEM clubs and do some science projects. Moreover, we participated students
                in the plantation program where we planted over 50 trees and flowers. Lastly, the team 
                donated some stationary materials to the needy students.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img 
                src="/src/assets/images/about-img-1.jpg" 
                className="w-full h-[280px] sm:h-[300px] object-cover rounded-xl shadow-lg" 
                alt="Tutoring Government Schools" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="max-w-xl font-Monst">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl mb-4">
                December 2023 
                <strong className="block">Presentation Campaign</strong>
              </h2>
              <p className="text-gray-700 text-lg font-Noto">
                Visited around 4 schools inside Kathmandu valley. Reached around 340 students. Shared the prospect
                of Blockchain, Internet of things, Artificial intelligence and other growing prospects of the 
                Internet. Worked alongside top ISP partner, Worldlink, Marketing Director as one of the key speakers.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img  src="/src/assets/images/img-11.jpg" className="w-full h-[280px] sm:h-[300px] object-cover rounded-xl shadow-lg" 
                alt="Presentation Campaign" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="max-w-xl font-Monst">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl mb-4">
                2023-2024 
                <strong className="block text-slate-800">Internet Distribution</strong>
              </h2>
              <p className="text-gray-700 text-lg font-Noto">
                We are working alongside top ISPs to establish internet connections in rural schools in rural areas.
                Aim to connect 11 schools within March 2024. Likewise, working on a fundraising program to raise
                money and work for the overall welfare of children i.e. providing them with proper clothes, 
                stationary materials, etc.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img 
                src="/src/assets/images/project3.jpg"
                className="w-full h-[280px] sm:h-[300px] object-cover rounded-xl shadow-lg" 
                alt="Internet Distribution"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
        <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="max-w-xl font-Monst">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl mb-4">
              Future
              
                <strong className="block text-slate-800">Dream Project</strong>
              </h2>
              <p className="text-gray-700 text-lg font-Noto">
              Initially,we started as first generation students. Our ultimate goal is to establish an 
              ashram to teach underprivileged students and provide them with the best facility.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <img  src="/src/assets/images/img1.JPG" className="w-full h-[280px] sm:h-[300px] object-cover rounded-xl shadow-lg" 
                alt="Future Project" />
            </div>
          </div>
        </div>
      </section>
    </div>
     
    </>
  );
};

export default OurProjects;