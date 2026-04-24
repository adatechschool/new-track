# 🌐 Adaverse 2.0

-   **Durée :** 2 semaines
-   **Type de projet :** groupe de 4
-   **Nom du repo :** `adaverse-2-[nom_github]`

## 📦 Modalités de rendu

Vous pouvez développer sur la branche `main`, mais le projet devra être livré sur **deux branches distinctes** :

-   `stable` → version **complète avec toutes les fonctionnalités obligatoires**, **sans bonus**.
-   `bonus` → version enrichie avec les **fonctionnalités bonus**.

Puisqu'il s'agit d'un travail en équipe, vous devrez adopter un **workflow Git structuré** : développez chaque fonctionnalité sur une **branche dédiée**, ouvrez des **Pull Requests** pour intégrer vos changements, et assurez-vous qu'**une autre personne de l'équipe** effectue une review avec des commentaires avant chaque merge.

> ⚠️ **Important :** Vous devez avoir _poussé_ (`git push`) votre **dernier commit à minuit au plus tard à la date de rendu transmise**, afin qu'il soit pris en compte pour l'évaluation.

## 🎯 Objectif du projet

Ce projet consiste à ajouter un système d'authentification au projet `adaverse`. Les utilisateur⋅ices non connecté⋅es pourront continuer à voir les projets sur le site, mais il faudra se connecter pour en proposer un nouveau. Les données des formulaires seront validées avec Zod. Une suite de tests automatisés sera mise en place et exécutée en CI sur chaque Pull Request. Enfin, les utilisateur⋅ices pourront avoir un rôle admin pour publier et dépublier des projets.

## 🤖 Sur l'utilisation de l'IA

Ce projet est avant tout un support d'apprentissage. À ce titre, **un projet inachevé mais compris vaut bien plus qu'un projet terminé mais opaque**. Le code que vous livrez n'a pas de valeur en lui-même — sa valeur est entièrement pédagogique : elle vient de ce que vous avez appris en le construisant.

Plus vous passez de temps à chercher, à tâtonner, à comprendre pourquoi quelque chose ne fonctionne pas, plus vous ancrez durablement les concepts. Les obstacles font partie de l'apprentissage — ils ne sont pas des accidents à contourner.

**Notre recommandation : évitez l'IA autant que possible.** Lorsque vous êtes bloqué·e, commencez par chercher la réponse par vous-même : documentation officielle, Google, Stack Overflow, vos pairs... Ces réflexes sont essentiels dans le métier.

Si, après avoir cherché sérieusement, vous êtes toujours bloqué·e, vous pouvez vous appuyer sur un outil comme ChatGPT ou Claude — mais pas pour obtenir une solution toute faite. **Questionnez-le jusqu'à comprendre** : pourquoi le problème se produit, ce que fait la solution proposée, et comment éviter de retomber dans le même piège. Si vous n'êtes pas capable d'expliquer ce que vous avez intégré dans votre code, c'est qu'il ne vous appartient pas encore.

## 🧱 Stack technique (obligatoire)

