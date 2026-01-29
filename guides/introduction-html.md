# Partie 1 — Introduction au HTML

## Qu'est-ce que le HTML ?

Le HTML (*HyperText Markup Language*) est un **langage de balisage** utilisé pour structurer le contenu d'une page web. Il décrit la **structure** (titres, paragraphes, images, liens…), mais **pas le style** ni le comportement.

👉 Il est généralement utilisé avec :

* **CSS** : pour le style (couleurs, tailles, mise en page)
* **JavaScript** : pour les interactions et le dynamisme

---

## Structure minimale d'une page HTML

Une vraie page HTML suit toujours cette structure de base :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Ma page</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

### Rôle des principales balises

* `<!DOCTYPE html>` : indique que l'on utilise HTML5
* `<html>` : racine du document
* `<head>` : informations **non visibles** (titre, métadonnées, CSS)
* `<body>` : contenu **visible** de la page

---

## Premiers pas

1. Dans votre dossier `ada`, créez un dossier `intro_HTML` puis le fichier de base :

   ```bash
   mkdir -p ada/intro_HTML
   cd ada/intro_HTML
   touch index.html
   ```
2. Ouvrez `index.html` dans VSCode et ajoutez :

   ```html
   <h1>Hello</h1>
   ```
3. Pour voir le rendu, lancez un serveur local :

   ```bash
   npx live-server
   ```

⚠️ **Important** : la commande doit être lancée **dans le dossier où se trouve `index.html`**.

---

### Décomposition d'une balise

```html
<h1>Hello</h1>
```

* `<` : ouvre la balise
* `h1` : nom de la balise
* `>` : fin de l'ouverture
* `Hello` : contenu
* `</h1>` : balise de fermeture

---

## Les commentaires

Les commentaires permettent d'expliquer le code sans l'afficher :

```html
<!-- Ceci est un commentaire -->
```

Raccourci VSCode :

* Mac : `Cmd + /`
* Windows : `Ctrl + /`

---

# Partie 2 — Les balises HTML

## Balises courantes

Vous rencontrerez très souvent :

* Titres : `h1` → `h6`
* Texte : `p`, `span`
* Conteneurs : `div`, `section`, `article`
* Listes : `ul`, `ol`, `li`
* Liens : `a`
* Images : `img`

📚 Liste complète :
[https://www.codeshttp.com/toutes-les-balises-html-liste-complete-avec-syntaxe.html](https://www.codeshttp.com/toutes-les-balises-html-liste-complete-avec-syntaxe.html)

---

## La balise `<div>`

`<div>` est une balise **générique de regroupement**.

Sans `div` :

```html
<h1>Test 1</h1>
<p>Texte 1</p>
<h1>Test 2</h1>
<p>Texte 2</p>
```

Avec `div` :

```html
<div>
  <h1>Test 1</h1>
  <p>Texte 1</p>
</div>
<div>
  <h1>Test 2</h1>
  <p>Texte 2</p>
</div>
```

👉 `div` sert surtout à la **mise en page** avec le CSS.

---

## Balises sémantiques (bonne pratique)

HTML propose des balises plus explicites que `div` :

* `header` : en-tête
* `main` : contenu principal
* `section` : section thématique
* `article` : contenu autonome
* `footer` : pied de page

```html
<header>Header</header>
<main>
  <section>
    <article>Article</article>
  </section>
</main>
<footer>Footer</footer>
```

Cela permet **d'améliorer l'accessibilité et le SEO**.

---

# Partie 3 — Liens, images et chemins

## Afficher une image

```html
<img src="./assets/images/logo.png" alt="Logo du site" />
```

* `src` : chemin vers l'image
* `alt` : description textuelle (obligatoire en bonne pratique)
* `img` est **auto-fermante**

---

## Chemins relatifs (très important)

Arborescence :

```
site/
├─ index.html
├─ pages/
│  └─ about.html
└─ assets/
   └─ images/
      └─ logo.png
```

Depuis `index.html` :

```html
<img src="./assets/images/logo.png">
```

Depuis `about.html` :

```html
<img src="../assets/images/logo.png">
```

Rappel :

* `./` → dossier courant
* `../` → dossier parent

---

## Liens

Lien externe :

```html
<a href="https://example.com">Site externe</a>
```

Lien interne :

```html
<a href="./pages/about.html">À propos</a>
```

Lien vers une ancre :

```html
<a href="#films">Voir les films</a>
<h2 id="films">Les films</h2>
```

---

# Partie 4 — Chercher par soi-même

Il est **impossible de connaître toutes les balises par cœur**.

👉 Compétence clé du développeur web :

* savoir **chercher**
* lire la documentation
* tester par soi-même

À explorer :

* `input`
* `form`
* `button`
* `label`

Ressources utiles :

* MDN Web Docs
* W3Schools

---

# Partie 5 — Introduction au CSS

Le CSS permet de **styliser** le HTML.

## Lier un fichier CSS

```html
<link rel="stylesheet" href="./assets/css/style.css" />
```

## Exemple CSS

```css
body {
  font-family: Arial, sans-serif;
}

h1 {
  color: blue;
}
```

## Sélecteurs de base

* `h1` → toutes les balises h1
* `.classe` → class="classe"
* `#id` → id="id"

```html
<p class="texte">Hello</p>
```

```css
.texte {
  color: red;
}
```
