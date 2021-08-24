
import Container from '../components/container';
import Footer from '../components/footer';
import Project from '../components/project';

export default function Home() {
  return (
    <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <div class="center" className="flex flex-row justify-center place-items-center max-w-2xl mx-auto mb-16">
                <Project
                    path="/issc.png"
                    head="Japan Sientist Simulator"
                    content="Japan Sientist Simulator is an indie game made only in 24h in Rzeszów Game Jam, me and my team scored second place. It is made in Godot engine using GDScript. It was
                    further developed by my team for two months but we abbadoned the project for another one after failing to cash it. So if you are intrested in publishing our game
                    conact me via email. Game is real time strategy with resources like humans, wood and power and tiles upgrades, better dams to protect your little civilisation against
                    scary tsunami waves. Your goal is to leave this broken planet and seek shelter in the space."
                />
            </div>

            <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
            <div class="center" className="flex flex-row justify-center place-items-center max-w-2xl mx-auto mb-16">
                <Project
                    path="/hard.png"
                    head="Caveban"
                    content="Caveban is a indie game made using Godot 3.2.3 game engine, i used Silent Wolf plugin to store data used in leaderboard but everything else is made
                    from the ground up by me. I'm very proud of this project of my, it has 60 diffrent levels in 3 levels of difficulty (20 for each level). Game features a special
                    game mode that gradually makes levels harder and harder up to Doom eternal full mele playthrough. "
                />
            </div>
            <Footer/>
        </div>  
    </Container>
  )
}
