# Exercices — Terminal : arborescence et fichiers

⚠️ **Tous les exercices doivent être exécutés via le terminal** ⚠️

---

## 1 – Où es-tu ?

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

## 2 – Crée la base du projet

Crée un dossier `ada` et vérifie qu'il apparaît bien dans le dossier courant.

```bash
# Exemple attendu
drwxr-xr-x  2 votre-nom-dutilisateur  staff   la-date-de-creation ada
```

<details>
  <summary>Spoiler</summary>

```bash
mkdir ada
ls -l
```

</details>

---

## 3 – Crée l'arborescence

Va dans le dossier `ada` et crée les dossiers `exercice` et `projet`.

```bash
# Exemple attendu
drwxr-xr-x  2 votre-nom-dutilisateur  staff   la-date-de-creation exercice
drwxr-xr-x  2 votre-nom-dutilisateur  staff   la-date-de-creation projet
```

<details>
  <summary>Spoiler</summary>

```bash
cd ada
mkdir exercice projet
ls -l
```

</details>

---

## 4 – Crée un fichier

Crée le fichier `command.txt`.

```bash
./exercice:

./projet:
command.txt
```

<details>
  <summary>Spoiler</summary>

```bash
cd projet
touch command.txt
# tu peux utiliser la même commande pour créer plusieurs fichiers 
# touch fichier1 fichier2 fichier3 
# fait attention à l'espace, si tu fais `touch ficher 1`, tu vas créer deux fichiers
ls -R
```

</details>

---

## 5 – Déplace-toi

Va dans le dossier `exercice` et déplace-toi vers le dossier `projet`.

_(indice : .. permet de remonter d'un niveau)_

<details>
  <summary>Spoiler</summary>

```bash
cd ..
cd projet
# en une seule ligne 
cd ../projet
```

</details>

---

## 6 – Déplacer  un fichier

Dans le dossier `projet` nous avons encore `command.txt` , 
revenez en arrière avec `..`puis déplacer le fichier `command.txt` vers le dossier `exercice`:

Vérifie ensuite que le dossier n'est plus vide avec `ls -l`.


<details>
  <summary>Spoiler</summary>

```bash
mv projet/command.txt exercice
```

</details>

---

## 7  – Écris dans un fichier

Dans le dossier `exercice` écris la ligne suivante à l'intérieur du fichier `command.txt` :

```bash
voici mes commandes shell
```

*(indice : tu peux utiliser `echo >>` )*

Vérifie ensuite que le fichier n'est plus vide avec `ls -l`.

```bash
# avant l'utilisation de la command
total 0
-rw-r--r--  1 votre-nom-dutilisateur  staff   la-date-de-creation command.txt
# après l'utilisation de la command
total 8
-rw-r--r--  1 votre-nom-dutilisateur  staff   la-date-de-creation command.txt
```

<details>
  <summary>Spoiler</summary>

```bash
echo 'voici mes commandes shell' >> command.txt
```

</details>

---

## 8 – Renomme un fichier

Renomme `exercice/command.txt` en `exercice/command.md`.

*(indice : la commande qui permet aussi de déplacer)*

Vérifie ensuite que le fichier n'est plus vide avec `ls -l`.

```bash
# avant l'utilisation de la command
total 0
-rw-r--r--  1 votre-nom-dutilisateur  staff   la-date-de-creation command.txt
# après l'utilisation de la command
total 8
-rw-r--r--  1 votre-nom-dutilisateur  staff   la-date-de-creation command.md
```

<details>
  <summary>Spoiler</summary>

```bash
mv exercice/command.txt exercice/command.md
```

</details>

---

## 9 – Vérification finale

Affiche le contenu de `exercice/command.md` dans le terminal et vérifie que la phrase `voici mes commandes shell` est bien présent .

<details>
  <summary>Spoiler</summary>

```bash
cat exercice/command.md
```

</details>

---

## 10 – Cherche dans un fichier

Écris trois lignes différentes dans `exercice/command.md :`

- créer un fichier : touch <nom du fichier>
- créer un dossier : mkdir <nom du dossier>
- donner la position actuelle : pwd

Utilise `grep` pour afficher uniquement la ligne qui contient `pwd`.

_(indice : tu peux utiliser `echo >>`)_

Vérifie ensuite que le fichier n'est plus vide avec `ls -l`.

(nous t’invitons à le faire pour toutes les commandes que tu as pu utiliser 😁)

<details>
  <summary>Spoiler</summary>

```bash
echo 'créer un fichier : touch <nom du fichier>' >> exercice/command.md
echo 'donner la position actuelle : pwd' >> exercice/command.md
echo 'créer un dossier : mkdir <nom du dossier>' >> exercice/command.md
grep "pwd" exercice/command.md
```

</details>

---

### Bonus

---

## Exercice 11 – Historique

Retrouve dans ton historique la commande exacte que tu as utilisée pour créer les dossiers exercice et projet.

<details>
  <summary>Spoiler</summary>

```bash
history | grep "mkdir"
```

</details>

---

## 12 – Arborescence complète

Créer un dossier  `mon_projet_web` contenu dans `exercice` . 

Dans le dossier `mon_projet_web`, créer les dossiers `assets` `js` `css`.
Ajout ensuite les fichier index.html à la racine

`style.css` dans le dossier `css`

`script.js` dans le dossier `js`

Affiche toute l’arborescence avec la commande `ls -R` . Tu devrais obtenir le résultat suivant :

```bash
assets     css        index.html js

./assets:

./css:
style.css

./js:
script.js
```

<details>
  <summary>Spoiler</summary>

```bash
mkdir assets css js
touch css/style.css js/script.js index.html
ls -R
```

</details>

---

## 13 – Trouve le fichier caché

Sans te déplacer de ton dossier courant, utilise la commande `find` pour localiser précisément où se trouve le fichier `style.css` que tu viens de créer.

```bash
# Exemple attendu
./exercice/mon_projet_web/css/style.css

```

*(indice : tu peux chercher par nom en utilisant l'option `-name`)*

```bash
find . -name "style.css"

```

---

## 14 – Le détective du texte

On cherche un fichier dans `exercice`, mais on ne se rappelle plus de son nom. Par contre, on sait qu'il contient le mot `"index"`.
Utilise `grep` avec l'option de recherche récursive ` -r` pour trouver quelle ligne de quel fichier contient ce mot.

```bash
# Exemple attendu
exercice/command.md:créer un fichier : touch <nom du fichier>

```

*(indice : la syntaxe est `grep -r "mot_recherché" dossier/`)*

```bash
grep -r "fichier" exercice/

```

---

## 15 – Le grand nettoyage de l'historique

Tu as exécuté beaucoup de commandes aujourd'hui ! Affiche ton historique de commandes, mais filtre le résultat avec `grep` pour n'afficher **uniquement** les lignes qui contiennent le mot `touch`.

```bash
# Exemple attendu
  512  touch command.txt
  525  touch css/style.css js/script.js index.html

```

*(indice : utilise la barre verticale `|` (pipe) pour envoyer le résultat de `history` vers `grep`)*

```bash
history | grep "touch"

```
