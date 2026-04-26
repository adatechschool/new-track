# 🚀 Alternative – Projet Demo Day

-   **Durée :** 4 semaines
-   **Type de projet :** individuel

## 🎯 Objectif du projet

Ce parcours s'adresse aux personnes qui ont déjà un projet personnel en cours et qui souhaitent le préparer pour le Demo Day plutôt que de travailler sur adaverse-2.

L'objectif est double : continuer à développer ton projet pour qu'il soit présentable le jour J, **et** y intégrer les 7 impératifs techniques listés ci-dessous. Ces impératifs ne sont pas des fonctionnalités à inventer pour le plaisir — ils doivent s'intégrer naturellement dans ce que tu construis. Il est possible que tu en aies déjà mis certains en place. Tant mieux : vérifie qu'ils sont bien là, et passe au reste.

## 🤖 Sur l'utilisation de l'IA

Ce projet est probablement quelque chose que tu vas présenter, décrire et expliquer en entretien ou à ton examen. C'est précisément pour ça que comprendre ce que tu as codé compte.

Lorsqu'on te posera des questions sur ton projet — tes choix techniques, ton architecture, telle ou telle partie du code — tu devras être capable de répondre. Plus tu auras délégué à un outil sans comprendre ce qu'il produisait, plus ce sera difficile. Les personnes en face de toi verront rapidement si tu t'es approprié·e ton code ou non, et iront creuser là où tu es moins à l'aise.

**Notre recommandation : évite l'IA autant que possible.** Lorsque tu es bloqué·e, commence par chercher par toi-même : documentation officielle, Google, Stack Overflow, tes pairs... Ces réflexes sont essentiels dans le métier.

Si, après avoir cherché sérieusement, tu es toujours bloqué·e, tu peux te tourner vers ChatGPT ou Claude — mais pas pour obtenir une solution toute faite. **Questionne-le jusqu'à comprendre** : pourquoi le problème se produit, ce que fait la solution proposée, et comment éviter de retomber dans le même piège.

Si tu n'es pas capable d'expliquer ce que tu as intégré dans ton code, c'est qu'il ne t'appartient pas encore.

## 🧱 Stack technique

La stack est entièrement **libre** — tu utilises celle de ton projet. Les exemples ci-dessous ne sont pas des obligations, juste des références que tu connais peut-être :

| Élément   | Exemples (non exhaustifs)   |
| --------- | --------------------------- |
| Framework | Next.js, Express, React     |
| ORM       | Drizzle ORM, Prisma         |
| Tests     | Vitest, Jest                |

## 🧩 Impératifs techniques

Ces 7 éléments sont ce qu'on veut voir dans ton projet d'ici la fin des 4 semaines. Certains seront abordés en cours, d'autres l'ont déjà été ; et pour certains, tu les as peut-être déjà mis en place.

> ⚠️ **Réalise tous les impératifs avant de passer aux bonus.**

### 1. Une route dynamique (URL param)

Une URL qui contient un segment variable, récupéré dynamiquement côté serveur pour charger les données correspondantes.

> 💡 En Next.js, c'est une page `[slug]` ou `[id]`. En Express, c'est une route `/:id`. Le principe est le même partout.

-   [ ] Implémenter au moins une route avec un paramètre dynamique dans l'URL

### 2. Une base de données et des migrations

Les données de ton application doivent être persistées dans une vraie base de données, et tout changement de schéma doit passer par des migrations.

> ℹ️ Une migration, c'est un fichier qui décrit une modification du schéma de la base (ajout d'une colonne, création d'une table…). Ça permet de garder une trace de l'évolution du schéma et de reproduire l'état de la base facilement.

-   [ ] Connecter une base de données au projet
-   [ ] Gérer les évolutions du schéma via des migrations

### 3. De l'authentification et des routes protégées

Les utilisateur·ices doivent pouvoir créer un compte et se connecter. Certaines parties de l'application ne doivent être accessibles qu'aux personnes connectées.

> 💡 Tu peux utiliser une bibliothèque (Better Auth, NextAuth…) ou implémenter la logique toi-même.

-   [ ] Permettre à un·e utilisateur·ice de créer un compte et de se connecter
-   [ ] Protéger au moins une route ou une page : redirection automatique si non connecté·e

### 4. Des formulaires avec une validation d'input robuste

Partout où un·e utilisateur·ice peut soumettre des données qui modifient la base de données, ces données doivent être validées **côté serveur** — pas seulement côté client.

> 💡 [Zod](https://zod.dev/) est une bibliothèque courante pour ça, mais tu peux utiliser ce que tu veux.

> ⚠️ Ce n'est pas juste un formulaire : tous les points d'entrée qui écrivent en base doivent être couverts.

-   [ ] Valider les inputs côté serveur sur tous les formulaires qui modifient des données
-   [ ] Afficher des messages d'erreur explicites si la validation échoue

### 5. Une suite de tests

Tu n'as pas besoin de couvrir tout le code, mais les fonctionnalités principales de ton application — là où il y a le plus de logique et le plus de chemins possibles — doivent être testées.

-   [ ] Écrire des tests pour les fonctionnalités principales de l'application

### 6. Une CI sur les push ou les PR

Les tests doivent (à terme) s'exécuter automatiquement à chaque fois que du code est poussé ou qu'une Pull Request est ouverte.

-   [ ] Configurer **GitHub Actions** pour lancer les tests sur chaque push ou PR

### 7. Une gestion d'erreurs propre

Les erreurs doivent être traitées de manière centralisée, pas dispersées à travers le code. L'utilisateur·ice ne doit jamais se retrouver face à une erreur non gérée.

> 💡 En Next.js, c'est une page `error.tsx`. En Express, c'est un middleware de gestion d'erreurs.

-   [ ] Centraliser la gestion des erreurs (middleware ou page dédiée)

## 💎 Bonus

-   **Tests E2E** : simuler des scénarios utilisateur·ice complets avec [Playwright](https://playwright.dev/) ou [Cypress](https://www.cypress.io/)
-   **Déploiement continu (CD)** : déployer automatiquement l'application à chaque merge sur `main` avec GitHub Actions

## ✅ Modalité d'évaluation

### 📍 Checkpoint — Semaine 2

Un point de contrôle informel, en même temps que la soutenance du groupe adaverse-2. Il n'est pas obligatoire d'avoir tout fini à ce stade — c'est l'occasion de faire le point sur l'avancement, d'identifier les blocages, et de planifier la suite.

### 📍 Checkpoint final — Semaine 4

Présentation de l'état du projet à l'équipe pédagogique. L'occasion de recevoir des retours et des recommandations avant le Demo Day.

Chaque personne devra être capable :

-   d'expliquer clairement son code à l'oral,
-   de réaliser une démonstration fonctionnelle,
-   de naviguer aisément dans son code durant la présentation.

## 🎓 Compétences à acquérir

-   [ ] Je sais créer des routes avec des paramètres dynamiques dans l'URL
-   [ ] Je sais connecter une base de données à mon projet et gérer son schéma avec des migrations
-   [ ] Je sais créer un système de comptes utilisateur·ices avec connexion et déconnexion
-   [ ] Je sais protéger l'accès à certaines routes si l'utilisateur·ice n'est pas connecté·e
-   [ ] Je sais valider des données d'input côté serveur
-   [ ] Je sais écrire des tests automatisés pour les fonctionnalités principales de mon application
-   [ ] Je sais configurer une intégration continue (CI) avec GitHub Actions
-   [ ] Je sais gérer les erreurs de manière centralisée
