# React JS

## Introduction

React.js est une **bibliothèque JavaScript orientée frontend** permettant de créer des interfaces utilisateur dynamiques et performantes.

Contrairement à un framework, React **n’impose aucune structure de projet ni d’architecture spécifique** : il se concentre uniquement sur la construction de l’interface utilisateur. C’est pour cette raison qu’il est qualifié de _bibliothèque_ et non de _framework_.

React est particulièrement adapté à la création d’applications modernes, interactives et maintenables.

## Pourquoi utiliser React ?

- Création d’interfaces à base de **composants réutilisables**
- Mise à jour efficace du DOM grâce au **Virtual DOM**
- Idéal pour développer des **Single Page Applications (SPA)**
- Écosystème riche avec de nombreuses bibliothèques complémentaires
- Très grande communauté et abondance de ressources

## Installation

1. Créer un dépôt GitHub

2. Cloner le dépôt localement à l’aide de la commande :

   ```bash
   git clone <url-du-repo>
   ```

3. Initialiser un projet React avec Vite :

   ```bash
   npm create vite -y ./
   ```

   - `npm` est le gestionnaire de paquets de JavaScript
   - `create-vite` est un outil permettant de créer rapidement un projet avec Vite
   - `-y` accepte automatiquement les options par défaut
   - `./` indique que le projet sera créé dans le répertoire courant

4. Sélectionner le modèle **React**

5. Installer les dépendances :

   ```bash
   npm install
   ```

## Structure d’un projet React

Un projet React créé avec Vite possède généralement la structure suivante :

```
mon-projet/
├── node_modules/
├── public/
│   └── vite.ico
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.json
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

- `src/` contient le code source de l’application
- `App.jsx` est le composant principal
- `main.jsx` est le point d’entrée de l’application React

## Premiers pas avec React

Nous allons commencer par modifier le fichier `src/App.jsx`, qui contient initialement le code suivant :

```jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
```

Pour le moment, nous allons simplifier ce composant afin d’afficher uniquement un message **"Hello World"** à l’écran.

Voici le nouveau contenu du fichier `App.jsx` :

```jsx
import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
```

Ce composant est un **composant React fonctionnel** simple : il retourne du JSX, qui sera affiché dans le navigateur.
