import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

// Components
// import Tweet from '../components/Tweet/Tweet'

const Home = () => {
	return (
		<Layout>

			<Head>
				<title>{siteTitle}</title>
			</Head>

		</Layout>
	)
}

export default Home 