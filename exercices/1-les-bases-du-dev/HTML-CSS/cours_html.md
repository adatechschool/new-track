# Les cours HTML / CSS

Nous allons créer un fichier html nommé index.html
dans le fichier index.html on va introduire :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

Pour le créer simplement nous pouvons juste taper `!`

### hello world !

Pour ce premier exercice nous allons créer un fichier `hello_world.html` dans un dossier `ada-html-exercice` et afficher ceci avec la balise `h1`, vous devriez avoir ceci :

```html
<h1>hello world</h1>
```

maintenant changer le `hello world` par `hello tout le monde`

### hello world italic !

créer un fichier `hello_world_italic.html`
dans ce fichier nous allons devoir afficher `hello world` mais en italic :
<em>hello world</em>

changer ce `hello world` en hello tout le _monde_

### red hello world

Créer un fichier **style.css** \
mettre en place le css en question \
dans le fichier `index.html` nous allons mettre en lien en tapant ceci :

```html
<link href="./style.css" />
```

si nous allons dans le fichier `style.css` nous mettrons ceci :

```css
h1 {
  color: blue;
}
```

nous allons changer le h1 `blue` en `rouge`

### create box

pour créer une **box** on va intégrer une `div` dans ma page `index.html` :

```html
<div class="box"></div>
```

et dans mon fichier `style.css`

```css
.box {
  border: 1px solid black;
  height: 30px;
  width: 30px;
}
```
