import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='pagePadding'  id='contact'>
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-xl">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 pt-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="font-Monst text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact US
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
        <p className="text-gray-600 font-medium text-lg md:text-xl max-w-2xl mx-auto">
        Get in touch with us for any questions or concerns
        </p>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-Monst">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <i className="fas fa-envelope text-xl text-blue-600"></i>
                <div>
                  <p className="text-sm font-medium text-gray-900">Email</p>
                  <p className="text-sm text-gray-600">learnednp@.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-phone text-xl text-blue-600"></i>
                <div>
                  <p className="text-sm font-medium text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600">+977-9812345670</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <i className="fas fa-map-marker-alt text-xl text-blue-600"></i>
                <div>
                  <p className="text-sm font-medium text-gray-900">Address</p>
                  <p className="text-sm text-gray-600">Kathmandu, Nepal</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
              <a href='https://www.instagram.com/_learn.ed_/'> <i className="fa-brands fa-instagram text-xl text-blue-600"></i></a>
                <div>
                  <p className="text-sm font-medium text-gray-900">Instagram</p>
                  <p className="text-sm text-gray-600">_learn.ed_</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
              <a href='https://www.linkedin.com/company/learnednp/?originalSubdomain=np'> <i className="fa-brands fa-linkedin text-xl text-blue-600"></i></a>
                <div>
                  <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                  <p className="text-sm text-gray-600">LearnED</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-Monst">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-user text-gray-400"></i>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <i className="fas fa-tag text-gray-400"></i>
                  </span>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3">
                    <i className="fas fa-comment text-gray-400"></i>
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
              >
                <i className="fas fa-paper-plane"></i>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;