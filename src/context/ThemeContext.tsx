import { createContext, useState, useEffect, type ReactNode } from 'react';
import baseThemeConfig from '@/config/theme.config';
import DARK_MODE from '@/constants/darkMode.constant';
import type { TDarkMode } from '@/types/darkMode.type';
import type { TColors } from '@/types/colors.type';
import type { TColorIntensity } from '@/types/colorIntensities.type';
import type { TRounded } from '@/types/rounded.type';
import type { TBorderWidth } from '@/types/borderWidth.type';

interface IThemeContextType {
	theme: TDarkMode;
	isDarkTheme: boolean;
	themeColor: TColors;
	themeColorShade: TColorIntensity;
	rounded: TRounded;
	borderWidth: TBorderWidth;
	fontSize: number;
	setTheme: (theme: TDarkMode) => void;
	setThemeColor: (color: TColors) => void;
	setThemeColorShade: (shade: TColorIntensity) => void;
	setRounded: (rounded: TRounded) => void;
	setBorderWidth: (borderWidth: TBorderWidth) => void;
	setFontSize: (size: number) => void;
}

export const ThemeContext = createContext<IThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setThemeState] = useState<TDarkMode>(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'light' || saved === 'dark' || saved === 'system') {
			return saved;
		}
		return baseThemeConfig.theme;
	});

	const [themeColor, setThemeColorState] = useState<TColors>(() => {
		return (localStorage.getItem('ipss_themeColor') as TColors) || baseThemeConfig.themeColor;
	});

	const [themeColorShade, setThemeColorShadeState] = useState<TColorIntensity>(() => {
		return (localStorage.getItem('ipss_themeColorShade') as TColorIntensity) || baseThemeConfig.themeColorShade;
	});

	const [fontSize, setFontSizeState] = useState<number>(() => {
		const saved = localStorage.getItem('ipss_fontSize');
		return saved ? Number(saved) : baseThemeConfig.fontSize;
	});

	const [rounded, setRoundedState] = useState<TRounded>(() => {
		return (localStorage.getItem('ipss_rounded') as TRounded) || baseThemeConfig.rounded;
	});

	const [borderWidth, setBorderWidthState] = useState<TBorderWidth>(() => {
		return (localStorage.getItem('ipss_borderWidth') as TBorderWidth) || baseThemeConfig.borderWidth;
	});

	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

	useEffect(() => {
		const checkDark = () => {
			if (theme === DARK_MODE.DARK) return true;
			if (theme === DARK_MODE.LIGHT) return false;
			return window.matchMedia('(prefers-color-scheme: dark)').matches;
		};

		const activeDark = checkDark();
		setIsDarkTheme(activeDark);

		const htmlElement = document.documentElement;
		htmlElement.setAttribute('data-bs-theme', activeDark ? 'dark' : 'light');
	}, [theme]);

	useEffect(() => {
		if (theme !== DARK_MODE.SYSTEM) return;

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemChange = (e: MediaQueryListEvent) => {
			setIsDarkTheme(e.matches);
			document.documentElement.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
		};

		mediaQuery.addEventListener('change', handleSystemChange);
		return () => mediaQuery.removeEventListener('change', handleSystemChange);
	}, [theme]);

	const setTheme = (newTheme: TDarkMode) => {
		setThemeState(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	const setThemeColor = (newColor: TColors) => {
		setThemeColorState(newColor);
		localStorage.setItem('ipss_themeColor', newColor);
	};

	const setThemeColorShade = (newShade: TColorIntensity) => {
		setThemeColorShadeState(newShade);
		localStorage.setItem('ipss_themeColorShade', newShade);
	};

	const setFontSize = (newSize: number) => {
		setFontSizeState(newSize);
		localStorage.setItem('ipss_fontSize', String(newSize));
	};

	const setRounded = (newRounded: TRounded) => {
		setRoundedState(newRounded);
		localStorage.setItem('ipss_rounded', newRounded);
	};

	const setBorderWidth = (newBorderWidth: TBorderWidth) => {
		setBorderWidthState(newBorderWidth);
		localStorage.setItem('ipss_borderWidth', newBorderWidth);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				isDarkTheme,
				themeColor,
				themeColorShade,
				rounded,
				borderWidth,
				fontSize,
				setTheme,
				setThemeColor,
				setThemeColorShade,
				setRounded,
				setBorderWidth,
				setFontSize,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
