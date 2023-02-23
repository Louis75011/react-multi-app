import { createContext, useState } from 'react'

export const Context = createContext()

const supportedLangs = ['EN', 'DE', 'FR', 'ES', 'IT']
let browserLang = navigator.language.slice(0, 2).toUpperCase()

// Si on est connecté avec un navigateur qui a langue non enregistrée
if (supportedLangs.indexOf(browserLang) === -1) {
  browserLang = 'EN'
}

const LanguageProvider = (props) => {
  const [lang, setLang] = useState(browserLang)
  const toggleLang = (changeLang) => {
    setLang(changeLang)
  }

  return <Context.Provider value={{ lang, toggleLang }}>{props.children}</Context.Provider>
}

export default LanguageProvider
