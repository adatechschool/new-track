# Partie 1 — Introduction au HTML

## Qu'est-ce que le HTML ?

Le HTML (_HyperText Markup Language_) est un langage de balisage utilisé pour structurer le contenu d'une page web. Il travaille souvent avec le CSS pour le style et le JavaScript pour le comportement.

## Premiers pas

1. Dans votre dossier `ada`, créez un dossier `intro_HTML` puis le fichier de base :
   ```bash
   mkdir -p ada/intro_HTML
   cd ada/intro_HTML
   touch index.html
   ```
2. Ouvrez `index.html` dans VSCode et ajoutez ceci :
   ```html
   <h1>Hello</h1>
   ```
3. Pour voir le rendu rapidement, lancez un serveur local : `npx live-server`.

### Décomposition d'une balise

- `<` : ouvre la balise.
- `h1` : nom de la balise (ici un titre).
- `>` : ferme l'ouverture.
- `Hello` : contenu affiché.
- `</h1>` : balise de fermeture.

Ces éléments forment la structure de base d'une balise HTML.

## Les commentaires

Les commentaires servent à documenter votre code sans l'afficher dans le navigateur.

```html
<!-- Ceci est un commentaire -->
```

Raccourci dans VSCode : Cmd + / (Mac).

# Partie 2 — Aller plus loin avec les balises

Il existe de nombreuses balises (h1, p, div, span, img, a, ul, li, input, ...). Vous n'avez pas besoin de toutes les connaître par cœur ; voici une ressource vous donnant toutes les commandes : https://www.codeshttp.com/toutes-les-balises-html-liste-complete-avec-syntaxe.html

## La balise <div>

`<div>` est une balise générique utile pour regrouper et organiser le contenu :

Sans div :

```html
<h1>Test 1</h1>
<p>Texte 1</p>
<h1>Test 2</h1>
<p>Texte 2</p>
```

Avec div :

```html
<div>
  <h1>Test 1</h1>
  <p>Texte 1</p>
  <h1>Test 2</h1>
  <p>Texte 2</p>
</div>
```

`<div>` facilite la mise en page, l'accessibilité et le SEO quand on structure correctement le contenu.

# Partie 3 — Liens et images

Les images et les liens sont courants sur les sites web ; HTML les gère simplement.

## Afficher une image

```html
<img src="https://exemple.com/image.jpg" alt="Description de l'image" />
```

- `src` : chemin ou URL de l'image.
- `alt` : texte alternatif, important pour l'accessibilité et le référencement.
- `<img />` est une balise auto-fermante (pas de `</img>`).

## Rendre une image cliquable

Entourez l'image d'une balise `<a>` :

```html
<a href="https://fr.wikipedia.org/wiki/Jurassic_Park_(s%C3%A9rie_de_films)">
  <img src="https://exemple.com/logo.jpg" alt="Logo Jurassic Park" />
</a>
```

Cliquer sur l'image ouvre la destination indiquée par `href`.

## Décomposer une URL

Exemple : `https://fr.wikipedia.org/wiki/Jurassic_Park_(s%C3%A9rie_de_films)`

- `https` : protocole (sécurisé).
- `fr.wikipedia.org` : nom de domaine.
- `/wiki/...` : chemin vers la ressource.

## Liens internes et ancres

Lien vers une autre page :

```html
<a href="contact.html">Contact</a>
```

Lien vers une section de la même page :

```html
<a href="#section-films">Voir les films</a>
...
<h2 id="section-films">Les films</h2>
```

# Partie 4 — Introduction au CSS

Le CSS (Cascading Style Sheets) permet de styliser le HTML : couleurs, tailles, dispositions, etc.

Exemple minimal sans CSS :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
```

Pour ajouter du CSS, on peut :

- lier un fichier : `<link rel="stylesheet" href="styles.css" />`
- écrire dans une balise `<style>` dans le `<head>`
- utiliser des styles en ligne (à éviter pour la maintenance)
