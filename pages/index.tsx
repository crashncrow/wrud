import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

// Components
import Timeline from '../components/Timeline/Timeline'

const Home = () => {
	return (
		<Layout>

			<Head>
				<title>{siteTitle}</title>
			</Head>

			<Timeline />
		</Layout>
	)
}

export default Home 