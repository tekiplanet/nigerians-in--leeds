"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    Heart,
    GraduationCap,
    Users,
    Map as MapIcon,
    Globe,
    ChevronRight,
    ArrowRight
} from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

export const Hero = () => {
    // Mouse Parallax Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
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

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any }
        }
    };

    const FloatingIcon = ({ icon: Icon, color, delay, xPos, yPos }: any) => (
        <motion.div
            animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0]
            }}
            transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            className={`absolute p-3 rounded-xl bg-white shadow-brand-subtle z-20 text-${color} hidden lg:block`}
            style={{ left: xPos, top: yPos }}
        >
            <Icon size={20} />
        </motion.div>
    );

    return (
        <section
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-[#FAF9F6]"
        >
            {/* Background Organic Shapes with Drift */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-15%] right-[-5%] w-[65%] h-[85%] bg-brand-orange/5 rounded-full blur-[100px] -z-10 pointer-events-none"
            />
            <motion.div
                animate={{
                    x: [0, -50, 0],
                    y: [0, 40, 0],
                }}
                transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[70%] bg-brand-purple/5 rounded-full blur-[120px] -z-10 pointer-events-none"
            />

            <Container className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
                {/* Content Column */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="z-10"
                >
                    <div className="overflow-hidden mb-6">
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3 text-brand-orange font-bold uppercase tracking-[0.2em] text-xs"
                        >
                            <span className="w-10 h-[2px] bg-brand-orange" />
                            Registered Charity #1129681
                        </motion.div>
                    </div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl lg:text-8xl font-black leading-[1.02] mb-8 text-brand-purple"
                    >
                        Community <br />
                        <span className="text-foreground relative inline-block">
                            Powered by <span className="text-brand-orange italic">Heart</span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1.5, duration: 1.2, ease: "circOut" }}
                                className="absolute -bottom-2 left-0 h-[8px] bg-brand-gold/30 -z-10 rounded-full"
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-foreground/70 leading-relaxed mb-10 max-w-xl"
                    >
                        Welcome to Nigeria Community Leeds. Since 2007, we&apos;ve been a vibrant home where no one feels alone. Join us to connect, support, and celebrate.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4"
                    >
                        <Button href="#membership" variant="primary" className="rounded-full shadow-lg hover:shadow-brand-hover transition-all">
                            Join Our Family
                        </Button>
                        <Button href="#about" variant="secondary" className="rounded-full group">
                            Our Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
                        </Button>
                    </motion.div>

                    {/* Quick Stats Grid - Minimalist */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 pt-10 border-t border-brand-gray/30 grid grid-cols-3 gap-8"
                    >
                        <div>
                            <div className="text-3xl font-black text-brand-purple">500+</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-foreground/40">Members</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-brand-orange">16+</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-foreground/40">Years</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-brand-gold">50+</div>
                            <div className="text-xs uppercase font-bold tracking-widest text-foreground/40">Events</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Visual Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 0 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] as any }}
                    className="relative"
                >
                    <motion.div
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        className="relative w-full aspect-square flex items-center justify-center p-4 lg:p-12"
                    >
                        {/* Background Decor Layer */}
                        <div
                            className="absolute inset-0 bg-brand-purple/5 rounded-[80px] blur-3xl"
                            style={{ transform: "translateZ(-40px)" }}
                        />

                        {/* Floating Micro-nodes */}
                        <FloatingIcon icon={Heart} color="brand-orange" delay={0} xPos="-5%" yPos="15%" />
                        <FloatingIcon icon={GraduationCap} color="brand-purple" delay={0.4} xPos="95%" yPos="5%" />
                        <FloatingIcon icon={Users} color="brand-gold" delay={0.8} xPos="105%" yPos="75%" />
                        <FloatingIcon icon={MapIcon} color="brand-green" delay={1.2} xPos="-10%" yPos="85%" />

                        {/* Connection to Leeds Visual */}
                        <div
                            className="absolute -top-12 -right-4 lg:-top-16 lg:-right-12 w-36 h-36 lg:w-48 lg:h-48 pointer-events-none z-0 overflow-visible"
                            style={{ transform: "translateZ(10px)" }}
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                <motion.path
                                    d="M20 80 Q 40 40 85 15"
                                    fill="none"
                                    stroke="#F28C28"
                                    strokeWidth="2"
                                    strokeDasharray="6,4"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.4 }}
                                    transition={{ duration: 2, delay: 1.5 }}
                                />
                                <motion.g
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 3.5, type: "spring" }}
                                >
                                    <circle cx="85" cy="15" r="4" fill="#4A1D6F" />
                                    <circle cx="85" cy="15" r="8" fill="#4A1D6F" fillOpacity="0.1" className="animate-ping" />
                                </motion.g>
                                <text
                                    x="45" y="30"
                                    className="fill-brand-purple text-[8px] font-black tracking-widest opacity-60"
                                    transform="rotate(-35 45 30)"
                                >
                                    NIGERIA TO LEEDS
                                </text>
                            </svg>
                        </div>

                        {/* Main Image Shield */}
                        <div
                            className="relative w-full h-full z-10 rounded-[60px] overflow-hidden shadow-2xl border-t-8 border-white/50"
                            style={{
                                transform: "translateZ(30px)",
                                clipPath: 'polygon(15% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%, 0% 15%)'
                            }}
                        >
                            <Image
                                src="https://ik.imagekit.io/zudgi2oxs/IMG_1654-1024x768.jpg"
                                alt="Nigerian Community Life"
                                fill
                                className="object-cover scale-110"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/40 via-transparent to-brand-orange/20" />
                        </div>

                        {/* Interactive Floating Badge */}
                        <motion.div
                            style={{ transform: "translateZ(80px)" }}
                            className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-6 rounded-[32px] shadow-2xl border border-brand-gray/10 z-30 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                                <Globe size={24} className="animate-spin-slow" />
                            </div>
                            <div>
                                <div className="text-lg font-black text-brand-purple leading-none">Global</div>
                                <div className="text-xs font-bold uppercase tracking-widest text-brand-orange">Representation</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Container>

            {/* Premium Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="absolute bottom-12 left-12 text-brand-purple hidden lg:flex flex-col items-center gap-4"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.4em] [writing-mode:vertical-lr] rotate-180">Scroll</span>
                <div className="w-[2px] h-20 bg-gradient-to-b from-brand-purple to-transparent" />
            </motion.div>
        </section>
    );
};
