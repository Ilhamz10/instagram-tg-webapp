import { FC } from 'react';
import eyeIcon from '../../assets/icons/Eye.png';
import pinIcon from '../../assets/icons/PushPin.png';

interface IPostProps {
	isPinned: boolean;
	views: string;
	previewImg: string;
}

const Post: FC<IPostProps> = ({ isPinned, previewImg, views }) => {
	return (
		<div className='h-44 w-full relative'>
			<img
				className='w-full h-full object-cover'
				src={previewImg}
				alt='Post preview image'
			/>
			{isPinned && (
				<div className='absolute top-[7px] left-[7px]'>
					<img className='w-[18px] h-[18px]' src={pinIcon} alt='Pin icon' />
				</div>
			)}
			<div className='absolute left-[7px] bottom-[6px] grid grid-cols-[auto,auto] w-max gap-[6px]'>
				<img className='w-[18px] h-[18px]' src={eyeIcon} alt='Eye icon' />
				<p className='text-white text-xs font-semibold font-sfProSemibold'>
					{views}
				</p>
			</div>
		</div>
	);
};

export default Post;
