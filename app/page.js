export default function Home() {
  return (
    <section
      className="text-center py-12 space-y-6 relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700">
        Explore my projects, skills, and experiences as a web developer. I am passionate about creative web development, digital marketing, and building modern, scalable websites.
      </p>
      <div className="flex justify-center space-x-4">
        <a
          href="/projects"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          View Projects
        </a>
        <a
          href="/about"
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition"
        >
          Learn More About Me
        </a>
      </div>
    </section>
  );
}