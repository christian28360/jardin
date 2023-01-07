<?PHP
//----------------------------------------------------------------------------//
// script de recommandation de site - script fait par Romain Laferté
// disponible sur http://www.worldcinemag.com/
// version : 1.1
// date : 10/05/03
// merci de m'envoyer un mail à romain@worldcinemag.com pour me signaler
// l'utilisation de ce script et de laisser les liens vers le site.
// Penser à lire le fichier d'aide avant de commencer.
// Merci de votre compréhension.
//----------------------------------------------------------------------------//

// fichier define.inc.php pour d�finir les param�tres de votre site.

$url = "mon-jardin-naturel.fr";     					// url complète de votre site
$nom_site   = "Jardin naturel biologique";              // le nom de votre site
$webm_email = "Cricri-28@christian-alcon.comule.com";   // votre email
$prenom     = "Christian";                              // votre prénom ou pseudo

// si une recommandation à eu lieu. Mettre 'y' si oui et 'n' si non.
$email_envoi   = "y";           // recevoir un message d'alerte

$email_bgcolor = "gray";        // couleur de fond de l'email envoyé
$email_color   = "white";       // couleur de la police de l'email envoyé
$email_size    = "3";           // taille de la police de l'email envoyé
$email_police  = "verdana";     // police de l'email envoyé

$email_color_l = "cyan";        // couleur de la police de l'avertissement (bas)
$email_size_l  = "1";           // taille de la police de l'avertissement (bas)
$email_police_l = "verdana";    // police de l'email de l'avertissement (bas)

$page_bgcolor   = "white";      // couleur de fond de la page de recommandation
$page_color_titre = "navy";     // couleur de la police du titre (en haut)
$page_size_titre  = "3";        // taille de la police du titre (en haut)
$page_police_titre = "verdana"; // police du titre (en haut)

// reportez-vous directement à la page index.php pour changer les autres
// paramètres. Si vous n'êtes pas sûr ne changez rien !
?>
