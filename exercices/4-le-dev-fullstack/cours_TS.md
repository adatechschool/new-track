# coursTypeScript

## Qu'est-ce que typeScirpt ?

TypeScript est un langage de programmation qui s'appuie sur JavaScript en ajoutant des annotations de type statiques optionnelles et d'autres fonctionnalités. Il peut être utilisé pour le développement côté client (c'est-à-dire front-end) et côté serveur (c'est-à-dire back-end). Le choix d'utiliser TypeScript pour le développement front-end ou back-end dépend largement des préférences personnelles et des exigences spécifiques d'un projet.

### exemple de code TypeScript et JavaScript

**Javascript** :

```

    function add(a, b) {
    return a + b;
    }

```

**Typescript** :

```

    function add(a : number, b : number): number {
        return a + b;
    }

```

comme on peut le voir, les annotations de type en typeScript permettent de définir explicitment
le type des entrées et de la sortie de la fonction.
Cela peut aider certains bugs et améliorer la lisibilité du code.

## les aventages / inconvenients du TypeScript

**Les avantages de TypeScript incluent**:

- Annotations de type statiques: Les annotations de type permettent de définir explicitement le type des entrées et des sorties des fonctions, ce qui peut aider à prévenir les erreurs de type et améliorer la qualité et la lisibilité du code.

- Meilleure intégration avec les bibliothèques et les frameworks: TypeScript est compatible avec de nombreuses bibliothèques et frameworks JavaScript populaires, ce qui facilite leur utilisation dans les projets TypeScript.

- Possibilité d'utiliser les dernières fonctionnalités de JavaScript: TypeScript peut être utilisé pour exploiter les dernières fonctionnalités de JavaScript telles que les classes, les modules, les générateurs, etc.

- Meilleure gestion des erreurs: Les annotations de type permettent de détecter plus facilement les erreurs de type lors de la compilation, ce qui peut éviter de nombreux bugs en production.

**Les inconvénients de TypeScript incluent**:

- Complexité supplémentaire: TypeScript peut ajouter une certaine complexité au processus de développement, en particulier pour les développeurs qui n'ont pas beaucoup d'expérience avec les annotations de type.

- Apprentissage supplémentaire requis: Pour tirer le meilleur parti de TypeScript, il peut être nécessaire de consacrer du temps à apprendre les concepts et les fonctionnalités de TypeScript.

- Temps de développement plus lent: Le temps de développement peut être plus lent en raison de la nécessité de définir les annotations de type et de résoudre les erreurs de type.

- Non compatible avec toutes les bibliothèques: Certaines bibliothèques JavaScript ne sont pas compatibles avec TypeScript, ce qui peut rendre leur utilisation difficile dans les projets TypeScript.

## faisons du typeScript facile

```ts
const getElem = (array: number[]) => {
  return array[0];
};

const numb = [1, 2, 3];
const firstNum = getElem(numb);
```

### ✔️ Explication

- La fonction `getElem` **accepte uniquement un tableau de nombres**.
- `array[0]` retourne donc forcément un **number**.
- Comme `numb` est aussi un tableau de `number`, l’appel fonctionne.

➡️ **TypeScript peut garantir le type du retour.**

## ❌ 2. Appel avec un tableau de strings → Erreur

```ts
const getElem = (array: number[]) => {
  return array[0];
};

const numb = ["test", "test2", "test4"];
const firstNum = getElem(numb); // ❌ Erreur
```

### ❌ Pourquoi ?

Parce que `numb` est un `string[]`, mais la fonction demande un `number[]`.

➡️ **Le type ne correspond pas → TS empêche l’appel**
(ce qui évite une erreur potentielle au runtime).

# ✔️ 3. Fonction typée pour `string[]`

```ts
const getElem = (array: string[]) => {
  return array[0];
};

const numb = ["test", "test2", "test4"];
const firstNum = getElem(numb); // ✔️ OK
```

Là, le type attendu et le type fourni **sont compatibles**, donc TS valide.

# 🌀 4. Union types — accepter plusieurs types possibles

```ts
const getElem = (array: (string | number)[]) => {
  return array[0];
};

const numb = ["test", "test2", "test4", 2];
const firstNum = getElem(numb);
```

### ✔️ Explication

Avec `(string | number)[]` :

- chaque élément peut être **un string ou un number**
- le type de retour est donc aussi `string | number`

➡️ C’est flexible, mais limité :
Tu dois connaître à l’avance **toutes** les possibilités.

# 🚀 5. Version idéale : les **génériques**

```ts
const getElem<T> = (array: T[]) => {
  return array[0];
};

const numb = ["test", "test2", "test4", 2];
const firstNum = getElem(numb);
```

### ✔️ Qu’apportent les génériques ?

- Le type `T` est **déduit automatiquement** à partir de l’argument passé.
- Ici, `T` devient `string | number`.
- Le type de `firstNum` devient donc aussi `string | number`.

