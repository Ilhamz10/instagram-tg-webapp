import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './layout/root/root';

import ErrorPage from './pages/ErrorPage/ErrorPage';
import Profile from './pages/profile/Profile';

export const routes = [
	{
		path: '/',
		element: <Profile />,
	},
	{
		path: '/home',
		element: <h2 className='text-white text-lg font-bold'>Home</h2>,
	},
	{
		path: '/search',
		element: <h2 className='text-white text-lg font-bold'>Search</h2>,
	},
	{
		path: '/add-post',
		element: <h2 className='text-white text-lg font-bold'>Add post</h2>,
	},
	{
		path: '/chat',
		element: <h2 className='text-white text-lg font-bold'>Chat</h2>,
	},
];

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
		children: routes,
	},
]);

declare global {
	interface Window {
		Telegram: any;
	}
}

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
