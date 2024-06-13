TP4-Angular-Spring- Analyse complète
Ce document propose une analyse approfondie du projet TP4 que vous avez décrit. Il met en évidence les différentes composantes, fonctionnalités et technologies impliquées, ainsi que les observations clés et les améliorations potentielles.
Présentation du projet
Ce projet TP4 vise à développer une application web pour la gestion des produits et des paiements des étudiants. Il s'appuie sur une combinaison de technologies, notamment Angular pour le frontend, JSON-server et Spring Boot pour le backend, et utilise JSON-server comme solution de persistance de données légère pour les étapes initiales.
Première démonstration (Gestion des produits avec JSON-server)
Page d'accueil : Affiche un simple message de bienvenue.
Page des produits :
Affiche la liste des produits avec des informations telles que le nom, la description et le prix.
Inclut une barre de recherche pour filtrer les produits.
Permet de supprimer des produits individuels.
Classe ProductsComponent : Gère les données et la logique des produits pour la page Produits.
Deuxième démonstration (Gestion des produits améliorée avec JSON-server)
Interface utilisateur améliorée : Utilise Angular Material pour une interface utilisateur plus raffinée et professionnelle.
Opérations CRUD : Permet de créer, lire, mettre à jour et supprimer des produits.
Création de nouveaux produits : Permet aux administrateurs authentifiés de créer de nouveaux produits.
Modification de produits : Permet de mettre à jour les détails des produits existants.
Authentification : Inclut un système d'authentification/déconnexion de base pour le contrôle d'accès.
Troisième démonstration (Gestion des paiements des étudiants avec Spring Boot)
Backend (Spring Boot) :
Implémente des API RESTful pour la gestion des étudiants et des paiements.
Fournit des points d'accès pour créer, lire, mettre à jour et supprimer des données.
Utilise la base de données H2 pour la persistance des données.
Inclut Swagger UI pour la documentation et le test des API.
Frontend (Angular) :
S'intègre à l'API backend Spring Boot.
Affiche les informations sur les étudiants et les paiements.
Permet de créer de nouveaux paiements, de télécharger des fichiers de paiement et de visualiser les détails des paiements.
Fournit une authentification pour la gestion des utilisateurs.
