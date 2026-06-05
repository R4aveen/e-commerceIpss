import DARK_MODE from '@/constants/darkMode.constant';
import type { TDarkMode } from '@/types/darkMode.type';
import type { TRounded } from '@/types/rounded.type';
import type { TColors } from '@/types/colors.type';
import type { TColorIntensity } from '@/types/colorIntensities.type';
import type { TBorderWidth } from '@/types/borderWidth.type';
import type { TLang } from '@/types/lang.type';

type TThemeConfigs = {
	projectTitle: string;
	projectName: string;
	language: TLang;
	theme: TDarkMode;
	themeColor: TColors;
	themeColorShade: TColorIntensity;
	rounded: TRounded;
	borderWidth: TBorderWidth;
	transition: string;
	fontSize: 12 | 13 | 14 | 15 | 16 | 17 | 18;
	getDynamicConfig: (personalizacionUsuario?: any) => TThemeConfigs;
};

const getPersonalizacionActual = () => {
	try {
		if (typeof window !== 'undefined' && (window as any).__REDUX_STORE__) {
			const state = (window as any).__REDUX_STORE__.getState();
			if (state.personalizacion?.personalizacionUsuario) {
				return state.personalizacion.personalizacionUsuario;
			}
		}
		return {
			tcolor: localStorage.getItem('ipss_themeColor') || 'primary',
			tcolor_int: localStorage.getItem('ipss_themeColorShade') || '500',
			font_size: Number(localStorage.getItem('ipss_fontSize')) || 13,
			tema:
				localStorage.getItem('theme') === 'light'
					? '1'
					: localStorage.getItem('theme') === 'dark'
						? '2'
						: '3',
		};
	} catch (error) {
		return null;
	}
};

const baseThemeConfig: TThemeConfigs = {
	projectTitle: 'E-Commerce',
	projectName: 'E-CommerceIPSS',
	language: 'es',
	theme: DARK_MODE.LIGHT,

	get themeColor(): TColors {
		const personalizacion = getPersonalizacionActual();
		return (personalizacion?.tcolor as TColors) || 'primary';
	},

	get themeColorShade(): TColorIntensity {
		const personalizacion = getPersonalizacionActual();
		return (personalizacion?.tcolor_int as TColorIntensity) || '500';
	},

	get fontSize(): 12 | 13 | 14 | 15 | 16 | 17 | 18 {
		const personalizacion = getPersonalizacionActual();
		return (personalizacion?.font_size as 12 | 13 | 14 | 15 | 16 | 17 | 18) || 13;
	},

	rounded: 'rounded-3',
	borderWidth: 'border-2',
	transition: 'transition',

	getDynamicConfig(personalizacionUsuario?: any) {
		return {
			...this,
			...(personalizacionUsuario || {}),
			themeColor: (personalizacionUsuario?.tcolor as TColors) || this.themeColor,
			themeColorShade:
				(personalizacionUsuario?.tcolor_int as TColorIntensity) || this.themeColorShade,
			fontSize: personalizacionUsuario?.font_size || this.fontSize,
			theme:
				personalizacionUsuario?.tema === '1'
					? DARK_MODE.LIGHT
					: personalizacionUsuario?.tema === '2'
						? DARK_MODE.DARK
						: (localStorage.getItem('theme') as TDarkMode) || DARK_MODE.LIGHT,
		};
	},
};

export default baseThemeConfig;
