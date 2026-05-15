# Exercices — Terminal : arborescence et fichiers

⚠️ **Tous les exercices doivent être exécutés via le terminal** ⚠️

---

## Exercice 1 – Où es-tu ?

Affiche le chemin absolu du dossier courant.

```bash
# Exemple attendu
/Users/ton-nom/ada
```

---

## Exercice 2 – Crée la base du projet

Crée un dossier `mon-projet` et vérifie qu'il apparaît bien dans le dossier courant.

```bash
# Exemple attendu
drwxr-xr-x  2 karlos  staff   64 25 déc 14:05 mon-projet
```

---

## Exercice 3 – Crée l'arborescence

Va dans `mon-projet` et crée les dossiers `css`, `js` et `images`.

```bash
# Exemple attendu
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 css
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 images
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 js
```

---

## Exercice 4 – Crée les fichiers

Crée les fichiers `index.html`, `css/style.css` et `js/script.js`.

```bash
# Exemple attendu avec ls -R
mon-projet:
css  images  js  index.html

mon-projet/css:
style.css

mon-projet/js:
script.js

mon-projet/images:
```

---

## Exercice 5 – Déplace-toi

Va dans le dossier `css` et déplace-toi ensuite dans `js` sans repasser par la racine.

*(indice : tu peux le faire en une seule commande)*

---

## Exercice 6 – Copie un fichier

Copie `index.html` dans le dossier `images`.

```bash
# Exemple attendu dans images/
-rw-r--r--  1 karlos  staff    0 25 déc 14:15 index.html
```

---

## Exercice 7 – Copie un dossier

Copie le dossier `css` et crée un dossier `css-backup`.

```bash
# Exemple attendu
drwxr-xr-x  2 karlos  staff   64 25 déc 14:18 css
drwxr-xr-x  2 karlos  staff   64 25 déc 14:18 css-backup
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 images
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 js
-rw-r--r--  1 karlos  staff    0 25 déc 14:05 index.html
```

---

## Exercice 8 – Supprime un fichier

Supprime le fichier `index.html` copié dans `images`.

```bash
# Après suppression
mon-projet/images:
# (vide)
```

---

## Exercice 9 – Supprime un dossier

Supprime le dossier `css-backup`.

```bash
# Après suppression
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 css
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 images
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 js
-rw-r--r--  1 karlos  staff    0 25 déc 14:05 index.html
```

---

## Exercice 10 – Écris dans un fichier

Ouvre `css/style.css` et écris la ligne suivante à l'intérieur :

```
body { margin: 0; padding: 0; }
```

*(indice : tu peux utiliser `echo >>`, `cat >>` ou `nano` — à toi de choisir)*

Vérifie ensuite que le fichier n'est plus vide avec `ls -l`.

---

## Exercice 11 – Renomme un fichier

Renomme `css/style.css` en `css/main.css`.

*(indice : la commande qui permet aussi de déplacer)*

```bash
# Après modification
mon-projet/css:
main.css
```

---

## Exercice 12 – Vérification finale

Affiche le contenu de `css/main.css` dans le terminal et vérifie que ta ligne CSS est bien là.

---

# Bonus

⚠️ **Ne fais ces exercices que si tu as terminé et posté tous les autres sur GitHub** ⚠️

## Exercice 13 – Cherche dans un fichier

Écris trois lignes différentes dans `js/script.js`, dont une qui contient le mot `console`. Utilise `grep` pour afficher uniquement cette ligne.

---

## Exercice 14 – Historique

Retrouve dans ton historique la commande exacte que tu as utilisée pour créer les trois dossiers `css`, `js` et `images`.

---

## Exercice 15 – Arborescence complète

Ajoute les dossiers `fonts` et `assets` à ton projet, crée un fichier `README.md` à la racine, écris une phrase dedans, et affiche toute l'arborescence avec `ls -R`.

---
