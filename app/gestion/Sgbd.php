<?php

namespace gestion;

use PDO;

/**
 * Description of Sgbd
 *
 * @author christian
 * Fonctions d'accès à la base de donnée
 * Utilise PDO
 */
class Sgbd {

    /**
     * Connexion à la base de données
     * @param Array $params tableau avec les paramètres de connexion
     * @param string $DB_HOST Nom du serveur hôte
     * @param string $DB_USER
     * @param string $DB_PASSWORD
     * 
     * @returns object $connect Objet de connexion
     */
    function sgbdConnect(Array $params) {
        try {
//            $connexion = 'mysql:host=' . $params['host'] .
//                    ';dbname=' . $params['dbname']; //Ligne 1
            $connexion = new PDO('mysql:host=' . $params['host'] .
                    ';dbname=' . $params['dbname'],
                    $params['user'], $params['pwd']);

//            $arrExtraParam = array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"); //Ligne 2
//            $pdo = new PDO($connexion, 'Utilisateur', 'Mot de passe', $arrExtraParam); //Ligne 3; Instancie la connexion
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); //Ligne 4
        } catch (PDOException $e) {
            $msg = 'ERREUR PDO dans ' . $e->getFile() . ' L.' . $e->getLine() . ' : ' . $e->getMessage();
            die($msg);
        }
    }

    function getData($qry) {
        debug($qry);
        
        try {
            include("gestion\Sgbd.php");
        } catch (Exception $exc) {
            print("erreur " . $exc->getTraceAsString());
        }
    }

}
