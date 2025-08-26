# Instructions de Déploiement sur Render - Intellect-Group

## Modifications Effectuées

✅ **Numéro de téléphone mis à jour** : +225 0502144623
✅ **Cases des séries améliorées** : Meilleure visibilité des icônes et textes
✅ **PostgreSQL intégré** : Sauvegarde permanente des résultats d'examens
✅ **Logo sauvegardé** : Ne disparaîtra plus lors du déploiement
✅ **Optimisé pour Render** : Configuration complète pour le déploiement

## Étapes de Déploiement sur Render

### 1. Préparation du Code
- Téléchargez le dossier `intellect-group-backend` modifié
- Créez un nouveau dépôt Git (GitHub, GitLab, etc.)
- Uploadez tout le contenu du dossier dans votre dépôt

### 2. Création du Service Web sur Render

1. **Connectez-vous à Render** : https://render.com
2. **Créez un nouveau Web Service** :
   - Cliquez sur "New +" → "Web Service"
   - Connectez votre dépôt Git
   - Sélectionnez le dépôt contenant votre code

### 3. Configuration du Service Web

**Paramètres de base :**
- **Name** : `intellect-group-app` (ou le nom de votre choix)
- **Environment** : `Python 3`
- **Region** : Choisissez la région la plus proche (ex: Frankfurt pour l'Europe)
- **Branch** : `main` (ou votre branche principale)
- **Root Directory** : Laissez vide
- **Runtime** : Sera détecté automatiquement grâce au fichier `runtime.txt`

**Commandes de build et de démarrage :**
- **Build Command** : `pip install -r requirements.txt`
- **Start Command** : `python src/main.py`

### 4. Configuration de la Base de Données PostgreSQL

1. **Créez une base de données PostgreSQL** :
   - Dans le dashboard Render, cliquez sur "New +" → "PostgreSQL"
   - **Name** : `intellect-group-db`
   - **Database** : `intellect_group`
   - **User** : `intellect_user` (ou laissez par défaut)
   - **Region** : Même région que votre service web
   - Cliquez sur "Create Database"

2. **Récupérez l'URL de connexion** :
   - Une fois la base créée, allez dans l'onglet "Connect"
   - Copiez l'**External Database URL** (commence par `postgresql://`)

### 5. Configuration des Variables d'Environnement

Dans les paramètres de votre Web Service :
1. Allez dans l'onglet "Environment"
2. Ajoutez la variable suivante :
   - **Key** : `DATABASE_URL`
   - **Value** : Collez l'URL PostgreSQL copiée à l'étape précédente

### 6. Déploiement

1. **Cliquez sur "Create Web Service"**
2. **Attendez le déploiement** (5-10 minutes)
3. **Vérifiez les logs** pour vous assurer qu'il n'y a pas d'erreurs

### 7. Vérification Post-Déploiement

Une fois déployé :
1. **Testez l'accès au site** via l'URL fournie par Render
2. **Vérifiez que le logo s'affiche** correctement
3. **Testez un examen** pour vérifier que les résultats sont sauvegardés
4. **Accédez au panneau admin** pour voir les résultats stockés

## Points Importants

### Sauvegarde des Résultats
- ✅ Les résultats des examens sont maintenant **sauvegardés définitivement** dans PostgreSQL
- ✅ Ils ne disparaîtront plus même après redémarrage du serveur
- ✅ Accessibles via le panneau d'administration

### Logo et Assets
- ✅ Le logo est maintenant **intégré dans le code source**
- ✅ Il ne disparaîtra plus lors des déploiements
- ✅ Tous les assets sont correctement référencés

### Numéro de Téléphone
- ✅ Mis à jour partout dans l'application : **+225 0502144623**

### Cases des Séries
- ✅ **Visibilité améliorée** des trois cases "Série A", "Série D", "Série C"
- ✅ Fond plus opaque (90% au lieu de 20%)
- ✅ Icônes et texte en couleur foncée pour meilleur contraste

## Dépannage

### Si le déploiement échoue :
1. Vérifiez les logs dans Render
2. Assurez-vous que la variable `DATABASE_URL` est correctement configurée
3. Vérifiez que tous les fichiers sont bien dans le dépôt Git

### Si la base de données ne fonctionne pas :
1. Vérifiez que la base PostgreSQL est bien créée et active
2. Vérifiez l'URL de connexion dans les variables d'environnement
3. Les tables se créent automatiquement au premier démarrage

### Si le logo ne s'affiche pas :
- Le logo est maintenant intégré dans le code source, il devrait s'afficher automatiquement

## Support

En cas de problème, vérifiez :
1. Les logs de déploiement dans Render
2. Que tous les fichiers sont bien uploadés dans votre dépôt Git
3. Que la base de données PostgreSQL est active et accessible

**Votre site sera accessible à l'adresse fournie par Render (ex: https://intellect-group-app.onrender.com)**

