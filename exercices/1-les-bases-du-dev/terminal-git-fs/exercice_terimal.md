# Exercice

## Exercice 1 – Où es-tu ?

Affiche le chemin complet du dossier dans lequel tu te trouves.

```bash
pwd
```

---

## Exercice 2 – Regarde autour de toi

Liste les fichiers et dossiers présents, puis affiche plus de détails.

```bash
ls
ls -la
```

---

## Exercice 3 – Crée ton premier dossier

Crée un dossier vide nommé `J01_ada_bash`

```bash
mkdir J01_ada_bash
```

---

## Exercice 4 – Crée ton premier dossier

Crée deux dossier vide nommé `test1` et `test2`

```bash
mkdir test1 test2
```

---

## Exercice 5 – Déplace-toi

Va dans ton dossier `J01_ada_bash`.

```bash
cd J01_ada_bash
```

---

## Exercice 6 – Organise ton espace

Crée un fichier 'J01_terminal_test'.

```bash
touch J01_terminal_test
```

---

## Exercice 7 – Écris et lis

Écris « Hello World » dans hello.txt, puis lis son contenu.

```bash
echo 'Hello World' > hello.txt
cat hello.txt
```

---

## Exercice 8 – en arrière

Reviens en arrière et liste les dossier présent, tu devrais avoir ce resultat

```bash
cd ..
ls
```

```bash
test1
test2
J01_ada_bash
```

---

## Exercice 8 – Fais du ménage

Supprime le fichier 'hello.txt' puis les dossier créer juste avant sans utiliser `cd`.
Attention, pour éviter de supprimer "tout ton ordinateur", n'hésite pas à faire valider ta ligne de commande avant de l'exécuter via `tab`.

```bash
rm J01_ada_bash/hello.txt
rmdir test1 test2
```

## Exercice 9 – Copie et range

Crée un fichier commande_terminal, toujours sans utiliser `cd` puis déplace le fichier dans le dossier `J01_ada_bash`.

```bash
echo `mkdir touch ls` > commande_terminal.md
mv commande_terminal.md J01_ada_bash/
```

## Exercice 9 (bonus) – Copie-le

toujours sans utiliser `cd` fais une copie du fichier `commande_terminal.md` dans le dossier `ada`.

```bash
cp J01_ada_bash/commande_terminal.md ./
```

## Exercice 10 – on écrit

va dans ton dossier `J01_ada_bash` et écrit les commandes que tu as pu réalisé

## Exercice 11 – on envoie sur github

tu peux maintenant utiliser github \
(si besoin tu peux regarder le guide de github)\
nous allons mettre en place le repo et le `push` sur github

```bash
git init
```
