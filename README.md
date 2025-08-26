# Intellect-Group - Site Web avec Backend

## Description
Site web complet pour Intellect-Group, structure de placement de professeurs à domicile en Côte d'Ivoire. Cette version inclut un backend Flask pour le stockage centralisé des résultats d'examens.

**Devise :** L'excellence à tout prix

## Architecture du projet

### Frontend (React)
- Interface utilisateur moderne et responsive
- Examens interactifs avec chronomètre
- Panneau d'administration sécurisé

### Backend (Flask)
- API REST pour la gestion des résultats d'examens
- Base de données SQLite pour le stockage persistant
- Endpoints sécurisés pour l'administration

## Fonctionnalités

### Page d'accueil
- Présentation d'Intellect-Group
- Informations de contact : +225 05 02 14 4613
- Localisation : Marcory, Côte d'Ivoire
- Couverture de toutes les séries : A, D, C

### Examens par niveau
Le site propose des évaluations spécifiques pour chaque niveau :

1. **CE2 à CM1** - Écriture, Règles de grammaire, Culture générale
2. **6ème à 3ème** - Mathématiques, Français, Histoire-Géographie, Culture générale, Physique-Chimie, Logique
3. **Série A2** - Philosophie, Français, Anglais
4. **Série A1** - Mathématiques, Histoire-Géographie, Physique, Philosophie, Français
5. **Série D** - SVT, Mathématiques, Physique

### Caractéristiques des examens
- Durée : 20 minutes par examen
- 15 questions par niveau
- Correction automatique
- Affichage du score et remarques personnalisées
- Chronomètre en temps réel
- **Stockage centralisé des résultats**

### Système de notation et remarques
- **Score < 50%** : "Renforcez vos connaissances"
- **Score 50-74%** : "Bravo mais améliorez vos bases"
- **Score ≥ 75%** : "Félicitations, vous serez sans aucun doute un membre précieux de notre structure"

### Panneau d'administration centralisé
- Accès sécurisé par code : **1231**
- **Visualisation de TOUS les résultats d'examens de tous les candidats du monde entier**
- Statistiques détaillées en temps réel
- Historique complet avec date, heure, scores
- Détail des réponses (bonnes et mauvaises) pour chaque candidat
- Fonctions d'administration (effacer les données, actualiser)

## Technologies utilisées

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router
- Lucide Icons

### Backend
- Flask (Python)
- Flask-SQLAlchemy
- Flask-CORS
- SQLite (base de données)

## Installation et déploiement

### Prérequis
- Python 3.8+ avec pip
- Node.js (version 18 ou supérieure)
- npm ou pnpm

### Installation locale

#### 1. Cloner ou extraire le projet
```bash
# Si vous avez une archive
tar -xzf intellect-group-backend-complet.tar.gz
cd intellect-group-backend
```

#### 2. Configuration du backend
```bash
# Activer l'environnement virtuel Python
source venv/bin/activate  # Sur Linux/macOS
# ou
venv\\Scripts\\activate  # Sur Windows

# Les dépendances sont déjà installées, mais si nécessaire :
pip install -r requirements.txt
```

#### 3. Construction du frontend
```bash
cd src/static
npm install
npm run build
cp -r dist/* .  # Copier les fichiers de production
cd ../..
```

#### 4. Lancement du serveur
```bash
# Depuis la racine du projet
source venv/bin/activate
python src/main.py
```

Le site sera accessible sur http://localhost:5000

### Déploiement sur Render

#### Option 1 : Déploiement Web Service (Recommandé)
1. Créer un compte sur render.com
2. Connecter votre repository GitHub
3. Créer un nouveau "Web Service"
4. Configurer les paramètres :
   - **Build Command:** `cd src/static && npm install && npm run build && cp -r dist/* . && cd ../.. && pip install -r requirements.txt`
   - **Start Command:** `python src/main.py`
   - **Environment:** `Python 3`

#### Option 2 : Variables d'environnement (si nécessaire)
- `FLASK_ENV=production`
- `PORT=5000`

### Déploiement sur d'autres plateformes

#### Heroku
1. Créer un `Procfile` :
   ```
   web: python src/main.py
   ```
2. Configurer les buildpacks Python et Node.js
3. Déployer via Git

#### Railway
1. Connecter le repository
2. Railway détectera automatiquement Python
3. Configurer la commande de démarrage : `python src/main.py`

## API Endpoints

### Résultats d'examens
- `POST /api/exam-results` - Sauvegarder un résultat
- `GET /api/exam-results` - Récupérer tous les résultats
- `DELETE /api/exam-results/clear` - Supprimer tous les résultats

### Statistiques
- `GET /api/stats` - Récupérer les statistiques globales

## Structure du projet
```
intellect-group-backend/
├── venv/                          # Environnement virtuel Python
├── src/
│   ├── static/                    # Frontend React (construit)
│   │   ├── src/                   # Code source React
│   │   ├── dist/                  # Version construite
│   │   ├── assets/
│   │   └── index.html
│   ├── models/
│   │   └── exam_result.py         # Modèle de données
│   ├── routes/
│   │   └── exam_api.py            # Routes API
│   ├── database/
│   │   └── app.db                 # Base de données SQLite
│   └── main.py                    # Point d'entrée Flask
├── requirements.txt               # Dépendances Python
└── README.md
```

## Avantages de cette version avec backend

### Pour l'administrateur
- **Vision globale** : Voir tous les résultats de tous les candidats, peu importe où ils ont passé l'examen
- **Données centralisées** : Plus de perte de données, tout est stocké sur le serveur
- **Statistiques en temps réel** : Suivi des performances globales
- **Accès depuis n'importe quel appareil** : Les données sont accessibles depuis n'importe où

### Pour les candidats
- **Expérience identique** : L'interface reste la même
- **Fiabilité** : Les résultats sont automatiquement sauvegardés
- **Fallback local** : En cas de problème serveur, sauvegarde locale de secours

## Sécurité
- Code d'accès administrateur : 1231
- API sécurisée avec gestion d'erreurs
- CORS configuré pour les requêtes cross-origin
- Validation des données côté serveur

## Support technique
Cette version complète résout le problème de stockage local des résultats. Maintenant :

✅ **Stockage centralisé** : Tous les résultats sont sauvegardés sur le serveur
✅ **Accès global** : L'administrateur peut voir tous les résultats depuis n'importe quel appareil
✅ **Statistiques en temps réel** : Suivi des performances globales
✅ **Fiabilité** : Base de données persistante
✅ **Scalabilité** : Peut gérer de nombreux candidats simultanément

## Contact
**Intellect-Group**
- Téléphone : +225 05 02 14 4613
- Localisation : Marcory, Côte d'Ivoire
- Devise : L'excellence à tout prix

