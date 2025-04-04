import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Projects() {
    return (
        <>
        <Head>
        <title>My Projects</title>
        <meta name="description" content="Explore my projects." />
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
      <h1 className="text-4xl font-bold text-black">My Projects</h1>
      <p className="mt-4 text-lg">
        Here are some of the projects I've worked on. Click on the links to learn more about each project.
        </p>
        <ul className="mt-6 space-y-4 text-left max-w-xl mx-auto">
          <li className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Project 1</h2>
            <p>About page for the project.</p>
            <Link href="https://github.com/VOSANDI2003/aboutpage"><span className="text-blue-500 underline">View Project</span></Link>
          </li>
          <li className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Project 2</h2>
            <p>Contact us page for the project.</p>
            <Link href="https://github.com/VOSANDI2003/contact_us"><span className="text-blue-500 underline">View Project</span></Link>
          
            </li>
            
            </ul>
            <Link href="/">
          <span className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg justify-center">
          Back to Home🏠
          </span>
        </Link>
          </main> 


            
        
        </>
    )
}
