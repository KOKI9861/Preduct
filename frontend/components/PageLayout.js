import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'

function PageLayout(props) {
    return(
        <div>
            <Head>
                <title>Preduct</title>
            </Head>

            <Header/>
            {props.children}
        </div>
    )
}

export default PageLayout;