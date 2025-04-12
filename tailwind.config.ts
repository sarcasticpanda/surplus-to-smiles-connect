
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
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
				},
				// Custom color palette for Aahaar Setu
				sustain: '#2E7D32', // Sustainability Green
				warmth: '#F57C00', // Warmth Orange
				trust: '#FFFFFF', // Trust White
				mint: '#A5D6A7', // Soft Mint Green
				peach: '#FFCC80', // Peach Glow
				slate: '#455A64', // Slate Gray
				cream: '#FFF8E1', // Cream Beige
				bridge: '#4FC3F7', // Bridge Blue
				donate: '#F57C00', // Same as warmth for consistency
				request: '#2E7D32', // Same as sustain for consistency
				bridge: {
					light: '#FFF8E1', // Changed to Cream Beige
					dark: '#2E7D32', // Changed to Sustainability Green
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'count-up': {
					'0%': { 
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'100%': { 
						transform: 'translateY(0)',
						opacity: '1'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0'
					},
					'100%': { 
						opacity: '1'
					}
				},
				'scale-in': {
					'0%': { 
						transform: 'scale(0.9)',
						opacity: '0'
					},
					'100%': { 
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'count-up': 'count-up 1s ease-out forwards',
				'fade-in': 'fade-in 0.5s ease-out',
				'scale-in': 'scale-in 0.5s ease-out'
			},
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
				'devanagari': ['Noto Sans Devanagari', 'sans-serif']
			},
			backgroundImage: {
				'hero-pattern': "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2787&auto=format&fit=crop')",
				'community-pattern': "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2940&auto=format&fit=crop')",
				'food-pattern': "url('https://images.unsplash.com/photo-1498579687545-d5a4fffb0a9e?q=80&w=2940&auto=format&fit=crop')"
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
