import { Link } from 'react-router-dom'
import { Home, ArrowRight, Sprout } from 'lucide-react'
import Button from '../components/ui/Button'
// Adjust these two import paths to match your actual folder structure —
// this file assumes src/pages/NotFound.jsx, with Button in src/components/ui/
// and constants in src/utils/, same as Footer.jsx.

/**
 * NotFound (404) — CRAT Agri Innovation Hub
 *
 * Design notes:
 * - Palette: brand tokens only —
 *     --color-bg-white     #FFFFFF (page background)
 *     --color-primary-dark #173628 (numeral, path line)
 *     --color-accent        #8CC63F (sprout badge, CTA, active states)
 *     --color-accent-dark   #6FA82E (CTA hover)
 *     --color-text-heading  #1A2E22
 *     --color-text-body     #5B6B62
 * - Signature element: the middle "0" in "404" is replaced with a sprout
 *   badge — a small, specific nod to the brand rather than a generic
 *   error graphic. The winding furrow-path behind it echoes the footer's
 *   plowed-field divider, tying the two pages together.
 * - Motion: the sprout has a slow, ambient sway (reduced-motion respected)
 *   — a single quiet animation rather than scattered effects.
 */

function NotFound() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center px-6">
      {/* Ambient furrow path, faint, behind content */}
      <svg
        viewBox="0 0 1200 800"
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M-100 ${120 + i * 90} C 250 ${40 + i * 90}, 550 ${200 + i * 90}, 900 ${100 + i * 90} S 1400 ${40 + i * 90}, 1700 ${120 + i * 90}`}
            fill="none"
            stroke="#173628"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>

      <div className="relative text-center max-w-lg mx-auto py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#8CC63F] mb-6">
          Error 404
        </p>

        {/* Numeral with sprout signature */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 select-none">
          <span className="font-serif text-[7rem] sm:text-[9rem] leading-none font-semibold text-[#173628]">
            4
          </span>
          <span
            className="w-[4.2rem] h-[4.2rem] sm:w-[5.4rem] sm:h-[5.4rem] rounded-full bg-[#8CC63F] flex items-center justify-center shrink-0 motion-safe:animate-[sway_3.5s_ease-in-out_infinite]"
            style={{ transformOrigin: '50% 90%' }}
            aria-hidden="true"
          >
            <Sprout className="w-8 h-8 sm:w-10 sm:h-10 text-[#173628]" strokeWidth={2.25} />
          </span>
          <span className="font-serif text-[7rem] sm:text-[9rem] leading-none font-semibold text-[#173628]">
            4
          </span>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1A2E22] mb-3">
          This field hasn't been planted yet
        </h1>
        <p className="text-[#5B6B62] text-sm sm:text-base leading-relaxed mb-10 max-w-sm mx-auto">
          The page you're looking for may have moved, been renamed, or never
          took root. Let's get you back on solid ground.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/">
            <Button className="!bg-[#8CC63F] !text-[#173628] hover:!bg-[#6FA82E] font-medium px-6">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <Link
            to="/programs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#173628] hover:text-[#6FA82E] transition-colors group"
          >
            Explore our programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }
      `}</style>
    </main>
  )
}

export default NotFound