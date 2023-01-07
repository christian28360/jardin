<?PHP
/* * * * * * * * * * * * * * * * * * * * * * *
 Moteur de recherche interne v0.1
Script du moteur
* * * * * * * * * * * * * * * * * * * * * * *
Copyright (C) 2012 Christian Alcon
* * * * * * * * * * * * * * * * * * * * * * */

// On fait les includes de base
require("recherche_config.php");

// fonction d�buggage :
function debug($txt)
{
	echo "<br><p style='background: black;'><span style='color: cyan;'><b>"
			. $txt .
			"</span></p></b><br>";
}

// Fonction de calcul de l'�ge (en jours) du fichier r�sultat
function date_diff_now($dt)
{
	$DateDuJour = date("d-m-Y");                    // date du jour
	$s = strtotime($DateDuJour) - strtotime(date("d-m-Y",$dt) ) -1;
	$d = intval($s / 86400) +1;
	return "$d";
}
function dd($date) {
	return date("d/m/Y H:i:s", $date);
}
// recherche r�cursive dans les sous-r�pertoires
function Lit_dossier($dossier)
{
	if($nbr < 1) // condition d'arret
		return 1;
	else
		return $nbr*factorielle($nbr -1);
}

// lit le contenu d'un fichier et supprime les balises HTML et PHP
function Lit_fichier($fichier)
{
	$fic = fopen("/tmp/inputfile.txt", "r");
	if($nbr < 1) // condition d'arret
		return 1;
	else
		return $nbr*factorielle($nbr -1);
}

// initialisation au cas o� variables "$_GET" non fournies :
$choix           = "";
$action          = "";
$maxmots         = "";
$start           = "";
$blork           = "";
// fin de mes rajouts

// On adapte les variables selon la version de PHP
$version_de_php  = str_replace(".", "", phpversion());  // sans les s�parateurs '.'

if ( $version_de_php >= 410 ) {
	if ( isset( $_GET['action'] ) ) $action = $_GET['action'];
	if ( isset( $_GET['blork'] ) )  $blork  = $_GET['blork'];
	if ( isset( $_GET['start'] ) )  $start  = $_GET['start'];
	if ( isset( $_GET['multi'] ) )  $multi  = $_GET['multi'];
}

// Variables par d�faut

if ( $maxmots  == "" ) {
	$maxmots  = "20";
}
if ( $maxipage == "" ) {
	$maxipage = "20";
}
if ( $start == "" || $start == "0" ) {
	$start="1";
}
$longueur_blork   =  strlen($blork);
$blork            =  trim($blork);
$blork            =  str_replace(" +", " ", $blork);
$blork2           =  htmlspecialchars($blork);

$form_recherche   =  "
<form method=GET><br>Nouvelle recherche :<br>
<input type=hidden value=\"go\" name=action>
<input title='coucou' type=text value=\"$blork2\" maxlength=50 size=25 name=blork>
<input type=submit value='Aller, cherche ! !'><br>
</form>
";

/* Options de la RegEx :
 $mot    =  le mot recherch�
$entier = param�tre pour chercher le mot exact
$casse  = "i" pour sensibilit� � la casse, sinon vide ( = "")
*/

$mot = "Cr��";
// initialisations RegEx :
$entier = "[^a-zA-Z�]";   // pour mot entier
$casse = "i";             // pour sensibilit� � la casse
// rajout du mot cherch� dans le RegEx
$find  = "#".$entier.$mot.$entier."#".$casse;
$chaine = "J'ai cr�� de la guitare, j'ai cr��, de la RegEx.";

if (preg_match($find, $chaine))
{
	$pos = ( $casse == "i" ) ? stripos($chaine, $mot) : strpos($chaine, $mot);
	if ($pos === false) {
		echo "La cha�ne '$mot' ne se trouve pas dans la cha�ne '$chaine'";
	} else {
		echo "La chaine '$mot' a �t� trouv�e dans la cha�ne '$chaine'";
		echo "<br />et d�bute � la position $pos";
	}
	echo 'trouv� � ' . $pos;
}
else
{
	echo 'Non trouv�';
}

// On v�rifie que la recherche est correctement lanc�e

if ( $action != "go" ) {
	echo("$form_recherche");
	include("blork_engine_bas.html");
	exit();
}

// On v�rifie la longueur de la recherche

