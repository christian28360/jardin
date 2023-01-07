<?PHP
/* * * * * * * * * * * * * * * * * * * * * * *
 Moteur de recherche interne
Les fonctions utilis�es
* * * * * * * * * * * * * * * * * * * * * * *
Copyright (C) Christian Alcon
* * * * * * * * * * * * * * * * * * * * * * */

// fonction d�buggage :
function debug($txt)
{
	echo "<br><p style='background: black;'><span style='color: cyan;'><b>"
			. $txt .
			"</span></p></b><br>";
}

// Fonction de calcul de l'�ge (en jours) du fichier r�sultat
function nb_jours($date1)
{
	$s = strtotime(date("d-m-Y"))-strtotime($date1);
	return intval($s / 86400) + 1;
}

function dd($date) {
	return date("d-m-Y H:m:i", $date);
}

function Lit_fichier($fichier)
// lit le contenu d'un fichier et supprime les balises HTML et PHP
// Puis recherche les occurences � trouver
// Enfin, si trouv�, enregistre les r�sulta ts dans un fichier
{
	global $balises_gardees;
	global $exclu_ext;

	$ligne = "";
	if ( !is_file($fichier ) ) return;
	// voir si extention non exclue
	if ( in_array( (pathinfo($fichier, PATHINFO_EXTENSION) ), $exclu_ext) )
	{
		return;
	}
	/* pour d�bug :
	 echo ("Fichier � traiter : " . $fichier );
	*/
	// fichier � traiter, on continue
	$html = strip_tags(file_get_contents($fichier), $balises_gardees);
	// 3 �tapes ici :

	// Etape 1)
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

	// On effectue des remplacements pour pouvoir appliquer les regex :
	$html = str_replace("\n"," ",$html);
	$html = str_replace("&nbsp;"," ",$html);
	$html = str_replace("  "," ",$html);

	$html = preg_replace('`<head.*?/head>`', '', $html);
	$html = preg_replace('`<script.*?/script>`', '', $html);
	$html = preg_replace('`<style.*?/style>`', '', $html);
	echo ( "<br><b>" . $fichier . "</b> : " . $html );
}

// traitement de tous les fichiers de tous les dossiers
// fonction r�cursive

function recherche_mot($dir)
{
	global $nb, $niv;
	global $dirname;
	global $exclu_dossier;
	global $scan_sousdos;

	$nb = $niv = 1 ;
	$dirname = "";

	if ($handle = opendir($dir)) {
		while ( ($entry = readdir($handle)) !== false ) {
			if ($entry != "." && $entry != "..") {
				$rep = $dir . "/" . $entry;
				// C'est un dossier et il n'est pas � eclure
				if ( is_dir ( $rep ) && (in_array($dir, $exclu_dossier) ) )
				{
					debug("dossier " . $rep . " exclus");
				}
				if ( is_dir ( $rep ) && !(in_array($dir, $exclu_dossier) ) )
				{
					$niv++;
					// $dirname = $dir;
					//debug( $dirname);
					if ( $scan_sousdos == "on" ) {
						recherche_mot( $dir . "/" . $entry);
					}
				}
				$ndir = ( is_dir( $rep ) ) ? "R�p " : "Fic. ";
				//echo( "niveau ". $niv . ", " . $nb++ . " " . $ndir . $rep . "/" . $entry . "<br>");
				lit_fichier($dir . "/" . $entry);
				//      $dirname = "";
			}
		}
		closedir($handle);
		unset($handle);
	}

}

?>