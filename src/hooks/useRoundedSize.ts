import type { TRounded } from '@/types/rounded.type';

export const useRoundedSize = (roundedValue: TRounded) => {
	const roundedSizes: TRounded[] = [
		'rounded-0',
		'rounded-1',
		'rounded-2',
		'rounded-3',
		'rounded-4',
		'rounded-5',
	];

	const index = roundedSizes.indexOf(roundedValue);

	const roundedInner = index > 0 ? roundedSizes[index - 1] : roundedValue;

	const roundedOuter = index !== -1 && index < roundedSizes.length - 1 ? roundedSizes[index + 1] : roundedValue;

	const roundedCustom = (offset: number) => {
		if (index === -1) return roundedValue;
		const targetIndex = index + offset;
		if (targetIndex < 0) return 'rounded-0';
		if (targetIndex >= roundedSizes.length) return 'rounded-5';
		return roundedSizes[targetIndex];
	};

	return { roundedInner, roundedOuter, roundedCustom };
};

export default useRoundedSize;