if ( $longueur_blork < 3 ) {
	echo("Votre recherche doit comporter plus de trois caract�res.<br> $form_recherche");
	exit();
}

// R�sultats � 0
$compteresultats  = "0";
$zetotal          = "0";

// Scan des sous dossiers sur 10 niveaux si on l'a activ�
// On v�rifie les sous-dossiers � scanner uniquement ici
// Ensuite on les rajoute � la liste
// Comme �a apr�s on n'aura plus qu'a faire un scan classique
// Sur tous les dossiers de la liste
debug ("scan_sousdos = " . $scan_sousdos );


if ( $scan_sousdos == "on" ) {
	$encore1        =  array();
	$encore2        =  array();
	foreach ( $dossier as $nomdos => $d ){
		// Sous-dossier 1

		$fp          =  opendir("$d");
		while ( $file = readdir($fp) ) {
			if ( $file != '.' && $file != '..') {
				$verif  =  $d . "/" . $file;
				if( is_dir( $verif ) && !( in_array( $verif, $dossier)) && !(in_array($verif, $exclu))){
					$dossier[] = "$verif";
					$encore1[] = "$verif";
				}
			}
		}
		closedir($fp);
		unset($fp);
		unset($nomdos);
	}

	// Sous-dossier 2

	foreach($encore1 as $nom_du_soudos=>$le_soudos){
		$fp=opendir("$le_soudos");
		while($file = readdir($fp)){
			if($file!='.' && $file!='..'){
				$verif=$le_soudos."/".$file;
				if(is_dir($verif) && !(in_array($verif, $dossier)) && !(in_array($verif, $exclu))){

					$dossier[] = "$verif";
					$encore2[] = "$verif";

				}
			}
		}
		closedir($fp);
		unset($fp,$nom_du_soudos,$le_soudos);
		$encore1=array();
	}

	// Sous-dossier 3

	foreach ($encore2 as $nom_du_soudos=>$le_soudos)
	{
		$fp       =  opendir("$le_soudos");
		while ( $file = readdir($fp))
		{
			if ( $file != '.' && $file != '..')
			{
				$verif = $le_soudos . "/" . $file;
				if (is_dir($verif) && ! ( in_array($verif, $dossier)) && ! ( in_array($verif, $exclu)))
				{
					$dossier[] = "$verif";
					$encore1[] = "$verif";
				}
			}
		}
		closedir($fp);
		unset($fp, $nom_du_soudos, $le_soudos);
		$encore2=array();
	}

	// Sous-dossier 4

	foreach ($encore1 as $nom_du_soudos=>$le_soudos)
	{
		$fp = opendir("$le_soudos");
		while ( $file = readdir($fp) )
		{
			if ( $file != '.' && $file != '..')
			{
				$verif  = $le_soudos . "/" . $file;
				if ( is_dir($verif) && ! (in_array($verif, $dossier)) && ! (in_array($verif, $exclu)))
				{
					$dossier[] = "$verif";
					$encore2[] = "$verif";
				}
			}
		}
		closedir($fp);
		unset($fp, $nom_du_soudos, $le_soudos);
		$encore1 = array();
	}

	// Sous-dossier 5

	foreach($encore2 as $nom_du_soudos=>$le_soudos){
		$fp=opendir("$le_soudos");
		while($file = readdir($fp)){
			if($file!='.' && $file!='..'){
				$verif=$le_soudos."/".$file;
				if(is_dir($verif) && !(in_array($verif, $dossier)) && !(in_array($verif, $exclu))){

					$dossier[]="$verif";
					$encore1[]="$verif";

				}
			}
		}
		closedir($fp);
		unset($fp,$nom_du_soudos,$le_soudos);
		$encore2=array();
	}

	// Sous-dossier 6

	foreach($encore1 as $nom_du_soudos=>$le_soudos){
		$fp=opendir("$le_soudos");
		while($file = readdir($fp)){
			if($file!='.' && $file!='..'){
				$verif=$le_soudos."/".$file;
				if(is_dir($verif) && !(in_array($verif, $dossier)) && !(in_array($verif, $exclu))){

					$dossier[]="$verif";
					$encore2[]="$verif";

				}
			}
		}
		closedir($fp);
		unset($fp,$nom_du_soudos,$le_soudos);
		$encore1=array();
	}

	// Sous-dossier 7

	foreach($encore2 as $nom_du_soudos=>$le_soudos){
		$fp=opendir("$le_soudos");
		while($file = readdir($fp)){
			if($file!='.' && $file!='..'){
				$verif=$le_soudos."/".$file;
				if(is_dir($verif) && !(in_array($verif, $dossier)) && !(in_array($verif, $exclu))){

					$dossier[]="$verif";
					$encore1[]="$verif";

				}
			}
		}
		closedir($fp);
		unset($fp,$nom_du_soudos,$le_soudos);
		$encore2=array();
	}

	// Sous-dossier 8

	foreach($encore1 as $nom_du_soudos=>$le_soudos){
		$fp=opendir("$le_soudos");
		while($file = readdir($fp)){
			if($file!='.' && $file!='..'){
				$verif=$le_soudos."/".$file;
				if(is_dir($verif) && !(in_array($verif, $dossier)) && !(in_array($verif, $exclu))){

					$dossier[]="$verif";
					$encore2[]="$verif";

				}
			}
		}
		closedir($fp);
		unset($fp,$nom_du_soudos,$le_soudos);
		$encore1=array();
	}

	// Sous-dossier 9

	foreach($encore2 as $nom_du_soudos=>$le_soudos){
		$fp=opendir("$le_soudos");
		while($file = readdir($fp)){
			if($file!='.' && $file!='..'){
				$verif=$le_soudos."/".$file;
				if(is_dir($verif) && !(in_array($verif, $dossier)) && !(in_array($verif, $exclu))){

					$dossier[]="$verif";
					$encore1[]="$verif";

				}
			}
		}
		closedir($fp);
		unset($fp,$nom_du_soudos,$le_soudos);
	}

	// Sous-dossier 10

	foreach($encore1 as $nom_du_soudos=>$le_soudos){
		$fp=opendir("$le_soudos");
		while($file = readdir($fp)){
			if($file!='.' && $file!='..'){
				$verif=$le_soudos."/".$file;
				if(is_dir($verif) && !(in_array($verif, $dossier)) && !(in_array($verif, $exclu))){

					$dossier[] = "$verif";

				}
			}
		}
		closedir($fp);
		unset($fp,$nom_du_soudos,$le_soudos,$encore1,$encore2);
	}
}

