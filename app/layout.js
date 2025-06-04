import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
    title: 'My Portfolio',
    description: 'A modern portfolio showcasing my projects and skills.',
    keywords: 'portfolio, web developer, projects, skills, Next.js, Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    )
  }