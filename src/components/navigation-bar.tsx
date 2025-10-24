import Link from 'next/link'
import React from 'react'

const NavigationBar = () => {
    return (
        <header className="relative z-10 flex justify-between items-center px-6 py-4 bg-black/20 backdrop-blur-md">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                </div>
                <span className="text-sm font-medium">Web Semnasti2025</span>
            </div>

            <nav className="hidden md:flex space-x-6 text-sm font-medium">
                {['Beranda', 'Tantang', 'Teaser', 'Pembicara', 'Tiket', 'Informasi'].map((item) => (
                    <Link key={item} href="#" className="hover:text-blue-300 transition-colors">
                        {item}
                    </Link>
                ))}
            </nav>

            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105">
                DAFTAR
            </button>
        </header>
    )
}

export default NavigationBar