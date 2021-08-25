import NextLink from 'next/link';

import Container from '../components/container';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Container>
      <div className="items-center flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="mb-8 shadow-md border-opacity-50 rounded-md p-6 bg-white dark:bg-black">
          <h1 className="text-center border-l-8 border-transparent font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
            Caveban
          </h1>
          <div>
              <img src="/hard.png" className="rounded-lg"/>
          </div>
            <p className="pt-5">
              Caveban is an indie game made using Godot 3.2.3 game engine, I used Silent Wolf plugin to store data used in leaderboard but everything else is made from the ground 
              up by me. I&apos;m very proud of this project of mine, it has 60 different levels in 3 levels of difficulty (20 for each level). The game features a special
              game mode that gradually makes levels harder and harder up to Doom eternal full mele playthrough level.  
              &nbsp;
              <NextLink href="/projects">
                <a className="underline text-blue-400 hover:text-blue-600" target="_self">
                    Go back
                </a>
              </NextLink>
            </p>
        </div>

        <div className="bg-white flex justify-center place-items-center w-full pb-8">
          <NextLink href="https://github.com/zalmanix/CaveBan">
            <a className="flex justify items-center p-1 text-gray-900 sm:p-4 dark:text-gray-100" target="_blank">
              <svg aria-hidden="true" className="svg-inline--fa h-8 fa-github fa-w-16" data-icon="github" data-prefix="fab" viewBox="0 0 496 512"><path fill="currentColor" d="M166 397c0 2-2 4-5 4-4 0-6-1-6-4 0-2 2-3 5-3 3-1 6 1 6 3zm-31-4c-1 2 1 4 4 5s6 0 6-2-1-5-4-5c-3-1-5 0-6 2zm44-2c-3 1-5 3-5 5 1 2 3 3 6 3 3-1 5-3 5-5s-3-3-6-3zM245 8A240 240 0 000 252c0 111 70 206 170 239 12 2 17-5 17-12v-61s-70 15-85-30c0 0-12-29-28-37 0 0-23-15 2-15 0 0 24 2 38 26 22 38 59 27 73 21 2-16 9-28 16-34-56-6-112-14-112-111 0-27 7-41 23-59-2-6-11-33 3-67 21-7 69 27 69 27a237 237 0 01126 0s48-34 69-27c13 34 5 61 2 67 16 18 26 32 26 59 0 97-59 105-115 111 9 8 17 23 17 46v84c0 6 5 14 17 12a248 248 0 00168-239C496 113 384 8 245 8zM97 353c-1 1-1 3 1 5 1 2 4 2 5 1s1-3-1-5c-1-2-4-2-5-1zm-11-8l3 4c1 1 3 0 4-1s0-3-2-4-4 0-5 1zm33 35c-2 2-1 5 1 7s5 2 7 1c1-2 0-5-2-7s-5-2-6-1zm-12-14v6c2 2 5 3 6 2 2-1 2-4 0-6-1-3-4-4-6-2z"/></svg>
              <p className="pl-4"> 
                Repository
              </p>
            </a>
          </NextLink>
          </div>
        <Footer/>
      </div>  
    </Container>
  )
}
