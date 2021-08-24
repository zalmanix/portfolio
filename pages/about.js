import Image from 'next/image'
import profilePic from '../public/me.png'

import Container from '../components/container';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div id="center" className="flex flex-row justify-center place-items-center max-w-2xl mx-auto mb-16">
          <>
            <Image src={profilePic} alt="Picture of the author"/>
          </>
        </div>
        <div className="bg-white mb-4">
          <p className="text-4 tracking-tight mb-4 text-black dark:text-white text-justify">
            I&apos;m full stack programmer currently working from home, I like to design web pages using Next.js, Angular or Laravel, and developing small indie games in my spare time.
            I&apos;m enjoying challenges and difficul projects. I once tried 3D moddeling in blender, it didn&apos;t go that bad but my passion lies in programming. Besides sitting 12h a day before my PC i enjoy cooking mealf for 
            my entire family. In my free time I read literature, specifficly sci-fi and fition. I have a golden retriever puppy named "Alba" witch i take on walks regullary to
            nearby forest. 
          </p>
        </div>

        <div className="bg-white flex justify-center place-items-center w-full pb-8">
            <svg aria-hidden="true" className="h-8 svg-inline--fa fa-envelope fa-w-16" data-icon="envelope" data-prefix="fas" viewBox="0 0 512 512"><path fill="currentColor" d="M502 191c4-3 10 0 10 5v204c0 27-21 48-48 48H48c-26 0-48-21-48-48V196c0-5 6-8 10-5l154 114c21 15 56 47 92 47s72-33 92-47l154-114zM256 320c23 0 57-29 73-41 133-97 143-105 174-129 6-5 9-12 9-19v-19c0-26-22-48-48-48H48C22 64 0 86 0 112v19c0 7 3 14 9 19 31 24 41 32 174 129 16 12 50 41 73 41z"/></svg>
            <h1 className="text-4 p-3 text-black dark:text-white text-justify">
                <a href="mailto:zalmanix.work@gmail.com">zalmanix.work@gmail.com</a>
            </h1>
        </div>
        <Footer/>
      </div>  
    </Container>
  )
}
