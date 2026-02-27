import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Hero Section - Editorial Style */}
      <section className="relative min-h-screen py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          {/* Main large title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 mb-12"
          >
            <h1 className="text-[12rem] md:text-[18rem] leading-[0.85] uppercase tracking-tighter font-black">
              narbar
            </h1>
          </motion.div>

          {/* Scattered editorial elements */}
          <div className="relative">
            {/* Image 1 - Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-[-200px] left-[100px] w-[280px] h-[350px] rotate-[-8deg] z-20"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729863254208-2fdc172a0bc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJ0ZW5kZXIlMjBtaXhpbmclMjBjb2NrdGFpbCUyMGRhcmt8ZW58MXx8fHwxNzcyMTkyODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bartender"
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>

            {/* Cursive text overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute top-[-80px] right-[200px] z-30"
            >
              <p className="text-[6rem] font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                feeling
              </p>
            </motion.div>

            {/* Image 2 - Cocktail Glass */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[50px] right-[50px] w-[300px] h-[400px] z-20"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758796545670-dee15e65784e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGNvY2t0YWlsJTIwZ2xhc3MlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MjE5MjgyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cocktail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small text block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute top-[200px] left-[50px] max-w-[200px] z-30"
            >
              <p className="text-xs uppercase tracking-wider text-white/60 leading-relaxed">
                A space where music transcends boundaries and brings people together through the night
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Vibe Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[4rem] md:text-[6rem] leading-[0.9] mb-4">
                the <span className="font-serif italic block" style={{ fontFamily: 'Playfair Display, serif' }}>vibe</span>
              </h2>
              <div className="space-y-6">
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                  Sensory journeys.<br />
                  Minimalism.<br />
                  <span className="text-white font-bold">Raw experiences.</span>
                </p>
                <div className="flex gap-3">
                  <span className="border border-white/30 px-4 py-2 text-xs uppercase tracking-wider">House</span>
                  <span className="border border-white/30 px-4 py-2 text-xs uppercase tracking-wider">Techno</span>
                  <span className="border border-white/30 px-4 py-2 text-xs uppercase tracking-wider">Soul</span>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <div className="absolute inset-0 rotate-[3deg]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744314080490-ed41f6319475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBwYXJ0eSUyMGxpZ2h0cyUyMGNyb3dkfGVufDF8fHx8MTc3MjE5MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="The vibe"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE Section */}
      <section className="relative py-32 px-6 bg-white text-black">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[8rem] md:text-[12rem] leading-[0.85] uppercase tracking-tighter font-black mb-16">
            SCENE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[500px] grayscale">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630533659209-d90d6d106a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodGNsdWIlMjBzY2VuZSUyMHBlb3BsZSUyMGRhbmNpbmd8ZW58MXx8fHwxNzcyMTkyODI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="The crowd"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm uppercase tracking-wider">THE CROWD</p>
              </div>
            </div>
            <div className="relative h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1636336085666-3c8bb49b5819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHRzJTIwYWJzdHJhY3QlMjBuaWdodGlmaXZlfGVufDF8fHx8MTc3MjE5MjgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Neon lights"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Link
              to="/gallery"
              className="border-2 border-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              VIEW FULL GALLERY
            </Link>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-[5rem] md:text-[8rem] leading-[0.9] mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            <span className="italic">Subscribe</span>
          </h2>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-8">
            Stay connected
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="YOUR E-MAIL"
              className="flex-1 bg-transparent border border-white/30 px-6 py-4 text-sm uppercase tracking-wider placeholder-white/40 focus:outline-none focus:border-white"
            />
            <button className="bg-white text-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/90 transition-colors">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Agency Style Section */}
      <section className="relative py-24 px-6 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            <div>
              <h2 className="text-[6rem] md:text-[10rem] leading-[0.85] uppercase tracking-tighter font-black mb-4">
                NARBAR
              </h2>
              <p className="text-[3rem] md:text-[5rem] leading-[0.9] font-serif italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                studios
              </p>
            </div>
            <div className="space-y-8 text-sm">
              <div>
                <p className="text-white/40 uppercase tracking-wider mb-2">About the Bar</p>
                <Link to="/about" className="hover:text-white/70 transition-colors">Read our story →</Link>
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-wider mb-2">Services</p>
                <ul className="space-y-1">
                  <li>DJ NIGHTS</li>
                  <li>EVENTS</li>
                  <li>PRIVATE BOOKINGS</li>
                  <li>VIP TABLES</li>
                </ul>
              </div>
              <div>
                <p className="text-white/40 uppercase tracking-wider mb-2">Connect</p>
                <ul className="space-y-1">
                  <li>THURSDAY — SATURDAY</li>
                  <li>10PM — 4AM</li>
                  <li>INFO@NARBAR.COM</li>
                  <li>+1 (555) 123-4567</li>
                </ul>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-black px-8 py-4 text-xs uppercase tracking-wider hover:bg-white/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}