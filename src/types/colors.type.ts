export type TColors =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark'
	| 'white'
	| 'black'
	| 'body';

export const arrColors: TColors[] = [
	'primary',
	'secondary',
	'success',
	'danger',
	'warning',
	'info',
	'light',
	'dark',
	'white',
	'black',
	'body',
];

export const makeColorClass = (
	prefix: 'bg' | 'text' | 'border' | 'btn',
	color: TColors
) => `${prefix}-${color}`;
