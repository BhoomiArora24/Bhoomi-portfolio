import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-10 px-1 bg-secondary/30 text-white ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Have a project or idea? Let’s connect!
        </p>

        <div className="grid md:grid-cols-2 gap-3 mr-30">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary w-6 h-6" />
              <div>
                <h4 className="font-medium">MyEmail</h4>
                <a
                  href="mailto:youremail@gmail.com"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  bhoomiarora64@gmail.com
                </a>
              </div>
            </div>

            {/* Socials */}
            


            
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur p-6 rounded-lg space-y-6 border border-white/20 w-120 mr-20"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md blue-900 bg-gradient-to-br from-slate-950 via-gray-900 to-black placeholder-white focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md blue-900 bg-gradient-to-br from-slate-950 via-gray-900 to-black placeholder-white focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md blue-900 bg-gradient-to-br from-slate-950 via-gray-900 to-black placeholder-white focus:ring-2 focus:ring-primary"
              rows="5"
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3 rounded-md flex justify-center items-center gap-2 hover:bg-primary/90 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <FaPaperPlane className="w-4 h-4" />
            </button>

            {submitted && <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
