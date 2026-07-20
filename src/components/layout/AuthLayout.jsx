import { Outlet, Link } from 'react-router-dom'

function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">

        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(16, 64, 39, 0.75),
                rgba(40, 120, 60, 0.75)
              ),
              url('https://i.ibb.co/4Z5XgTvx/Gemini-Generated-Image-v1988qv1988qv198.png')
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center p-12 text-white">
          <div className="max-w-lg text-center">
            <h2 className="text-5xl font-bold mb-6">
              Empowering Farmers Through Technology
            </h2>

            <p className="text-lg leading-8 text-white/90">
              Join CBG Agri Innovation Hub in transforming agriculture
              through innovation, digital technology, research, and
              sustainable farming solutions for Rwanda and beyond.
            </p>

            <div className="flex justify-center mt-10 space-x-3">
              <span className="w-3 h-3 rounded-full bg-lime-400"></span>
              <span className="w-3 h-3 rounded-full bg-lime-400/70"></span>
              <span className="w-3 h-3 rounded-full bg-lime-400/40"></span>
            </div>

          </div>
        </div>

      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center bg-bg-light p-4 sm:p-8">
        <div className="w-full max-w-md">

          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/">
              <img
                src="https://i.ibb.co/HT6qqSjz/CBG-AGRI-1.png"
                alt="CBG Agri Innovation Hub"
                className="w-28 h-28 mx-auto object-contain"
              />
            </Link>
          </div>

          {/* Login / Register Form */}
          <Outlet />

        </div>
      </div>
    </div>
  )
}

export default AuthLayout