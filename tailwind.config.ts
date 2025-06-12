import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "animated-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "subtle-pulse": {
          "0%, 100%": { opacity: "0.05" },
          "50%": { opacity: "0.15" },
        },
        "text-distort": {
          "0%": { filter: "blur(0px) contrast(1)", opacity: "0.5", transform: "skewX(0deg) scale(1.05)" },
          "20%": { filter: "blur(1px) contrast(1.5)", opacity: "0.7", transform: "skewX(-2deg) scale(1)" },
          "80%": { filter: "blur(0.5px) contrast(1.2)", opacity: "1", transform: "skewX(1deg) scale(1.02)" },
          "100%": { filter: "blur(0px) contrast(1)", opacity: "1", transform: "skewX(0deg) scale(1)" },
        },
        "subtle-breathing-opacity": {
          "0%, 100%": { opacity: "0.8" },
          "50%": { opacity: "1" },
        },
        "subtle-breathing-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.03)" },
        },
        // アイデア2改: 常時微細エフェクト
        "faint-ripple": {
          "0%, 100%": { transform: "scale(0.8)", opacity: "0.03" },
          "50%": { transform: "scale(1.2)", opacity: "0.08" },
        },
        "gentle-glow": {
          "0%, 100%": { boxShadow: "0 0 8px 1px rgba(200, 200, 220, 0.05)", opacity: "0.3" },
          "50%": { boxShadow: "0 0 16px 3px rgba(220, 220, 255, 0.1)", opacity: "0.6" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "animated-gradient": "animated-gradient 25s ease infinite",
        "subtle-pulse": "subtle-pulse 8s ease-in-out infinite alternate",
        "text-distort": "text-distort 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        "subtle-breathing-opacity": "subtle-breathing-opacity 7s ease-in-out infinite",
        "subtle-breathing-scale": "subtle-breathing-scale 9s ease-in-out infinite",
        // アイデア2改: 常時微細エフェクト
        "faint-ripple": "faint-ripple 12s ease-in-out infinite",
        "gentle-glow": "gentle-glow 9s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
