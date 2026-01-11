import './App.css'
import Header from './components/Header'
import TimeLeft from './components/section/TimeLeft'
import Rsvp from './components/section/Rsvp'
import Carousel from './components/section/Carousel'
import Details from './components/section/Details'
import Reminders from './components/section/Reminders'
import MusicFab from './components/section/MusicFab'

function App() {
  return (
    <>
      <MusicFab />
      <Header />
      <TimeLeft />
      <Rsvp />
      <Carousel />
      <Details />
      <Reminders />
    </>
  )
}

export default App