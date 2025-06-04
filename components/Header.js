'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()

    const linkStyle = (href) =>
        pathname === href
            ? 'text-blue-500 font-semibold'
            : 'text-gray-700 hover:text-blue-500'

            return (
                <header className="bg white shadow-md p-4 sticky top-0 z-50">
                     <div className="max-w-6xl mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold">My Portfolio</h1>
                        <nav className="space-x-6 text-base">
                            <Link href="/" className = {linkStyle('/')}>
                                Home</Link>
                                <Link href="/projects" className={linkStyle('/projects')}>
                                Projects</Link>
                                <Link href="/about" className={linkStyle('/about')}>
                                About</Link>
                                <Link href="/contact" className={linkStyle('/contact')}>
                                Contact</Link>  
                                <Link href="/blog" className={linkStyle('/blog')}>
                                Blog</Link>
                        </nav>
                    </div>
                </header>

            )
}