export default async function AboutPage() {
  return (
    <section className="py-8 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-gray-700">
        {`Hello! I'm a web developer with a passion for creating modern, user-friendly websites and applications.
        I specialize in building responsive designs using Next.js and Tailwind CSS.`}
      </p>
      <p className="text-gray-700">
        {`With a background in computer science and several years of experience in the industry, I enjoy tackling complex problems and delivering high-quality solutions.`}
      </p>
      <p className="text-gray-700">
        {`When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or writing about web development on my blog.`}
      </p>
      <p className="text-gray-700">
        {`Feel free to connect with me on social media or check out my projects to see what I've been working on!`}
      </p>
    </section>
  );
}
