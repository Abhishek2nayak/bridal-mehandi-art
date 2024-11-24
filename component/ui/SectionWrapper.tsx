import React from 'react';

// Types shared across heading and description
type ColorVariant = 'primary' | 'secondary' | 'accent' | 'light' | 'dark';
type SizeVariant = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type AlignVariant = 'left' | 'center' | 'right';
type WidthVariant = 'full' | 'wide' | 'normal' | 'narrow';

interface SectionProps {
    // Content props
    title: string;
    description?: string;
    children: React.ReactNode;

    // Styling props
    variant?: ColorVariant;
    size?: SizeVariant;
    align?: AlignVariant;
    width?: WidthVariant;
    classes?: string;
    titleClasses?: string;
    descriptionClasses?: string;
    contentClasses?: string;

    // SEO and accessibility props
    id?: string;
    titleId?: string;
    descriptionId?: string;
    contentId?: string;
    role?: string;
    ariaLabel?: string;
}

const Section: React.FC<SectionProps> = ({
    // Content props
    title,
    description,
    children,

    // Styling props
    variant = 'primary',
    size = 'lg',
    align = 'center',
    width = 'normal',
    classes = '',
    titleClasses = '',
    descriptionClasses = '',
    contentClasses = '',

    // SEO props
    id,
    titleId,
    descriptionId,
    contentId,
    role = 'region',
    ariaLabel,
}) => {
    // Size variations for heading
    const headingSizes: Record<SizeVariant, string> = {
        sm: 'text-xl md:text-2xl lg:text-3xl',
        md: 'text-2xl md:text-3xl lg:text-4xl',
        lg: 'text-3xl md:text-4xl lg:text-5xl',
        xl: 'text-4xl md:text-5xl lg:text-6xl',
        '2xl': 'text-5xl md:text-6xl lg:text-7xl'
    };

    // Size variations for description
    const descriptionSizes: Record<SizeVariant, string> = {
        sm: 'text-base md:text-lg',
        md: 'text-lg md:text-xl',
        lg: 'text-xl md:text-2xl',
        xl: 'text-2xl md:text-3xl',
        '2xl': 'text-3xl md:text-4xl'
    };

    // Color variations based on theme
    const variantClasses: Record<ColorVariant, { title: string; description: string }> = {
        primary: {
            title: 'text-[#4C2B16]',
            description: 'text-[#4C2B16]/80'
        },
        secondary: {
            title: 'text-[#7A3916]',
            description: 'text-[#7A3916]/80'
        },
        accent: {
            title: 'text-[#E1AD3D]',
            description: 'text-[#E1AD3D]/90'
        },
        light: {
            title: 'text-[#E7C8B4]',
            description: 'text-[#E7C8B4]/90'
        },
        dark: {
            title: 'text-black',
            description: 'text-black/80'
        }
    };

    // Width variations
    const widthClasses: Record<WidthVariant, string> = {
        full: 'w-full',
        wide: 'max-w-7xl',
        normal: 'max-w-5xl',
        narrow: 'max-w-3xl'
    };

    // Alignment variations
    const alignClasses: Record<AlignVariant, string> = {
        left: 'text-left items-start',
        center: 'text-center items-center',
        right: 'text-right items-end'
    };

    return (
        <section
            id={id}
            role={role}
            aria-label={ariaLabel || title}
            className={`
        flex flex-col
        w-full
        mx-auto
        px-4 md:px-6 lg:px-8
        py-12 md:py-16 lg:py-20
        ${alignClasses[align]}
        ${widthClasses[width]}
        ${classes}
      `}
        >
            {/* Header Group */}
            <div className={`
        space-y-4 md:space-y-6
        mb-8 md:mb-12 lg:mb-16
        ${width !== 'full' ? widthClasses[width] : ''}
        w-full
      `}>
                {/* Title */}
                <h2
                    id={titleId}
                    className={`
            font-bold
            tracking-tight
            leading-tight
            ${headingSizes[size]}
            ${variantClasses[variant].title}
            ${titleClasses}
          `}
                >
                    {title}
                </h2>

                {/* Description (Optional) */}
                {description && (
                    <p
                        id={descriptionId}
                        className={`
              max-w-prose
              mx-auto
              font-normal
              ${descriptionSizes[size]}
              ${variantClasses[variant].description}
              ${descriptionClasses}
            `}
                    >
                        {description}
                    </p>
                )}
            </div>

            {/* Content */}
            <div
                id={contentId}
                className={`
          w-full
          ${contentClasses}
        `}
            >
                {children}
            </div>
        </section>
    );
};

export default Section;