import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./sections/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		fontFamily: {
			gtEss: ['var(--font-gt-eesti-pro)', 'system-ui'],
			geist: ['var(--font-geist)', 'system-ui']
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")]

} satisfies Config;

export default config;