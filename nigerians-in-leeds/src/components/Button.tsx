import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
    variant?: 'primary' | 'secondary' | 'cta-primary' | 'cta-secondary';
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    href,
    variant = 'primary',
    className = "",
    onClick
}) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap px-7 py-3 rounded-brand-button font-sans font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base leading-none";

    const variants = {
        primary: "bg-brand-purple text-white hover:bg-brand-purple/90 shadow-brand-subtle hover:shadow-brand-hover",
        secondary: "bg-white border-2 border-brand-purple text-brand-purple hover:bg-brand-purple/5",
        'cta-primary': "bg-brand-orange text-white hover:bg-brand-orange/90 shadow-brand-subtle hover:shadow-brand-hover",
        'cta-secondary': "bg-transparent border-2 border-white text-white hover:bg-white/10"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
};
