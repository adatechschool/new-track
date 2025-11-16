# Installation de Drizzle dans un projet NextJS

1. Installer les dépendences :

pnpm add drizzle-orm @neondatabase/serverless\npnpm add -D drizzle-kit

2. Créer un fichier pour la connexion au client Neon `./lib/db/drizzle.ts` :

```ts
import {drizzle} from "drizzle-orm/neon-http";

export const db = drizzle(process.env.DATABASE_URL!);
```

3. Créer un fichier qui contient de schéma de base de données :

```ts
import {pgTable, serial, text} from "drizzle-orm/pg-core";

export const users = pgTable("skills", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull().unique(),
});
```

4. Créer un fichier `./drizzle.config.js` :

```js
import {defineConfig} from "drizzle-kit";

export default defineConfig({
    schema: "./lib/db/schema.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});
```

5. Ajouter les scripts drizzle au `package.json` :

```json
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "eslint",
        "db:generate": "drizzle-kit generate",
        "db:migrate": "drizzle-kit migrate",
        "db:push": "drizzle-kit push",
        "db:studio": "drizzle-kit studio"
    },
```

6. Lancer le script pour créer la migration à partir du schéma :

```
pnpm run db:generate
```

7. Lancer le script pour mettre à jour la DB en exécutant la migration :

```
pnpm run db:push
```

8. Utilise le client où tu veux dans ton code serveur (components ou routes) :

```ts
const skills = await db.select().from(skillsTable);
```
