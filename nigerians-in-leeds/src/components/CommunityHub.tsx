"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Calendar, UserCheck, Trophy, GraduationCap, HeartHandshake } from 'lucide-react';
import { Container } from './Container';

const services = [
    {
        title: "Food Box Reservation",
        description: "Request a weekly community food support box.",
        icon: <Utensils className="text-brand-orange" />,
        href: "#",
        delay: 0
    },
    {
        title: "Appointment Booking",
        description: "Schedule a consultation with our welfare team.",
        icon: <Calendar className="text-brand-purple" />,
        href: "#",
        delay: 0.1
    },
    {
        title: "LACoN Registration",
        description: "Register your team for the African Cup of Nations.",
        icon: <Trophy className="text-brand-gold" />,
        href: "#",
        delay: 0.2
    },
    {
        title: "Excel@NCL Sign-up",
        description: "Enroll your child in our Saturday school program.",
        icon: <GraduationCap className="text-brand-green" />,
        href: "#",
        delay: 0.3
    },
    {
        title: "Gala Awards Night",
        description: "Purchase tickets for our annual fundraising event.",
        icon: <HeartHandshake className="text-brand-orange" />,
        href: "#",
        delay: 0.4
    },
    {
        title: "Member Verification",
        description: "Update your profile or verify your community status.",
        icon: <UserCheck className="text-brand-purple" />,
        href: "#",
        delay: 0.5
    }
];

export const CommunityHub = () => {
    return (
        <section className="py-20 bg-brand-gray/20">
            <Container>
                <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-brand-subtle border border-brand-gray relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -mr-32 -mt-32" />

                    <div className="relative z-10">
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Community Action Hub</h2>
                            <p className="text-foreground/60 max-w-xl">
                                Quick access to our essential services and registrations. Handling community needs with efficiency and care.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <motion.a
                                    key={service.title}
                                    href={service.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: service.delay }}
                                    className="group p-6 rounded-2xl bg-brand-gray/30 hover:bg-white hover:shadow-brand-hover transition-all duration-300 border border-transparent hover:border-brand-gray/50 flex items-start gap-4"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-purple mb-1 group-hover:text-brand-orange transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-foreground/50 leading-snug">
                                            {service.description}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
