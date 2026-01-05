# Portfolio V2 - Damien SCHONBAKLER

**Architecte Solutions | Fullstack Developer | Maker**

Ce dépôt contient le code source de mon portfolio professionnel (Version 2). Il reflète mon identité polyvalente, alliant rigueur industrielle, expertise logicielle et passion pour l'innovation (Maker/Homelab).

Le design suit une esthétique **"Neo-Industrial & Blueprint"**, mettant en avant la structure, la technique et la robustesse.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Docker](https://img.shields.io/badge/docker-ready-blue)

## 🌟 Fonctionnalités & Design

*   **Identité Visuelle** : Thème sombre, grilles techniques, "Blueprint" style, et accentuation de couleurs fonctionnelles (Bleu technique, Orange alerte, Vert validation).
*   **Sections Clés** :
    *   **Hero** : Introduction dynamique avec effet "Typewriter" et indicateurs de défilement.
    *   **Les 3 Piliers** : Mise en valeur des trois domaines d'expertise (Ingénierie Industrielle, Développement Fullstack, Innovation Personnelle).
    *   **Expérience & Réalisations** : Focus sur les projets majeurs (IT/OT Airbus, Borsalino OS).
    *   **Le Lab** : Une section dédiée à l'auto-hébergement, Kubernetes et la domotique (Home Assistant).
*   **Performance** : Site entièrement statique (HTML/CSS/JS), ultra-léger et rapide.
*   **Responsive** : Adapté à tous les écrans (Mobile, Tablette, Desktop).

## 🛠️ Stack Technique

*   **Frontend** : HTML5 sémantique, CSS3 (CSS Grid, Flexbox, Variables), Vanilla JavaScript.
*   **Serveur Web** : Nginx (via Docker).
*   **Déploiement** : Docker & Docker Compose.

## 🚀 Installation & Développement Local

Pour tester le site localement, vous pouvez simplement ouvrir le fichier `index.html` dans votre navigateur ou utiliser un serveur statique simple.

### Avec Python
```bash
python -m http.server 8000
# Accédez à http://localhost:8000
```

### Avec VS Code
Utilisez l'extension "Live Server".

## 🐳 Déploiement (Docker)

Le projet est conteneurisé avec Nginx Alpine pour une empreinte minimale.

### Structure Docker
*   **Dockerfile** : Image basée sur `nginx:alpine`.
*   **docker-compose.yml** : Configuration prête pour un déploiement en Homelab (Traefik, IP statique).

### Commandes
```bash
# Construire et lancer le conteneur en arrière-plan
docker-compose up -d --build

# Voir les logs
docker-compose logs -f

# Arrêter le conteneur
docker-compose down
```

### Configuration Homelab (Traefik)
Le `docker-compose.yml` est pré-configuré pour s'intégrer dans un réseau Traefik existant (`br-dams`) avec une IP statique.

*   **Host** : `portfolio-v2.damswallace.fr`
*   **IP** : `172.18.0.121`
*   **Réseau** : `br-dams`

## 📂 Structure du Projet

```
.
├── assets/             # Images, icônes et fichiers statiques (CV)
├── css/               # (Intégré dans styles.css pour la V2)
├── js/                # (Intégré dans script.js pour la V2)
├── index.html         # Point d'entrée principal
├── styles.css         # Feuille de style globale
├── script.js          # Logique frontend (Animations, Scroll)
├── Dockerfile         # Configuration de l'image Docker
├── docker-compose.yml # Orchestration des conteneurs
└── README.md          # Documentation
```

## 📝 Auteur

**Damien SCHONBAKLER**
*   *Architecte Solution Industrielle*
*   *Développeur Fullstack*
*   *Passionné de Domotique & Self-hosting*
