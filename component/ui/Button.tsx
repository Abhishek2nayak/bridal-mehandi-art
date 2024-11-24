import React from 'react';
import { Loader2, LucideIcon } from 'lucide-react';

// Types for button props
type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'light' | 'dark' | 'outline' | 'ghost';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps {
    // Core props
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    type?: ButtonType;
    disabled?: boolean;
    // Styling props
    variant?: ButtonVariant;
    size?: ButtonSize;
    classes?: string;
    fullWidth?: boolean;
    // State props
    loading?: boolean;
    // Icon props
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    // Additional props
    id?: string;
    ariaLabel?: string;
    name?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    variant = 'primary',
    size = 'md',
    classes = '',
    fullWidth = false,
    loading = false,
    icon,
    iconPosition = 'left',
    id,
    ariaLabel,
    name,
}) => {
    // Size variations
    const sizeClasses: Record<ButtonSize, string> = {
        xs: 'px-2.5 py-1.5 text-xs',
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-3 text-lg',
        xl: 'px-10 py-4 text-xl'
    };

    // Color and style variations based on your theme
    const variantClasses: Record<ButtonVariant, string> = {
        primary: `
      bg-[#4C2B16] text-white 
      hover:bg-[#3a2011] 
      focus:ring-[#E1AD3D]
      disabled:bg-[#4C2B16]/50
    `,
        secondary: `
      bg-[#7A3916] text-white 
      hover:bg-[#5c2b11] 
      focus:ring-[#E1AD3D]
      disabled:bg-[#7A3916]/50
    `,
        accent: `
      bg-[#E1AD3D] text-[#4C2B16] 
      hover:bg-[#c99b35] 
      focus:ring-[#4C2B16]
      disabled:bg-[#E1AD3D]/50
    `,
        light: `
      bg-[#E7C8B4] text-[#4C2B16] 
      hover:bg-[#d9b9a3] 
      focus:ring-[#4C2B16]
      disabled:bg-[#E7C8B4]/50
    `,
        dark: `
      bg-black text-white 
      hover:bg-gray-800 
      focus:ring-[#E1AD3D]
      disabled:bg-black/50
    `,
        outline: `
      border-2 border-[#4C2B16] text-[#4C2B16] 
      hover:bg-[#4C2B16] hover:text-white 
      focus:ring-[#E1AD3D]
      disabled:border-[#4C2B16]/50 disabled:text-[#4C2B16]/50
    `,
        ghost: `
      text-[#4C2B16] 
      hover:bg-[#4C2B16]/10 
      focus:ring-[#E1AD3D]
      disabled:text-[#4C2B16]/50
    `
    };

    // Base classes that should always be applied
    const baseClasses = `
    inline-flex items-center justify-center
    gap-2
    font-semibold
    rounded-lg
    shadow-lg
    transition-all
    transform
    hover:scale-105
    focus:outline-none focus:ring-4 focus:ring-opacity-50
    disabled:cursor-not-allowed disabled:transform-none
  `;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${classes}
      `}
            id={id}
            aria-label={ariaLabel}
            name={name}
            aria-busy={loading}
        >
            {loading ? (
                <>
                    <Loader2 className="animate-spin" size={size === 'xs' ? 14 : size === 'sm' ? 16 : 20} />
                    <span>Loading...</span>
                </>
            ) : (
                <>
                    {icon && iconPosition === 'left' &&
                        <span className="inline-block">{icon}</span>
                    }
                    {children}
                    {icon && iconPosition === 'right' &&
                        <span className="inline-block">{icon}</span>
                    }
                </>
            )}
        </button>
    );
};

// Export both button components
export { Button, type ButtonProps };
export type { ButtonVariant, ButtonSize, ButtonType };