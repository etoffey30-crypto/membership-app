import { motion, AnimatePresence } from 'framer-motion';
import SolidaireLogo from '../../imports/SOLIDAIRE_1_1.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'Features',     path: '/features' },
  { label: 'How it Works', path: '/how-it-works' },
  { label: 'Pricing',      path: '/pricing' },
  { label: 'Contact',      path: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.4)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.03)',
        backdropFilter: 'blur(12px)',
        fontFamily: "'Inter',sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center h-[72px] gap-4">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src={SolidaireLogo}
              alt="Solidaire Logo"
              className="w-11 h-11 object-contain transition-transform group-hover:scale-110"
            />
            <span
              className="text-xl font-black tracking-tight"
              style={{
                background: 'linear-gradient(90deg,#f97316 0%,#ec4899 40%,#6366f1 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Solidaire
            </span>
          </Link>

          {/* ── Desktop centered nav links ── */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {NAV_LINKS.map(({ label, path }) => {
              const isExternal = path.startsWith('http');
              if (isExternal) {
                return (
                  <a
                    key={label}
                    href={path}
                    className="relative text-sm font-semibold transition-colors"
                    style={{ color: '#374151' }}
                  >
                    {label}
                  </a>
                );
              }
              return (
              <Link
                key={label}
                to={path}
                className="relative text-sm font-semibold transition-colors"
                style={{ color: isActive(path) ? '#0ea5e9' : '#374151' }}
              >
                {label}
                {isActive(path) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                    style={{ background: '#0ea5e9' }}
                  />
                )}
              </Link>
              );
            })}
          </div>

          {/* ── Desktop right actions ── */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href="https://solidaireapp.io/login"
              className="text-sm font-semibold text-slate-600 hover:text-sky-500 transition-colors"
            >
              Login
            </a>
            <a href="https://solidaireapp.io/login">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(14,165,233,0.40)' }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2.5 text-white text-sm font-bold rounded-xl shadow-md"
                style={{ background: 'linear-gradient(130deg,#38bdf8 0%,#0ea5e9 55%,#0284c7 100%)' }}
              >
                Start Free Trial
              </motion.button>
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-auto p-2 text-slate-700 hover:text-sky-500 transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t"
            style={{ borderTopColor: 'rgba(125,211,252,0.25)', background: 'rgba(240,249,255,0.98)' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
              {NAV_LINKS.map(({ label, path }) => {
                const isExternal = path.startsWith('http');
                if (isExternal) {
                  return (
                    <a
                      key={label}
                      href={path}
                      onClick={() => setIsOpen(false)}
                      className="py-2 text-sm font-semibold border-b border-sky-100 last:border-0"
                      style={{ color: '#374151' }}
                    >
                      {label}
                    </a>
                  );
                }
                return (
                <Link
                  key={label}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-sm font-semibold border-b border-sky-100 last:border-0"
                  style={{ color: isActive(path) ? '#0ea5e9' : '#374151' }}
                >
                  {label}
                </Link>
                );
              })}
              <div className="flex gap-3 pt-2">
                <a href="https://solidaireapp.io/login" className="flex-1">
                  <button className="w-full py-2.5 text-sm font-bold text-slate-700 border border-slate-200 rounded-xl">
                    Login
                  </button>
                </a>
                <a href="https://solidaireapp.io/login" className="flex-1">
                  <button
                    className="w-full py-2.5 text-sm font-bold text-white rounded-xl"
                    style={{ background: 'linear-gradient(130deg,#38bdf8,#0ea5e9)' }}
                  >
                    Start Free Trial
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}