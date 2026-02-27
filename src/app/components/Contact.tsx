import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl tracking-wider uppercase mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Get in touch for reservations, private events, or general inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl tracking-wide uppercase mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm uppercase tracking-wide mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm uppercase tracking-wide mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm uppercase tracking-wide mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm uppercase tracking-wide mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                >
                  <option value="" className="bg-black">
                    Select a subject
                  </option>
                  <option value="reservation" className="bg-black">
                    Table Reservation
                  </option>
                  <option value="private-event" className="bg-black">
                    Private Event
                  </option>
                  <option value="general" className="bg-black">
                    General Inquiry
                  </option>
                  <option value="partnership" className="bg-black">
                    Partnership
                  </option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm uppercase tracking-wide mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-white text-black py-4 text-sm uppercase tracking-wide hover:bg-white/90 transition-colors disabled:bg-white/50"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl tracking-wide uppercase mb-8">
              Get In Touch
            </h2>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              <div className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg uppercase tracking-wide mb-2">
                      Location
                    </h3>
                    <p className="text-white/70">
                      123 Downtown Street
                      <br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-start gap-4">
                  <Phone className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg uppercase tracking-wide mb-2">
                      Phone
                    </h3>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-start gap-4">
                  <Mail className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg uppercase tracking-wide mb-2">
                      Email
                    </h3>
                    <p className="text-white/70">info@narbar.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-6">
                <div className="flex items-start gap-4">
                  <Clock className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg uppercase tracking-wide mb-2">
                      Hours
                    </h3>
                    <p className="text-white/70">
                      Thursday - Saturday
                      <br />
                      10:00 PM - 4:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-64 bg-white/5 border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1744314080490-ed41f6319475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBwYXJ0eSUyMGxpZ2h0cyUyMGNyb3dkfGVufDF8fHx8MTc3MjE5MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="narbar location"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin size={48} className="text-white/60" />
              </div>
            </div>
          </div>
        </div>

        {/* VIP Reservations Section */}
        <div className="mt-24 bg-white text-black p-12 text-center">
          <h2 className="text-3xl tracking-wide uppercase mb-4">
            VIP Table Reservations
          </h2>
          <p className="text-lg mb-6 text-black/70 max-w-2xl mx-auto">
            Elevate your experience with our exclusive VIP service. Premium bottle service, private seating, and personalized attention.
          </p>
          <p className="text-black/60 text-sm">
            For VIP reservations, please call us directly at{" "}
            <span className="text-black">+1 (555) 123-4567</span> or email{" "}
            <span className="text-black">vip@narbar.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
