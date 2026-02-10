Voici une **reformulation complète, corrigée et harmonisée** de tes exercices, avec un ton **pédagogique, clair et professionnel**, tout en restant accessible à des débutant·es 👇

---

# 🧠 Partie 1 — Premiers pas avec Node.js

Les exercices suivants utilisent **Node.js**.
Pour exécuter votre code, utilisez la commande suivante dans votre terminal :

```bash
node <nom_du_fichier>.js
```

---

## Exercice 1

Créer une fonction nommée **`hello`** qui affiche le message suivant :

```bash
Hello world
```

---

## Exercice 2

Créer une fonction **`tripleHello`** qui affiche **trois fois** le message _Hello world_ :

```bash
Hello world
Hello world
Hello world
```

---

## Exercice 3

Créer une fonction **`helloAndGoodbye`** qui affiche successivement :

```bash
Hello world
Bye bye
```

---

## Exercice 4

Créer une fonction **`helloWorldInVariable`** qui stocke le texte _Hello world_ dans une variable, puis l’affiche :

```bash
Hello world
```

---

## Exercice 5

Créer une fonction **`helloWorldAndZero`** qui affiche _Hello world_ puis le chiffre `0` :

```bash
Hello world
0
```

---

## Exercice 6

Créer une fonction **`helloWithZero`** qui affiche _Hello world_ et `0` sur **la même ligne** :

```bash
Hello world 0
```

---

## Exercice 7

Créer une fonction **`helloLoop`** qui affiche _Hello world_ **5 fois**.

```bash
Hello world
Hello world
Hello world
Hello world
Hello world
```

⚠️ **Attention :** il est interdit d’écrire cinq fois _Hello world_ manuellement.
👉 Vous devez utiliser une **boucle**.

---

## Exercice 8

Créer une fonction **`helloNumber`** qui affiche une suite de nombres de **1 à 5** :

```bash
1
2
3
4
5
```

---

## Exercice 9

Créer une fonction **`helloNumberNegative`** qui affiche une suite de nombres de **0 à -5** :

```bash
0
-1
-2
-3
-4
-5
```

---

## Exercice 10

Créer une fonction **`helloNumberMixed`** qui affiche une suite de nombres positifs et négatifs :

```bash
0
1
-1
2
-2
3
-3
4
-4
5
-5
```

---

## Exercice 11

Le `-0` n’étant pas un nombre valide dans ce contexte, corriger l’exercice précédent.
Créer une fonction **`helloNumberMixedFixed`** qui affiche la même suite **sans zéro négatif** :

```bash
0
1
-1
2
-2
3
-3
4
-4
5
-5
```

---

## Exercice 12

Créer une fonction **`helloEnd`** qui :

- affiche _Hello world_ pour les nombres de **0 à 4**
- affiche _Fin_ pour le nombre **5**

```bash
Hello world
Hello world
Hello world
Hello world
Fin
```

---

## Exercice 13

Créer une fonction **`helloEndFixed`** qui :

- affiche _Hello world_ pour les nombres de **0 à 4**
- affiche _World Hello ??_ pour les nombres de **5 à 9**
- affiche _Fin_ pour le nombre **10**

```bash
Hello world
Hello world
Hello world
Hello world
Hello world
Hello world
Hello world
Hello world
Hello world
Fin
```

---

# 🧠 Partie 2 — Tableaux et objets

Ces exercices demandent une bonne compréhension des **variables**, **boucles** et **fonctions**.

---

## Exercice 14

Déclarer le tableau suivant :

```js
const tab = ["carnivore", "végétarien", "vegan"];
```

Afficher chaque élément du tableau :

```bash
carnivore
végétarien
vegan
```

---

## Exercice 15

Afficher chaque élément du tableau **avec son index** :

```bash
0 : carnivore
1 : végétarien
2 : vegan
```

---

## Exercice 16

Créer le tableau d’objets suivant :

```js
const users = [
  { nom: "John", regime: "carnivore" },
  { nom: "Jane", regime: "végétarien" },
  { nom: "Doe", regime: "vegan" },
  { nom: "Alice", regime: "végétarien" },
];
```

Parcourir le tableau et afficher pour chaque utilisateur :

```bash
Nom : John, Régime : carnivore
Nom : Jane, Régime : végétarien
Nom : Doe, Régime : vegan
Nom : Alice, Régime : végétarien
```

---

## Exercice 17

Afficher uniquement les utilisateurs ayant un régime **carnivore** :

```bash
Nom : John, Régime : carnivore
```

---

# 🧠 Partie 3 — Approfondissement JavaScript (Node.js)

---

## Exercice 18 — Compter jusqu’à N

Créer une fonction **`countToNumber`** qui prend un nombre en paramètre et affiche tous les nombres de `0` jusqu’à ce nombre.

```js
countToNumber(3);
```

```bash
0
1
2
3
```

---

## Exercice 19 — Compter à l’envers

Créer une fonction **`countDown`** qui prend un nombre en paramètre et affiche tous les nombres de ce nombre jusqu’à `0`.

```js
countDown(3);
```

```bash
3
2
1
0
```

---

## Exercice 20 — Pair ou impair

Créer une fonction **`evenOrOdd`** qui affiche si un nombre est pair ou impair.

```js
evenOrOdd(4);
```

```bash
4 est pair
```

---

## Exercice 21 — Somme des nombres

Créer une fonction **`sumNumbers`** qui calcule et affiche la somme des nombres de `1` à `N`.

```js
sumNumbers(5);
```

```bash
15
```

---

## Exercice 22 — Tableau de nombres

Créer un tableau contenant les nombres de `1` à `10`, puis afficher chaque nombre.

```bash
1
2
3
...
10
```

---

## Exercice 23 — Nombres pairs uniquement

À partir du tableau précédent, afficher uniquement les nombres pairs.

```bash
2
4
6
8
10
```

---

## Exercice 24 — Compter les éléments

Créer une fonction **`countElements`** qui prend un tableau en paramètre et affiche le nombre d’éléments qu’il contient.

```js
countElements(["a", "b", "c"]);
```

```bash
3
```

---

## Exercice 25 — Longueur des mots

Créer un tableau de mots et afficher chaque mot avec sa longueur.

```bash
chat : 4
chien : 5
éléphant : 8
```

---

## Exercice 26 — Filtrer par condition

À partir du tableau `users`, afficher uniquement les utilisateurs ayant un régime **végétarien**.

```bash
Nom : Jane, Régime : végétarien
Nom : Alice, Régime : végétarien
```

---

## Exercice 27 — Compter par régime

Créer une fonction **`countByRegime`** qui affiche le nombre d’utilisateurs par régime alimentaire.

```bash
carnivore : 1
végétarien : 2
vegan : 1
```

---

## Exercice 28 — Modifier un tableau

Créer une fonction **`addUser`** qui ajoute un nouvel utilisateur au tableau `users`, puis afficher le tableau mis à jour.

---

## Exercice 29 — Recherche simple

Créer une fonction **`findUserByName`** qui affiche les informations d’un utilisateur à partir de son nom.

```js
findUserByName("Jane");
```

```bash
Nom : Jane, Régime : végétarien
```

---

## Exercice 30 — Résumé des utilisateurs

Créer une fonction **`usersSummary`** qui affiche un résumé sous la forme :

```bash
Il y a 4 utilisateurs.
Les régimes disponibles sont : carnivore, végétarien, vegan.
```

---
