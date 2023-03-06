import { useRef, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../services/configFirebase'
import { FaGoogle } from 'react-icons/fa'
import firebase from '../../services/configFirebase'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import '../../style/views/LoginForm.scss'

function LoginForm() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [wrongPassword, setWrongPassword] = useState(false)
  const [accountAlreadyExist, setAccountAlreadyExist] = useState(false)
  const { auth } = useContext(FirebaseContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoggedIn(!!user) // null retourne false, not null retourne vrai
    })
    return unsubscribe
  }, [auth])

  const handleSignIn = () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Connexion réussie
        const user = userCredential.user
        console.log(`Connecté en tant que ${user.email}`)
        setTimeout(() => {
          navigate('/')
        }, 800)
      })
      .catch((error) => {
        // Erreur de connexion
        const errorCode = error.code
        const errorMessage = error.message
        console.error(`Erreur de connexion : ${errorCode} - ${errorMessage}`)
        setWrongPassword(true)
      })
  }

  const handleSignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // Connexion réussie
        const user = result.user
        console.log(`Connecté en tant que ${user.email}`)
        setTimeout(() => {
          navigate('/')
        }, 800)
      })
      .catch((error) => {
        // Erreur de connexion
        const errorCode = error.code
        const errorMessage = error.message
        console.error(`Erreur de connexion : ${errorCode} - ${errorMessage}`)
      })
  }

  const handleSignUp = () => {
    const email = emailRef.current.value
    const password = passwordRef.current.value

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Inscription réussie
        const user = userCredential.user
        console.log(`Inscrit en tant que ${user.email}`)
      })
      .catch((error) => {
        // Erreur d'inscription
        const errorCode = error.code
        const errorMessage = error.message
        console.error(`Erreur d'inscription : ${errorCode} - ${errorMessage}`)
        if (errorCode === 'auth/email-already-in-use') {
          setAccountAlreadyExist(true)
        }
      })
  }

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log('Déconnecté')
      })
      .catch((error) => {
        console.error('Erreur lors de la déconnexion :', error)
      })
  }

  return (
    <div className="login-form">
      <h2>Connexion</h2>
      <form>
        <label htmlFor="email">Courriel :</label>
        <input type="email" id="email" ref={emailRef} />

        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" ref={passwordRef} />

        {loggedIn ? (
          <button type="button" onClick={handleLogout}>
            Déconnexion
          </button>
        ) : (
          <>
            <button type="button" onClick={handleSignIn}>
              Se connecter
            </button>
            <button type="button" onClick={handleSignInWithGoogle}>
              <FaGoogle /> Se connecter avec Google
            </button>
            <button type="button" onClick={handleSignUp}>
              S'inscrire
            </button>
            {wrongPassword && <p className="paragraphe">Votre mot de passe ne correspond pas !</p>}
            {accountAlreadyExist && <p className="paragraphe">Compte déjà existant !</p>}
          </>
        )}
      </form>
    </div>
  )
}

export default LoginForm
