"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { Button } from './Button';

export const CTASection = () => {
    return (
        <section id="membership" className="relative py-24 md:py-32 overflow-hidden bg-brand-purple">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932"
                    alt="Community event"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-purple via-brand-purple/80 to-transparent" />
            </div>

            {/* Decorative paint strokes */}
            <div className="absolute top-[-10%] left-[-5%] w-1/3 h-1/2 pointer-events-none opacity-20">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 100C100 50 200 150 300 100C400 50 450 150 500 100" stroke="#F28C28" strokeWidth="60" strokeLinecap="round" />
                </svg>
            </div>
            <div className="absolute bottom-[-10%] right-[-5%] w-1/3 h-1/2 pointer-events-none opacity-20">
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                    <path d="M0 100C100 50 200 150 300 100C400 50 450 150 500 100" stroke="#FFB81C" strokeWidth="60" strokeLinecap="round" />
                </svg>
            </div>

            <Container className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
                        Join our community! <span className="text-brand-orange underline decoration-brand-gold/40">Everyone</span> can belong.
                    </h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Experience the warmth of home while building your future in Leeds.
                        Connect with a network that understands your journey.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Button variant="cta-primary">
                            Become a Member
                        </Button>
                        <Button variant="cta-secondary">
                            Attend an Event
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};
