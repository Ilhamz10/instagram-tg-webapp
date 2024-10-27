import Post from '../../../shared/components/Post';
import post1 from '../../../assets/images/post1.png';
import post2 from '../../../assets/images/post2.png';
import post3 from '../../../assets/images/post3.png';
import post4 from '../../../assets/images/post4.png';
import post5 from '../../../assets/images/post5.png';
import post6 from '../../../assets/images/post6.png';

const AllPosts = () => {
	return (
		<section className='grid gap-0.5 grid-cols-3 rounded-t-2xl overflow-hidden'>
			<Post isPinned previewImg={post1} views='13,5M' />
			<Post isPinned previewImg={post2} views='13,5M' />
			<Post isPinned previewImg={post3} views='13,5M' />
			<Post isPinned previewImg={post4} views='13,5M' />
			<Post isPinned previewImg={post5} views='13,5M' />
			<Post isPinned previewImg={post6} views='13,5M' />
		</section>
	);
};

export default AllPosts;
