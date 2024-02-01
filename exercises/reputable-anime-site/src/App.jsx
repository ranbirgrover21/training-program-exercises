import VideoController from './components/VideoPlayer/VideoController'

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
      <VideoController episodes={episodes}></VideoController> 
    </>
  )
}

export default App
