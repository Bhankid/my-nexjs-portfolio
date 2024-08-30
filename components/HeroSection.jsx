import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex h-[80dvh] items-center justify-center bg-muted"
    >
      <div className="container grid gap-6 px-4 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col items-center justify-center space-y-4 mx-auto">
          {" "}
          {/* added mx-auto to center horizontally */}
          <div className="relative h-48 w-48 sm:h-64 sm:w-64">
            <div>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial color="#EF2222" />
              </mesh>
            </div>
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Alfred Fianyo
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Software Engineer | Full-Stack Developer
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 mx-auto">
          {" "}
          {/* added mx-auto to center horizontally */}
          <div className="prose max-w-md text-center text-muted-foreground">
            <p>
              Hi, I am Alfred Fianyo, a passionate software engineer with a
              strong background in full-stack development. I specialize in
              creating innovative and user-friendly web sites & applications,
              Desktop & Mobile Apps.
            </p>
            <p>
              With a keen eye for design and a deep understanding of technology,
              I strive to deliver high-quality solutions that solve real-world
              problems.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            {" "}
            <Link
              href="#projects"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary border border-transparent px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-all duration-300 ease-in-out hover:bg-transparent hover:border-black hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