| Élément             | Technologie | Lien                                                               |
| ------------------- | ----------- | ------------------------------------------------------------------ |
| Framework fullstack | Next.js     | [https://nextjs.org/](https://nextjs.org/)                         |
| Framework CSS       | TailwindCSS | [https://tailwindcss.com/](https://tailwindcss.com/)               |
| ORM                 | Drizzle ORM | [https://orm.drizzle.team/](https://orm.drizzle.team/)             |
| Base de données     | Neon        | [https://neon.com/](https://neon.com/)                             |
| Langage             | TypeScript  | [https://www.typescriptlang.org/](https://www.typescriptlang.org/) |
| Authentification    | Better Auth | [http://better-auth.com/](http://better-auth.com/)                 |

## ⚙️ Initialisation du projet

La stack étant la même que dans le projet adaverse, tu peux y reprendre les instructions. On va juste y ajouter Better Auth, ce que tu peux faire en utilisant le guide **installer Better Auth**.

## 🚀 Déploiement

Tu peux utiliser **[Vercel](https://vercel.com/)**, la plateforme officielle pour héberger les applications **Next.js**.

Attention, n'oublie pas de spécifier la variable d'environnement pour te connecter à Neon sur Vercel (la même que dans ton fichier `.env`).

> 💡 Pensez à déployer le plus tôt possible, dès qu'une version basique fonctionnelle existe.

## 🧰 Pré-requis techniques

Pour mener à bien ce projet, il est nécessaire de maîtriser :

-   les bases du **terminal**
-   les bases du **JavaScript**
-   les bases du **React**
-   les bases du **SQL**
-   les bases du **développement backend**
-   l'utilisation d'une ORM
-   l'utilisation de Next.js

## 🧩 Fonctionnalités à développer

> ⚠️ **Réalisez toutes les fonctionnalités obligatoires avant de passer aux bonus.**

### 1. Système d'authentification

Le but de cette partie est d'ajouter le système d'authentification en utilisant Better Auth. Les utilisateur⋅ices doivent pouvoir créer un compte avec un email et un mot de passe, se connecter et se déconnecter. Un **nom d'utilisateur** (pseudo) sera également demandé à l'inscription, et c'est ce nom qui sera affiché publiquement — pas l'email.

> 💡 Better Auth génère automatiquement le schéma de la table utilisateur. Demandez-vous si ce schéma par défaut contient bien toutes les informations dont vous avez besoin pour votre application...

-   [ ] créer une page avec un formulaire d'inscription (nom d'utilisateur⋅ice, email, mot de passe)
-   [ ] créer une page avec un formulaire de connexion (email et mot de passe)
-   [ ] configurer Better Auth (création du client `auth.ts` et des actions `signup`, `signin` et `signout`)
-   [ ] gérer les erreurs et états de chargement des formulaires
-   [ ] ajouter un bouton de déconnexion dans la barre de navigation lorsque l'utilisateur⋅ice est connecté⋅e, sinon mettre 2 liens vers signin et signup
-   [ ] depuis les pages d'inscription et connexion, si l'utilisateur⋅ice est connecté⋅e, iel doit être redirigé⋅e sur la page d'accueil automatiquement

### 2. Rattachement des projets aux utilisateur⋅ices

Le but de cette partie est de lier les projets aux comptes utilisateur⋅ices.

> 💡 Pour lier un projet à son auteur⋅ice, demandez-vous si votre schéma de base de données actuel contient toutes les informations nécessaires...

-   [ ] Lorsqu'un⋅e utilisateur⋅ice propose un projet, faire en sorte qu'il soit lié à son compte en base de données
-   [ ] Afficher le nom de l'utilisateur⋅ice qui l'a proposé dans la liste des projets et sur la page de détail du projet

> ℹ️ Si des projets ont déjà été créés avant l'ajout de l'authentification, il est tout à fait normal qu'ils ne soient pas rattachés à un utilisateur. Pas besoin de les supprimer.

### 3. Validation des formulaires avec Zod

Les données envoyées via les formulaires devront être validées côté serveur avec [Zod](https://zod.dev/). Installez-le avec `npm install zod` et créez un schéma de validation pour chaque formulaire.

-   [ ] Valider les données du formulaire d'inscription :
    -   Nom d'utilisateur : lettres (majuscules et minuscules), chiffres, tirets (`-`) et points (`.`) uniquement
    -   Email : format email valide
    -   Mot de passe : 8 caractères minimum
-   [ ] Pour le formulaire de proposition de projet, identifiez vous-mêmes les validations pertinentes pour chaque champ

### 4. Tests automatisés

Vous devrez écrire une suite de tests automatisés en suivant la [documentation Next.js sur les tests](https://nextjs.org/docs/app/guides/testing), et les faire tourner automatiquement sur chaque Pull Request.

-   [ ] Écrire un minimum de 5 tests avec [Vitest](https://vitest.dev/) ou [Jest](https://jestjs.io/)
-   [ ] Mettre en place une CI avec **GitHub Actions** qui exécute les tests sur chaque Pull Request

### 5. Le rôle admin

Dans cette partie, on va ajouter un rôle admin aux utilisateur⋅ices. Les fonctionnalités listées ci-dessous ne devront être accessibles qu'aux admin.

-   [ ] Créer une page qui liste **tous** les projets et qui permet de publier ou de désactiver la publication d'un projet (attention : si un⋅e utilisateur⋅ice n'est pas admin, iel devra être automatiquement redirigé⋅e vers l'accueil depuis cette page)
-   [ ] Bannir un⋅e utilisateur⋅ice

### 6. Mobile et accessibilité

Attention, votre site devra être utilisable sur mobile avec un design adapté.

Les éléments utilisés devront également être accessibles (à minima avoir 100% dans les catégories Lighthouse accessibilité et best practices).

## 💎 Bonus

-   **Modifier/supprimer ses propres projets** : depuis la page d'un projet, un⋅e utilisateur⋅ice connecté⋅e pourra modifier ou supprimer les projets qu'iel a proposés
-   **Ajouter un lien GitHub sur le profil utilisateur⋅ice** : permettre d'associer un lien vers un profil GitHub à un⋅e utilisateur⋅ice, pour que son nom affiché soit cliquable et redirige vers son GitHub
-   **Confirmation de l'email et réinitialisation du mot de passe** : mettre en place la confirmation d'email à l'inscription et le reset de mot de passe, via un service d'envoi d'emails
-   **Déploiement continu (CD)** : après la CI, déployer automatiquement sur Vercel à chaque merge sur `main` — voir la [doc Vercel pour GitHub](https://vercel.com/docs/deployments/git) et la [doc GitHub Actions](https://docs.github.com/fr/actions)
-   Partage de projets sur les réseaux sociaux
-   Page de profil
-   Connexion et gestion de compte avec GitHub
-   Système de favoris
-   Ajouter un système d'upload d'image

## 🚀 Bonus ++

-   Système de recherche de projets (filtre, barre de recherche, "fulltext search")
-   Associer plusieurs utilisateur⋅ices à un projet
-   Bonus du projet `adaverse`
-   Soyez créatif⋅ves !

## ✅ Modalité d'évaluation

### 🎤 Soutenance (20 minutes)

L'évaluation se déroulera sous forme de soutenance. Chaque membre du groupe devra présenter une partie des fonctionnalités sur lesquelles iel a travaillé.

Chaque personne devra être capable :

-   d'expliquer clairement son code à l'oral,
-   de réaliser une démonstration fonctionnelle,
-   de naviguer aisément dans son code durant la présentation.

Cette première partie durera **environ 3 minutes par personne**.

Ensuite, chaque membre du groupe répondra à **une à deux questions techniques**, afin de vérifier ses compétences (basées sur le référentiel _Compétences à acquérir_ ci-dessous).
Cette phase durera **environ 2 minutes par personne**.

### 💻 Démo (5 minutes)

Le groupe devra préparer une **présentation complète du projet**, comprenant :

-   une démo fluide et représentative,
-   des slides clairs et synthétiques,
-   une explication des **choix techniques** effectués,
-   une mise en avant de l'**organisation du travail en équipe** (répartition des tâches, workflow Git avec branches et Pull Requests, revues de code, communication, etc.).

L'objectif est de montrer votre compréhension globale du projet, autant sur le plan technique que sur le plan méthodologique.

> ⚠️ Attention à bien répartir le temps de parole entre les 4 membres du groupe

## 🎓 Compétences à acquérir

-   [ ] Je sais créer un système de comptes utilisateur⋅ices avec email et mot de passe (signin, signup, signout)
-   [ ] Je sais utiliser les cookies pour sauvegarder une session utilisateur⋅ice
-   [ ] Je sais charger des données en fonction d'un compte utilisateur⋅ice connecté⋅e
-   [ ] Je sais protéger l'accès à certaines données si l'utilisateur⋅ice est connecté⋅e ou non
-   [ ] Je sais lier des données à un⋅e utilisateur⋅ice
-   [ ] Je sais gérer plusieurs rôles utilisateur⋅ices (user, admin)
-   [ ] Je sais effectuer des redirections entre les pages (par exemple, vers /auth/signin si l'utilisateur⋅ice n'est pas connecté⋅e)
-   [ ] Je sais valider des données de formulaire côté serveur avec Zod
-   [ ] Je sais écrire des tests automatisés et configurer une intégration continue (CI)
