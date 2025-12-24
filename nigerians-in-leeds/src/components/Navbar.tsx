"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Impact', href: '#impact' },
        { name: 'Stories', href: '#stories' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-brand-subtle py-3' : 'bg-transparent py-6'
            }`}>
            <Container className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                        <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 8L24 16H28L24 24H16L12 16H16L20 8Z" fill="#4A1D6F" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold font-serif text-brand-purple">Nigeria Leeds</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-sans font-medium text-foreground hover:text-brand-orange transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link
                        href="#membership"
                        className="bg-brand-purple text-white px-6 py-2 rounded-brand-button font-semibold hover:bg-brand-purple/90 transition-all shadow-brand-subtle"
                    >
                        Join Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-purple p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-white shadow-brand-hover p-6 flex flex-col gap-4 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium py-2 border-b border-brand-gray"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#membership"
                                className="bg-brand-orange text-white px-6 py-3 rounded-brand-button font-bold text-center mt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Join Community
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </nav>
    );
};
