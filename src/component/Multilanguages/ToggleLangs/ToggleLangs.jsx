import React, { useContext } from 'react'
import FrenchFlag from '../assets/france.svg'
import SpanishFlag from '../assets/spain.svg'
import EnglishFlag from '../assets/united-kingdom.svg'
import GermanyFlag from '../assets/germany.svg'
import ItalyFlag from '../assets/italy.svg'
import { Context } from '../context/langContext'
import './ToggleLangs.scss'

export default function ToggleLangs() {
  const { toggleLang } = useContext(Context)

  return (
    <div className="container-langs">
      <img onClick={() => toggleLang('EN')} src={EnglishFlag} />
      <img onClick={() => toggleLang('DE')} src={GermanyFlag} />
      <img onClick={() => toggleLang('FR')} src={FrenchFlag} />
      <img onClick={() => toggleLang('ES')} src={SpanishFlag} />
      <img onClick={() => toggleLang('IT')} src={ItalyFlag} />
    </div>
  )
}
