import Head from 'next/head';
import Link from 'next/link';
import React from 'react';


export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website!" />
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
        <h2 className="text-4xl font-bold">Welcome to My Portfolio</h2>
        <p className="mt-4 text-lg">I am a web developer passionate about building amazing web experiences.</p>
        <Link href="/projects"><span className=" mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg animate-pulse transition-all ">View My Work</span></Link>
      </main>
      <div className="flex justify-center items-center  bg-white p-10">
        <source img="/animation.gif/baymax1.gif"  />
        <img src="/animation.gif/baymax1.gif " alt="Animated GIF" className="w-1/2 h-auto rounded-lg shadow-non" />
    </div>
    </>
    
  );
}

