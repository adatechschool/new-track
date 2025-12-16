# ✅ Project

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

## 🚫 Ce que vous ne devez pas faire

TODO: les fonctionnalités à éviter qui sont hors sujet par rapport au projet

## 💎 Bonus possibles

TODO: l'ensemble des fonctionnalités bonus qui peuvent être développées une fois le projet terminé.

## 📦 Modalités d'évaluation

❌ Utiliser un autre framework frontend que React
❌ Coder votre propre backend/base de données

## 🎓 Compétences à acquérir

- [ ] Je sais...

## 🎓 Soutenance

TODO: préciser la date et l'heure de la soutenance du projet
