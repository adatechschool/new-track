# 🌐 Adaverse 2.0

-   **Durée :** 2 semaine
-   **Type de projet :** groupe (4 à 6)
-   **Nom du repo :** `adaverse-2-[nom_github]`

## 📦 Modalités de rendu

Vous pouvez développer sur la branche `main`, mais le projet devra être livré sur **deux branches distinctes** :

-   `stable` → version **complète avec toutes les fonctionnalités obligatoires**, **sans bonus**.
-   `bonus` → version enrichie avec les **fonctionnalités bonus**.

> ⚠️ **Important :** Vous devez avoir _poussé_ (`git push`) votre **dernier commit la veille de la soutenance à minuit au plus tard**, afin qu’il soit pris en compte pour l’évaluation.

## 🎯 Objectif du projet

Ce projet consiste à ajouter un système d'authentification au projet `adaverse`. Les utilisateurs non connectés pourront continuer à voir les projets sur le site, mais il faudra se connecter pour proposer un nouveau projet. Il sera également possible d'ajouter des projets en favoris et de laisser des commentaires sur les projets lorsqu'on est connecté. Enfin, les utilistateur⋅ices pourront avoir un rôle admin. Dans ce cas, il pouront publier et depublier les projets du site.

## 🧱 Stack technique (obligatoire)

| Élément             | Technologie | Lien                            |
| ------------------- | ----------- | ------------------------------- |
| Framework fullstack | Next.js     | https://nextjs.org/             |
| Framework CSS       | TailwindCSS | https://tailwindcss.com/        |
| ORM                 | Drizzle ORM | https://orm.drizzle.team/       |
| Base de données     | Neon        | https://neon.com/               |
| Langage             | TypeScript  | https://www.typescriptlang.org/ |

## ⚙️ Initialisation du projet

La stack étant la même que dans le projet adaverse, tu peux y reprendre les instructons.

Pour l'authantification, vous devez installer : 
```bash
npm install better-auth
```

## 🚀 Déploiement

Tu peux utiliser **[Vercel](https://vercel.com/)** la plateforme officielle pour héberger les applications **Next.js**.

Attention, n'oublie pas de spécifier la variable d'environnement pour te connecter à Neon sur Vercel (la même que dans ton fichier `.env`).

> 💡 Pensez à déployer le plus tôt possible, dès qu’une version basique fonctionnelle existe.

## 🧰 Pré-requis techniques

Pour mener à bien ce projet, il est nécessaire de maîtriser :

-   les bases du **terminal**
-   les bases du **JavaScript**
-   les bases du **React**
-   les bases du **SQL**
-   les bases du **développement backend**
-   l'utilisation d'une ORM
-   l'utilisation de NextJS

## 🎓 Compétences à acquérir

-   [ ] Je sais créer un système de comptes utilisateur⋅ices avec email et mot de passe (signin, signup, signout)
-   [ ] Je sais utiliser les cookies pour sauvegarder une session utilisateur⋅ice
-   [ ] Je sais charger des données en fonction d'un compte utilisateur⋅ice connecté⋅e
-   [ ] Je sais proteger l'accès à certaines données si l'utilisateur⋅ice est connecté⋅e ou non
-   [ ] Je sais lier des données à un utilisateurs (commentaires, favoris)
-   [ ] Je sais gérer plusieurs rôles utilisateurs (user, admin)
-   [ ] Je sais gérer les commentaires sous mes projets

## 🧩 Fonctionnalités à développer

> ⚠️ **Réalisez toutes les fonctionnalités obligatoires avant de passer aux bonus.**

### 1 . mise en place de l'utilsateur 
- créer une table `users`, elle contiendra un **email** et un **mot de passe**
- elle aura aussi un role ("admin" ou "user")
- **une date de creation**
- chaque utilisateur peut :
    - créer un projet
    - laisser un commentaire
    - ajouter un projet 
- créer une table **commentaire** :
  - avec un **texte**
  - une référence vers le **projet concerné** et **l'utilisateur**

le role `admin` pourra : 
  - publier / refuser un projet
  - voir tous les projets
  - modifier l'état d'un projet
  - supprimer ou modifier les commentaires

### 2 . Système d'authentification

Cette partie sera le point de départ de notre projet côté front, nous vous invitons à bien vérifier si la partie **back** est bien stable avant de passer à celle-ci

- créer un formulaire d'inscription (email ou nom d'utilisateur + mot de passe)
- créer un formulaire de connexion (email ou nom d'utilisateur + mot de passe)
- gérer les erreurs des formulaires
- créer un bouton de déconnexion
- mettre en place la page "admin"
- pouvoir afficher le nom de l'utilisateur
- rediriger l'utilisateur vers `/` si l'utilisateur n'a pas le role `admin`
 
3 . Ajout des commentaires 
⚠️ cela ne s'applique que pour le `users` avec le role 'user' ⚠️
- possibilité de rajouter un commentaire sur chaque projet
- possibilité de supprimer un commentaire sur chaque projet
- possibilité de modifier un commentaire sur chaque projet
- impossibilité de supprimer / modifier le commentaire d'un autre utilisateur
- un commentaire ne peut pas être vide
- les commentaires doivent être trier, du plus récent au plus ancien

## 💎 Bonus possibles

-   système de recherche de projet avancé (filtre + barre de recherche)
-   Notation sur un projet (de 1 à 5 étoiles)
-   modification du profile avec une page dédier
-   intégration de la bibilothèque zod (https://zod.dev/)
