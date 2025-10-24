import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jeremiah Oyedele - Full Stack Developer Portfolio',
    short_name: 'Jeremiah Oyedele',
    description: 'Jeremiah Oyedele is a skilled Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Based in Lagos, Nigeria.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f10',
    theme_color: '#ff7e5f',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
