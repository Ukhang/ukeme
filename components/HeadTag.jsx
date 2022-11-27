import Head from "next/head";

const HeadTag = ({ title }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="Ukhang Marma portfilio website"/>
            <meta name="keywords" content="Portfolio, Portfolio website, 3d website, React web, Web app"/>
            <meta name="author" content="Ukhang Marma"/>
            <link rel="Shortcut icon" href="/images/favicon.ico" type='image/icon' />
            <title>{title}</title>
        </Head>
    )
}

export default HeadTag;