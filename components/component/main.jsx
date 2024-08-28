
/** Add fonts into your Next.js project:

import { Comfortaa } from 'next/font/google'

comfortaa({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function main() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <div className="relative h-8 w-8 rounded-full bg-muted">
              <img
                src="/placeholder.svg"
                alt="John Doe"
                fill
                className="rounded-full object-cover" />
            </div>
            <span className="font-bold">John Doe</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="relative flex h-[80dvh] items-center justify-center bg-muted">
          <div className="container grid gap-6 px-4 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative h-48 w-48 sm:h-64 sm:w-64">
                <div>
                  <div />
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#55efc4" />
                  </mesh>
                </div>
              </div>
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">John Doe</h1>
                <p className="text-muted-foreground md:text-xl">Software Engineer | Full-Stack Developer</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="prose max-w-md text-center text-muted-foreground">
                <p>
                  Hi, I'm John Doe, a passionate software engineer with a strong background in full-stack development. I
                  specialize in creating innovative and user-friendly web applications.
                </p>
                <p>
                  With a keen eye for design and a deep understanding of technology, I strive to deliver high-quality
                  solutions that solve real-world problems.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  View Projects
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="text-muted-foreground md:text-xl">Explore the projects I've worked on.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative h-[300px] w-full overflow-hidden rounded-lg">
                <div>
                  <div />
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#55efc4" />
                  </mesh>
                </div>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">A web application for managing tasks and projects.</p>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative h-[300px] w-full overflow-hidden rounded-lg">
                <div>
                  <div />
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#55efc4" />
                  </mesh>
                </div>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">A responsive e-commerce website with a modern design.</p>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group relative h-[300px] w-full overflow-hidden rounded-lg">
                <div>
                  <div />
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#55efc4" />
                  </mesh>
                </div>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">
                    A mobile-first web application for tracking personal finances.
                  </p>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      View Project
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}>
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="text-muted-foreground md:text-xl">Explore the technologies I work with.</p>
            </div>
            <div className="flex justify-center">
              <div>
                <div />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <mesh>
                  <boxGeometry args={[4, 4, 4]} />
                  <meshStandardMaterial color="#55efc4" />
                </mesh>
                <mesh>
                  <boxGeometry args={[3, 3, 3]} />
                  <meshStandardMaterial color="#00b894" />
                </mesh>
                <mesh>
                  <boxGeometry args={[2, 2, 2]} />
                  <meshStandardMaterial color="#81ecec" />
                </mesh>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">React</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <NetworkIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">Node.js</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <TypeIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">TypeScript</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <WindIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">Tailwind CSS</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <EclipseIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">JavaScript</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <HashIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">HTML</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">CSS</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <GitGraphIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">Git</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <DatabaseIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">MongoDB</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <DatabaseIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">PostgreSQL</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <DockIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">Docker</h4>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CloudIcon className="h-12 w-12" />
                <h4 className="text-lg font-semibold">AWS</h4>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-12 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
              <p className="text-muted-foreground md:text-xl">Get</p>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function CloudIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>)
  );
}


function CodepenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>)
  );
}


function DatabaseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>)
  );
}


function DockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 8h20" />
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 16h12" />
    </svg>)
  );
}


function EclipseIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a7 7 0 1 0 10 10" />
    </svg>)
  );
}


function GitGraphIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>)
  );
}


function HashIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>)
  );
}


function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function NetworkIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>)
  );
}


function TypeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" x2="15" y1="20" y2="20" />
      <line x1="12" x2="12" y1="4" y2="20" />
    </svg>)
  );
}


function WindIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>)
  );
}
