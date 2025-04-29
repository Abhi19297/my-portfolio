import type { Config } from "tailwindcss";

const animation = {
  fadeOut: {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(100%)' },
    '100%': { transform: 'translateY(0)' },
  },
  slideDown: {
    '0%': { transform: 'translateY(-100%)' },
    '100%': { transform: 'translateY(0)' },
  },
  slideLeft: {
    '0%': { transform: 'translateX(-100%)' },
    '100%': { transform: 'translateX(0)' },
  },
  slideRight: {
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0)' },
  },
  fadeSlideUp: {
    '0%': { transform: 'translateY(20%)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  fadeSlideDown: {
    '0%': { transform: 'translateY(-20%)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
  fadeSlideLeft: {
    '0%': { transform: 'translateX(20%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  fadeSlideRight: {
    '0%': { transform: 'translateX(-20%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  scaleUp: {
    '0%': { transform: 'scale(0.5)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
  scaleDown: {
    '0%': { transform: 'scale(1.5)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
  flipInX: {
    '0%': { transform: 'rotateX(90deg)', opacity: '0' },
    '40%': { transform: 'rotateX(-10deg)' },
    '70%': { transform: 'rotateX(10deg)' },
    '100%': { transform: 'rotateX(0deg)', opacity: '1' },
  },
  flipInY: {
    '0%': { transform: 'rotateY(90deg)', opacity: '0' },
    '40%': { transform: 'rotateY(-10deg)' },
    '70%': { transform: 'rotateY(10deg)' },
    '100%': { transform: 'rotateY(0deg)', opacity: '1' },
  },
  rollInLeft: {
    '0%': { transform: 'translateX(-100%) rotate(-120deg)', opacity: '0' },
    '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
  },
  rollInRight: {
    '0%': { transform: 'translateX(100%) rotate(120deg)', opacity: '0' },
    '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
  },
  zoomIn: {
    '0%': { transform: 'scale(0.5)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
  zoomOut: {
    '0%': { transform: 'scale(1.5)', opacity: '0' },
    '100%': { transform: 'scale(1)', opacity: '1' },
  },
  pulse: {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
    '100%': { transform: 'scale(1)' },
  },
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
  ping: {
    '0%': { transform: 'scale(1)', opacity: '1' },
    '75%, 100%': { transform: 'scale(2)', opacity: '0' },
  },
  blink: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0' },
  },
  slideInLeft: { // Define slideInLeft animation
    '0%': { transform: 'translateX(-100%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
  slideInRight: { // Define slideInRight animation
    '0%': { transform: 'translateX(100%)', opacity: '0' },
    '100%': { transform: 'translateX(0)', opacity: '1' },
  },
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        }
      },
      borderRadius: {
        lg: '0.3rem',
        md: '0.3rem',
        sm: '0.3rem'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeSlideUp: {
          '0%': { transform: 'translateY(20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeSlideDown: {
          '0%': { transform: 'translateY(-20%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeSlideLeft: {
          '0%': { transform: 'translateX(20%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeSlideRight: {
          '0%': { transform: 'translateX(-20%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleDown: {
          '0%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        flipInX: {
          '0%': { transform: 'rotateX(90deg)', opacity: '0' },
          '40%': { transform: 'rotateX(-10deg)' },
          '70%': { transform: 'rotateX(10deg)' },
          '100%': { transform: 'rotateX(0deg)', opacity: '1' },
        },
        flipInY: {
          '0%': { transform: 'rotateY(90deg)', opacity: '0' },
          '40%': { transform: 'rotateY(-10deg)' },
          '70%': { transform: 'rotateY(10deg)' },
          '100%': { transform: 'rotateY(0deg)', opacity: '1' },
        },
        rollInLeft: {
          '0%': { transform: 'translateX(-100%) rotate(-120deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
        rollInRight: {
          '0%': { transform: 'translateX(100%) rotate(120deg)', opacity: '0' },
          '100%': { transform: 'translateX(0) rotate(0deg)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        // Scroll animation variants
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeOut: 'fadeOut 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
        slideDown: 'slideDown 0.5s ease-in-out',
        slideLeft: 'slideLeft 0.5s ease-in-out',
        slideRight: 'slideRight 0.5s ease-in-out',
        fadeSlideUp: 'fadeSlideUp 0.7s ease-in-out',
        fadeSlideDown: 'fadeSlideDown 0.7s ease-in-out',
        fadeSlideLeft: 'fadeSlideLeft 0.7s ease-in-out',
        fadeSlideRight: 'fadeSlideRight 0.7s ease-in-out',
        scaleUp: 'scaleUp 0.5s ease-in-out',
        scaleDown: 'scaleDown 0.5s ease-in-out',
        flipX: 'flipInX 1s ease-in-out',
        flipY: 'flipInY 1s ease-in-out',
        rollLeft: 'rollInLeft 1s ease-in-out',
        rollRight: 'rollInRight 1s ease-in-out',
        zoomIn: 'zoomIn 0.5s ease-in-out',
        zoomOut: 'zoomOut 0.5s ease-in-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        blink: 'blink 1s step-end infinite',
        slideInLeft: 'slideInLeft 0.7s ease-in-out', // Custom animation name for slideLeft
        slideInRight: 'slideInRight 0.7s ease-in-out', // Custom animation name for slideRight
      },
      animationDelay: {
        '0': '0s',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1000ms',
      },
      animationDuration: {
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '750': '750ms',
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      animationIterationCount: {
        '1': '1',
        'infinite': 'infinite',
      },
      animationFillMode: {
        'none': 'none',
        'forwards': 'forwards',
        'backwards': 'backwards',
        'both': 'both',
      },
      animationTimingFunction: {
        'linear': 'linear',
        'ease': 'ease',
        'ease-in': 'ease-in',
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
        'step-start': 'step-start',
        'step-end': 'step-end',
      },
      animationDirection: {
        'normal': 'normal',
        'reverse': 'reverse',
        'alternate': 'alternate',
        'alternate-reverse': 'alternate-reverse',
      },
      animationPlayState: {
        'paused': 'paused',
        'running': 'running',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
