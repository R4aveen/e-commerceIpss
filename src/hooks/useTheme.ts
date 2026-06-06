import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme necesta estar dentrro de un ThemeProvider');
	}
	return context;
};

export default useTheme;
