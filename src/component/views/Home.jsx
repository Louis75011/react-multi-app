import { Link } from 'react-router-dom'
import '../../style/views/Home.scss'

export default function Home() {
  const projectCard = [
    {
      imagePath: '/images/slider.png',
      title: 'Slider',
      description:
        'Utilité : afficher des images en mouvement. Remplissage de test écrit. Remplissage de test écrit.',
      link: '/slider',
    },
    {
      imagePath: '/images/multilanguages.png',
      title: 'Multi-Langues',
      description:
        "Utilité : Gestion de traduction automatique d'une langue à une autre. Remplissage de test écrit. Remplissage de test écrit.",
      link: '/multilanguage',
    },
    {
      imagePath: '/images/formstepvalid.png',
      title: 'Validation par étapes',
      description:
        "Utilité : Gestion de l'étape de validation d'un formulaire. Remplissage de test écrit. Remplissage de test écrit.",
      link: '/multiform',
    },
    {
      imagePath: '/images/formstepvalid.png',
      title: 'Projet 1',
      description:
        "Utilité : Gestion de l'étape de validation d'un formulaire. Remplissage de test écrit. Remplissage de test écrit.",
      link: '/project1',
    },
  ]

  return (
    <main>
      <div className="flex">
        <div className="cards">
          {projectCard.map((element, index) => {
            return (
              <div className="card" key={index}>
                <img
                  src={process.env.PUBLIC_URL + element.imagePath}
                  width="100%"
                  height="200px"
                  alt="slider, project, show, test"
                />
                <div className="container">
                  <h3>{element.title}</h3>
                  <p className="description">{element.description}</p>
                  <Link to={element.link}>
                    <button className='standard-button'>Utiliser {element.title}</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
