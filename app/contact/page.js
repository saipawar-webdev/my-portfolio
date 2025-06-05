export default async function ContactPage() {
  return (
    <section className="py-8 max-w-2xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-700">
        {`If you'd like to get in touch, feel free to reach out via email at `}
        <a href="mailto:sia@example.com" className="text-blue-500">sia@example.com</a>
        {` or connect with me on social media like `}
        <a href="https://www.linkedin.com" className="text-blue-500">LinkedIn</a>.
      </p>
    </section>
  );
}