// Passage en minuscules de la recherche
$blork = strtolower($blork);

// Maintenant on lance le scan classique sur les dossiers de la liste
// Les sous-dossiers ont �t� rajout�s au besoin par la fonction pr�c�dente

foreach($dossier as $nomdos=>$d){
	// S�same ouvre toi
	$fp       =     opendir("$d");
	while( $file = readdir($fp))
	{
		if ( $file == "." || $file == ".." || is_dir($file)) {
			continue;
		}

		// On ne scanne pas les fichiers exclus
		if (in_array($file, $exclu)) {
			continue;
		}

		// On r�cup�re l'extension
		// Merci � Fr�d�ric Bouchery pour ce regex :-)
		//$ext = ereg_replace('^.*[.]([^.]*)$', '\\1', $file);
		//$ext = preg_replace('^.*[.]([^.]*)$', '\\1', $file);
		// cette fonction PHP est mieux (C.A. le 05/12/2011)
		$ext = pathinfo($file , PATHINFO_EXTENSION);

		// S�lection des extensions
		// On ne scanne que ces types de fichiers

		if (
				$ext != "html"
				&& $ext != "htm"
				&& $ext != "php"
				&& $ext != "php3"
				&& $ext != "txt"
				&& $ext != "php4"
				//   && $ext != "gif"
		//   && $ext != "jpg"
		//   && $ext != "png"
				&& $ext != "pdf"
		)  {
			continue;
		}

		// Maintenant on est s�r de devoir scanner le fichier
		// On peut �x�cuter tous les traitements n�cessaires

		// D�termination du type de fichier
		// On ne v�rifiera que le nom des fichiers de type "img" (image)
		// alors que les fichiers de type "normal" seront enti�rement retrait�s
		// car consid�r�s comme contenant du texte lisible par le moteur.

		if ( $ext=="html" || $ext=="htm" || $ext=="php" || $ext=="php3" || $ext=="txt" || $ext=="php4" || $ext != "pdf" )
		{
			$filetype = "normal";
		}
		else
		{
			$filetype = "img";
		}

		// Maintenant qu'on a d�termin� la place de notre fichier entre les deux types
		// On va appliquer des retraitements pr�liminaires sur les fichiers de type "normal" uniquement
		if ($filetype == "normal") {
			// On ouvre le contenu du fichier
			$recupere_le_fichier = fopen("$d/$file","r");
			$tout = fread($recupere_le_fichier,500000);
			fclose ($recupere_le_fichier);
			// Passage en minuscules
			$tout = strtolower($tout);
			// On vire le html et le php
			$tout = strip_tags($tout,'<title></title><script></script><head></head><style></style>');

			// On r�cup�re le titre du fichier
			// Ou alors on affiche le nom avec l'extension
			// Puis on supprime le titre pour ne pas fausser les r�sultats

			if (strpos($tout,"<title>") && strpos($tout,"</title>"))
			{
				$titre1 = strstr($tout,'<title>');
				$titre2 = strstr($tout,'</title>');
				$titre1 = str_replace("$titre2","",$titre1);
				$titre1 = str_replace("<title>","",$titre1);
				if ( $titre1 == "" ) {
					$titre=$file;
				} else{ $titre=$titre1;
				}
			}
			else
			{
				$titre = $file;
			}

			$titre  = strtolower($titre);
			unset($titre1, $titre2);
			$tout   = preg_replace('`<title.*?/title>`', '', $tout);

			// 3 �tapes ici :

			// Etape 1)
			// On effectue des remplacements pour pouvoir appliquer les regex :
			// 1- On remplace le saut de ligne par un espace
			// 3- Les &nbsp; (code html pour un espace) sont remplac�s par des espaces
			// 4- Les doubles espaces sont remplac�s par un simple espace

			// Etape 2)
			// On lance les regex
			// 1- On vire le code entre <head> et </head> qui contient en g�n�ral tout les trucs qui ne nous int�ressent pas ici (feuille de style, javascript...)
			// 2- On vire le javascript pour �viter les bugs au cas ou une partie nous aurait �chapp�e
			// 3- On vire les attributs de style pour les m�mes raisons
			// Merci encore une fois � Fr�d�ric Bouchery pour le regex

			// Etape 3)
			// On remplace le code html des accents et autres caract�res sp�ciaux par le terme correspondant
			// pour le titre ET le contenu

			$tout = str_replace("\n"," ",$tout);
			$tout = str_replace("&nbsp;"," ",$tout);
			$tout = str_replace("  "," ",$tout);

			$tout = preg_replace('`<head.*?/head>`', '', $tout);
			$tout = preg_replace('`<script.*?/script>`', '', $tout);
			$tout = preg_replace('`<style.*?/style>`', '', $tout);

			// ne pourrait-on pas utiliser HTMLDECODE, � la place du forech ?
			foreach($caractere_special as $caractere_code=>$caractere_traduction) {
				$tout  = str_replace("$caractere_code", "$caractere_traduction", $tout);
				$titre = str_replace("$caractere_code", "$caractere_traduction", $titre);
				// Fin du retraitement
			}
		}

		// Maintenant que le fichier a �t� retrait� (si n�cessaire),
		// on peut voir s'il contient ce qu'on cherche.

		// On incr�mente le nb de fichiers scann�s
		$zetotal++;
		if ( $zetotal > 9999 ) {
			continue 2;
		}

		// Si on trouve la recherche
		// les 2 lignes ci-dessous rajout�es par moi car bug :
		if ( ! isset($tout) ) $tout = "";
		if ( ! isset($titre) ) $titre = "";
		// fin de mes rajouts
		if ( strpos("$tout", "$blork") || strpos("$file", "$blork") || strpos("$titre", "$blork") ) {

			// R�sultats +1
			$compteresultats++;

			// S'il s'agit d'un fichier de type "normal"
			if ($filetype == "normal") {
				// On compte les occurences du terme
				// Les occurences trouv�es dans le titre comptent pour 10 (pire qu'au scrabble) car ils sont souvent explicites sur le contenu de la page

				if ( ! isset($total_mots) ) $total_mots = "";
				$total_mots = intval(substr_count($titre,$blork) * 10 + $total_mots);
				$total_mots = intval(substr_count($tout,$blork) + $total_mots);

				// On cr�e la description

				$position       =  strpos($tout, $blork);
				$start_position =  intval($position-50);
				if ( $start_position < 0 ) {
					$start_position = "0";
				}
				$fin_position   =  intval($longueur_blork+100);

				if ( $position === FALSE ) {
					$resume.="Terme exact introuvable dans le contenu du fichier.";
				}
				else {
					$resume  = "... ";
					$resume .= substr($tout, $start_position, $fin_position);
					$resume .= " ... ";

					// On met en gras le terme recherch� dans la description
					$resume  = str_replace($blork, "<b><i>$blork2</i></b>", $resume);
				}
			}
			// Si c'est une image ou un autre type de fichier
			// On adapte la description
			else {
				$resume="Fichier $ext";
			}

			// Puis dans le titre
			$titre    = str_replace($blork, "<b>$blork2</b>", $titre);

			// Calcul du pourcentage de pertinence

			similar_text($blork, $tout, $p1);
			similar_text($blork, $titre, $p2);
			$p      = intval($p1 + $p2);

			// Si le pourcentage est sup�rieur ou �gal � 100 on le ram�ne � 99
			// Et s'il est �gal � 0 on le ram�ne � 1 pour qu'il puisse �tre r�index� (voir suite)

			if ( $p >= 100 ) {
				$p = "99";
			}
			if ($p == "0" )  {
				$p = "1";
			}

			// On va cr�er une cl� identique pour chaque r�sultat.
			// Le premier sera un "1", pour que la cl� soit r�index�e
			// Le suivant sera le nombre d'occurences total de mots trouv�s (en dizaines)
			// Ensuite le pourcentage de similarit� du texte + celui du titre (deux chiffres)
			// Enfin le num�ro du r�sultat (4 chiffres)
			// Avec cette cl� on pourra classer les r�sultats par ordre d�croissant selon le chiffre obtenu, donc par pertinence.

			// Notes :
			// La cl� ne doit pas commencer par 0 donc il �tait important de mettre en premier
			// un "1", ou un chiffre sup�rieur � 0 en tout cas.
			// La cl� ne doit pas �tre sup�rieure � 8 chiffres, sinon elle ne sera pas r�index�e.

			// Cette bidouille me permettra par la suite avec array_unshift() de r�indexer le tableau avec
			// des cl�s num�riques pour pouvoir afficher uniquement les r�sultats souhait�s, donc j'�conomise
			// du temps d'�x�cution et des ressources par rapport � l'ancienne m�thode qui consistait � cr�er
			// un nouveau tableau. L'array_unshift() me rajoutera une valeur de cl� 0 que je ne supprime pas
			// parce que je pourrai ainsi g�rer mes r�sultats � partir de 1, ce qui est plus logique.

			// On ram�ne les occurences au maxi � 99
			// Puis on rajoute un 0 devant le chiffre s'il est inf�rieur � 10
			// Enfin on ne garde que le chiffre des dizaines

			if($total_mots >= 100) {
				$total_mots = "99";
			}
			if (strlen($total_mots) == 1) {
				$total_mots = str_repeat("0", 2 - strlen($total_mots)).$total_mots;
			}
			$total_mots = substr($total_mots, 0, 1);

			// Idem pour les pourcentages

			if ( strlen($p) == 1 ) {
				$p = str_repeat("0",2-strlen($p)).$p;
			}

			// Et enfin le num�ro du r�sultat

			$compteresultats2=$compteresultats;
			if (strlen($compteresultats2)<4){
				$compteresultats2=str_repeat("0",4-strlen($compteresultats2)).$compteresultats2;
			}

			// On met la premi�re lettre du titre en majuscules
			$titre=ucfirst($titre);

			// URL par d�faut pour les fichiers
			// On vire l'extension si besoin
			if ( $montre_ext == "off" && $filetype != "img" ) {
				$file = str_replace(".$ext", "", $file);
			}
			if ( $go2url == "" ) {
				$go_2_url="$d/$file";
			}
			else {
				$go_2_url = "$go2url";
				$go_2_url = str_replace("[dossier]", $d, $go_2_url);
				$go_2_url = str_replace("[fichier]",$file,$go_2_url);
			}

			// Source du r�sultat

			$src    = " <A href=\"$go_2_url\">$titre</A> <br>
			$resume
			";

			// On enregistre
			$zeresults["1".$total_mots."".$p."".$compteresultats2]="$src";

			/*/ On remet a z�ro histoire d'�viter des doublons
			 unset(
			 		$compteresultats2,
			 		$tout,
			 		$resume,
			 		$src,
			 		$titre,
			 		$filetype,
			 		$p,
			 		$p1,
			 		$p2,
			 		$file,
			 		$ext,
			 		$total_mots,
			 		$register
			 );
			*/
		}
	}

	// On referme
	// S�same ferme toi

	closedir($fp);
	unset($tout, $filetype, $fp, $ext);
}

