# Exercices — Terminal : arborescence et fichiers

⚠️ **Tous les exercices doivent être exécutés via le terminal** ⚠️

---

## Exercice 1 – Où es-tu ?

Affiche le chemin absolu du dossier courant.

```bash
# Exemple attendu
/Users/ton-nom/ada
```

<details>
  <summary>Spoiler</summary>

```bash
pwd
```

</details>

---

## Exercice 2 – Crée la base du projet

Crée un dossier `mon-projet` et vérifie qu'il apparaît bien dans le dossier courant.

```bash
# Exemple attendu
drwxr-xr-x  2 karlos  staff   64 25 déc 14:05 mon-projet
```

<details>
  <summary>Spoiler</summary>

```bash
mkdir mon-projet
ls -l
```

</details>

---

## Exercice 3 – Crée l'arborescence

Va dans `mon-projet` et crée les dossiers `css`, `js` et `images`.

```bash
# Exemple attendu
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 css
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 images
drwxr-xr-x  2 karlos  staff   64 25 déc 14:07 js
```

<details>
  <summary>Spoiler</summary>

```bash
cd mon-projet
mkdir css js images
ls -l
```

</details>

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

<details>
  <summary>Spoiler</summary>

```bash
touch index.html css/style.css js/script.js
ls -R
```

</details>

---

## Exercice 5 – Déplace-toi

Va dans le dossier `css` et déplace-toi ensuite dans `js` sans repasser par la racine.

_(indice : tu peux le faire en une seule commande)_

<details>
  <summary>Spoiler</summary>

```bash
cd css
cd ../js
```

</details>

---

## Exercice 6 – Copie un fichier

Copie `index.html` dans le dossier `images`.

```bash
# Exemple attendu dans images/
-rw-r--r--  1 karlos  staff    0 25 déc 14:15 index.html
```

<details>
  <summary>Spoiler</summary>

```bash
cp index.html images/
ls -l images/
```

</details>

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

<details>
  <summary>Spoiler</summary>

```bash
cp -r css css-backup
ls -l
```

</details>

---

## Exercice 8 – Supprime un fichier

Supprime le fichier `index.html` copié dans `images`.

```bash
# Après suppression
mon-projet/images:
# (vide)
```

<details>
  <summary>Spoiler</summary>

```bash
rm images/index.html
ls images/
```

</details>

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

<details>
  <summary>Spoiler</summary>

```bash
rm -r css-backup
ls -l
```

</details>

---

## Exercice 10 – Écris dans un fichier

Ouvre `css/style.css` et écris la ligne suivante à l'intérieur :

```
body { margin: 0; padding: 0; }
```

_(indice : tu peux utiliser `echo >>`, `cat >>` ou `nano` — à toi de choisir)_

Vérifie ensuite que le fichier n'est plus vide avec `ls -l`.

<details>
  <summary>Spoiler</summary>

```bash
# Option 1
echo 'body { margin: 0; padding: 0; }' >> css/style.css

# Option 2
nano css/style.css

# Option 3
cat >> css/style.css
body { margin: 0; padding: 0; }
(Ctrl+D pour terminer)

ls -l css/style.css
```

</details>

---

## Exercice 11 – Renomme un fichier

Renomme `css/style.css` en `css/main.css`.

_(indice : la commande qui permet aussi de déplacer)_

```bash
# Après modification
mon-projet/css:
main.css
```

<details>
  <summary>Spoiler</summary>

```bash
mv css/style.css css/main.css
ls css/
```

</details>

---

## Exercice 12 – Vérification finale

Affiche le contenu de `css/main.css` dans le terminal et vérifie que ta ligne CSS est bien là.

<details>
  <summary>Spoiler</summary>

```bash
cat css/main.css
```

</details>

---

# Bonus

⚠️ **Ne fais ces exercices que si tu as terminé et posté tous les autres sur GitHub** ⚠️

## Exercice 13 – Cherche dans un fichier

Écris trois lignes différentes dans `js/script.js`, dont une qui contient le mot `console`. Utilise `grep` pour afficher uniquement cette ligne.

<details>
  <summary>Spoiler</summary>

```bash
echo 'console.log("bonjour")' >> js/script.js
echo 'let x = 1' >> js/script.js
echo 'let y = 2' >> js/script.js
grep "console" js/script.js
```

</details>

---

## Exercice 14 – Historique

Retrouve dans ton historique la commande exacte que tu as utilisée pour créer les trois dossiers `css`, `js` et `images`.

<details>
  <summary>Spoiler</summary>

```bash
history | grep "mkdir"
```

</details>

---

## Exercice 15 – Arborescence complète

Ajoute les dossiers `fonts` et `assets` à ton projet, crée un fichier `README.md` à la racine, écris une phrase dedans, et affiche toute l'arborescence avec `ls -R`.

<details>
  <summary>Spoiler</summary>

```bash
mkdir fonts assets
touch README.md
echo "Mon premier projet web" >> README.md
ls -R
```

</details>

---
