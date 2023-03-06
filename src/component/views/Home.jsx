import { Link } from 'react-router-dom'
import Popup from '../layout/Popup'
import { projectCard } from './HomeData'
import '../../style/views/Home.scss'

export default function Home() {
  return (
    <main>
      <Popup />
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
