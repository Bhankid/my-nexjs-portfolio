import Link from "next/link";
import Image from "next/image"; // Import Image component

export function ProjectsSection() {
  const projects = [
    {
      name: "Project 1",
      description: "A web application for managing tasks and projects.",
      image: "/project1-placeholder.png", // Placeholder image
    },
    {
      name: "Project 2",
      description: "A responsive e-commerce website with a modern design.",
      image: "/project2-placeholder.png",
    },
    {
      name: "Project 3",
      description:
        "A mobile-first web application for tracking personal finances.",
      image: "/project3-placeholder.png",
    },
    {
      name: "Project 4",
      description:
        "A social media platform for connecting with friends and sharing updates.",
      image: "/project4-placeholder.png",
    },
    {
      name: "Project 5",
      description:
        "A real-time chat application with support for multiple chat rooms.",
      image: "/project5-placeholder.png",
    },
    {
      name: "Project 6",
      description: "A portfolio website showcasing photography and artwork.",
      image: "/project6-placeholder.png",
    },
    {
      name: "Project 7",
      description:
        "A weather forecasting app providing real-time weather updates.",
      image: "/project7-placeholder.png",
    },
    {
      name: "Project 8",
      description:
        "A blogging platform with markdown support and user authentication.",
      image: "/project8-placeholder.png",
    },
    {
      name: "Project 9",
      description:
        "A blogging platform with markdown support and user authentication.",
      image: "/project8-placeholder.png",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 ml-12 md:ml-16 lg:ml-20"
    >
      <div className="container grid gap-12 px-4 md:px-6">
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
