"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, HandHelping, Info } from 'lucide-react';
import { Container } from './Container';

const MapComponent = dynamic(() => import('./MapComponent'), {
    ssr: false,
    loading: () => <div className="w-full h-full bg-brand-gray/20 animate-pulse rounded-[40px]" />
});

const locations = [
    {
        id: 'leeds',
        name: "Leeds (Main Hub)",
        description: "Our primary center of operations. Hosting weekly meetups, legal aid clinics, and community celebrations.",
        stats: "250+ Members",
        helpType: "Education & Integration",
        coords: [53.801277, -1.548567] as [number, number],
        color: "brand-orange"
    },
    {
        id: 'bradford',
        name: "Bradford",
        description: "Focused on professional networking and business support for the Nigerian diaspora in West Yorkshire.",
        stats: "120+ Members",
        helpType: "Career Mentorship",
        coords: [53.79391, -1.75206] as [number, number],
        color: "brand-purple"
    },
    {
        id: 'york',
        name: "York",
        description: "Providing student support and cultural liaison services for the thriving academic community.",
        stats: "80+ Members",
        helpType: "Student Welfare",
        coords: [53.95996, -1.08729] as [number, number],
        color: "brand-gold"
    }
];

export const Location = () => {
    const [activeLocation, setActiveLocation] = useState(locations[0]);

    return (
        <section id="location" className="py-24 md:py-32 bg-brand-gray/10 relative overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-stretch">

                    {/* Map Visualization Side */}
                    <div className="flex flex-col">
                        <div className="text-left mb-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4"
                            >
                                Our Geographic Presence
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-bold leading-tight"
                            >
                                We are where <span className="highlight-yellow">others need help</span>
                            </motion.h2>
                        </div>

                        <div className="flex-grow min-h-[400px] md:min-h-[500px] relative bg-white rounded-[40px] shadow-brand-hover border border-white p-2">
                            <MapComponent activeLocation={activeLocation} />
                        </div>
                    </div>

                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeLocation.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="bg-white p-8 md:p-12 rounded-[40px] shadow-brand-hover border border-brand-gray relative overflow-hidden h-full"
                            >
                                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${activeLocation.color}/5 rounded-full blur-3xl`} />

                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${activeLocation.color}/10 text-${activeLocation.color} font-bold text-xs uppercase tracking-widest mb-8`}>
                                    <Globe size={14} />
                                    Live Hub Status
                                </div>

                                <h3 className="text-3xl font-bold text-brand-purple mb-6">{activeLocation.name}</h3>
                                <p className="text-xl text-foreground/70 leading-relaxed mb-10">
                                    {activeLocation.description}
                                </p>

                                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-brand-gray">
                                    <div>
                                        <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-tighter text-xs mb-2">
                                            <Users size={16} />
                                            Members
                                        </div>
                                        <div className="text-2xl font-bold text-brand-purple">{activeLocation.stats}</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-tighter text-xs mb-2">
                                            <HandHelping size={16} />
                                            Primary Help
                                        </div>
                                        <div className="text-2xl font-bold text-brand-purple">{activeLocation.helpType}</div>
                                    </div>
                                </div>

                                <div className="mt-12 flex gap-3 flex-wrap">
                                    {locations.map((loc) => (
                                        <button
                                            key={`btn-${loc.id}`}
                                            onClick={() => setActiveLocation(loc)}
                                            className={`px-6 py-3 rounded-full font-bold text-xs transition-all border-2 ${activeLocation.id === loc.id
                                                    ? `bg-${loc.color} text-white border-${loc.color}`
                                                    : 'bg-white text-brand-purple border-brand-gray hover:border-brand-purple'
                                                }`}
                                        >
                                            {loc.name.split(' ')[0]}
                                        </button>
                                    ))}
                                </div>

                                <button className="mt-8 w-full py-5 rounded-2xl bg-brand-purple text-white font-bold text-lg hover:bg-brand-orange transition-all shadow-brand-subtle flex items-center justify-center gap-4 group">
                                    Contact Hub
                                    <Info size={20} className="group-hover:rotate-12 transition-transform" />
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Container>
        </section>
    );
};
