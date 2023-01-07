<?PHP
// rechercher dans ce fichier la 1�re balise <h1>_suite  charger son contenu � la suite de la balise <title>
include("_jardin_fonctions.php");
$html = "<h1>.";
$titre_suite = "";
$titre = '  <title>Jardin naturel �cologique, conseils culture bio et naturelle, recettes sp�ciales';

$depart = stripos( $html, "<h1>" );
if ( $depart !== FALSE) {
	$depart +=3;
	$fin    = stripos( $html, "</h1>", $depart);
	if ( $fin === FALSE ) $fin = $depart + 40;    // si pas de balise de fin, on prend 40 caract�res
	$titre = $titre . ' : ' .  str_replace("<br />", " ", substr( $html, $depart +1, $fin - $depart -1));
}

echo $titre . '</title>
		';
echo htmlspecialchars($titre);
?>
