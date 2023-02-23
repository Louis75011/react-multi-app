import { useContext } from 'react'
import { Context } from '../context/langContext'
import './Document.scss'
import data from '../assets/data.jsx'

export default function Contenu() {
  const { lang } = useContext(Context)

  return (
    <div className="content">
      {/* Charge les données de texte et ajoute les langues du context */}
      <h1 className="title">{data[lang].title}</h1>
      <p className="content-txt">{data[lang].txt}</p>
    </div>
  )
}
