import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#A9927D]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#A9927D]/10 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 gradient-text">Get In Touch</h2>

        <div className="bg-gradient-to-br from-white to-[#A9927D]/5 rounded-2xl shadow-2xl p-8 sm:p-12 border border-[#A9927D]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border-2 border-[#A9927D]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9927D] transition-all" placeholder="Your Name" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border-2 border-[#A9927D]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9927D] transition-all" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border-2 border-[#A9927D]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A9927D] transition-all h-32 resize-none" placeholder="Your message..."></textarea>
              </div>

              <button onClick={handleSubmit} className="w-full py-3 bg-[#A9927D] text-white rounded-lg font-semibold hover:bg-[#8a7d68] transition-all hover:shadow-xl hover:scale-105">
                Send Message
              </button>
            </div>

            <div className="flex flex-col items-center justify-center gap-8">
              <p className="text-gray-600 text-center text-lg">Or connect with me directly:</p>
              <div className="flex gap-6">
                <a href="mailto:john.doe@email.com" className="w-14 h-14 bg-[#A9927D]/10 rounded-full flex items-center justify-center text-[#A9927D] hover:bg-[#A9927D] hover:text-white transition-all hover:scale-110">
                  <i className="fas fa-envelope text-2xl"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#A9927D]/10 rounded-full flex items-center justify-center text-[#A9927D] hover:bg-[#A9927D] hover:text-white transition-all hover:scale-110">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-[#A9927D]/10 rounded-full flex items-center justify-center text-[#A9927D] hover:bg-[#A9927D] hover:text-white transition-all hover:scale-110">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
