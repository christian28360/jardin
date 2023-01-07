<?PHP

/*
  A Blork Engine v0.23b
 * **********************************************************************************************
  LE DETAIL DES COMMENTAIRES DE CE FICHIER SONT REPORTES DANS LE MEME AVEC EXTENSION .TXT
 * **********************************************************************************************
 */
$config_version = "0.5c";

// on cherche le dossier où est le moteur (ou on l'écrit en dur, c'est plus rapide) :
$chemin_moteur = "app/recherche/";
// nom de la session pour construction des noms de fichiers uniques
$session = $_COOKIE['PHPSESSID'];

// fichier qui contiendra la page html avec le résultat de la recherche (unique pour la cession)
$resultat_recherche = $chemin_moteur . "resultatRecherche" . $session . ".html";
$auteur = "Script issu de <cite>a Blork Engine, Copyright (C) 2003 zulios, modifié par Christian Alcon (C) 2020</cite>";

$maxipage = "5"; // Changer le nombre de résultats affichés par page
// Configuration des dossiers à scanner
$dossier = array
    (
    "jardin" => ".",
);

//  Activation du scan des sous dossiers  = "on", dèsactivation = "off"
$scan_sousdos = "on";

//  Configuration des fichiers/dossiersà exclure de la recherche
$exclu = array
    (
    "engine.php",
    "enginoscope.php",
    "blork_engine_config.php",
    "blork_engine_bas.html",
    "blork_engine_haut.html",
    "blork_engine.gif",
);

$montre_ext = "off";      // "on" ou "off"
//  $go2url     = "[dossier]/[fichier]";
$go2url = "index.php?page=[dossier]/[fichier]";

// Fichier pour écrire le résultat de la recherche et l'afficher dans la page cenrale,
// à la place de la page courante
$dir = 'resultatRecherche/';  // sous dossier du dossier courant = app/recherche
//$dir = $chemin_moteur . 'resultatRecherche/';
// avant toutes choses, on va purger les fichiers de recherche obsolètes
// puis on part sur un nouveau fichier unique pour l'utilisateur (d'où rand)
// il faut générer un fichier basé sur l'ID de session
//  $fichier = "resultat_recherche__" . rand(time(), 1) . ".html";
$fichier = $session . ".html";

// on gardera le même fichier tant que l'on sera sur la même session PHP
$result = fopen($dir . $fichier, "w");
/* données de contrôle de bonne écritue */
fwrite($result, "<h1>ma première ligne</h1>\n");
fwrite($result, "<p>Seconde ligne</p>\n");
fwrite($result, "<h1>c'est (déjà ?) fini !</h1>\n");
fwrite($result, "<p>puis on l'écrase par la recherche suivante</p>\n");
//fclose($result);

// Liste des caractères spéciaux
// utilisés en fichiers html  
$caractere_special = array(
    "&agrave;" => "à",
    "&aacute;" => "á",
    "&acirc;" => "â",
    "&atilde;" => "ã",
    "&auml;" => "ä",
    "&aring;" => "å",
    "&aelig;" => "æ",
    "&ccedil;" => "ç",
    "&egrave;" => "è",
    "&eacute;" => "é",
    "&ecirc;" => "ê",
    "&euml;" => "ë",
    "&icirc;" => "î",
    "&iuml;" => "ï",
    "&ocirc;" => "ô",
    "&ouml;" => "ö",
    "&ugrave;" => "ù",
    "&uacute;" => "ú",
    "&ucirc;" => "û",
    "&uuml;" => "ü",
    "&amp;" => "&",
);
