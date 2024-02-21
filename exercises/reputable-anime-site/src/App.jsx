import VideoController from './components/VideoPlayer/VideoController'

function App() {
  const episodes =
  [  
  {
    "name": "Episode 1",
    "src": "https://www.youtube.com/embed/O5fk80I3orw?si=glzg5a4MmrQzEbzB&amp;start=3"
  },
  {
    "name": "Tailwind Explanation",
    "src": "https://www.youtube.com/embed/mr15Xzb1Ook?si=b-X8oDkQMY5Of9Jz"
  },
  {
    "name": "Despair",
    "src": "https://www.youtube.com/embed/cqrIJCJ3AsU?si=JEg8hxU1J9hTOzHk"
  },
  {
    "name": "Truth",
    "src": "https://www.youtube.com/embed/aXOChLn5ZdQ?si=QnlhULUOzK-UxSF"
  }
  ,
  {
    "name": "Not a rick roll",
    "src": "https://www.youtube.com/embed/dQw4w9WgXcQ?si=KaZQb2Lz7M6k_ZbK"
  }
  ,
  {
    "name": "More Anime",
    "src": "https://www.youtube.com/embed/OIBODIPC_8Y?si=kjXpi9m6RE0A2brD"
  }
  ,
  {
    "name":"🦀🦀🦀🦀🦀🦀",
    "src": "https://www.youtube.com/embed/OhJttQZlU1E?si=90ySbFfy1IYoSqmc"
  }
  ,
  {
    "name": "Good Stuff",
    "src": "https://www.youtube.com/embed/fzQ6gRAEoy0?si=8Cd0C0-wLT9J1vCb"
  }
  ,
  {
    "name": "Vampire",
    "src": "https://www.youtube.com/embed/e1xCOsgWG0M?si=scY7iAPvWILRl-8h"
  }
  ,
  {
    "name": "Seycara",
    "src": "https://www.youtube.com/embed/Xh6eAYM3Sfk?si=2ip0Gkag9HsYgGGq"
  }
  ,
  {
    "name": "Cyberpunk",
    "src": "https://www.youtube.com/embed/KvMY1uzSC1E?si=-2ojWRN5vmpNkm86"
  }
  ,
  {
    "name": "Titleless",
    "src": "https://www.youtube.com/embed/LfephiFN76E?si=vsrD0H7D_DEdo4ph"
  }] 
  const seriesInfo = {
    title: "Legend of the Galactic Heroes",
    score: 9.8,
    description: "Description: For over a century and a half, two interstellar states have wrested for control of the Milky Way. The Galactic Empire, an absolute monarchy ruled by Kaiser Friedrich IV and an entrenched nobility, seeks to suppress the rebels daring to oppose the inviolable crown. The Free Planets Alliance, a representative democracy led by a corrupt High Council, degenerates as its elected leaders⁠ use war and conflict as a way to win popular support. But this long-standing stalemate between the Empire and the Alliance ends with the rise of two opposing military geniuses. Reinhard von Lohengramm, a minor noble and High Admiral of the Empire through his strategic brilliance and his sister's position as the favored concubine of the Kaiser, dreams of conquering the galaxy and uniting mankind under his iron fist. Meanwhile, Yang Wen-li of the Alliance, an avid historian and reluctant commodore hailed as the Hero of El Facil, uses his tactical prowess to navigate around his leaders' incompetence—and to carve the path to lasting peace. As the war rages on, Reinhard and Yang each strive for their ideals and to secure their place among the stars as the leaders of a new era of galactic heroes. [Written by MAL Rewrite] "
  }
  return (
    <>
      <VideoController episodes={episodes}></VideoController> 
    </>
  )
}

export default App
