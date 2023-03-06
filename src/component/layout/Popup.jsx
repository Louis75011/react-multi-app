import { useEffect, useState, createContext } from 'react'
import '../../style/layout/Popup.scss'

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false)

  // fonction pour afficher la popup après 10 secondes d'inactivité de la souris
  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowPopup(true)
    }, 3000) // réinitialiser le timer à chaque fois que l'utilisateur effectue une action avec la souris

    window.addEventListener('mousemove', () => {
      clearTimeout(timeout)
      setShowPopup(false)
      timeout = setTimeout(() => {
        setShowPopup(true)
      }, 3000)
    })

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('mousemove', () => {})
    }
  }, [])

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <p>Veuillez sélectionner un sous module pour l'essayer !</p>
        </div>
      )}
    </>
  )
}
