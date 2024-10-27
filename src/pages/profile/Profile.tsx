import ProfileHeader from './components/ProfileHeader';
import profilePhoto from '../../assets/images/profile-photo.png';
import AllPosts from './components/AllPosts';

const Profile = () => {
	return (
		<main className='pb-14'>
			<ProfileHeader
				fullName='Dmitriy Mentor'
				username='mentor'
				profilePhoto={profilePhoto}
				likes='14,4M'
				subscribers='721,8K'
				subscriptions='9 794'
			/>
			<AllPosts />
		</main>
	);
};

export default Profile;
