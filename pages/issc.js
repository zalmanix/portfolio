import NextLink from 'next/link';

import Container from '../components/container';
import Footer from '../components/footer';

export default function Home() {
  return (
    <Container>
      <div className="items-center flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="mb-8 shadow-md border-opacity-50 rounded-md p-6 bg-white dark:bg-black">
                <h1 className="text-center border-l-8 border-transparent font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
                    Japan Sientist Simulator
                </h1>
                <div>
                    <img src="/issc.png" className="rounded-lg"/>
                </div>
                <p className="pt-5">
                  Japan Scientist Simulator is an indie game made only in 24h in Rzeszów Game Jam, I and my team scored second place. It is made in Godot engine using GDScript. It was further developed by my team for two months but we abandoned the project for another one after failing to cash it. So if you are interested in publishing our game contact me via email. Game is a real-time strategy with resources like humans, wood and power, and tiles upgrades, better dams to protect your little civilization against scary tsunami waves. Your goal is to leave this broken planet and seek shelter in space.
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
