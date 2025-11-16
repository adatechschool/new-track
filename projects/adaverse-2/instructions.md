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

TODO: add lib for auth, maybe better-auth ?

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

## 🧩 Fonctionnalités à développer

> ⚠️ **Réalisez toutes les fonctionnalités obligatoires avant de passer aux bonus.**

TODO

## 💎 Bonus possibles

-   TODO
