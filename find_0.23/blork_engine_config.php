<?PHP

/*
  A Blork Engine v0.23b
 * **********************************************************************************************
  LE DETAIL DES COMMENTAIRES DE CE FICHIER SONT REPORTES DANS LE MEME AVEC EXTENSION .TXT
 * **********************************************************************************************
 */
$config_version = "0.5c";

// on cherche le dossier où est le moteur (ou on l'écrit en dur, c'est plus rapide) :
$chemin_moteur = "find/";
// fichier qui contiendra la page html avec le résultat de la recherche (unique pour la cession)
$resultat_recherche = $chemin_moteur . "resultat_recherche" . session_id() . ".html";
$auteur = "Script issu de <cite>a Blork Engine, Copyright (C) 2003 zulios</cite>";

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
$dir = $chemin_moteur;
// avant toutes choses, on va purger les fichiers de recherche obsolètes
// puis on part sur un nouveau fichier unique pour l'utilisateur (d'o� rand)
// il faut g�n�rer un fichier bas� sur l'ID de session
//  $fichier = "resultat_recherche__" . rand(time(), 1) . ".html";
$fichier = "resultat_recherche_" . session_id() . ".html";
// on gardera le même fichier tant que l'on sera sur la même session PHP

$result = fopen($dir . $fichier, "w");
fwrite($result, "<h1>ma première ligne</h1>\n");
fwrite($result, "<p>Seconde ligne</p>\n");
fwrite($result, "<h1>c'est (déjà ?) fini !</h1>\n");
fwrite($result, "<p>puis on l'écrase par la recherche suivante</p>\n");
fclose($result);

// Liste des codes htmls spéciaux
$caractere_special = array(
    "&agrave;" => "à",
    "&aacute;" => "�",
    "&acirc;" => "â",
    "&atilde;" => "�",
    "&auml;" => "�",
    "&aring;" => "�",
    "&aelig;" => "�",
    "&ccedil;" => "ç",
    "&egrave;" => "è",
    "&eacute;" => "é",
    "&ecirc;" => "è",
    "&euml;" => "ë",
    "&icirc;" => "î",
    "&iuml;" => "ï",
    "&ocirc;" => "ô",
    "&ouml;" => "ï",
    "&ugrave;" => "ù",
    "&uacute;" => "�",
    "&ucirc;" => "û",
    "&uuml;" => "ü",
    "&amp;" => "&",
    // code rajout�s par Christian Alcon (d�cembre 2011),
// trouv�s sur http://www.commentcamarche.net/contents/html/htmlcarac.php3
// liste non exhaustive
    "&euro;" => "€",
    "&oelig;" => "�",
    "&copy;" => "�",
    "&reg;" => "�",
    "&Agrave;" => "�",
    "&Aacute;" => "�",
    "&Acirc;" => "�",
    "&Atilde;" => "�",
    "&Auml;" => "�",
    "&Aring;" => "�",
    "&Aelig;" => "�",
    "&Ccedil;" => "�",
    "&Egrave;" => "�",
    "&Eacute;" => "�",
    "&Ecirc;" => "�",
    "&Euml;" => "�",
    "&Igrave;" => "�",
    "&Iacute;" => "�",
    "&Icirc;" => "�",
    "&Iuml;" => "�",
    "&eth;" => "�",
    "&Ntilde;" => "�",
    "&Ograve;" => "�",
    "&Oacute;" => "�",
    "&Ocirc;" => "�",
    "&Otilde;" => "�",
    "&Ouml;" => "�",
    "&Ugrave;" => "�",
    "&Uacute;" => "�",
    "&Ucirc;" => "�",
    "&Uuml;" => "�",
);
