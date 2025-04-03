import Head from 'next/head';
import Link from 'next/link';
import React from 'react';


export default function About() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Learn more about me." />
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
        <h1 className="text-4xl font-bold text-black">About Me</h1>
        <p className="mt-4 text-lg">
          Hello! I'm a passionate web developer with experience in building modern web applications.Motivated Information Technology undergraduate at the University of
          Colombo School of Computing with practical experience in web
         development and design. Completed a Diploma in IT at UCSC and
          interned at FrithCode Technologies, contributing to web projects.
         Proficient in project management, decision-making, teamwork, Figma, VS
          Code, effective communication, and problem-solving. Currently seeking
          an internship to apply my skills and grow in a dynamic environment.
        </p>
        <Link href="/">
          <span className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg">
           Back to Home🏠
          </span>
        </Link>
      </main>
    </>
  );
}
