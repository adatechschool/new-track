# ✅ Adashboard

- **Durée :** 1 semaine
- **Type de projet :** seul / pair programming
- **Nom du repo :** `[nom_promo]-adashboard-[nom_github]`

## 📦 Modalités de rendu

TODO: préciser en fonction de l'avancement sur git

> ⚠️ **Important :** Vous devez avoir _poussé_ (`git push`) votre **dernier commit à la date de rendu à minuit au plus tard**, afin qu’il soit pris en compte pour l’évaluation.

## 🎯 Objectif du projet

Ce projet a pour objectif de développer un tableau de bord (dashboard) en React permettant d’afficher et de visualiser des données provenant d’une base de données PostgreSQL. \
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
- les bases de **PostgresQL**
- les bases de **ExpressJS**
- les bases de **JavaScript**

## 🧩 Fonctionnalités à développer

> ⚠️ **Réalisez toutes les fonctionnalités obligatoires avant de passer aux bonus.**

### 1. Connexion à la base de données

- [ ] mise en place d'une bdd avec docker / postgresQL :
  - créer une nouvelle base de données nommée `dashboard` => elle contiendra un nom et une date de création
  - créer une nouvelle base de données nommée `skills` => elle contiendra le nom d'une compétence et fera le lien avec `dashboard`
  - créer une nouvelle base de données nommée `tasks` => elle contiendra un nom, une validation et une relation avec les compétences
- [ ] Configurer la connexion à la base de données PostgreSQL depuis le backend Express :
  - installer les dépendances nécessaires (pg, dotenv)
  - créer un fichier de configuration pour la connexion à la base de données
- [ ] Créer des modèles pour les données à récupérer

### 2. Récupération des données

- [ ] Créer des routes API dans Express pour récupérer les données de la base de données :
  - une route pour récupérer l'ensemble des dashboards
  - une route pour récupérer les compétences associées à un dashboard
  - une route pour récupérer les tâches associées à une compétence
- [ ] Tester les routes API avec un outil comme ThunderClient ou Postman
- [ ] Gérer les erreurs et les cas où aucune donnée n'est trouvée

### 3. Affichage des données dans le frontend React

- [ ] Créer des composants React pour afficher les données récupérées :
  - un composant pour afficher la liste des dashboards
  - un composant pour afficher les compétences associées à un dashboard
  - un composant pour afficher les tâches associées à une compétence
- [ ] Utiliser une progress bar pour afficher le pourcentage de tâches validées pour chaque compétence
- [ ] Styliser les composants avec CSS pour améliorer l'apparence

## 🚫 Ce que vous ne devez pas faire

utiliser un autre framework frontend que React \
coder votre propre backend/base de données \
mettre en place une authentification utilisateur \

## 💎 Bonus possibles

- [ ] Ajouter des graphiques pour visualiser les données (par exemple, un graphique à barres pour le nombre de tâches par compétence)
- [ ] Ajouter des filtres pour afficher les dashboards en fonction de certains critères (par exemple, par date de création)
- [ ] Modifier la base de données pour afficher des données plus personnelles (film, série, livre, jeu vidéo, etc.) => vous pouvez dire si ce film remplit un certain nombre de "tâches" alors c'est un bon film !
- [ ] Ajouter une verification de l'api avec swagger

## 📦 Modalités d'évaluation

❌ Utiliser un autre framework frontend que React
❌ Coder votre propre backend/base de données

## 🎓 Compétences à acquérir

- [ ] Je comprends ce qu'est une base de données relationnelle
- [ ] Je sais configurer une base de données PostgreSQL avec Docker
- [ ] Je sais expliquer ce qu'est le CRUD
- [ ] Je sais configurer une connexion à une base de données PostgreSQL depuis un backend Express
- [ ] Je sais comment intégrer du React avec un backend Express
- [ ] Je sais utiliser les useEffect et useState dans React
- [ ] Je sais ce qu'est un props dans React
- [ ] Je sais ce qu'est un state dans React
- [ ] Je sais ce qu'est un components dans React
- [ ] Je sais

- [ ] Je sais créer des routes API pour récupérer des données depuis une base de données
- [ ] Je sais créer des composants React pour afficher des données récupérées depuis une API
- [ ] Je sais utiliser une progress bar pour afficher un pourcentage de progression

## 🎓 Soutenance

TODO: préciser la date et l'heure de la soutenance du projet
