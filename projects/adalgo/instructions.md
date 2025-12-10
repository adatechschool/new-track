# 📁 Trackada

-   **Durée :** 1 semaine
-   **Type de projet :** seul / pair programming
-   **Nom du repo :** `trackada-[nom_github]`

## 📦 Modalités de rendu

Vous pouvez développer en local sur votre ordinateur, mais pensez à push régulièrement sur la branche `main` du repository git.

> ⚠️ **Important :** Vous devez avoir _poussé_ (`git push`) votre **dernier commit à la date communiquée à minuit au plus tard**, afin qu’il soit pris en compte pour l’évaluation.

## 🎯 Objectif du projet

L’objectif de ce projet est d’apprendre à utiliser les tests unitaires.

Pour cela, vous devrez réaliser plusieurs exercices dans lesquels :

-   certaines fonctions seront déjà écrites : vous devrez créer des tests pour vérifier leur bon fonctionnement ;
-   certains tests seront déjà fournis : vous devrez alors implémenter les fonctions de manière à ce qu’elles passent ces tests ;
-   parfois, vous devrez écrire à la fois le code des fonctions **et** les tests associés (partiellement ou en totalité).

Toutes les fonctions seront regroupées dans un dossier `src`.
Un sous-dossier `src/bonus` contiendra les fonctions bonus.

Les fichiers respecteront tous le format :
`n-nomDeLaFonction.js` et `n-nomDeLaFonction.test.js`.

Les exercices doivent être réalisés **dans l’ordre**: `1-chocolatine.js`, puis `2-arrayToFrench.js`, etc.

Pour chaque fonction, les instructions seront indiquées directement dans le code sous forme de commentaires en anglais. Votre objectif sera donc soit d’implémenter la fonction, soit d’écrire des tests couvrant un maximum de cas d’utilisation potentiels. Les tests à implémenter seront indiqués avec des commentaires de type `// TODO`.

## ⚙️ Initialisation du projet

Pour ce projet, nous allons utiliser `npm` ou `pnpm` afin d’installer la bibliothèque de tests unitaires **Vitest**.
Après avoir copié le dossier `src` à la racine de votre projet, installez Vitest avec la commande :

```bash
npm install vitest # ou
pnpm install vitest
```

(Si cela ne fonctionne pas, lancez d’abord `npm init` ou `pnpm init`.)

Ensuite, ajoutez un script `test` pour exécuter vos tests directement avec `pnpm`.
Pour cela, ouvrez le fichier `package.json` et ajoutez le script suivant :

```json
{
    "scripts": {
        "test": "vitest"
    },
    "dependencies": {
        "vitest": "^4.0.15"
    }
}
```

Vous pouvez maintenant exécuter les tests en lançant :

```
pnpm test # ou
npm run test
```

Comme vous n’avez pas encore réalisé les exercices, vous devriez obtenir des erreurs similaires à celle-ci :

```
DEV  v4.0.15 /Users/jeremtab/Projects/new-track/projects/adalgo

 ❯ src/1-chocolatine.test.js (1 test | 1 failed) 3ms
   × chocolatine 3ms

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL  src/1-chocolatine.test.js > chocolatine
AssertionError: expected undefined to be 'chocolatine' // Object.is equality

- Expected:
"chocolatine"

+ Received:
undefined
```

> 💡 Les tests sont relancés automatiquement à chaque modification d’un fichier.
> Pour revenir au terminal, utilisez `Ctrl + C`.

## 🧰 Pré-requis techniques

Pour mener à bien ce projet, il est nécessaire de maîtriser :

-   les bases du **terminal**
-   les bases du **JavaScript**

## 🧩 Fonctionnalités à développer

En suivant l’ordre des fichiers présents dans le dossier src, implémentez chaque fonction et/ou les tests associés afin de respecter les instructions indiquées dans le code et de faire en sorte que tous les tests unitaires passent avec succès.

> 💡 Les instructions sont en anglais, mais si tu as du mal avec ça n'hésite pas à les traduire pour t'aider à faire l'exercice

## 🚫 Ce que vous ne devez pas faire

-   Utiliser des bibliothèques externes
-   Faire une page HTML ou CSS
-   Utiliser autre chose que du JS et les fonctions présentes dans le langage JS et dans Node

## 💎 Bonus possibles

Les bonus correspondent à des exercices plus complexes situés dans le dossier src/bonus.
Essayez de les réaliser une fois que vous aurez terminé tous les exercices obligatoires.

Si vous avez complété l’ensemble des bonus, vous pouvez aller plus loin en convertissant le code en TypeScript. Vous pouvez également créer vos propres exercices, ou vous entraîner sur des katas trouvés en ligne en écrivant vous-même les tests associés.

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

-   [ ] Je sais utiliser créer un petit algorithme à partir d'instructions
-   [ ] Je sais installer une bibliothèque de testing avec npm
-   [ ] Je sais écrire des tests unitaires
-   [ ] Je sais executer mes tests unitaires
-   [ ] Je sais expliquer l'interet du TDD
-   [ ] Je maîtrise les bases du js (conditions, boucles, tableaux, objets, callbacks)
