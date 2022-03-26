
# Projet 6 - Construisez une API sécurisée pour une application d'avis gastronomiques:
Ce projet cosnsite à développer une application web nommée "Piquante" dans laquelle les utilisateurs peuvent ajouter leurs sauces préférées et liker ou disliker les sauces ajoutées par les autres.
L'objectif est de créer le backend de l'application, [le frontend](https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6) est déja fourni.

## Compétences évaluées
* Implémenter un modèle logique de données conformément à la réglementation
* Stocker des données de manière sécurisée
* Mettre en œuvre des opérations CRUD de manière sécurisée

## Installations

* Partie frontend
  * Angular CLI 
  * Node-sass
  * Sur Windows, ces installations nécessitent d'utiliser PowerShell en tant qu'administrateur.
  * Pour plus d'info sur le frontend vistez [ce lien](https://github.com/OpenClassrooms-Student-Center/Web-Developer-P6)

* Partie backend
  * Node Js version: v16.14.0 et npm version: 8.3.1
  * Base de données MongoDB et hébergement sur MongoDB Atlas
  * Framework Express

## Pour lancer l'application:

Pour lancer le front: 
1. Dans un terminal, accéder au dossier frontend
2. Executez la commande npm install 
3. Executez la commande npm start  
Le frontend se lancera automatiquement sur le port:8081

Pour démarrer le server: 
1. Acceder au dossier backend 
2. Ajouter un fichier de configuration ".env" à la racine du backend. A l'intérieur il faut définir ces deux variables d'environnement:  
  * DB_CONNECT = "XXXX"
  * CLE_ENCODAGE = "XXX"
3. Ajouter un dossier nommé images au backend
2. Ouvrir un terminal dans le dossier backend et executez la commande npm install
3. Ensuite executez la commande node server pou demarrer le server et se connecter à la BDD
Si tout fonctionne bien vous allez voir afficher dans le terminal le message suivant: Connection à mongoDB réussie

## Pièce jointe : 
* [Requirements](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DWJ_FR_P6/Requirements_DW_P6.pdf)
