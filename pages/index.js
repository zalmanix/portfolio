import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../public/me.png'

import Container from '../components/container';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Container>
      <div className="items-center flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div id="center" className="flex flex-row justify-center place-items-center max-w-2xl mx-auto mb-16">
          <>
            <Image src={profilePic} alt="Picture of the author"/>
          </>
          <h1 className="border-l-8 border-transparent font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
            Hello there! I'm Maksymilian Skórnóg
          </h1>
        </div>
        <div class="center" className="flex flex-row justify-center place-items-center max-w-2xl mx-auto mb-16">
          <div className="flex flex-col justify-center place-items-center">
            <h1 className="text-1xl md:text-4xl tracking-tight mb-4 text-black dark:text-white text-justify">
              A web developer, game designer and Godot engine enthusiast.
            </h1>
          </div>
        </div>
        
        <div className="bg-white">
          <p className="text-4 tracking-tight mb-4 text-black dark:text-white text-justify">
            I started programming in fall of 2016 when me and my friends banded together to make Indie game on local Game Jam in Rzeszów, we made the "JSSC" game about surviving the tsunami
            , and got second place. It was written in GDScript in Godot engine and was a start to my little hobby which revolves around making indie games. 
          </p>
        </div>
        <Link href="/projects">
          <a className=" underline text-blue-400 hover:text-blue-600">My projects</a>
        </Link>
        <hr className="mt-4 w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <div className="mb-8">
          <h1 className="pt-8 text-1xl md:text-4xl tracking-tight mb-4 text-black dark:text-white text-justify">
            I'm Open To Work, contact me down below
          </h1>
              <div className="bg-white"> 
                <p className="text-justify">
                Currently I'm working in SEARGIN Sp. z o.o. as a full stack developer using Laravel and Angular frameworks. Previously i worked in ProKomp Bochnia as It technician.
                I'm proficient in using JavaScript, Python, PHP, CSS and HTML. My favourite framework is NEXT.js and it's ease of making web designes. But if you are in need of 
                other framework specialist I can learn them realy fast and with enthusiasm.
                </p>
              </div>
        </div>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
        <div className="bg-white flex justify-center place-items-center w-full pb-8">
          <svg aria-hidden="true" class="h-7 svg-inline--fa fa-envelope fa-w-16" data-icon="envelope" data-prefix="fas" viewBox="0 0 512 512"><path fill="currentColor" d="M502 191c4-3 10 0 10 5v204c0 27-21 48-48 48H48c-26 0-48-21-48-48V196c0-5 6-8 10-5l154 114c21 15 56 47 92 47s72-33 92-47l154-114zM256 320c23 0 57-29 73-41 133-97 143-105 174-129 6-5 9-12 9-19v-19c0-26-22-48-48-48H48C22 64 0 86 0 112v19c0 7 3 14 9 19 31 24 41 32 174 129 16 12 50 41 73 41z"/></svg>
          <h1 className="text-4 p-3 text-black dark:text-white text-justify">
            <a href="mailto:zalmanix.work@gmail.com">zalmanix.work@gmail.com</a>
          </h1>
        </div>

        <Footer/>
      </div>  
    </Container>
  )
}
