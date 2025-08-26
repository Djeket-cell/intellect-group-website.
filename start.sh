#!/bin/bash

# Script de démarrage pour Render
echo "Démarrage de l'application Intellect-Group..."

# Installer les dépendances Python
pip install -r requirements.txt

# Créer les tables de la base de données
python -c "
import os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from src.main import app, db
with app.app_context():
    db.create_all()
    print('Tables de base de données créées avec succès')
"

# Démarrer l'application Flask
python src/main.py

