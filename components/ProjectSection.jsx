import Link from "next/link";
import Image from "next/image"; 

export function ProjectsSection() {
  const projects = [
    {
      name: "Project 1",
      description: "Farm-Trade. An E-commerce platform for farmers and trader using next.js and tailwind css.",
      image: "/farm-trade.jpeg", 
    },
    {
      name: "Project 2",
      description: "A responsive e-commerce website with a modern design.",
      image: "/project-2 img",
    },
    {
      name: "Project 3",
      description:
        "A responsive hotel website with a modern design.",
      image: "/hotel.jpeg",
    },
    {
      name: "Project 4",
      description:
        "An inventory management system with advance features using next.js and tailwind css.",
      image: "/inventory.jpeg",
    },
    {
      name: "Project 5",
      description:
        "A movie suggestion site using HTML, CSS, JavaScript and an external API.",
      image: "/movie.jpeg",
    },
    {
      name: "Project 6",
      description: "A portfolio website showcasing my skills in HTML5, CSS3, and JavaScript.",
      image: "/portfolio-site.png",
    },
    {
      name: "Project 7",
      description:
        "A currency converter using JavaFx and an external API showcasing my skills in desktop dev.",
      image: "/currency.jpeg",
    },
    {
      name: "Project 8",
      description:
        "A note taking app using JavaFx and an external API with advance | AI features.",
      image: "/note.jpeg",
    },
    {
      name: "Project 9",
      description:
        "A math quiz app using JavaFx for desktop.",
      image: "/math-quiz.png",
    },
  ];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid gap-12 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Projects
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Explore the projects I&apos;ve worked on.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[300px] w-full overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-background/80 opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-muted-foreground text-center px-2">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