// Si on a des r�sultats
// On les classe par ordre d�croissant de pertinence
// Ensuite on lance un array_unshift() qui r�indexe le tableau
// ce qui nous permet d'avoir des cl�s num�riques et de g�rer les r�sultats � partir de 1
// Pour de plus amples explications vous pouvez voir un peu plus haut
// ou me contacter, j'essaierai de vous expliquer �a en d�tail.

if ( $compteresultats > 0 ) {
	krsort($zeresults);
	array_unshift($zeresults, "rien");
}
/* debuggage :
 echo "tableau des r�sultats : <br>";
print_r($zeresults);
fin d�bug */

// On d�finit les diff�rentes variables qui serviront pour la barre de navigation
if ( $start == "1" && $compteresultats == "0" ) {
	$start = "0";
}
$pourvoir   = intval($start + $maxipage -1);
if ($pourvoir > $compteresultats) {
	$pourvoir = $compteresultats;
}
$finstart   = intval($compteresultats - $maxipage +1);
$prevbarre    = intval($start - $maxipage);
$nextbarre    = intval($start + $maxipage);
$nb_barre   = "1";
$compte_affichage=  $start;

// Changement du texte selon les r�sultats entre singulier et pluriel
$rs       = ( $compteresultats > 1 )  ? " r�sultats trouv�s " : " r�sultat trouv� ";
$fich     = ( $zetotal > 1 )      ? " fichiers"       : " fichier";

