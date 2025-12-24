"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Container } from './Container';

const stories = [
    {
        name: "Adebayo O.",
        role: "Found His Network",
        quote: "Moving to Leeds for work was daunting, but Nigeria Leeds connected me with professionals in my field. I've made lifelong friends and valuable business contacts.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974",
        accent: "brand-orange"
    },
    {
        name: "Chioma A.",
        role: "Felt at Home",
        quote: "As a mother of two, finding a community that celebrates our culture was essential. My children now have Nigerian friends and learn about their heritage.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
        accent: "brand-purple"
    },
    {
        name: "Emeka N.",
        role: "Received Mentorship",
        quote: "The mentorship program helped me navigate university life and career planning. I've since given back by mentoring other Nigerian students as a volunteer.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974",
        accent: "brand-gold"
    }
];

export const Stories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

    return (
        <section id="stories" className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Decorative Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px]" />
            </div>

            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-orange font-bold uppercase tracking-widest mb-4"
                        >
                            Voices of the Community
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold leading-tight"
                        >
                            Stories that <span className="highlight-yellow">Inspire</span> <br />
                            Us Every Single Day
                        </motion.h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={prev}
                            className="w-14 h-14 rounded-full border border-brand-gray flex items-center justify-center hover:bg-brand-purple hover:text-white hover:border-brand-purple transition-all group shadow-sm"
                            aria-label="Previous story"
                        >
                            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={next}
                            className="w-14 h-14 rounded-full border border-brand-gray flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all group shadow-sm"
                            aria-label="Next story"
                        >
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[500px] lg:min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 1.05, x: -20 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="grid lg:grid-cols-[0.8fr_1.2fr] gap-0 rounded-[40px] overflow-hidden bg-brand-gray/20 shadow-brand-hover border border-white"
                        >
                            {/* Image Column */}
                            <div className="relative h-[400px] lg:h-full overflow-hidden">
                                <Image
                                    src={stories[currentIndex].image}
                                    alt={stories[currentIndex].name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-transparent mix-blend-overlay" />
                            </div>

                            {/* Content Column */}
                            <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center relative bg-white/40 backdrop-blur-md">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Quote className="text-brand-orange mb-8 opacity-40" size={64} strokeWidth={1} />

                                    <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-brand-purple italic leading-relaxed mb-12">
                                        "{stories[currentIndex].quote}"
                                    </blockquote>

                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-brand-gray flex items-center justify-center border-2 border-white shadow-brand-subtle">
                                            <User size={32} className="text-brand-purple/40" />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-foreground">{stories[currentIndex].name}</h4>
                                            <p className={`font-bold uppercase tracking-wider text-brand-orange`}>
                                                {stories[currentIndex].role}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Decorative floating badge */}
                                <div className="absolute top-12 right-12 hidden md:block">
                                    <div className="w-24 h-24 rounded-full border-2 border-brand-orange/20 flex items-center justify-center p-2 rotate-12">
                                        <div className="w-full h-full rounded-full border border-brand-orange/40 flex items-center justify-center text-[10px] uppercase font-black tracking-tighter text-brand-orange text-center leading-none">
                                            Certified Member
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        {stories.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-12 bg-brand-purple' : 'w-2 bg-brand-gray group-hover:bg-brand-purple/50'
                                    }`}
                                aria-label={`Go to story ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
