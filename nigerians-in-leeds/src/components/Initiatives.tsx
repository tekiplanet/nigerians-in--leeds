"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Home, ArrowRight } from 'lucide-react';
import { Container } from './Container';

const programs = [
    {
        id: 'excel',
        title: "Excel@NCL",
        subtitle: "Supplementary School",
        description: "Running since 2007, our Saturday school provides academic support and cultural education for children ages 5-16. Empowering the next generation of leaders.",
        icon: <GraduationCap size={32} />,
        image: "https://ik.imagekit.io/zudgi2oxs/jun-ren-WaW0ozSw6Go-unsplash.jpg",
        color: "brand-orange",
        tag: "Education"
    },
    {
        id: 'lacon',
        title: "LACoN",
        subtitle: "Leeds African Cup of Nations",
        description: "Our premier annual football tournament. Bringing together diverse communities through the universal language of sport for over 15 years.",
        icon: <Trophy size={32} />,
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093",
        color: "brand-purple",
        tag: "Community"
    },
    {
        id: 'nigeria-house',
        title: "Nigeria House",
        subtitle: "A Vision for a Home",
        description: "A 24-year dream to establish a permanent cultural focal point in Leeds. Dedicated to shared heritage and sustainable community growth.",
        icon: <Home size={32} />,
        image: "https://ik.imagekit.io/zudgi2oxs/anne-nygard-OtqaCE_SEMI-unsplash.jpg",
        color: "brand-gold",
        tag: "Legacy"
    }
];

const InitiativeCard = ({ prog, i }: { prog: typeof programs[0]; i: number }) => {
    const [isActive, setIsActive] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            onClick={() => setIsActive(!isActive)}
            className="group relative h-[500px] rounded-[48px] overflow-hidden shadow-brand-subtle hover:shadow-brand-hover transition-all duration-500 cursor-pointer"
        >
            {/* Background Image */}
            <Image
                src={prog.image}
                alt={prog.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80 lg:opacity-100'}`} />

            {/* Tag */}
            <div className={`absolute top-8 right-8 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest border border-white/20`}>
                {prog.tag}
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className={`w-14 h-14 rounded-2xl bg-${prog.color} flex items-center justify-center mb-6 text-white shadow-lg transition-transform group-hover:scale-110`}>
                    {prog.icon}
                </div>

                <div className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">
                    {prog.subtitle}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                    {prog.title}
                </h3>

                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-hover:mt-2'}`}>
                    <p className="text-white/80 leading-relaxed mb-6">
                        {prog.description}
                    </p>
                    <button className="flex items-center gap-2 text-white font-bold hover:text-brand-orange transition-colors">
                        Learn More <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export const Initiatives = () => {
    return (
        <section id="initiatives" className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/5 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-purple/5 blur-[100px] rounded-full" />

            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Pillars of Our Community
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Driving Progress Through <span className="highlight-yellow">Action</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {programs.map((prog, i) => (
                        <InitiativeCard key={prog.id} prog={prog} i={i} />
                    ))}
                </div>
            </Container>
        </section>
    );
};
