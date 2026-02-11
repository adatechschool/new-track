# Partie 1 — Introduction à JavaScript & Node.js

## Qu’est-ce que JavaScript ?

JavaScript est un **langage de programmation** utilisé pour rendre les pages web **dynamiques** et interactives.

Il peut s’exécuter :

- dans le **navigateur**
- sur un **serveur** grâce à **Node.js**

Il est important de bien faire la différence entre **JavaScript dans le navigateur** et **Node.js**.
Ce sont deux contextes différents, utilisés de manière différente :

- le JavaScript côté navigateur sert à créer des applications web **côté client** ;
- Node.js est utilisé pour développer des applications **côté serveur**.

Dans notre cas, nous allons surtout nous concentrer sur **Node.js** et sur les bases du JavaScript.

- Bonne nouvelle : **la majorité des notions vues ici seront aussi valables en JavaScript côté client**.

## Qu’est-ce que Node.js ?

Node.js est un **environnement d’exécution JavaScript côté serveur**.
Il permet d’exécuter du JavaScript **en dehors du navigateur**, directement depuis le terminal.

Pour vérifier que Node.js est bien installé sur votre machine :

```bash
node -v
```

Pour lancer un fichier JavaScript :

```bash
node fichier.js
```

## Structure d’un fichier JavaScript

Un fichier JavaScript s’écrit toujours avec l’extension `.js`, par exemple : `fichier.js`.

Dans ce fichier, on peut écrire toutes sortes d’instructions.
Pour commencer simplement, nous allons nous concentrer sur l’affichage de messages dans le terminal.

Pour cela, on utilise `console.log()` suivi d’un message entre parenthèses :

```js
console.log("Hello world");
```

- Vous venez d’afficher votre **premier message dans le terminal**. Bravo 🎉

Gardez bien en tête que `console.log()` vous accompagnera **tout au long de votre apprentissage**, et même plus tard dans vos projets.
C’est un outil essentiel pour **comprendre ce que fait votre code** et pour **déboguer**.

# Partie 2 — Les variables

## Qu’est-ce qu’une variable ?

Une variable permet de **stocker une valeur** afin de la réutiliser plus tard.

Par exemple, si on souhaite stocker `"Hello world"` pour l’afficher plusieurs fois sans le réécrire :

```js
const message = "Hello world";
console.log(message);
console.log(message);
console.log(message);
```

En JavaScript, il existe principalement **deux façons de déclarer une variable** : `const` et `let`.

### `const` → valeur **non modifiable** (une constante)

```js
const age = 25;
```

### `let` → valeur **modifiable**

```js
let compteur = 0;
compteur = compteur + 1;
```

⚠️ Il est possible que vous rencontriez `var` dans certains exemples ou anciens projets.

- Je vous conseille fortement de l’éviter : cette syntaxe n’est plus utilisée aujourd’hui et peut prêter à confusion.

## Types de données courants

Déclarer une variable, c’est aussi lui donner un **type de donnée**.
Voici les types les plus courants en JavaScript :

```js
const texte = "Hello"; // string
const nombre = 42; // number
const actif = true; // boolean
const vide = null; // null
const indefini = undefined; // undefined
```

Pour vérifier le type d’une variable, on peut utiliser l’opérateur `typeof` :

```js
console.log(typeof texte); // "string"
console.log(typeof nombre); // "number"
console.log(typeof actif); // "boolean"
console.log(typeof vide); // "object"
console.log(typeof indefini); // "undefined"
```

(oui, `null` renvoie `"object"`… c’est un vieux choix de JavaScript)

# Partie 3 — Les fonctions

## Qu’est-ce qu’une fonction ?

Ce n’est jamais évident au début de comprendre ce qu’est une fonction.
Pour faire simple : **une fonction est un bloc de code réutilisable**.

Imaginez une grande boîte dans laquelle on met des instructions, des calculs, voire même d’autres fonctions.
Cette boîte, c’est une fonction.

```js
function direBonjour() {
  console.log("Hello world");
}
```

Une fonction doit être **déclarée**, mais aussi **appelée** pour être exécutée :

```js
direBonjour();
```

## Fonctions avec paramètres

Vous l’avez peut-être remarqué : une fonction possède des parenthèses.
Ces parenthèses peuvent être vides ou contenir des **paramètres**.

Un paramètre est une **variable locale** à la fonction, qui permet de lui transmettre une information lors de son appel :

```js
function direBonjour(prenom) {
  console.log("Bonjour " + prenom);
}

direBonjour("Alice");
```

Pourquoi utiliser des fonctions ?

- Pour **éviter la répétition de code**, rendre votre programme plus lisible et plus modulaire.
  Et aussi… parce que répéter toujours les mêmes lignes, c’est quand même un peu relou

# Partie 4 — Les boucles

Là, on commence à toucher à des choses intéressantes 👀
Les boucles permettent de **répéter un bloc de code plusieurs fois**.

Si vous devez afficher une information ou exécuter une action plusieurs fois, la boucle est souvent la meilleure solution.

Il existe plusieurs types de boucles en JavaScript.
Ici, nous allons utiliser la boucle `for`.

