import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function contact(){
    return(
        <>
        <Head>
            <title>Contact</title>
            <meta name= 'description'content='Contact me for any inquiries or collaborations.'/>
        </Head>
        <header className="flex justify-between p-5 bg-gray-900 text-white">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link href="/about"><span>About</span></Link></li>
                    <li><Link href="/projects"><span>Projects</span></Link></li>
                    <li><Link href="/contact"><span>Contact</span></Link></li>
                </ul>
            </nav>
        </header>
        <main className="p-10 text-center">
            <h1 className="text-4xl font-bold text-black">Contact Me</h1>
            <p className="mt-4 text-lg">Feel free to reach out for any inquiries or collaborations!</p>
            <form className="mt-6 max-w-md mx-auto">
                <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4" required />
                <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4" required />
                <textarea placeholder="Your Message" className="border p-2 w-full mb-4" rows="5" required></textarea>
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg">Send Message</button>
            </form>
            <Link href="/">
                <span className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg">Back to Home🏠
                </span>
            </Link>
        </main>
        <footer className="p-5 bg-gray-900 text-white text-center">
            <p>&copy; 2023 My Portfolio. All rights reserved.</p>
            </footer>

        </>

    )
    }
