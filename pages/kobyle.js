import NextLink from 'next/link';

import Container from '../components/container';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Container>
      <div className="items-center flex flex-col justify-center max-w-2xl mx-auto mb-16">
        <div className="mb-8 shadow-md border-opacity-50 rounded-md p-6 bg-white dark:bg-black">
                <h1 className="text-center border-l-8 border-transparent font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
                    Szkoła Podstawowa w Kobylu
                </h1>
                <div>
                    <img src="/kobyle.png" className="rounded-lg"/>
                </div>
                <p className="pt-5">
                School webpage made for new standardized format. Work consisted of transfering old content to new website, making new visual layer for the website, teaching school stuff how to add new posts.
                  &nbsp;
                  <NextLink href="/projects">
                    <a className="underline text-blue-400 hover:text-blue-600" target="_self">
                        Go back
                    </a>
                  </NextLink>
                </p>
        </div>
        <Footer/>
      </div>  
    </Container>
  )
}