## La boucle `for`

```js
for (let i = 0; i < 5; i++) {
  console.log("Hello world");
}
```

Décomposons :

- `let i = 0` → point de départ
- `i < 5` → condition
- `i++` → incrémentation

Ce qui donne :

- 1ʳᵉ fois → `i = 0`
- 2ᵉ fois → `i = 1`
- 3ᵉ fois → `i = 2`
- 4ᵉ fois → `i = 3`
- 5ᵉ fois → `i = 4`
- puis `i = 5`, la condition n’est plus vérifiée (`5 < 5` est faux), donc la boucle s’arrête.

- Essayez de remplacer `"Hello world"` par `i` pour bien comprendre ce qu’il se passe.

# Partie 5 — Les conditions

Les conditions sont omniprésentes en programmation, quel que soit le langage.

Exemple simple :

```js
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}
```

En clair :

- si l’âge est supérieur ou égal à 18 → on affiche `"Majeur"`
- sinon → `"Mineur"`

Il est bien sûr possible de combiner **boucles et conditions** :

Voici une reformulation plus fluide, plus claire, tout en gardant ton ton pédagogique 👇

---

```js
for (let i = 0; i <= 5; i++) {
  if (i === 5) {
    console.log("Fin");
  } else {
    console.log("Hello world");
  }
}
```

Comme on peut le voir dans cet exemple, **les boucles et les conditions peuvent être combinées** pour créer des logiques un peu plus poussées.

Ici, la boucle `for` répète une action plusieurs fois, et la condition `if` vient vérifier une situation précise à chaque passage dans la boucle.

Dans notre condition :

```js
if (i === 5)
```

nous utilisons `===` pour vérifier si `i` est strictement égal à `5`.

Le `===` est ce qu’on appelle un **opérateur de comparaison stricte**.
Il compare **la valeur ET le type**.

Par exemple :

```js
5 === "5"; // false
```

Parce que l’un est un nombre et l’autre une chaîne de caractères.

Mais ce n’est pas le seul opérateur de comparaison. Il en existe plusieurs :

- `==` → égalité simple (compare seulement la valeur, pas le type)
- `!=` → différent (comparaison simple)
- `!==` → différent strict (valeur + type)
- `>` → supérieur
- `<` → inférieur
- `>=` → supérieur ou égal
- `<=` → inférieur ou égal

## Les opérateurs logiques

Dans une condition, on peut aussi combiner plusieurs tests grâce aux **opérateurs logiques** :

- `&&` → ET (les deux conditions doivent être vraies)
- `||` → OU (au moins une des deux conditions doit être vraie)
- `!` → NON (inverse la valeur)

Exemple :

```js
if (age >= 18 && age < 30) {
  console.log("Jeune adulte");
}
```

## Petit bonus utile : le modulo `%`

L’opérateur `%` (modulo) permet d’obtenir le **reste d’une division**.

```js
console.log(5 % 2); // 1
console.log(10 % 3); // 1
console.log(8 % 4); // 0
```

C’est très pratique pour savoir si un nombre est **pair ou impair** :

```js
if (i % 2 === 0) {
  console.log("Nombre pair");
} else {
  console.log("Nombre impair");
}
```

👉 Si le reste est `0`, le nombre est pair.
Sinon, il est impair.

# Partie 6 — Les tableaux (arrays)

## Qu’est-ce qu’un tableau ?

Un tableau (ou array) permet de stocker **plusieurs valeurs** dans une seule variable.

```js
const tab = ["carnivore", "végétarien", "vegan"];
```

Ici, le tableau contient trois chaînes de caractères.
Mais un tableau peut aussi contenir des nombres, des booléens, des objets, etc.

Pour accéder à un élément, on utilise son **index** :

```js
console.log(tab[0]); // carnivore
```

Pour parcourir tout le tableau, on utilise une boucle :

```js
for (let i = 0; i < tab.length; i++) {
  console.log(tab[i]);
}
```

# Partie 7 — Les objets

## Qu’est-ce qu’un objet ?

Un objet permet de regrouper des données liées entre elles.

Par exemple, une personne possède un nom, un âge, une ville :

```js
const user = {
  nom: "John",
  age: 30,
  ville: "Paris",
};
```

Un objet est composé de :

1. **clés** (ou propriétés)
2. **valeurs**

Pour accéder aux données :

```js
console.log(user.nom);
console.log(user.age);
console.log(user.ville);
```

Si on a un **tableau d’objets**, on peut le parcourir avec une boucle :

```js
const users = [
  { nom: "John", age: 30, ville: "Paris" },
  { nom: "Jane", age: 25, ville: "Londres" },
];
```

```js
for (let i = 0; i < users.length; i++) {
  console.log(
    "Nom: " +
      users[i].nom +
      ", Age: " +
      users[i].age +
      ", Ville: " +
      users[i].ville,
  );
}
```

Pensez à **relire ce cours**, à modifier les exemples et surtout à les **tester par vous-même**.
Les exemples sont là pour vous guider, mais c’est en expérimentant que les notions deviennent vraiment claires
