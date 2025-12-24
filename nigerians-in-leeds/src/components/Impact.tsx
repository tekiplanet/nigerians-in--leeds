"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Container } from './Container';

const stats = [
    { label: 'Active Members', value: '500+', color: 'from-brand-orange to-brand-gold', delay: 0 },
    { label: 'Events Annually', value: '50+', color: 'from-brand-purple to-brand-purple/70', delay: 0.1 },
    { label: 'Years Strong', value: '10+', color: 'from-brand-gold to-brand-orange', delay: 0.2 },
    { label: 'Local Partners', value: '25+', color: 'from-brand-green to-brand-green/70', delay: 0.3 },
];

const ParallaxImage = ({ src, alt, className, speed = 0.1 }: { src: string; alt: string; className: string; speed?: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

    return (
        <div ref={ref} className={`${className} overflow-hidden`}>
            <motion.div style={{ y, height: '120%' }} className="relative w-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover scale-110"
                />
            </motion.div>
        </div>
    );
};

export const Impact = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="impact" ref={sectionRef} className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Grid Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <Container>
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
                    {/* Advanced Visual Grid - Redesigned for Mobile */}
                    <div className="relative h-[450px] sm:h-[600px] lg:h-[800px] w-full">
                        {/* Main Featured Image */}
                        <ParallaxImage
                            src="https://ik.imagekit.io/zudgi2oxs/2149259469.jpg"
                            alt="Community Life"
                            className="absolute top-0 left-0 w-[85%] lg:w-[66%] h-[60%] lg:h-[66%] rounded-[32px] lg:rounded-[40px] shadow-2xl z-10"
                            speed={-0.05}
                        />

                        {/* Floating Image 2 */}
                        <ParallaxImage
                            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070"
                            alt="Cultural Celebration"
                            className="absolute top-[40%] lg:top-[33%] right-0 w-[60%] lg:w-[50%] h-[45%] lg:h-[50%] rounded-[24px] lg:rounded-[30px] shadow-2xl z-20 border-4 lg:border-8 border-[#0A0A0A]"
                            speed={0.1}
                        />

                        {/* Accent Image 3 */}
                        <ParallaxImage
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                            alt="Mentorship"
                            className="absolute bottom-0 left-[10%] lg:left-[8%] w-[50%] lg:w-[42%] h-[35%] lg:h-[33%] rounded-[20px] lg:rounded-[24px] shadow-xl z-30 border-2 lg:border-4 border-[#0A0A0A]"
                            speed={0.03}
                        />

                        {/* Decorative SVG Element */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -left-10 w-40 h-40 opacity-20 hidden md:block"
                        >
                            <svg viewBox="0 0 200 200" className="fill-brand-gold">
                                <path d="M100 0L130 70L200 100L130 130L100 200L70 130L0 100L70 70Z" />
                            </svg>
                        </motion.div>
                    </div>

                    {/* Impact Content & Stats Cards */}
                    <div className="lg:sticky lg:top-32 h-fit">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <h4 className="text-brand-orange font-bold uppercase tracking-[0.2em] mb-4">Our Track Record</h4>
                            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                                Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold">Real Change</span> in Leeds
                            </h2>
                            <p className="text-xl text-white/60 mb-12 leading-relaxed">
                                We believe in action over words. Every pound donated and every hour volunteered
                                translates into direct support for the Nigeria Community Leeds in Yorkshire.
                            </p>

                            {/* Advanced Stat Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: stat.delay, duration: 0.5 }}
                                        className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.08] transition-all group overflow-hidden relative"
                                    >
                                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity animate-pulse`} />

                                        <span className={`text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color} mb-2 block`}>
                                            {stat.value}
                                        </span>
                                        <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA link */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="mt-12"
                            >
                                <a href="#membership" className="inline-flex items-center gap-4 text-brand-orange font-bold group">
                                    <span className="h-[2px] w-12 bg-brand-orange transition-all group-hover:w-20"></span>
                                    View Detailed Impact Report
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
