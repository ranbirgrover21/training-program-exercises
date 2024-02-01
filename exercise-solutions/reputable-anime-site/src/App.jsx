import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import SeriesInfo from './components/SeriesInfo'
import VideoController from './components/VideoPlayer/VideoController'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
  const episodes = [
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
    "name": "Episode 4",
    "src": "https://www.youtube.com/embed/aXOChLn5ZdQ?si=QnlhULUOzK-UxSF"
  }
  ,
  {
    "name": "Episode 5",
    "src": "https://www.youtube.com/embed/O5fk80I3orw?si=glzg5a4MmrQzEbzB&amp;start=3"
  }
  ,
  {
    "name": "Episode 6",
    "src": "https://www.youtube.com/embed/O5fk80I3orw?si=glzg5a4MmrQzEbzB&amp;start=3"
  }
  ,
  {
    "name": "Episode 7",
    "src": "https://www.youtube.com/embed/O5fk80I3orw?si=glzg5a4MmrQzEbzB&amp;start=3"
  }
  ,
  {
    "name": "Episode 8",
    "src": "https://www.youtube.com/embed/O5fk80I3orw?si=glzg5a4MmrQzEbzB&amp;start=3"
  }
  ,
  {
    "name": "Episode 9",
    "src": "https://www.youtube.com/embed/O5fk80I3orw?si=glzg5a4MmrQzEbzB&amp;start=3"
  }
  ,
  {
    "name": "Episode 10",
    "src": "https://www.youtube.com/embed/O5fk80I3orw?si=glzg5a4MmrQzEbzB&amp;start=3"
  }
  ,
  {
    "name": "Episode 11",
    "src": "https://www.youtube.com/embed/O5fk80I3orw?si=glzg5a4MmrQzEbzB&amp;start=3"
  }
  ,
  {
    "name": "Episode 12",
    "src": "https://www.youtube.com/embed/O5fk80I3orw?si=glzg5a4MmrQzEbzB&amp;start=3"
  }]


  return (
    <> 
      <div className='background background-filter'>
        <div className='u-non-blurred'>
          <Navbar className="sticky top-0"/>
          <div className='p-10 text-slate-200'>
            <div className="flex flex-row gap-6">
              <div className='w-full xl:w-3/4'>
                <VideoController episodes={episodes}/>
              </div>
              <div className='w-96 xl:block hidden'>
                <SeriesInfo
                  title="Legend of the Galactic Heroes"
                  description="For over a century and a half, two interstellar states have wrested for control of the Milky Way. The Galactic Empire, an absolute monarchy ruled by Kaiser Friedrich IV and an entrenched nobility, seeks to suppress the rebels daring to oppose the inviolable crown. The Free Planets Alliance, a representative democracy led by a corrupt High Council, degenerates as its elected leaders⁠ use war and conflict as a way to win popular support. But this long-standing stalemate between the Empire and the Alliance ends with the rise of two opposing military geniuses. Reinhard von Lohengramm, a minor noble and High Admiral of the Empire through his strategic brilliance and his sister's position as the favored concubine of the Kaiser, dreams of conquering the galaxy and uniting mankind under his iron fist. Meanwhile, Yang Wen-li of the Alliance, an avid historian and reluctant commodore hailed as the Hero of El Facil, uses his tactical prowess to navigate around his leaders' incompetence—and to carve the path to lasting peace. As the war rages on, Reinhard and Yang each strive for their ideals and to secure their place among the stars as the leaders of a new era of galactic heroes. [Written by MAL Rewrite] "
                  score={10}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
