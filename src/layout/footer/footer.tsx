import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	ChatIcon,
	HouseIcon,
	PlusCircleIcon,
	SearchIcon,
	UserCircleIcon,
} from '../../assets';

const Footer = () => {
	return (
		<footer className='fixed bottom-0 left-0 right-0 border-t-[0.5px] border-t-[#FFFFFF1A] bg-[#1A1A1A]'>
			<nav className='grid grid-cols-5'>
				<NavLink
					to={'/home'}
					className={({ isActive }) =>
						`grid place-content-center pt-4 pb-3 ${
							isActive ? 'text-white' : 'text-[#9F9F9F]'
						}`
					}>
					<HouseIcon width={28} height={28} />
				</NavLink>
				<NavLink
					to={'/search'}
					className={({ isActive }) =>
						`grid place-content-center pt-4 pb-3 ${
							isActive ? 'text-white' : 'text-[#9F9F9F]'
						}`
					}>
					<SearchIcon width={28} height={28} />
				</NavLink>
				<NavLink
					to={'/add-post'}
					className={({ isActive }) =>
						`grid place-content-center pt-4 pb-3 ${
							isActive ? 'text-white' : 'text-[#9F9F9F]'
						}`
					}>
					<PlusCircleIcon width={28} height={28} />
				</NavLink>
				<NavLink
					to={'/chat'}
					className={({ isActive }) =>
						`grid place-content-center pt-4 pb-3 ${
							isActive ? 'text-white' : 'text-[#9F9F9F]'
						}`
					}>
					<ChatIcon width={28} height={28} />
				</NavLink>
				<NavLink
					to={'/'}
					className={({ isActive }) =>
						`grid place-content-center pt-4 pb-3 ${
							isActive ? 'text-white' : 'text-[#9F9F9F]'
						}`
					}>
					<UserCircleIcon width={28} height={28} />
				</NavLink>
			</nav>
		</footer>
	);
};

export default Footer;
