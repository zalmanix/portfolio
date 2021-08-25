import Link from 'next/link'

import Container from '../components/container';
import Footer from '../components/footer';
import Project from '../components/project';

export default function Home() {
  return (
    <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <div id="test" className="center flex flex-row justify-center place-items-center max-w-2xl mx-auto mb-16" title="Read more">
                <Link href="/issc">
                    <a target="_self">
                        <Project
                        path="/issc.png"
                        head="Japan Sientist Simulator"
                        content="Japan Scientist Simulator is an indie game made only in 24h in Rzeszów Game Jam, I and my team scored second place. It is made in Godot engine using GDScript. It was further developed by my team for two months but we abandoned the project for another one after failing to cash it. So if you are interested in publishing our game contact me via email. Game is a real-time strategy with resources like humans, wood and power, and tiles upgrades, better dams to protect your little civilization against scary tsunami waves. Your goal is to leave this broken planet and seek shelter in space."
                        />
                    </a>
                </Link>
            </div>

            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div className="center flex flex-row justify-center place-items-center max-w-2xl mx-auto mb-16" title="Read more">
                <Link href="/caveban">
                   <a target="_self">
                    <Project
                            id="cave"
                            path="/hard.png"
                            head="Caveban"
                            content="Caveban is an indie game made using Godot 3.2.3 game engine, I used Silent Wolf plugin to store data used in leaderboard but everything else is made from the ground up by me. I&apos;m very proud of this project of mine, it has 60 different levels in 3 levels of difficulty (20 for each level). The game features a special
                            game mode that gradually makes levels harder and harder up to Doom eternal full mele playthrough. "
                        />
                   </a>
                </Link>
            </div>
            <Footer/>
        </div>  
    </Container>
  )
}
