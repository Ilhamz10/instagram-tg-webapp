import PreventZoom from '../../shared/PreventZoom';
import Layout from '../../shared/Layout';

import { routes } from '../../main';
import Footer from '../footer/footer';

export const Root = () => {
	return (
		<>
			<PreventZoom />
			<Layout routes={routes} />
			<Footer />
		</>
	);
};
