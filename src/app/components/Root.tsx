import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", number: "01" },
    { name: "Events", path: "/events", number: "02" },
    { name: "Gallery", path: "/gallery", number: "03" },
    { name: "About", path: "/about", number: "04" },
    { name: "Contact", path: "/contact", number: "05" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/0 backdrop-blur-0 transition-all duration-300 hover:bg-black/80 hover:backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl uppercase tracking-tighter relative z-50">
            <span className="font-black">NARBAR</span>
          </Link>

          {/* Desktop Navigation - Minimal */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative"
              >
                <span className={`text-xs uppercase tracking-[0.2em] transition-colors ${
                  isActive(link.path) 
                    ? "text-white" 
                    : "text-white/40 hover:text-white"
                }`}>
                  {link.name}
                </span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Menu Button */}
          <button
            className="text-white relative z-50 flex items-center gap-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-xs uppercase tracking-[0.2em] hidden sm:inline">
              {menuOpen ? "Close" : "Menu"}
            </span>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black"
          >
            <div className="h-full flex items-center justify-center px-6">
              <nav className="max-w-[1400px] w-full">
                {/* Main Navigation */}
                <div className="space-y-2 mb-16">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline gap-6 hover:text-white/60 transition-colors"
                      >
                        <span className="text-sm text-white/40 tracking-wider">
                          {link.number}
                        </span>
                        <span className={`text-[4rem] md:text-[8rem] leading-[0.9] uppercase tracking-tighter font-black ${
                          isActive(link.path) ? "text-white" : "text-white"
                        }`}>
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                      Location
                    </p>
                    <p className="text-sm text-white/70">
                      123 Downtown Street<br />
                      City, State 12345
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                      Hours
                    </p>
                    <p className="text-sm text-white/70">
                      Thursday - Saturday<br />
                      10:00 PM - 4:00 AM
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                      Social
                    </p>
                    <div className="flex gap-6 text-sm text-white/70">
                      <a href="#" className="hover:text-white transition-colors">Instagram</a>
                      <a href="#" className="hover:text-white transition-colors">Facebook</a>
                      <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-4xl tracking-tighter uppercase font-black mb-4">narbar</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-md">
                Experience the ultimate nightlife destination where music, art, and culture collide.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-4 text-white/40">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-white/70 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] mb-4 text-white/40">Contact</h4>
              <p className="text-white/70 text-sm">
                info@narbar.com<br />
                +1 (555) 123-4567<br />
                123 Downtown Street<br />
                City, State 12345
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
            <p>&copy; 2026 narbar. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Privacy</a>
              <a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Terms</a>
              <a href="#" className="hover:text-white transition-colors uppercase tracking-wider">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}