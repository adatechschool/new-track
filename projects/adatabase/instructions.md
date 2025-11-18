# 🗃️ Adatabase

-   **Durée :** 1 semaine
-   **Type de projet :** seul / pair programming
-   **Nom du repo :** `adatabase-[nom_github]`

## 📦 Modalités de rendu

L'ensemble des scripts SQL devront être pushé sur la branche `main` du projet du git.

> ⚠️ **Important :** Vous devez avoir _poussé_ (`git push`) votre **dernier commit la veille de la soutenance à minuit au plus tard**, afin qu'il soit pris en compte pour l'évaluation.

Les fichiers à rendre sont les suivants :

-   `migration_up.sql` contient l'ensemble du SQL pour créer les tables et enums de la base
-   `migration_down.sql` contient le SQL qui permet de supprimer toutes les tables (l'inverse de migration_up)
-   `seed.sql` remplit les tables de la base de données avec des données
-   `queries.sql` contient les requêtes SELECT pour récupérer certaines données de la base

```sh
adatabase ➤ tree
.
├── docker-compose.yml
├── migration_down.sql
├── migration_up.sql
├── queries.sql
└── seed.sql
```

## 🎯 Objectif du projet

Tu devras créer une petite base de données de gestion de ressources pédagogiques. Tu devras créer 4 scripts SQL : un pour créer la base de données, un pour la nettoyer, un troisième pour remplir les données et enfin un dernier avec des requêtes SELECT pour récupérer des données en fonction de certains filtres.

## ⚙️ Initialisation du projet

Pour pouvoir utiliser postgres en local, on va créer une instance de base de données grâce à docker.

1. Installe docker sur ton ordi : https://www.docker.com/products/docker-desktop/
2. Crée le dossier (et le repo git pour ton projet)
3. Copie le code suivant dans le dossier du projet dans un fichier `docker-compose.yml` :

```yaml
version: "3.8"

services:
    postgres:
        image: postgres:17.5-alpine
        container_name: adatabase_local
        environment:
            POSTGRES_USER: postgres
            POSTGRES_PASSWORD: postgres
            POSTGRES_DB: adatabase
        ports:
            - "5432:5432"
        volumes:
            - postgres_data:/var/lib/postgresql/data

volumes:
    postgres_data:
```

4. Tu peux cliqué directement dans vscode sur **Run services** ou utiliser la commande `docker compose up -d` pour démarrer la base de données
5. Pour tester tes requêtes, tu peux utiliser un outil comme dbeaver ou installer l'extension PostgreSQL dans VSCode :

![](./postgres-extension-install.png)

Une fois l'extension installée, tu peux connecter ta base de données en remplissant les infos à partir du docker :

![](./postgres-extension-connection.png)

-   Server name : localhost
-   User : postgres
-   Password : postgres
-   Database : adatabase

Ensuite, tu peux simplement exécuter les requêtes en créant un fichier .sql :

![](./postgres-extension-run.png)

## 🎓 Compétences à acquérir

-   [ ] Je sais créer des tables SQL avec des contraintes
-   [ ] Je sais utiliser des clés étrangères et des relations entre tables
-   [ ] Je sais insérer des données dans une base de données
-   [ ] Je sais écrire des requêtes SELECT avec différents filtres
-   [ ] Je sais utiliser les jointures SQL

## 🧩 Fonctionnalités à développer

> ⚠️ **Réalisez toutes les fonctionnalités obligatoires avant de passer aux bonus.**

-   [ ] Crée les tables comme sur le schéma ci-dessous :

![](./schema.png)

-   **themes** permet de grouper l'ensemble des ressources sur un thème précis (comme 'Frontend' ou 'Base de données' par exemple)
-   **resources** contient toutes les informations sur une ressource, notamment son titre et le lien vers la ressource (url)
-   **skills** représente une compétence en particulier qui est abordée par la ressource. Contrairement au thème, une ressource peut concerner plusieurs compétences
-   **resources_skills** permet de faire le lien entre une ressource et une compétence
-   **resource_type** enum permettant de limiter le type de ressources possible à une liste prédéterminée : `guide`, `video`, `exercice`, `projet` (⚠️ n'existe qu'avec Postgres)

> 💾 Une fois que toutes tes requêtes fonctionnent, sauvegarde-les dans un fichier `migration_up.sql`.

-   [ ] Écris un script pour nettoyer la base de données. L'idée c'est de faire l'inverse de `migration_up.sql`, écris le SQL pour supprimer toutes les tables de la base de données.

> 💾 Une fois que toutes tes requêtes fonctionnent, sauvegarde-les dans un fichier `migration_down.sql`.

-   [ ] Dans cette étape, le but est de remplir la base de données. Pour ce faire, écris le code SQL pour insérer des lignes dans chacune des tables. Fais bien attention à avoir des données dans chaque table.

Voici des exemples de données à insérer (tu peux en ajouter d'autres) :

**Table themes :**

| id  | name            |
| --- | --------------- |
| 1   | Frontend        |
| 2   | Backend         |
| 3   | Base de données |
| 4   | DevOps          |

**Table resources :**

| id  | title                 | url                      | description          | type     | is_ada | theme_id |
| --- | --------------------- | ------------------------ | -------------------- | -------- | ------ | -------- |
| 1   | Introduction à React  | https://react.dev        | Guide officiel React | guide    | false  | 1        |
| 2   | SQL pour débutants    | https://example.com/sql  | Cours SQL complet    | video    | false  | 3        |
| 3   | Exercices JavaScript  | https://example.com/js   | Pratique JS          | exercice | false  | 1        |
| 4   | Créer une API en node | https://example.com/node | Projet node          | projet   | false  | 2        |

**Table skills :**

| id  | name       |
| --- | ---------- |
| 1   | JavaScript |
| 2   | React      |
| 3   | SQL        |
| 4   | PostgreSQL |
| 5   | Node.js    |

**Table resources_skills (exemples de liaisons) :**

| resource_id | skill_id |
| ----------- | -------- |
| 1           | 1        |
| 1           | 2        |
| 2           | 3        |
| 2           | 4        |
| 3           | 1        |
| 4           | 1        |
| 4           | 5        |

> 💾 Une fois que toutes tes requêtes fonctionnent, sauvegarde-les dans un fichier `seed.sql`.

-   [ ] Dernière étape, récupérer les données. Écris les requêtes SQL de sélection suivantes :
    -   [ ] Récupérer la liste des thèmes
    -   [ ] Récupérer toutes les ressources triées par date de mise à jour
    -   [ ] Récupérer uniquement le nom et l'url des ressources de type exercice
    -   [ ] Récupérer le titre et la description des ressources d'Ada uniquement
    -   [ ] Récupérer les ressources qui ont la compétence JavaScript associée
    -   [ ] Récupérer les ressources dont le titre contient le mot "react" (avec ou sans majuscules)

> 💾 Sauvegarde toutes ces requêtes dans un fichier `queries.sql`.

## 💎 Bonus possibles

-   [ ] Récupérer la liste des thèmes avec le nombre de ressources par thème
-   [ ] Récupérer le nom et l'url de toutes les ressources avec un tableau/liste contenant l'ensemble de leurs skills associés
-   [ ] Récupérer les 5 ressources les plus récentes avec leur thème
-   [ ] Récupérer toutes les compétences qui ne sont associées à aucune ressource
