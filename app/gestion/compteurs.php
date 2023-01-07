<?php

namespace app\gestion;

$bdd = new Bdd($DB_HOST, $DB_NAME, $DB_USER, $DB_PASSWORD);

if (!$bdd) {   //    die('Connexion impossible : ' . mysql_error());
    $BD_accessible = false;
} else {
    $BD_accessible = true;
    // il y a deux tables :
    // visiteurs_en_ligne : liste les visiteurs qui sont en ligne
    // visiteurs_du_site  : liste les visiteurs depuis la mise en marche du site
    //-------------------------------------INSTALLATION DES TABLE------------------------------------
    if (!$bdd->requete("SELECT 1 FROM " . $TABLE_VISITORS . " LIMIT 1")) {
        // creer la table TABLE_VISITORS
        $bdd->execution("CREATE TABLE `" . $TABLE_VISITORS . "` (
        `session_id` varchar(32) NOT NULL default '',
        `ip_adress` varchar(15) NOT NULL default '',
        `entry_time` int(11) NOT NULL default '0',
        PRIMARY KEY  (`session_id`)) ");
    }
    $cpt_visitors = $bdd->requete("SELECT count(*) as nb FROM " . $TABLE_VISITORS)->fetch()['nb'];

    if (!$bdd->requete("SELECT 1 FROM " . $TABLE_ONLINE . " LIMIT 1")) {
        // creer la table TABLE_ONLINE
        $bdd->execution("CREATE TABLE `" . $TABLE_ONLINE . "` (
        `session_id` varchar(32) NOT NULL default '',
        `ip_adress` varchar(15) NOT NULL default '',
        `expiry` int(11) NOT NULL default '0',
        PRIMARY KEY  (`session_id`))");
    }
    $cpt_online = $bdd->requete("SELECT count(*) as nb FROM " . $TABLE_ONLINE)->fetch()['nb'];
    //----------------------------------FIN INSTALLATION DES TABLE------------------------------------

    $now = time();
    // supprimer toutes les sessions périmées de la base
    $bdd->preparation("DELETE FROM " . $TABLE_ONLINE . " WHERE expiry < " . $now)->execute();
    $exist = false;
    $bdd->preparation("DELETE FROM " . $TABLE_ONLINE . " WHERE session_id='" . session_id() . "'")->execute();

    $now += 3600;
    if ($exist) {
        $bdd->preparation("UPDATE " . $TABLE_ONLINE . " SET expiry=" . $now . " WHERE session_id='" . session_id() . "'")->execute();
    } else {
        $ip = $fn->getIp();
        if (!$fn->IsVisitorBot($ip)) { // c'est un vrai visiteur, pas un moteur de recherche
            //  $bdd->preparation("INSERT INTO " . $TABLE_ONLINE . " (session_id, ip_adress, expiry) VALUES ('" . session_id() . "', '" . $ip . "', " . $now . ")")->execute();
            //$bdd->preparation("INSERT INTO " . $TABLE_VISITORS . " (session_id, ip_adress, entry_time) VALUES ('" . session_id() . "', '" . $ip . "', " . time() . ")")->execute();
        }
    }
}
