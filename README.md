[![React CI](https://github.com/DocteurSEO/docker-node-spotify/workflows/React%20CI/badge.svg)](https://github.com/DocteurSEO/docker-node-spotify/actions?query=React%3ACI+branch%3Adev)
[![Docker build](https://github.com/DocteurSEO/docker-node-spotify/workflows/Docker%20Builds/badge.svg)](https://github.com/DocteurSEO/docker-node-spotify/actions?query=Docker%3ABuilds%3A&%3Apush+branch%3Amaster)

## Spotify API :

exercice sympathique qu’utilise l’API Spotify. Pour le lancer, assurez-vous d’avoir **Docker** installé dans votre ordinateur.

Merci de créer un .env avec les variables d’environnement nécessaires.
Un exemple : `.env.config` se trouve dans le dossier.

Quelques détails techniques sur le projet :

**. un conteneur NodeJS Express pour la gestion de l’API**  
**. un conteneur React-Redux avec TypeScript (côté client)**  
**. un conteneur Redis pour la mise en place du cash**  
**. un conteneur NGNIX qui fait office de proxi**


## Commande à exécuter : 
`docker-compose up --build`

### À Noter :

Une présence de fichiers `YAML` pour activer le déploiement continue et l’intégration continue avec GitHub Action.

Les conteneurs sont automatiquement construits et envoyés sur DockerHub.

Les tests unitaires et d’intégration ne sont pas encore mis en place; Le projet est amené à évoluer.

# Have Fun !
