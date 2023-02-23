import React, { useState } from 'react'
import Indicator from './Indicator/Indicator'
import CardBegin from './Infos/CardBegin'
import CardEnd from './Infos/CardEnd'
import DietForm from './SubForms/DietForm'
import FoodStyle from './SubForms/FoodStyle'
import Allergies from './SubForms/Allergies'
import HateLove from './SubForms/HateLove'
import './MultiForm.scss'

export default function MultiForm() {
  const [formIndex, setFormIndex] = useState(1) // index pour chaque étape
  const [allFormData, setAllFormData] = useState({
    dietForm: '',
    foodStyle: [],
    allergies: [],
    prefs: {},
  }) // models

  const modifyIndex = (index, data) => {
    setFormIndex(index)

    if (data) {
      // Boucler sur toutes nos data et récupère propriété pour placer la nouvelle donnée
      const newData = { ...allFormData }
      const firstPropNewData = Object.keys(data)[0]

      newData[firstPropNewData] = data[firstPropNewData]
      setAllFormData(newData)
    }
  }

  console.log(allFormData)

  const elements = [
    <CardBegin modifyIndex={modifyIndex} />,
    <DietForm modifyIndex={modifyIndex} />,
    <FoodStyle modifyIndex={modifyIndex} />,
    <Allergies modifyIndex={modifyIndex} />,
    <HateLove modifyIndex={modifyIndex} />,
    <CardEnd modifyIndex={modifyIndex} />,
  ]

  return (
    <div className="container-multiform">
      <Indicator formIndex={formIndex} />

      {elements.map((item, index) => {
        if (index + 1 === formIndex) {
          return elements[index]
        }
      })}

      {/* Affichage des résultats sélectionnés en fin de parcours */}
      {formIndex === 6 && (
        <div className="results-container">
          {allFormData.dietForm.length > 0 && (
            <p>
              Régime: <span style={{ color: '#ad141e' }}>{allFormData.dietForm}</span>
            </p>
          )}

          {allFormData.foodStyle.length > 0 && (
            <p>
              Type de cuisine:{' '}
              <span style={{ color: '#ad141e' }}>{allFormData.foodStyle + ' '}</span>
            </p>
          )}

          {allFormData.allergies.length > 0 && (
            <p>
              Allergies: <span style={{ color: '#ad141e' }}>{allFormData.allergies + ' '}</span>
            </p>
          )}

          {allFormData.prefs.love.length > 0 && (
            <p>
              Aliment préféré: <span style={{ color: '#ad141e' }}>{allFormData.prefs.love}</span>
            </p>
          )}

          {allFormData.prefs.hate.length > 0 && (
            <p>
              Aliment détesté: <span style={{ color: '#ad141e' }}>{allFormData.prefs.hate}</span>
            </p>
          )}
        </div>
      )}

      {/* { formIndex === 1 ? <CardBegin modifyIndex={modifyIndex} /> 
            : formIndex === 2 ? <DietForm modifyIndex={modifyIndex} />
            : formIndex === 3 ? <FoodStyle modifyIndex={modifyIndex} />
            : formIndex === 4 ? <Allergies modifyIndex={modifyIndex} />
            : formIndex === 5 ? <HateLove modifyIndex={modifyIndex} />
            : formIndex === 6 ? <CardEnd modifyIndex={modifyIndex} />
            : ""} */}
    </div>
  )
}
