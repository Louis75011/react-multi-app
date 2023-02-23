import './Card.scss'

export default function CardBegin(props) {
  return (
    <div className="card">
      <h1>🍣 Aide-nous à ravir tes papilles 🌶️</h1>
      <button className="linear-button" onClick={() => props.modifyIndex(2)}>
        COMMENCER
      </button>
    </div>
  )
}
