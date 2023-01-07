<?php

namespace app\common;

$site = "jardin";

// chargement des modules
require_once("app/common/JardinFonctions.php");
//require_once("app/common/_cookies.php");
require_once("app/common/cooky.php");

require_once("app/gestion/BddConfig.php");
require_once("app/gestion/Bdd.php");
require_once("app/gestion/compteurs.php");

/* pour déclarer le chemin du log, et comment le trouver sur un serveur distant :
  Tu déposes à la racine de ton site un fichier nommé par exemple chemin.php avec ce contenu à l'intérieur:
  <?php echo getcwd(); ?>
  Ensuite tu l'appelles depuis ton navigateur avec ton propre nom de domaine, comme par exemple: http://www.TONNOMDEDOMAINE.COM/chemin.php
  Ceci devrait te retourner le chemin de la racine de ton site, il ne te reste plus qu'à rajouter /log et /tmp à la fin du fichier
 */
// TEST
/*
  $logPath = ($environnement == 'prod') ? "/home/frol4418/nous/mon-jardin-naturel.fr/" : "";
  $logfile = $logPath . "log/debug.log";
  $PHPlogfile = $logPath . "log/php_error.log";

  ini_set("error_log", $PHPlogfile );

  error_log("Mon premier message dans le fichier de log personnalisé !\n", 3, $logfile);
  error_log("Deuxième message dans le fichier de log personnalisé !\n", 3, $logfile);
 */

$fn = new JardinFonctions();
$fn->debug($_COOKIE, 'cookies');


//include("app/gestion/compteurs.php");       // connexion à la base de données
