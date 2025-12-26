# 📁 Trackada

-   **Durée :** 1 semaine
-   **Type de projet :** seul / pair programming
-   **Nom du repo :** `trackada-[nom_github]`

## 📦 Modalités de rendu

Vous pouvez développer en local sur votre ordinateur, mais pensez à push régulièrement sur la branche `main` du repository git.

> ⚠️ **Important :** Vous devez avoir _poussé_ (`git push`) votre **dernier commit la veille de la soutenance à minuit au plus tard**, afin qu’il soit pris en compte pour l’évaluation.

## 🎯 Objectif du projet

Le but de ce projet est de développer un outil en ligne de commande en utilisant [Node.js](https://nodejs.org/en).

Le script devra charger un fichier JSON qui décrit la track d’Ada, puis vérifier que les dossiers des projets sont créés aux bons endroits et avec les bons noms.

Le script devra également vérifier que les fichiers et dossiers requis sont bien présents dans le dossier du projet.

Enfin, il devra s’assurer que le repository git du projet a été correctement initialisé.

> 💡 Pour le moment, vous n’avez que les projets `adapage` et `trackada` que vous êtes en train de créer, mais vous pouvez créer d’autres dossiers et fichiers de projets pour vérifier le bon fonctionnement du script.

## ⚙️ Initialisation du projet

Pour ce projet, on va simplement récupérer le fichier `track.json` fourni et créer un fichier `checktrack.js` à l’intérieur du repository git `trackada`.

```bash
~/ada/trackage ls
checktrack.js   instructions.md track.json
```

Pour tester votre script, vous pouvez utiliser la commande suivante à la racine du projet :

```
node checktrack.js
```

Pour ce projet, il n’est pas nécessaire d’installer de librairie. On va directement utiliser des fonctions disponibles dans Node.js. Pour ce faire, il suffit de les importer dans le fichier `checktrack.js`.

Par exemple :

```js
import {readFileSync} from "fs";
```

Pour le projet, vous aurez besoin des fonctions suivantes :

-   `readFileSync` et `existsSync` du module `fs`
-   `join` du module `path`
-   `homedir` du module `os`

## 🧰 Pré-requis techniques

Pour mener à bien ce projet, il est nécessaire de maîtriser :

-   les bases du **terminal**
-   les bases du **JavaScript**

## 🧩 Fonctionnalités à développer

> ⚠️ **Réalisez toutes les fonctionnalités obligatoires avant de passer aux bonus.**

-   [ ] Charger et parser en JSON le fichier `track.json`
-   [ ] Vérifier que le dossier `ada` existe dans le dossier home (`~`)
-   [ ] Vérifier que les dossiers des projets existent au bon endroit et sont correctement nommés
-   [ ] Vérifier que les projets sont bien initialisés comme des projets git
-   [ ] Vérifier que chaque projet contient bien les fichiers requis au bon endroit (le tableau `required` dans `track.json`)
-   [ ] Générer le bon affichage pour la commande à partir des informations ci-dessus

### Gestion de l’affichage

Si le dossier `ada` est bien créé dans la home, on affiche :

```
✅ dossier ada
```

Pour chaque projet, si tout est bon, on affiche :

```
✅ dossier du projet <nom_du_projet>
```

S’il y a des erreurs, on affiche :

```
❌ dossier du projet <nom_du_projet>
```

Ensuite, on affiche chaque erreur à la ligne avec un `-`.

Première erreur possible, lorsque le dossier du projet n’existe pas ou est mal nommé :

```
- le dossier n'existe pas ou n'est pas nommé correctement
```

Si le repository git n’est pas correctement initialisé, on affiche :

```
- le repository git n'est pas initialisé
```

S’il manque des fichiers, on affiche la liste des fichiers manquants. S’il y en a plusieurs, on les sépare par des virgules et le mot “et” entre l’avant-dernier et le dernier :

```
- il manque index.js
- il manque index.js et index.html
- il manque index.js, index.html et index.css
```

### Ordre d’affichage des erreurs

Pour chaque projet, les erreurs doivent être affichées **dans cet ordre strict** :

1. **Dossier incorrect**
2. **Repository git non initialisé**
3. **Fichiers manquants**

### Pourcentage final

Le pourcentage de projets correctement initialisés doit être **arrondi à l’entier le plus proche**.

Exemples :

-   4/12 → 33%
-   2/12 → 17%
-   11/12 → 92%

### Exemple d'affichage complet

```
✅ dossier ada

✅ dossier du projet adapage

❌ dossier du projet trackada
- le repository git n'est pas initialisé

❌ dossier du projet quizada
- le repository git n'est pas initialisé
- il manque index.js

❌ dossier du projet quizada
- le dossier n'existe pas où n'est pas nommé correctement

❌ dossier du projet adalgo
- le repository git n'est pas initialisé
- il manque exo-1, exos-2 et node_modules/vitests

❌ dossier du projet adataviz
- le repository git n'est pas initialisé
- il manque index.js

❌ dossier du projet adatabase
- le dossier n'existe pas où n'est pas nommé correctement

❌ dossier du projet adapi
- le dossier n'existe pas où n'est pas nommé correctement

❌ dossier du projet adashboard
- le dossier n'existe pas où n'est pas nommé correctement

❌ dossier du projet adaverse
- le dossier n'existe pas où n'est pas nommé correctement

❌ dossier du projet adaverse-2
- le dossier n'existe pas où n'est pas nommé correctement

❌ 16% des projets sont initialisés correctement (2/12)
```

## 🚫 Ce que vous ne devez pas faire

-   Utiliser des bibliothèques externes
-   Faire une page HTML ou CSS
-   Utiliser autre chose que du JS et les fonctions présentes dans le langage JS et dans Node

## 💎 Bonus possibles

-   Vérifier la remote du repository git
-   Ajouter des couleurs

## ✅ Modalités d’évaluation

L’évaluation se déroulera sous forme de soutenance. L'apprenant·e devra présenter une partie des fonctionnalités sur lesquelles iel a travaillé.

Chaque personne devra être capable :

-   d’expliquer clairement son code à l’oral,
-   de réaliser une démonstration fonctionnelle,
-   de naviguer aisément dans son code durant la présentation.

Cette première partie durera **environ 5 minutes par personne**.

Ensuite, l'apprenant·e répondra à **une à deux questions techniques**, afin de vérifier ses compétences (basées sur le référentiel _Compétences à acquérir_ ci-dessous).
Cette phase durera **environ 2 minutes par personne**.

## 🎓 Compétences à acquérir

-   [ ] Je sais utiliser les boucles `for`
-   [ ] Je sais utiliser les conditions
-   [ ] Je sais exécuter un script avec Node
-   [ ] Je sais importer et utiliser les fonctions natives des modules Node
-   [ ] Je sais importer et parser un fichier JSON
-   [ ] Je sais concevoir un algorithme pour répondre à des instructions précises
-   [ ] Je sais expliquer comment fonctionnent les chemins de fichiers et dossiers (path)
