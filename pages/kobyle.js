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
                Strona www szkoły, prace polegały na przeniesieniu dokumentów z poprzedniej strony na nowy system oraz stworzenie nowej warstwy wizualnej strony.
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
