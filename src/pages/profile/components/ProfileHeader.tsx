import { FC } from 'react';
import bellIcon from '../../../assets/icons/BellSimple.png';
import usersIcon from '../../../assets/icons/Users.png';
import heartIcon from '../../../assets/icons/Heart.png';
import arrowDown from '../../../assets/icons/CaretDown.png';
import ProfileInfoComponent from '../UI/ProfileInfoComponent';
import Button from '../../../shared/UI/Button';

interface IProfileHeaderProps {
	fullName: string;
	username: string;
	profilePhoto: string;
	subscriptions: string;
	subscribers: string;
	likes: string;
}

const ProfileHeader: FC<IProfileHeaderProps> = ({
	fullName,
	profilePhoto,
	username,
	likes,
	subscribers,
	subscriptions,
}) => {
	return (
		<section className='grid gap-5 !mb-8 wrapper'>
			<header className='pt-4 grid gap-4'>
				<img
					className='w-[75px] h-[75px] rounded-full mx-auto'
					src={profilePhoto}
					alt='Profile photo'
				/>
				<div className='grid gap-1'>
					<h2 className='text-xl font-semibold text-white text-center font-sfProDisplaySemibold'>
						{fullName}
					</h2>
					<p className='text-placeholderSecondaryColor text-base text-center font-sfPro'>
						@{username}
					</p>
				</div>
			</header>
			<div className='grid grid-cols-3'>
				<ProfileInfoComponent
					icon={bellIcon}
					value={subscriptions}
					description='Subscriptions'
				/>
				<ProfileInfoComponent
					icon={usersIcon}
					value={subscribers}
					description='Subscribers'
				/>
				<ProfileInfoComponent
					icon={heartIcon}
					value={likes}
					description='Likes'
				/>
			</div>
			<div className='grid grid-cols-[1fr,44px] gap-2 px-4'>
				<Button buttonType='primary'>Subscribe</Button>
				<Button
					buttonType='secondary'
					className='flex justify-center items-center'>
					<img className='w-5 h-5' src={arrowDown} alt='' />
				</Button>
			</div>
			<p className='px-8 text-center text-xs text-placeholderSecondaryColor font-sfPro'>
				Where to grow your business as a photographer: site or social media?
			</p>
		</section>
	);
};

export default ProfileHeader;
