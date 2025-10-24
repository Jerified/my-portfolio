export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jeremiah Oyedele",
    "alternateName": "Jerrified",
    "jobTitle": "Full Stack Developer",
    "description": "Skilled Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, and modern web technologies. Based in Lagos, Nigeria. Available for remote work globally.",
    "url": "https://findjerrified.vercel.app",
    "image": "https://findjerrified.vercel.app/profile.jpg",
    "sameAs": [
      "https://github.com/Jerified",
      "https://twitter.com/Jeremiah4life11",
      "https://www.linkedin.com/in/Jerrified"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "API Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Develops web applications using modern technologies like React, Next.js, Node.js, and TypeScript",
      "skills": [
        "React",
        "Next.js", 
        "Node.js",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Git",
        "Docker"
      ]
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Web Development"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance/Remote"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
