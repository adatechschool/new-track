# ✅ Project

- **Durée :** 1 semaine
- **Type de projet :** seul / pair programming
- **Nom du repo :** `adapi-[nom_github]`

## 📦 Modalités de rendu

L'ensemble de l'exercice devra être pushé sur la branche main du projet du git.

> ⚠️ **Important :** Vous devez avoir _poussé_ (`git push`) votre **dernier commit à la date de rendu à minuit au plus tard**, afin qu’il soit pris en compte pour l’évaluation.

la date du rendu sera le jeudi 18 decembre à 23h59

## 🎯 Objectif du projet

Ce projet a pour objectif de récupérer la bdd de **adatabase** en utilisant docker pour afficher le contenu de nos tables créés auparavant et de créer une **API REST** avec express pour faire des requêtes **CRUD** (Create, Read, Update, Delete) sur les différentes tables.
(si besoin vous pouvez refaire les tables proposer dans **adatabase**)

## 🧱 Stack technique (obligatoire)

| Élément           | Technologie | Lien                        |
| ----------------- | ----------- | --------------------------- |
| environnement     | Node.js     | https://nodejs.org/         |
| framework backend | Express     | https://expressjs.com/      |
| Base de données   | PostgreSQL  | https://www.postgresql.org/ |

## ⚙️ Initialisation du projet

### step 1 : utilisation de docker

installation dotenv / express / nodemon / pg
dans un nouveau dossier nous allons faire :

```shell
npm init -y
```

cela va valider l'installation automatique de notre fichier package.json

nous allons ensuite faire cette commande pour installer express :

```shell
npm i express
```

suivi de :

```shell
npm i dotenv nodemon pg
```

- dotenv : nous permet de lire le dossier `.env` qu'on va mettre en place
- nodemon : nous permet de relancer automatiquement notre serveur
- pg : créer une connexion entre docker et express

### step 2 : création du fichier .env

dans le fichier .env nous allons mettre en place les informations de connexion à la bdd
(si vous avez le moindre doute pensez à relire le projet adatabase sur la partie `docker-compose`)

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=adatabase
POSTGRES_PORT=5432
```

⚠️ pensez à bien changer le type-module en `module` dans le package.json pour pouvoir utiliser les imports ES6

```json
{
  "type": "module",
  "scripts": {
    "start": "nodemon src/server.js"
  }
}
```

### step 3 : création du serveur express

dans un fichier `db.js` nous allons mettre en place le code suivant :

```js
// on importe les modules nécessaires
// on initialise dotenv pour lire le fichier .env
import dotenv from "dotenv";
import { Pool } from "pg";
// on crée une instance d'express
dotenv.config();
// on configure la connexion à la bdd avec les variables d'environnement
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: "localhost",
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// on tente de se connecter à la bdd et on affiche un message en fonction du résultat
pool
  .connect()
  .then(() => {
    console.log("🟢 Connected to the database");
  })
  .catch((err) => {
    console.error("🔴 Error connecting to the database", err);
  });
export default pool;
```

ce fichier va genérer la connexion à la bdd via le `pool` de pg

nous allons créer un ficher `server.js` dans lequel nous allons mettre le code suivant :

```js
import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello Ada!\n");
});

app.listen(3000, () => {
  console.log("🚀 Serveur lancé : http://localhost:3000");
});
```

nous avons donc un serveur express qui écoute sur le port 3000 et qui affiche "Hello Ada!" à la racine tout en se connectant à la bdd (grace au port)

niveau arborescence nous aurons donc :

```project-adapi/
└── src
  ├── db.js
  └── server.js
├── package.json
├── package-lock.json
├── .env
```

il nous suffit ensuite de lancer le serveur avec la commande :

```shell
nodemon src/server.js
```

## 🧰 Pré-requis techniques

Pour mener à bien ce projet, il est nécessaire de maîtriser :

- les bases du **terminal**
- les bases du **JavaScript**
- les bases du **SQL**

## 🧩 Fonctionnalités à développer

- [ ] Créer une route `GET` pour les **ressources**
- [ ] Créer une route `GET` pour une **ressource**
- [ ] Créer une route `POST` pour les **ressources**
- [ ] Créer une route `PUT` pour les **ressources**
- [ ] Créer une route `DELETE` pour les **ressources**
- [ ] Créer les même routes pour les **thèmes** / **skills** / **resources_skills**

> ⚠️ **Réalisez toutes les fonctionnalités obligatoires avant de passer aux bonus.**

## 🚫 Ce que vous ne devez pas faire

développer une interface front-end (html/css)

## 💎 Bonus possibles

- mettre en place swagger pour documenter l'api :

  - https://swagger.io/tools/swagger-ui/
  - https://www.npmjs.com/package/swagger-ui-express \
    ⚠️ pensez à bien mettre en placer le swagger.json dans le projet à la racine via ce lien :
    - https://editor.swagger.io/
    - vous pouvez sinon copier/coller ce code de base :

  ```json
  {
    "openapi": "3.0.0",
    "info": {
      "title": "My API",
      "version": "1.0.0"
    },
    "paths": {
      "/resources": {
        "get": {
          "summary": "List all resources",
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      }
    }
  }
  ```

  si vous avez besoin d'aide n'hésitez pas à demander à un.e responsable de formation

- Ajouter une table **projects** pour définir les compétences nécessaires à la réalisation d'un projet :

  - le projet aura besoin d'un **titre** et d'une **description**.
  - elle devra faire le lien avec les tables **skills** et **themes**.
  - Chaque projet pourra avoir plusieurs compétences et plusieurs thèmes associés.

- [ ] Créer les routes associées à la table **projets**
- [ ] Ajouter une route `GET /skills/:id/resources` pour récupérer toutes les ressources associées à une compétence donnée.
- [ ] Ajouter une route `GET /themes/:id/resources` pour récupérer toutes les ressources associées à un thème donné.

## 📦 Modalités d'évaluation

TODO: à copier en fonction de si c'est un projet de groupe ou individuel

## 🎓 Compétences à acquérir

- [ ] Je sais créer une API REST avec Express
- [ ] Je sais me connecter à une base de données PostgreSQL
- [ ] Je sais gérer les requêtes SQL avec pg
- [ ] Je sais utiliser dotenv pour gérer les variables d'environnement
- [ ] Je sais utiliser nodemon pour le développement
- [ ] Je sais structurer un projet Node.js avec Express
- [ ] Je sais créer des routes CRUD (Create, Read, Update, Delete) pour une API REST
- [ ] Je sais gérer les erreurs de connexion à la base de données
- [ ] Je sais utiliser les modules ES6 dans un projet Node.js

## 🎓 Soutenance

X aucune soutenance n'est prévue pour ce projet
