'use client'

import { DottedMap } from "@/components/ui/dotted-map"

const workLocations = [
  {
    lat: 6.5244,
    lng: 3.3792,
    size: 0.4,
  }, // Lagos, Nigeria (Your location)
  {
    lat: 40.7128,
    lng: -74.006,
    size: 0.3,
  }, // New York
  {
    lat: 51.5074,
    lng: -0.1278,
    size: 0.3,
  }, // London
  {
    lat: 35.6762,
    lng: 139.6503,
    size: 0.3,
  }, // Tokyo
  {
    lat: -33.8688,
    lng: 151.2093,
    size: 0.3,
  }, // Sydney
  {
    lat: 48.8566,
    lng: 2.3522,
    size: 0.3,
  }, // Paris
  {
    lat: 37.7749,
    lng: -122.4194,
    size: 0.3,
  }, // San Francisco
  {
    lat: 55.7558,
    lng: 37.6176,
    size: 0.3,
  }, // Moscow
  {
    lat: 39.9042,
    lng: 116.4074,
    size: 0.3,
  }, // Beijing
  {
    lat: 1.3521,
    lng: 103.8198,
    size: 0.3,
  }, // Singapore
]

export function RemoteWorkMap() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-70% from-white/5" />
      <style jsx>{`
        @keyframes dotBlink {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .dotted-map svg circle {
          animation: dotBlink 2s ease-in-out infinite;
        }
        .dotted-map svg circle:nth-child(odd) {
          animation-delay: 0.5s;
        }
        .dotted-map svg circle:nth-child(3n) {
          animation-delay: 1s;
        }
      `}</style>
      <DottedMap 
        markers={workLocations}
        dotColor="#d4a574"
        markerColor="#feb47b"
        dotRadius={0.25}
        width={400}
        height={200}
        className="w-full h-full dotted-map"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(212, 165, 116, 0.3))'
        }}
      />
      <div className="absolute bottom-4 left-4">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg max-w-fit">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-[#feb47b] rounded-full animate-pulse"></div>
            <h3 className="text-sm font-semibold text-white">Remote Work Ready</h3>
          </div>
          <div className="flex items-center gap-6">
            {/* Globe Icon */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className="w-6 h-6">
                  <radialGradient id="SVGsjmRLc0D" cx="43.972" cy="29.066" r="90.951" gradientTransform="matrix(.6257 .78 -.5815 .4665 33.359 -18.792)" gradientUnits="userSpaceOnUse">
                    <stop offset=".506" stopColor="#17a1f3"/>
                    <stop offset=".767" stopColor="#1b7ffa"/>
                    <stop offset=".962" stopColor="#1366f0"/>
                    <stop offset="1" stopColor="#1160ee"/>
                  </radialGradient>
                  <path fill="url(#SVGsjmRLc0D)" d="M3.14 64.68c.68 24.4 16.99 59.55 61.45 59.1c43.32-.44 60.76-36.3 59.4-62.06c-1.37-25.76-21.66-57.46-61.79-57.23c-40.14.22-59.8 33.96-59.06 60.19"/>
                  <path fill="#fff" d="M63.03 4.48s-.45 1.27 2.17 2.07s4.01.85 5.88 1.71c1.87.85 2.99 2.19 5.66 3.58s3.58 1.71 4.06.75c.22-.43-.69-2.35-.69-2.35s.43-1.82-.21-2.46c-.54-.54-3.52-1.75-4.59-2.18c-1-.4-4.59-.84-6.31-.95c-4.22-.26-5.97-.17-5.97-.17"/>
                  <path fill="#7add8a" d="M49.06 49.8c.09.23.65 1.37 1.77 1.68s4.08.37 4.79.65c.72.28 2.46 1.18 2.93 1.46s2.3 1.82 2.74 1.96c1.03.34 1.62-.28 2.09-.12s.75 1.06 1.68 1.12c.56.04 1.28-.87 1.81-.97s3.24.12 3.3-.75s-1.84-2.68-2.96-2.68c-.94 0-1.09.81-1.81.84s-1.18-.75-2.02-.72s-1.28.75-1.74.53c-.47-.22-5.48-3.67-6.79-4.05c-1.31-.37-4.73.09-5.2.22c-.46.15-.74.43-.59.83"/>
                </svg>
              </div>
              <span className="text-xs text-gray-300">Global</span>
            </div>

            {/* Timezone Icon */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128" className="w-6 h-6">
                  <path fill="#82aec0" d="M32.04 123.67a3.12 3.12 0 0 1-1.55-3.8l4.02-11.77l7.87 5.31l-6.36 9.24a3.13 3.13 0 0 1-3.98 1.02m63.32 0c1.39-.7 2.06-2.32 1.55-3.8l-4.07-11.91l-8.29 4.77l6.83 9.92a3.13 3.13 0 0 0 3.98 1.02"/>
                  <circle cx="63.7" cy="73.93" r="42.01" fill="#ffefa1"/>
                  <circle cx="63.7" cy="70.22" r="49.36" fill="#cc2929"/>
                  <circle cx="63.7" cy="72.7" r="46.4" fill="#ff4638"/>
                  <circle cx="63.7" cy="72.7" r="40.03" fill="#fafafa"/>
                  <circle cx="64" cy="72.7" r="4.45" fill="#563428"/>
                  <path fill="none" stroke="#563428" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5" d="M47.49 63.49L63.7 72.7"/>
                  <path fill="none" stroke="#563428" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3.5" d="M86.87 59.41L64.44 72.7"/>
                </svg>
              </div>
              <span className="text-xs text-gray-300">Timezone</span>
            </div>

            {/* Remote Icon */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" className="w-6 h-6">
                  <g fill="none">
                    <path fill="#d3d3d3" d="m28 20l-12-1l-12 1l-1.98 8.891c-.11.766.975.609 1.48.609h25c.505 0 1.59.157 1.48-.609z"/>
                    <path fill="#7167a4" d="M27 2H5c-.55 0-1 .45-1 1v16.99h24V3c0-.55-.45-1-1-1"/>
                    <path fill="#26c9fc" d="M5 18.74V3.25c0-.14.11-.25.25-.25h21.5c.14 0 .25.11.25.25v15.49c0 .14-.11.25-.25.25H5.25c-.14 0-.25-.11-.25-.25"/>
                  </g>
                </svg>
              </div>
              <span className="text-xs text-gray-300">Remote</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