### 👉 Les avantages :

- **Réutilisable** pour n’importe quel type de tableau
- **Plus flexible** que `(string | number)[]`
- **Plus sûr** : on ne mélange pas des types qui n’ont rien à voir

➡️ **Les génériques permettent à TypeScript d’apprendre le type tout seul.**

# 🧪 6. Typage d’une sélection DOM avec TypeScript

```ts
const doc = document.querySelector<HTMLInputElement>("div");

console.log(doc?.value);
```

### ✔️ Ici on ajoute un typage au DOM

`document.querySelector<HTMLInputElement>("div")` :

- dit à TypeScript : _“l’élément sélectionné est un `<input>`”_
- donc TS sait que `doc.value` existe.

Sinon, TS dirait :

```
Property 'value' does not exist on type 'Element'.
```

### Pourquoi le `?.` ?

- `querySelector` peut renvoyer **null**
- donc `doc?.value` évite une erreur runtime

➡️ **C’est un bon exemple de typage de sécurité : TS + optional chaining.**

## faisons du typeScript (intermediate)

```ts
enum DocumentFormat {
  Livre = "livre",
  Video = "video",
}

type CardItem = {
  auteur?: string;
  titre: string;
  type_de_document: string;
  format: "magasin";
};

type CardsProps<T extends CardItem> = {
  data: T[];
};

type Expect<T extends true> = T;

type test = Expect<"magasin" extends CardItem["format"] ? true : false>;
export const Cards = <T extends CardItem>({ data }: CardsProps<T>) => {
  return (
    <div className="allCards">
      {data.map((elemData, id) => (
        <div key={id} className="cardsBook">
          <h2>{elemData.titre}</h2>
          <h4>{elemData.auteur}</h4>
          <h4>{elemData.type_de_document}</h4>
        </div>
      ))}
    </div>
  );
};
```

alors que fais ce code ?
Nous allons voir ça partie par partie

### Bloc 1 — `enum DocumentFormat { ... }`

- `enum` crée un ensemble nommé de constantes (ici `DocumentFormat.Livre === "livre"` et `DocumentFormat.Video === "video"` )
- il applique deux type de valeur possible (chaînes) pour un format de document

### Bloc 2 - `type CardItem = { ... }`

- `auteur? : string` => il peut être `string` ou `undefined`
- `titre: string` => il ne sera que `string` (pareil pour type_de_document)
- `format: "magasin"` => ne pourra contenir que la valeur `magasin`

### Bloc 3 — `type CardsProps<T extends CardItem> = { data: T[] }`

- Définit les props du composant : `data` est un tableau d’objets `T`.
- `<T extends CardItem>` signifie que `T` doit avoir au moins la forme `CardItem` (ou être `CardItem`).
- **Utilité** : permet d’accepter des objets plus spécialisés (extension de `CardItem`) tout en conservant la sécurité du type de base.

### Bloc 4 — `type Expect<T extends true> = T;`

- C’est un utilitaire typé **compile-time** pour faire des assertions de type.
- `Expect` n’a **aucun effet à l’exécution** : il sert à provoquer une erreur de compilation si l’expression fournie n’est pas `true`.
- Exemple d’usage pédagogique : forcer la compilation à échouer si une condition de type n’est pas vérifiée.

### Bloc 5 — `type test = Expect<"magasin" extends CardItem["format"] ? true : false>;`

- Ici on demande au compilateur :

  - si `"magasin"` est assignable à `CardItem["format"]` → on renvoie `true`, sinon `false`.

- Puis `Expect<...>` exige que le paramètre soit `true`.

  - Si la condition est `false` → TypeScript signale une erreur (compilation échouera).

- **Dans ton code** la condition est `true` (puisque `format` est exactement `"magasin"`), donc **pas d’erreur**.
- **Rôle pédagogique** : test de type statique. Pour le visualiser, il faut compiler (`tsc --noEmit`) ou regarder les erreurs dans l’IDE.

### Bloc 6 — Composant `Cards`

- `export const Cards = <T extends CardItem>(...)` → **composant générique** React : il accepte un paramètre de type `T` compatible `CardItem`.
- `{ data }: CardsProps<T>` → destructure la prop `data` typée `T[]`.
- `data.map((elemData, id) => ...)` → itère sur les éléments.
- `key={id}` → clé React basée sur l’index `id`. **Attention pédagogique** : utiliser l’index comme key est acceptable pour listes statiques, mais **déconseillé** si la liste peut être réordonnée / modifiée — mieux utiliser un identifiant stable (`elemData.id`).
- `elemData.titre`, `elemData.auteur`, `elemData.type_de_document` → affichage direct.

  - `elemData.auteur` est éventuellement `undefined`, donc dans l’affichage réel cela peut rendre une ligne vide — on peut afficher une valeur de fallback (`elemData.auteur ?? "Auteur inconnu"`).
