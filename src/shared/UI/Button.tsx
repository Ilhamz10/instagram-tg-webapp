import React, { ComponentPropsWithoutRef, FC } from 'react';

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
	buttonType: 'primary' | 'secondary';
	className?: string;
}

const Button: FC<IButtonProps> = ({ buttonType, className, children }) => {
	return (
		<button
			className={`h-11 w-full text-white font-semibold rounded-lg font-sfProSemibold ${
				buttonType === 'primary'
					? 'bg-accentPrimaryColor'
					: 'bg-foregroundPrimaryColor'
			} ${className}`}>
			{children}
		</button>
	);
};

export default Button;
