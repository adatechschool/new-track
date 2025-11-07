# ⚛️ AdaCheckEvent

🧩 Installation

## Initialisation du projet avec Vite

Commande : npm create vite@latest

## Installation de Tailwind CSS avec Vite

Commande : npm install tailwindcss @tailwindcss/vite
📘 Documentation officielle : https://tailwindcss.com/docs/installation/using-vite

## Utilisation de TypeScript

### 📋 Cahier des charges
- Langages : JavaScript (ou TypeScript en bonus)
- Style : Tailwind CSS

## 🧠 Objectif général

Créer une application React permettant d’afficher les événements publics de Paris grâce à l’API officielle : `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20`

L’application doit permettre :
- d’afficher les événements sur une page d’accueil,
- de rechercher des événements par nom,
- de filtrer et trier les résultats,
- et de gérer un système de favoris.


⚙️ Consignes principales
🔹 1. Afficher les données depuis l’API avec `useEffect`
- Récupérer les données depuis l’API fournie.
- Créer un useState pour stocker les données récupérées.
- Afficher ces données sur la page via une boucle `.map()`.
- Gérer les erreurs réseau et le chargement avec un message ou un loader.

Astuce : Pensez à découper chacune de vos étapes pour mieux visualiser les données avant affichage.
🔹 2. Ajouter un bouton “voir plus” (“See more”)
- Prévoir un affichage alternatif lorsque certaines données sont absentes (par exemple : afficher “Aucune description disponible” ou une image par défaut).
- Créer un composant bouton “Voir plus” (“See more”) permettant de développer le contenu d’un événement (ex. afficher la description complète ou les détails pratiques).
- Gérer l’état d’affichage avec un useState pour basculer entre “Voir plus” et “Voir moins”.
- Assurer une mise en page responsive du contenu déplié (par exemple, adapter la taille du texte ou la disposition sur mobile)


🔹 3. Ajouter une barre de recherche (SearchBar)
- Créer une `SearchBar` sur la page d’accueil.
- Déclencher la recherche à chaque frappe (`onChange`) ou via un bouton “Rechercher”.
- Filtrer dynamiquement les événements selon le texte saisi, si je tape “bro” dans ma barre de recherche il devra me retourner tous les évènement contenant “bro” dans leur intitulé.
- Rendre la recherche insensible à la casse (`toLowerCase()`).

🔹 3. Créer une pagination
- Ajoutez un bouton “Charger 20 évènements supplémentaires” après la liste générée par `.map()`.
- Ajouter une fonction pour récupérer les 20 événements suivants (en gérant l’offset pour éviter les doublons).
- Ajoutez un state pour afficher un loader pendant le chargement.

🎁 Bonus
🔹 Filtres avancés
- Ajouter un tri par date (ascendant / descendant) avec `.sort()`.
- Proposer d’autres filtres : nom, localisation, catégorie, accessibilité, etc.
- Ajouter un bouton “Réinitialiser les filtres”.
🔹 Créer un hook personnalisé
- Concevoir un hook personnalisé (`useFetchEvents`) pour centraliser la logique de récupération.
- Définir clairement son rôle et ses paramètres.
- Réutiliser ce hook dans différents composants.
🔹 Système de favoris ❤️
- Implémenter un composant bouton qui aura pour but de manipuler les “Favoris”
- Stocker les informations enregistrées via le bouton dans un `useState` => `[fav, setFav] = useState([])`
- Créer un onglet “Mes Favoris” affichant uniquement les événements enregistrées
- Sauvegarder les favoris dans un `localStorage`

💡 Bonus ++
- 🌙 Mode sombre / clair → utile pour manipuler les classes conditionnelles de Tailwind CSS.
- 🗺️ MapBox → afficher les événements sur une carte interactive.
- ⚙️ React Query → gérer les appels API et le cache des données.
