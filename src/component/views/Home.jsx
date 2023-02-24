import { Link } from 'react-router-dom'
import '../../style/views/Home.scss'

export default function Home() {
  const projectCard = [
    {
      imagePath: '/images/slider.png',
      title: 'Slider',
      description: 'Afficher des images en mouvement.',
      link: '/slider',
    },
    {
      imagePath: '/images/multilanguages.png',
      title: 'Multi-Langues',
      description: "Gestion de traduction automatique d'une langue à une autre.",
      link: '/multilanguage',
    },
    {
      imagePath: '/images/formstepvalid.png',
      title: 'Validation par étapes',
      description: "Gestion de l'étape de validation d'un formulaire.",
      link: '/multiform',
    },
    {
      imagePath: '/images/chrono.png',
      title: 'Chronomètre',
      description: 'Chronomètre avec gestion du temps et des pauses.',
      link: '/chrono',
    },
    {
      imagePath: '/images/images-bank.png',
      title: "Gallerie d'images",
      description: "Visionner une banque d'images infinie avec fonctionnalité de recherche.",
      link: '/infinite-gallery',
    },
  ]

  return (
    <main>
      <div className="flex">
        <div className="cards">
          {projectCard.map((element, index) => {
            return (
              <div className="card" key={index}>
                <Link to={element.link}>
                  <img
                    src={process.env.PUBLIC_URL + element.imagePath}
                    width="100%"
                    height="200px"
                    alt="slider, project, show, test"
                  />
                  <div className="container">
                    <h3>{element.title}</h3>
                    <p className="description">{element.description}</p>
                    <button className="standard-button">Utiliser</button>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
