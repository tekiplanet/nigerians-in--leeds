import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Container } from './Container';

export const Footer = () => {
    return (
        <footer id="contact" className="bg-brand-purple text-white pt-20 pb-10 overflow-hidden relative">
            {/* Subtle organic shape in footer */}
            <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 group cursor-pointer">
                            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 8L24 16H28L24 24H16L12 16H16L20 8Z" fill="#4A1D6F" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold font-serif">Nigeria Leeds</span>
                        </div>
                        <p className="text-white/70 mb-8 leading-relaxed">
                            A community where no Nigerian feels alone in Leeds.
                            Connecting, supporting, and celebrating our heritage across Yorkshire.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 font-serif underline decoration-brand-orange decoration-2 underline-offset-8">Quick Links</h4>
                        <ul className="space-y-4 text-white/70">
                            <li><Link href="#about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
                            <li><Link href="#impact" className="hover:text-brand-orange transition-colors">Our Impact</Link></li>
                            <li><Link href="#stories" className="hover:text-brand-orange transition-colors">Success Stories</Link></li>
                            <li><Link href="#membership" className="hover:text-brand-orange transition-colors">Membership</Link></li>
                            <li><Link href="#" className="hover:text-brand-orange transition-colors">Events Calendar</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 font-serif underline decoration-brand-orange decoration-2 underline-offset-8">Contact Us</h4>
                        <ul className="space-y-6 text-white/70">
                            <li className="flex items-start gap-3">
                                <Phone className="text-brand-orange shrink-0" size={20} />
                                <span>+44 113 123 4567</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="text-brand-orange shrink-0" size={20} />
                                <span>hello@nigerialeeds.org</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-orange shrink-0" size={20} />
                                <span>Leeds, West Yorkshire, United Kingdom</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-bold mb-6 font-serif underline decoration-brand-orange decoration-2 underline-offset-8">Stay Updated</h4>
                        <p className="text-white/70 mb-6 text-sm">
                            Get the latest news and event updates delivered to your inbox.
                        </p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-white/10 border border-white/20 rounded-brand-button px-4 py-3 placeholder:text-white/40 focus:outline-none focus:border-brand-orange transition-colors"
                                required
                            />
                            <button className="w-full bg-brand-orange text-white py-3 rounded-brand-button font-bold hover:bg-brand-orange/90 transition-all shadow-brand-subtle">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} Nigeria Leeds Community Organization. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
