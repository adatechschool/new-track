# Exercice

⚠️**Tous les exercices devront être executer via le terminal**⚠️

## Exercice 1 – Où es-tu ?

Affiche le chemin complet du dossier dans lequel tu te trouves.

tu devrais quelque chose qui ressemble à ceci :

```bash
/Users/ton-nom/ada
```

---

## Exercice 2 – Regarde autour de toi

nous allons ensuite créer un fichier que nous allons nommé `commande-terminal` que nous allons remplir au fur et à mesure

tu devrais avoir ceci :

```bash
total 0
drwxr-xr-x  3 karlos  staff   96 25 déc 17:03 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:02 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:03 commande-terminal.md
```

---

## Exercice 3 – Crée ton premier dossier

Crée deux dossier vide nommé `exercices` et `projets`

tu devrais avoir ce resultat

```bash
total 0
drwxr-xr-x  5 karlos  staff  160 25 déc 17:06 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:02 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:03 commande-terminal.md
drwxr-xr-x  2 karlos  staff   64 25 déc 17:06 exercices
drwxr-xr-x  2 karlos  staff   64 25 déc 17:06 projets
```

---

## Exercice 4 – Déplace-toi

Va dans ton dossier `exercices` et recupère le fichier `commande-terminal.md` pour le mettre dans le dossier `exercices`.

si tu affiches le contenu de ton dossier exercices, tu devrais avoir ceci :

```bash
drwxr-xr-x  3 karlos  staff   96 25 déc 17:10 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:10 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:03 commande-terminal.md
```

---

## Exercice 5 – Créer une copie (fichier)

maintenant que nous savons déplacer notre fichier, on va faire une copie dans le dossier `projets`.

nous aurons alors ceci

```bash
/Users/karlos/ada/ada/exercices
total 0
drwxr-xr-x  3 karlos  staff   96 25 déc 17:10 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:10 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:03 commande-terminal.md

/Users/karlos/ada/ada/projets
total 0
drwxr-xr-x  3 karlos  staff   96 25 déc 17:18 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:10 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:18 commande-terminal.md
```

---

## Exercice 7 – Créer une copie (dossier)

Nous savons copier un fichier maintenant faisons la même chose avec un dossier, nous allons copier le dossier `exercices` pour le mettre dans `projets`

voici le resultat attendu :

```bash
/Users/karlos/ada/ada/projets
total 0
drwxr-xr-x  4 karlos  staff  128 25 déc 17:27 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:10 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:26 commande-terminal.md
drwxr-xr-x  3 karlos  staff   96 25 déc 17:27 exercices

/Users/karlos/ada/ada/projets/exercices
total 0
drwxr-xr-x  3 karlos  staff   96 25 déc 17:27 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:27 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:27 commande-terminal.md
```

---

## Exercice 8 - supprimer un fichier

Supprimons le fichier `commande-terminal.md` se trouvant dans le dossier `projets`

```bash
# avant suppression
/Users/karlos/ada/ada/projets/exercices
total 0
drwxr-xr-x  3 karlos  staff   96 25 déc 17:27 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:27 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:27 commande-terminal.md

# après suppression
/Users/karlos/ada/ada/projets/exercices
total 0
drwxr-xr-x  2 karlos  staff   64 25 déc 17:31 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:27 ..
```

---

## Exercice 9 - supprimer un dossier et un fichier

maintenant que nous avons supprimer le contenu du dossier `exercices` nous allons le supprimer en plus du fichier `commande-terminal.md`

nous aurons un resultat similaire à ceci :

```bash
# avant suppression
/Users/karlos/ada/ada/projets
total 0
drwxr-xr-x  4 karlos  staff  128 25 déc 17:27 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:10 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:26 commande-terminal.md
drwxr-xr-x  2 karlos  staff   64 25 déc 17:31 exercices

# après suppression
/Users/karlos/ada/ada/projets
total 0
drwxr-xr-x  2 karlos  staff   64 25 déc 17:31 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:27 ..
```

---

## Exercice 10 – remplir le fichier

retournons dans le dossier `exercices` et allons dans le fichier `commande-terminal.md`, il faudra écrire les commandes en restant dans le terminal

nous devrions avoir ceci :

```bash
# avant intégration
total 0
drwxr-xr-x  3 karlos  staff   96 25 déc 17:44 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:10 ..
-rw-r--r--  1 karlos  staff    0 25 déc 17:44 commande-terminal.md

# après intégration
total 8
drwxr-xr-x  3 karlos  staff   96 25 déc 17:45 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:10 ..
-rw-r--r--  1 karlos  staff   21 25 déc 17:45 commande-terminal.md
```

## Exercice 11 – renommez-le

changons le nom, on va maintenant passer de `commande-terminal.md` à `instruction-terminal.md`

(indice : elle peut vous permettre de vous déplacer)

```bash
# avant modification
/Users/karlos/ada/ada/exercices
total 8
drwxr-xr-x  3 karlos  staff   96 25 déc 17:45 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:10 ..
-rw-r--r--  1 karlos  staff   21 25 déc 17:45 commande-terminal.md

# après modification
/Users/karlos/ada/ada/exercices
total 8
drwxr-xr-x  3 karlos  staff   96 25 déc 17:45 .
drwxr-xr-x  4 karlos  staff  128 25 déc 17:10 ..
-rw-r--r--  1 karlos  staff   21 25 déc 17:45 instruction-terminal.md
```

## Exercice 12 – verification

Nous allons verifier le contenu du fichier `instruction-terminal.md`.

# Bonus

⚠️**Ne faites ces exercices seulement si vous avez finis tous les autres exercices demandé avant et de l'avoir poster sur github**⚠️

## Exercice 13 - cat instruction

Nous allons prendre les instruction de `cat` en prenant que la description pour ensuite, les mettre dans un fichier `cat_instrution.txt`.

---

## Exercice 14 - cat en balise html

Maintenant que nous avons les instrcution de `cat`, nous allons faire un second fichier appeler `cat-balise`, elle contiendra les mêmes instructions mais dans un format différent.

nous aurons alors ce resultat :
![](./cat_demo.png)

pensez à utiliser la commande suivante :

```bash
npx live-server
```

<!-- introduire HTML  -->
