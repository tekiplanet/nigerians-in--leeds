"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Users, Heart, Briefcase, HelpCircle, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';

const values = [
    {
        icon: <Users className="text-white" size={32} />,
        title: "Community Building",
        description: "Fostering meaningful connections among Nigerians in Leeds through regular meetups and cultural events.",
        className: "lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-brand-orange to-brand-orange/80",
        iconBg: "bg-white/20",
        textColor: "text-white"
    },
    {
        icon: <Heart className="text-brand-purple" size={32} />,
        title: "Cultural Heritage",
        description: "Celebrating and preserving our rich Nigerian culture while embracing life in the UK.",
        className: "lg:col-span-1 lg:row-span-2 bg-brand-gray/30 backdrop-blur-sm",
        iconBg: "bg-brand-purple/10",
        textColor: "text-foreground"
    },
    {
        icon: <Briefcase className="text-brand-gold" size={32} />,
        title: "Professional Networking",
        description: "Creating opportunities for career growth and business connections.",
        className: "lg:col-span-1 lg:row-span-1 bg-white border border-brand-gray shadow-brand-subtle",
        iconBg: "bg-brand-gold/10",
        textColor: "text-foreground"
    },
    {
        icon: <HelpCircle className="text-brand-green" size={32} />,
        title: "Support & Guidance",
        description: "Assisting newcomers with integration, resources, and navigating life in Yorkshire. We provide a safety net for those who need it most.",
        className: "lg:col-span-2 lg:row-span-1 bg-brand-purple text-white shadow-brand-hover",
        iconBg: "bg-white/10",
        textColor: "text-white"
    },
    {
        icon: <ArrowUpRight className="text-brand-orange" size={32} />,
        title: "And Much More",
        description: "Join us to discover all the ways we support our vibrant community.",
        className: "lg:col-span-1 lg:row-span-1 bg-brand-gold/10 border-2 border-dashed border-brand-gold/30",
        iconBg: "bg-brand-gold/5",
        textColor: "text-foreground"
    }
];

const TiltCard = ({ v, i }: { v: any; i: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: "preserve-3d"
            }}
            className={`relative p-8 rounded-3xl transition-all duration-300 ${v.className} group overflow-hidden cursor-default`}
        >
            <div
                className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ transform: "translateZ(50px)" }}
            />

            <div style={{ transform: "translateZ(80px)" }}>
                <div className={`w-14 h-14 ${v.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                    {v.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${v.textColor}`}>{v.title}</h3>
                <p className={`${v.textColor} opacity-80 leading-relaxed font-medium`}>
                    {v.description}
                </p>
            </div>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity">
                <ArrowUpRight size={48} className={v.textColor} />
            </div>
        </motion.div>
    );
};

export const Values = () => {
    return (
        <section id="about" className="section-padding bg-soft-gray/30 perspective-1000">
            <Container>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 text-brand-orange font-bold uppercase tracking-wider mb-4"
                        >
                            <span className="w-12 h-1 bg-brand-orange inline-block"></span>
                            Our Foundation
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold leading-tight"
                        >
                            Building a <span className="text-brand-purple">Stronger</span> <br />
                            Community <span className="highlight-yellow">Together</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-lg text-foreground/70 max-w-sm"
                    >
                        We're more than just a group; we're a supportive ecosystem designed to help you thrive in Leeds.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {values.map((v, i) => (
                        <TiltCard key={v.title} v={v} i={i} />
                    ))}
                </div>
            </Container>
        </section>
    );
};
