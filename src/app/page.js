import Head from 'next/head'
import Navbar from '../components/navbar.js'
import Link from 'next/link'

export default function Home(){
    return(
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Head>
            <title>TITLE OF SITE</title> {/*change this */}
        </Head>
        <div className ="bg-white">
            <div className = "relative h-screen">
            <div className="flex flex-col min-h-screen">
                <div>
                    <header2>Supporting French Communities across Canada</header2>
                </div>
            </div>

            </div>
            
        </div>
    </>
    )
}