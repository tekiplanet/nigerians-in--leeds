"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { Button } from './Button';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
            {/* Background Organic Shape */}
            <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[80%] bg-brand-orange/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[60%] bg-brand-purple/5 rounded-full blur-3xl -z-10 pointer-events-none" />

            <Container className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                        A community where no Nigerian feels
                        <span className="block text-brand-orange mt-2">
                            <span className="highlight-yellow">alone</span> in Leeds
                        </span>
                    </h1>
                    <p className="text-xl text-foreground/80 leading-relaxed mb-8 max-w-xl">
                        Connecting Nigerians across Yorkshire through culture, community, and support.
                        Join our vibrant family and celebrate our rich heritage together.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button href="#membership" variant="primary">Join Community</Button>
                        <Button href="#about" variant="secondary">Discover More</Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Stylized Nigeria/Connection Visual */}
                    <div className="relative w-full aspect-square flex items-center justify-center">
                        {/* Nigeria Map Silhouette (Simplified) */}
                        <svg
                            viewBox="0 0 500 500"
                            className="absolute inset-0 w-full h-full opacity-20 fill-brand-green/30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <motion.path
                                d="M50 100 L150 80 L300 100 L450 120 L480 250 L450 400 L300 450 L100 400 L50 250 Z"
                                fill="currentColor"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>

                        {/* Main Image in a hexagonal silhouette */}
                        <div className="relative w-[85%] h-[85%] z-10 flex items-center justify-center">
                            <div
                                className="w-full h-full relative overflow-hidden shadow-brand-hover"
                                style={{
                                    clipPath: 'polygon(25% 5%, 75% 5%, 95% 50%, 75% 95%, 25% 95%, 5% 50%)',
                                    borderRadius: '30px'
                                }}
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1974"
                                    alt="Nigerian Culture and Heritage"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/30 to-transparent mix-blend-multiply" />
                            </div>

                            {/* Connection to Leeds Visual */}
                            <div className="absolute -top-12 -right-8 w-40 h-40 pointer-events-none">
                                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                    <motion.path
                                        d="M20 80 Q 40 40 85 15"
                                        fill="none"
                                        stroke="#F28C28"
                                        strokeWidth="3"
                                        strokeDasharray="6,4"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 1.8, delay: 1 }}
                                    />
                                    <motion.g
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 2.8, type: "spring" }}
                                    >
                                        <circle cx="85" cy="15" r="6" fill="#4A1D6F" />
                                        <circle cx="85" cy="15" r="10" fill="#4A1D6F" fillOpacity="0.2" className="animate-ping" />
                                    </motion.g>
                                    <text x="50" y="35" className="fill-brand-purple text-[10px] font-bold" transform="rotate(-35 50 35)">Nigeria to Leeds</text>
                                </svg>
                            </div>
                        </div>

                        {/* Content Callout */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.5, duration: 0.6 }}
                            className="absolute bottom-10 -left-4 bg-white/90 backdrop-blur-md p-5 rounded-radius-card shadow-brand-hover border-y-2 border-brand-orange z-20"
                        >
                            <div className="text-xl font-bold text-brand-purple">Representing Nigeria</div>
                            <div className="text-sm font-semibold text-brand-orange">in the heart of Leeds</div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-purple opacity-50 hidden lg:block"
            >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </motion.div>
        </section>
    );
};
