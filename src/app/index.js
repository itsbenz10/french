import {Head} from 'next/head'
import {Footer} from 'next/footer'
import Navbar from '/componenets/navbar'
import Link from 'next/link'

export default function Home(){
    return(
        <>
        <Head>
            <title>XYZ</title> {/*change this */}
        </Head>
        <div className ="bg-white">
            <div className = "relative h-screen">
            <div className="flex flex-col min-h-screen">
                <Navbar classname = "mb-[100px] "></Navbar>
            </div>

            </div>
            
        </div>
    </>
    )
}