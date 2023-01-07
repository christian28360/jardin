<?php
$site = "jardin";

// fonctions de compteurs
require_once("_" . $site . "_fonctions.php");
require_once("compteurs_config.php");
require_once("compteurs.php");       // connexion à la base de données

// Gestion des cookie et du démarrage
require_once("_" . $site . "_cookies.php");
