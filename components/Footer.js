export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center py-6 mt-12 text-sm text-gray-600">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
            Built with <a href="https://nextjs.org" className="text-blue-500 hover:underline">Next.js</a> and <a href="https://tailwindcss.com" className="text-blue-500 hover:underline">Tailwind CSS</a>.
            <br />
            <a href="/privacy-policy" className="text-blue-500 hover:underline">
                Privacy Policy
            </a>

        </footer>
    )
        
}