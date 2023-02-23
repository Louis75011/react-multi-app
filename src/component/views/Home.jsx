import { Link } from 'react-router-dom'
import '../../style/views/Home.scss'

export default function Home() {
  const projectCard = [
    {
      imagePath: '/images/slider1.jpg',
      title: 'Slider',
      description: "Utilité : afficher des images en mouvement. Remplissage de test écrit. Remplissage de test écrit.",
      link: '/project1',
      titleLink: 'Visiter Projet 1',
    },
    {
      imagePath: '/images/slider2.jpg',
      title: 'Multi-Langues',
      description: "Utilité : Gestion de traduction automatique d'une langue à une autre. Remplissage de test écrit. Remplissage de test écrit.",
      link: '/project1',
      titleLink: 'Visiter Projet 2',
    },
    {
      imagePath: '/images/slider3.jpg',
      title: 'Multi-step-validation',
      description: "Utilité : Gestion de l'étape de validation d'un formulaire. Remplissage de test écrit. Remplissage de test écrit.",
      link: '/project1',
      titleLink: 'Visiter Projet 3',
    },
  ]

  return (
    <main>
      <div className="text-end">
        <h2>Nos applications</h2>
        <p>
          La description de nos applications nous sert à redéfinir les besoins clients et autres
          utilitées pour le code ou encore dans la vie quotidienne.
        </p>
      </div>

      <div className="flex">

        {projectCard.map((element, index) => {
          return (
<div className="cards" key={index}>
          <div className="card">
            <img
              src={element.image}
              width="100%"
              height="200px"
              alt="slider, project, show, test"
            />
            <div className="container">
              <h3>{element.title}</h3>
              <p className="description">
              {element.description}
              </p>
              <Link to={element.link}>
                <button>{element.titleLink}</button>
              </Link>
            </div>
          </div>
        </div>
          )

        }) }

      </div>
      <div className="container"></div>
    </main>
  )
}
