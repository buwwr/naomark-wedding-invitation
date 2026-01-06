import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TimeLeft from './components/section/TimeLeft'
import Rsvp from './components/section/Rsvp'
import Carousel from './components/section/Carousel'
import Details from './components/section/Details'
import Reminders from './components/section/Reminders'

function App() {
  return (
    <>
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