// Maintenant on commence l'affichage
echo("R�sultat");
if ( $compteresultats > 1 ) {
	echo("s");
}
echo (" de votre recherche pour <b>$blork2</b>");
if ( $compteresultats > 0 ) {
	echo("<br> $compteresultats $rs sur $zetotal $fich - Affichage de $start � $pourvoir");
	echo("$form_recherche");

	// on a des r�sultats, on va les charger
	// ensuite on va essayer de les �crire dans un fichier html pour les afficher dans le corps du site
	foreach ( $zeresults as $key=>$value ) {
		if ($key >= $start && $key < $nextbarre ) {
			echo("<br><br>
					$value");
			$compte_affichage++;
		}
	}
}

// Et si on a trop de r�sultats par rapport au nombre � afficher dans la page on met la barre de navigation
if ($compteresultats > $maxipage ) {
	echo("<p align=center><br>");
	if ( $start != "1" ) {
		echo("<A href=\"engine.php?blork=$blork&action=go&choix=$choix\"><< D�but</A> <A href=\"engine.php?blork=$blork&action=go&start=$prevbarre&choix=$choix\">< Page pr�c�dente</A> (");
	}
	else {
		echo("<< D�but < Page pr�c�dente (");
	}

	for ( $barre = 1; $barre < $compteresultats; ) {
		$finbarre = intval( $compteresultats - $barre);
		echo(" <A href=\"engine.php?blork=$blork&action=go&start=$barre&choix=$choix\">$nb_barre</A> ");
		$nb_barre++;
		$barre = intval( $barre + $maxipage);
	}

	if ( $start < $finstart ) {
		echo(") <A href=\"engine.php?blork=$blork&action=go&start=$nextbarre&choix=$choix\">Page suivante ></A> <A href=\"engine.php?blork=$blork&action=go&start=$finstart&choix=$choix\">Fin >></A>");
	}
	else {
		echo(") Page suivante >  Fin >>");
	}
	echo("</p>");
}

if ( $compteresultats == "0" ) {
	echo("<br><b><span class='NoResult'>Votre recherche n'a donn� aucun r�sultat. Essayez de l'�largir en y mettant moins de mots ou v�rifiez son orthographe.</span></b>");
}
else {
	echo("<br><p>" . $compteresultats . $rs . "dans " . $zetotal . $fich . "</p>");
}

//echo("$form_recherche");

// On met le footer, et c'est fini
include("blork_engine_bas.html");
?>