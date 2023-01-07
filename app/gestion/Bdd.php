<?php

namespace app\gestion;

use app\common\JardinFonctions;
use PDO;

/**
 * Définition de la classe Base qui crée les liens vers la base de données
 * La classe sera appelée à chaque fois qu'une donnée de la base de données sera nécessaire
 * @author chris
 */
class Bdd {

//----------------------------------------
// SINGLETON
//----------------------------------------
    private static $connect = null;
    private $bdd;
    private $fn;

    public function __construct(
            $strBddServeur = "",
            $strBddBase = "",
            $strBddLogin = "",
            $strBddPassword = "") {
        try {
            $this->fn = new JardinFonctions();
            //On se connecte à MySQL
            $dsn = 'mysql:host=' . $strBddServeur . ';dbname=' . $strBddBase;
            $username = $strBddLogin;
            $password = $strBddPassword;
            $options = array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',);

            $this->bdd = new PDO($dsn, $username, $password, $options);
//            $this->fn->debug('connexion réussie');
        } catch (Exception $e) {
            $this->fn->debug($e, 'catch');

            $msg = 'ERREUR PDO dans ' . $e->getFile() . ' L.' . $e->getLine() . ' : ' . $e->getMessage();
            die($msg);
//            die('<hr><h4>Erreur : ' . $e->getMessage());
        }
    }

    public static function getInstance() {
        if (is_null(self::$connect)) {
            self::$connect = new Bdd();
        }
        return self::$connect;
    }

//----------------------------------------
// FONCTIONS
//----------------------------------------
// Permet d'effectuer une requête SQL. Retourne le résultat (s'il y en a un) de la requête sous forme d'objet
    public function requete($req) {
        $query = $this->bdd->query($req);
        return $query;
    }

// Permet de préparer une requête SQL. Retourne la requête préparée sous forme d'objet
    public function preparation($req) {
        $query = $this->bdd->prepare($req);
        return $query;
    }

// Permet d'exécuter une requête SQL préparée. Retourne le résultat (s'il y en a un) de la requête sous forme d'objet
    public function execution($query, $tab = null) {
        try {
            $req = $this->bdd->exec($query);
        } catch (Exception $exc) {
            echo $exc->getTraceAsString();
        }
        return $req;
    }

// Retourne les données dans un tableau
    public function getData($d) {
        return $d->fetchAll();
    }

// Retourne l'id de la dernière insertion par auto-incrément dans la base de données
    public function dernierIndex() {
        return $this->bdd->lastInsertId();
    }

}
