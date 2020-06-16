import App from 'next/app'
import { Helmet } from 'react-helmet'
import { HeroProvider } from 'contexts/heroContext'
import { GlobalStyles } from "../styled/global.styled"

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<HeroProvider>
				<GlobalStyles />
				<Helmet>
					<link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet" />
				</Helmet>
				<Component {...pageProps} />
			</HeroProvider>
		)
	}
}
export default MyApp