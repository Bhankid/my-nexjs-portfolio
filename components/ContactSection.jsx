export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-background ml-12 md:ml-16 lg:ml-20"
    >
      <div className="container grid gap-12 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-accent-foreground">
            Contact Me
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Get in touch for collaboration or job opportunities.
          </p>
          <form className="max-w-2xl mx-auto p-8 bg-white rounded-md shadow-md">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 pl-12 text-lg text-gray-700 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 pl-12 text-lg text-gray-700 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 pl-12 text-lg text-gray-700 border border-input rounded-md focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-md shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
