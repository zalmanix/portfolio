import type { NextPage } from 'next'

import style from '../styles/components/Home.module.scss'

import Header from '../components/Header'
import Technology from '../components/Technology';
import Project from '../components/Project';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className={style.container}>
      <Header />

      <div className={style.main}>
        <div className={style.banner}>
          <img
            src="/sandsquare.jpeg"
            className={style.bannerImage}
          />

          <h1>
            Maksymilian Skórnóg - Frontend developer
          </h1>
        </div>

        <h2 className={style.h2}>
          Tech stack I worked with:
        </h2>

        <Technology />

        <h2 className={style.h2}>
          My pet projects:
        </h2>

        <Project
          title="Szkola Kobyle"
          description="
            School webpage made for new standardized format. Work consisted of transfering old
            content to new website, making it more accessible (implementation of WCAG 2.1)
            making new visual layer for the website.
            Leading workshops teaching school staff how to properly use CMS and on keeping website WCAG friendly.
          "
          src="/projects/kobyle/kobyle.png"
          imagePosition="left"
          alternative="Homepage of school in Kobyle"
        />

        <Project
          title="Caveban"
          description="
            Caveban is an indie game made using Godot 3.2.3 game engine, I used Silent Wolf plugin to store data used in l
            eaderboard but everything else is made from the ground up by me. I'm very proud of this project of mine, it has
            60 different levels in 3 levels of difficulty (20 for each level). The game features a special game mode that
            gradually makes levels harder and harder up to Doom eternal full mele playthrough level.
          "
          src="/projects/caveban/caveban1.png"
          imagePosition="right"
          alternative="Sokoban game named Caveban"
        />

        <Project
          title="Japan Sientist Simulator"
          description="
            Japan Scientist Simulator is an indie game made only in 24h in Rzeszów Game Jam, my team and I scored second
            place. It is made in Godot engine using GDScript. It was further developed by my team for two months but we
            abandoned the project for another one after failing to cash it. So if you are interested in publishing our
            game contact me via email. Game is a real-time strategy with resources like humans, wood and power, and
            tiles upgrades, better dams to protect your little civilization against scary tsunami waves. Your goal
            is to leave this broken planet and seek shelter in space.
          "
          src="/projects/iss/issc.png"
          imagePosition="left"
          alternative="2 place game jam winner"
        />

        <Footer />

      </div>
    </div>
  )
}

export default Home
