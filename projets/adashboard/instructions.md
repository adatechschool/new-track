# ✅ Adashboard

- **Durée :** 1 semaine
- **Type de projet :** seul / pair programming
- **Nom du repo :** `[nom_promo]-adashboard-[nom_github]`

## 📦 Modalités de rendu

TODO: préciser en fonction de l'avancement sur git

> ⚠️ **Important :** Vous devez avoir _poussé_ (`git push`) votre **dernier commit à la date de rendu à minuit au plus tard**, afin qu’il soit pris en compte pour l’évaluation.

## 🎯 Objectif du projet

Ce projet a pour objectif de développer un tableau de bord (dashboard) en React permettant d’afficher et de visualiser des données provenant de votre backend ExpressJS. \
L’application devra se connecter à la base de données, récupérer les données nécessaires, et les afficher de manière claire et interactive à l’aide de graphiques et de tableaux.

## 🧱 Stack technique (obligatoire)

| Élément            | Technologie | Lien                        |
| ------------------ | ----------- | --------------------------- |
| framework frontend | React       | https://fr.reactjs.org/     |
| environnement      | Node.js     | https://nodejs.org/         |
| framework backend  | Express     | https://expressjs.com/      |
| Base de données    | PostgreSQL  | https://www.postgresql.org/ |

## ⚙️ Initialisation du projet

1. Ouvre un terminal dans votre dossier de vos projets
2. Crée le projet avec `pnpm create vite`
3. Sélectionne 'React' pour le framework
4. Sélectionne 'JavaScript' pour le langage
5. Installe les dépendances automatiquement
6. Utilise `cd adashboard` pour aller dans le dossier, puis `code .` pour l'ouvrir dans VSCode

## 🧰 Pré-requis techniques

Pour mener à bien ce projet, il est nécessaire de maîtriser :

- les bases du **terminal**
- les bases de **PostgreSQL**
- les bases de **ExpressJS**
- les bases de **JavaScript**

## 🧩 Fonctionnalités à développer

> ⚠️ **Réalisez toutes les fonctionnalités obligatoires avant de passer aux bonus.**

nous vous invitons a reprendre le projet adapi pour pouvoir mettre en place votre back rapidement

## 1. Affichage les données dans notre front

- [ ] Mettre en place la logique pour récupérer les données depuis le backend Express en utilisant `fetch`.
- [ ] Créer des composants React pour afficher les données récupérées :
  - un composant pour afficher les compétences
  - un composant pour afficher les tâches associées à une compétence
    ![](./schema-front.png)
- [ ] Utiliser une progress bar via \
       `<progress/>` => https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/progress \
       ou
      https://www.npmjs.com/package/@ramonak/react-progress-bar \
       pour afficher le pourcentage de tâches validées pour chaque tâche
      ![](./progress-bar.png)
- [ ] Mettez en place un bouton pour créer des compétences ("je sais ...")
      ![](./ajout-competence.png)
- [ ] Rajouter un bouton pour supprimer une compétence
      ![](./remove-button.png)
- [ ] Styliser les composants avec un CSS pour améliorer l'apparence

## 🚫 Ce que vous ne devez pas faire

❌ Utiliser un autre framework frontend que React \
❌ Utiliser un backend autre que Express \
❌ Utiliser une base de données autre que PostgreSQL \
❌ Mettre en place une authentification utilisateur

## 💎 Bonus possibles

- [ ] Ajouter des graphiques pour visualiser les données (par exemple, un graphique à barres pour le nombre de tâches par compétence)
- [ ] Ajouter des filtres pour afficher les dashboards en fonction de certains critères (par exemple, par date de création)
- [ ] Modifier la base de données pour afficher des données plus personnelles (film, série, livre, jeu vidéo, etc.) => vous pouvez dire si ce film remplit un certain nombre de "tâches" alors c'est un bon film !
- [ ] Ajouter des animations pour améliorer l'expérience utilisateur

## 🎓 Compétences à acquérir

- [ ] Je comprends ce qu'est une base de données relationnelle
- [ ] Je sais configurer une base de données PostgreSQL avec Docker
- [ ] Je sais expliquer ce qu'est le CRUD
- [ ] Je sais expliquer le fonctionnement d'une API RESTful
- [ ] Je sais configurer une connexion à une base de données PostgreSQL depuis un backend Express
- [ ] Je sais comment intégrer du React avec un backend Express
- [ ] Je sais utiliser les useEffect et useState dans React
- [ ] Je sais ce qu'est une prop dans React
- [ ] Je sais ce qu'est un state dans React
- [ ] Je sais ce qu'est un component dans React
- [ ] Je sais utiliser des fetch pour récupérer des données API
- [ ] Je sais comment fonctionne les fonctions asynchrones
- [ ] Je sais manipuler du CRUD directement via mon front en utilisant fetch
- [ ] Je sais utiliser une progress bar pour afficher un pourcentage de progression

## 🎓 Soutenance

X aucune soutenance n'est prévue pour ce projet
