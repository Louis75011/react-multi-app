import { useState } from 'react'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'
import './Slider.scss'

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  })

  const nextSlide = () => {
    // Si un 1 est différent de 5 (photos au total)
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false })
      }, 400)
      // Si on arrive au bout de l'index, revient au début
    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false })
      }, 400)
    }
  }

  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false })
      }, 400)
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: 5, inProgress: true })

      setTimeout(() => {
        setSlideAnim({ index: 5, inProgress: false })
      }, 400)
    }
  }

  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false })
  }

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideAnim.index === index + 1 ? 'slide active-anim' : 'slide'}
          >
            <img src={process.env.PUBLIC_URL + `/images-slider/img${index + 1}.jpg`} alt="" />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'previous'} />

      {/* Points de sélection d'image */}
      <div className="container-dots">
        {/* 5 points générés */}
        {Array.from({ length: 5 }).map((item, index) => {
          return (
            <div
              className={slideAnim.index === index + 1 ? 'dot active' : 'dot'}
              onClick={() => moveDot(index + 1)}
              key={index}
            ></div>
          )
        })}
      </div>
    </div>
  )
}
