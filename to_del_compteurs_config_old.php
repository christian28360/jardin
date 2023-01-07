<?php

$TABLE_ONLINE = 'visiteurs_en_ligne';     // nom de la table des visiteurs en ligne
$TABLE_VISITORS = 'visiteurs_du_site';      // nom de la table des visiteurs du site
//------------------------------ADMINISTRATION-------------------------------
$ADMIN_USER = 'sa';             // nom de l'administratieur
$ADMIN_PASSWORD = 'ezs824';     // mot de passe de l'administrateur


if (get_ip() == '127.0.0.1' || get_ip() == '::1' || get_ip() == 'localhost') {  // on est en local
    //**************************************************************************//
    //                      Fichier des définitions des compteurs: connexion sur serveur local.           //
    //*************************************************************************//
    $DB_HOST = 'dinde.o2switch.net'; // nom hote de la base de données
    $DB_USER = 'inneshop-alcon@mon-jardin-naturel.fr';          // nom d'utilisateur de la bdd
    $DB_PASSWORD = '4dDgBwYz9Jk7QZp';             // mot de passe de la bdd
    $DB_NAME = 'frol4418_jardinnaturel';         // nom de la base de données
    $serveur_local = false;
    $decalage = 0;                   // si on est chez l'hébergeur, récup. décalage horaire 00webhost (6h)}
//    $DB_HOST = '127.0.0.1';          // nom h�te de la base de donn�e
//    $DB_USER = 'root';               // nom d'utilisateur de la bdd
//    $DB_PASSWORD = '';               // mot de passe de la bdd
//    $DB_NAME = 'stats';              // nom de la base de donn�e
//    $serveur_local = true;
//    $decalage = 0;                   // d�calage horaire nul, on est � la maison
} else {  // on est en distant
    //**************************************************************************//
    //                      Fichier des définitions des compteurs : connexion sur serveur hébergé,     //
    //**************************************************************************//
    $DB_HOST = 'dinde.o2switch.net'; // nom hote de la base de données
    $DB_USER = 'inneshop-alcon@mon-jardin-naturel.fr';          // nom d'utilisateur de la bdd
    $DB_PASSWORD = '4dDgBwYz9Jk7QZp';             // mot de passe de la bdd
    $DB_NAME = 'frol4418_jardinnaturel';         // nom de la base de données
    $serveur_local = false;
    $decalage = 0;                   // si on est chez l'hébergeur, récup. décalage horaire 00webhost (6h)}
}
