

const Home = () => {
  return (
    <div className="pagePadding font-Monst " id="home">

<div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Home
            </h2>
          </div>  
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-600 font-medium text-lg md:text-xl max-w-2xl mx-auto">
          LearnED is transforming lives in rural Nepal by providing access to quality education for 
          underprivileged children. We strive to create a brighter future for these communities by fostering
           a love of learning and equipping children with the skills they need to succeed.
          </p>
        </div>

     
      <div className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      
        <div className="border border-slate-300 rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-5">
          <div className="text-center mt-4">
            <i className="fa-solid fa-bullseye text-blue-600 text-xl sm:text-2xl" />
            <span className="font-semibold text-xl sm:text-2xl py-2 ml-4">Mission</span>
          </div>
          <p className="mt-4 sm:mt-5 px-3 sm:px-4 py-4 sm:py-5 text-justify font-Noto">
          Our mission is to empower diverse children with knowledge, laughter, and a profound sense of
           connection, fostering a brighter future built on mutual respect and understanding.
          </p>
        </div>

        {/* Vision Card */}
        <div className="border border-slate-300 rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-5">
          <div className="text-center mt-4">
            <i className="fa-solid fa-eye text-blue-600 text-xl sm:text-2xl" />
            <span className="font-semibold text-xl sm:text-2xl py-2 ml-4">Vision</span>
          </div>
          <p className="mt-4 sm:mt-5 px-3 sm:px-4 py-4 sm:py-5 text-justify font-Noto">
          We envision a world where education empowers every child, regardless of background, to become a
           force for good a world of understanding, laughter, and transformative change driven by the
            boundless potential of our childrens.
          </p>
        </div>

        {/* Values Card */}
        <div className="lg:col-span-1 md:col-span-2 border border-slate-300 rounded-2xl shadow-lg hover:shadow-xl p-4 sm:p-5 mx-auto w-full">
          <div className="text-center mt-4">
            <i className="fa-solid fa-hands-holding-child text-blue-600 text-xl sm:text-2xl" />
            <span className="font-semibold text-xl sm:text-2xl py-2 ml-4">Values</span>
          </div>
          <p className="mt-4 sm:mt-5 px-3 sm:px-4 py-4 sm:py-5 text-justify font-Noto">
          Diversity, Education, Empowerment: Nurturing the Potential of Every Child
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;