import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'What are you doing? - WRUD'

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={siteTitle} />
				<meta property="og:image" content="/img/wrud.png" />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="robots" content="noindex" />
			</Head>

			<div id="logo">
				<img
					src="/img/wrud.png"
					className={`${styles.headerImage} ${styles.borderCircle}`}
					alt="wrud logo"
				/>
			</div>
			{/* <User /> */}

			<main>{children}</main>

			<div id="credits">Made with &hearts; by <a href="https://twitter.com/_nnaro_" target="_blank" rel="noopener">@_nnaro_</a></div>
		</div>
	)
}

export default Layout