# Intellect-Group - Site Web

## Description
Site web pour Intellect-Group, structure de placement de professeurs à domicile en Côte d'Ivoire.

**Devise :** L'excellence à tout prix

## Fonctionnalités

### Page d'accueil
- Présentation d'Intellect-Group
- Informations de contact : +225 05 02 14 46 23
- Localisation : Marcory, Côte d'Ivoire
- Couverture de toutes les séries : A, D, C

### Examens par niveau
Le site propose des évaluations spécifiques pour chaque niveau :

1. **CE2 à CM1**
   - Écriture
   - Règles de grammaire
   - Culture générale

2. **6ème à 3ème**
   - Mathématiques
   - Français
   - Histoire-Géographie
   - Culture générale
   - Physique-Chimie
   - Logique

3. **Série A2**
   - Philosophie
   - Français
   - Anglais

4. **Série A1**
   - Mathématiques
   - Histoire-Géographie
   - Physique
   - Philosophie
   - Français

5. **Série D**
   - SVT
   - Mathématiques
   - Physique

### Caractéristiques des examens
- Durée : 20 minutes par examen
- 15 questions par niveau
- Correction automatique
- Affichage du score et remarques personnalisées
- Chronomètre en temps réel

### Système de notation et remarques
- **Score < 50%** : "Renforcez vos connaissances"
- **Score 50-74%** : "Bravo mais améliorez vos bases"
- **Score ≥ 75%** : "Félicitations, vous serez sans aucun doute un membre précieux de notre structure"

### Panneau d'administration
- Accès sécurisé par code : **1231**
- Visualisation de tous les résultats d'examens
- Statistiques détaillées
- Historique complet avec date, heure, scores
- Détail des réponses (bonnes et mauvaises) pour chaque candidat

## Technologies utilisées
- React 18
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

## Installation et déploiement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou pnpm

### Installation locale
1. Extraire l'archive du projet
2. Ouvrir un terminal dans le dossier du projet
3. Installer les dépendances :
   ```bash
   npm install
   ```
4. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```
5. Ouvrir http://localhost:5173 dans le navigateur

### Déploiement sur Render
1. Créer un compte sur render.com
2. Connecter votre repository GitHub
3. Créer un nouveau service "Static Site"
4. Configurer les paramètres :
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Déployer

### Déploiement sur Netlify
1. Créer un compte sur netlify.com
2. Glisser-déposer le dossier `dist` après avoir exécuté `npm run build`
3. Ou connecter votre repository GitHub pour un déploiement automatique

### Déploiement sur Vercel
1. Créer un compte sur vercel.com
2. Importer le projet depuis GitHub
3. Vercel détectera automatiquement la configuration React

## Structure du projet
```
intellect-group/
├── public/
├── src/
│   ├── assets/
│   │   └── logo.jpg
│   ├── components/
│   │   ├── HomePage.jsx
│   │   ├── ExamPage.jsx
│   │   └── AdminPanel.jsx
│   ├── data/
│   │   └── examQuestions.js
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Couleurs du site
- **Couleur principale :** Jaune or (#FFD700)
- **Couleur secondaire :** Blanc (#FFFFFF)
- **Couleur d'accent :** Blanc cassé (#FFF8DC)

## Contact
**Intellect-Group**
- Téléphone : +225 05 02 14 46 23
- Localisation : Marcory, Côte d'Ivoire
- Devise : L'excellence à tout prix

## Support
Pour toute question technique ou modification, contactez l'équipe de développement.

