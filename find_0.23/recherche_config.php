<?PHP
/*
 motreur recherche intra site v0.2
***********************************************************************************************
LE DETAIL DES COMMENTAIRES DE CE FICHIER SONT REPORTES DANS LE MEME AVEC EXTENSION .TXT
***********************************************************************************************
*/
$config_version = "0.2";
$config_date    = "28/02/2012";

$auteur   = "Christian Alcon <cite>Copyright (C) 2012</cite>";

// formulaire de saisie et de recherche :
if ( ! isset($Mot_cherche) ) {
	$Mot_cherche = "";
	$Txt = "Recherche sur le site";
}
else {
	$Txt = "Autre recherche sur le site";
}

$form_recherche   =  "
		<form method='GET'><br/ >" . $Txt . " :<br />
		<input type='hidden' value='go' name='action'>
		<input title='coucou'
		type='text'
		value=\"$Mot_cherche\"
		maxlength='50' size='25'
		name='Mot_cherche'>
		<input type=submit value='Aller, cherche ! !'><br />
		</form>
		";

// Changer le nombre de r�sultats � afficher par page
$maxipage = 5;

// Configuration des dossiers � scanner et postion du moteur
$dossier = array
(
		"mon site"=> ".",
		"moteur"  => "/find/"
);
// Dossier o� est le moteur
// option future � d�velopper : on le recherche sur le site en live !
$chemin_moteur       = $dossier["mon site"] . $dossier["moteur"];
// fichier qui contiendra la page html avec le r�sultat de la recherche (unique pour la cession)
$resultat_recherche  = $chemin_moteur . "resultat_recherche_" . session_id() . ".html";

//  Activation du scan des sous dossiers  = "on", s�sactivation = "off"
$scan_sousdos = "on";

// Configuration des fichiers/dossiers � exclure de la recherche
// liste des dossiers exclus
$exclu_dossier = array
(
		"find",
		"styles",
		"gestion",
		"images",
);
// liste des fichiers � exclure de la recherche
$exclu_fichier = array
(
		"_vide.html",
		"404.php",
);
// liste des extentions � exclure de la recherche
$exclu_ext = array
(
		"css",
		"php",
		"gif",
		"jpg",
		"jpeg",
		"png",
		"xls",
		"xml",
		"js",
		"csv",
		"pdf",
		"data",
		"swf"
);

// "on" ou "off" pour afficher l'extention du fichier tyrouv�
$montre_ext = "off";

//  $go2url     = "[dossier]/[fichier]" pour g�n�rer le lien trouv�
$go2url     = "index.php?page=[dossier]/[fichier]";

// Fichier pour �crire le r�sultat de la recherche et l'afficher dans la page cenrale,
// � la place de la page courante
$dir = $chemin_moteur;
// avant toutes choses, on va purger les fichiers de recherche obsol�tes

// puis on part sur un nouveau fichier unique pour l'utilisateur
// $f contient le nom du fichier html g�n�r�, contenant le r�sultat de la recherche
// on gardera le m�me fichier tant que l'on sera sur la m�me session PHP
$f = $resultat_recherche;

// param�trtes sur les mots � chercher
$NbMotsMax = 5;    // Nombre maxi ed mots � prendre en compte
$LgMotMin  = 3;    // Longueur minimale d'un mot pour la recherche

debug ("fichier � ouvrir : " . $f);
$f_html = fopen($f, "w");
fwrite($f_html , "<h1>ma premi�re ligne</h1>\n");
fwrite($f_html , "<p>Seconde ligne</p>\n");
fwrite($f_html , "<h1>c'est (d�j� ?) fini !</h1>\n");
fwrite($f_html , "<p>puis on l'�crase par la recherche suivante</p>\n");
fclose($f_html);

// Param�tres html
// Balises r�cup�r�es
$balises_gardees = "<p><h1><h2><h3><h4><h5>";

// Liste des codes htmls sp�ciaux
$caractere_special = array (
		"&agrave;"  => "�",
		"&aacute;"  => "�",
		"&acirc;"   => "�",
		"&atilde;"  => "�",
		"&auml;"    => "�",
		"&aring;"   => "�",
		"&aelig;"   => "�",
		"&ccedil;"  => "�",
		"&egrave;"  => "�",
		"&eacute;"  => "�",
		"&ecirc;"   => "�",
		"&euml;"    => "�",
		"&icirc;"   => "�",
		"&iuml;"    => "�",
		"&ocirc;"   => "�",
		"&ouml;"    => "�",
		"&ugrave;"  => "�",
		"&uacute;"  => "�",
		"&ucirc;"   => "�",
		"&uuml;"    => "�",
		"&amp;"     => "&",
		// code rajout�s par Christian Alcon (d�cembre 2011),
// trouv�s sur http://www.commentcamarche.net/contents/html/htmlcarac.php3
// liste non exhaustive
		"&euro;"    => "�",
		"&oelig;"   => "�",
		"&copy;"    => "�",
		"&reg;"     => "�",
		"&Agrave;"  => "�",
		"&Aacute;"  => "�",
		"&Acirc;"   => "�",
		"&Atilde;"  => "�",
		"&Auml;"    => "�",
		"&Aring;"   => "�",
		"&Aelig;"   => "�",
		"&Ccedil;"  => "�",
		"&Egrave;"  => "�",
		"&Eacute;"  => "�",
		"&Ecirc;"   => "�",
		"&Euml;"    => "�",
		"&Igrave;"  => "�",
		"&Iacute;"  => "�",
		"&Icirc;"   => "�",
		"&Iuml;"    => "�",
		"&eth;"     => "�",
		"&Ntilde;"  => "�",
		"&Ograve;"  => "�",
		"&Oacute;"  => "�",
		"&Ocirc;"   => "�",
		"&Otilde;"  => "�",
		"&Ouml;"    => "�",
		"&Ugrave;"  => "�",
		"&Uacute;"  => "�",
		"&Ucirc;"   => "�",
		"&Uuml;"    => "�",
);

?>