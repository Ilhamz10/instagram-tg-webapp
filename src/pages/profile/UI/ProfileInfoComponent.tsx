import { FC } from 'react';

interface IProfileInfoComponentProps {
	icon: string;
	description: string;
	value: string;
}

const ProfileInfoComponent: FC<IProfileInfoComponentProps> = ({
	description,
	icon,
	value,
}) => {
	return (
		<div className='grid gap-1 justify-center text-center'>
			<div className='grid gap-2 grid-cols-[auto,1fr] items-center'>
				<img className='w-5 h-5' src={icon} alt={icon} />
				<p className='text-white font-bold font-sfProDisplayBold'>{value}</p>
			</div>
			<p className='text-placeholderSecondaryColor text-xs font-sfPro'>
				{description}
			</p>
		</div>
	);
};

export default ProfileInfoComponent;
