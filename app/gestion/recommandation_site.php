﻿<?PHP
//----------------------------------------------------------------------------//
// script de recommandation de site - script fait par Romain Laferté
// version : 1.1 du 10/05/2003
// version : 2.2 du 15/01/2011, adaptée par Christian Alcon pour son site de jardin
// Penser à lire le fichier d'aide avant de commencer.
//----------------------------------------------------------------------------//

require("app/gestion/define_recommandation_site.php");

//init champ formulaire pour réaffichage si erreur de saisie
$em = '';      // mail de l'expéditeur
$en = '';      // nom de l'expéditeur
$dm = '';      // mail du destinataire
$dn = '';      // nom du destinataire
$err = False;

if (isset($_POST['exp_email'])) {
    $em = $_POST['exp_email'];
}
if (isset($_POST['exp_nom'])) {
    $en = $_POST['exp_nom'];
}
if (isset($_POST['dest_email'])) {
    $dm = $_POST['dest_email'];
}
if (isset($_POST['dest_nom'])) {
    $dn = $_POST['dest_nom'];
}

if ((isset($_POST['exp_email'])) &&
        (isset($_POST['dest_email'])) &&
        (isset($_POST['exp_nom'])) &&
        (isset($_POST['dest_nom']))) {
    if ($_POST['dest_email'] != "" &&
            $_POST['exp_email'] != "" &&
            $_POST['exp_nom'] != "" &&
            $_POST['dest_nom'] != "") {
        $tete = "From: " . $_POST['exp_email'] . "\n";
        $tete .= "Content-Type: text/html;";
        $t = '<html><body bgcolor="' . $email_bgcolor . '">';
        $t .= '<font face="' . $email_police . '" size="' . $email_size . '" color="' . $email_color . '"><CENTER><B>Bonjour ' . $_POST['dest_nom'] . ',</B></CENTER><br><br>';
        $t .= $_POST['exp_nom'] . " vous invite à venir visiter le site :<br>";
        $t .= '<A HREF="' . $url . '"><font face="' . $email_police . '" size="' . $email_size . '" color="' . $email_color . '">' . $url . '</font></A><br><br>';
        $t .= "voici le message qu'il vous à laissé :<br><br>";
        $t .= $_POST['body'] . "<br><br>";
        $t .= "____________________________________</font><br>";
        $t .= '<font face="' . $email_police_l . '" size="' . $email_size_l . '" color="' . $email_color_l . '">Ce mail à été envoyé automatiquement par : ' . $_POST['exp_email'] . '<br>';
        $t .= "si vous considérez ce mail comme du spam veuillez écrire à " . $webm_email . "</font><br>";
        $t .= "</body></html>";
        $sujet = $_POST['exp_nom'] . " vous recommande le site " . $nom_site;
        $corps = $t;

        // ligne suivante pour activer l'envoi si on est en local
        if ($DB_HOST == '127.0.0.1')
            ini_set('SMTP', 'smtp.orange.fr');
        // envoi du mail
        mail($_POST['dest_email'], $sujet, $corps, $tete);

        if ($email_envoi == "y") {
            mail("christian.alcon@gmail.com", "Nouvelle recommandation pour le site jardin", "Salut,\n
					il y a eu une recommandation pour mon site de jardin.\n\n
					mail de l'expédituer " . $_POST['exp_email'] . "\n
							mail du destinataire " . $_POST['dest_email'] . "\n\n
									de la part de " . $_POST['exp_nom'] . " pour " . $_POST['dest_nom'] . "\n\n
											le message était : " . $_POST['body'] . "\n",
                    "from: $webm_email");
        }
        /* Redirige le client local vers l'index du site ou la dernière page visitée */
        $t = ( isset($retour) ) ? $retour : 'index.jard';
        // on initialise pour la phase 2.
        $s = 'Location: ?prec=' . $retour . '&cour=' . $page_courante . '&page=gestion/accuse_envoi_mail&retour=' . $t . '&dm=' . $dm . '&dn=' . $dn;
        header("$s");
        /* Garantie que le code ci-dessous n'est jamais exécuté. */
        exit();
    } else {
        $err = True;
    }
}
var_dump($err);

$retour = $page_precedante;  // pour revenir à la page où l'on était avant l'envoi du mail
echo '<link rel="stylesheet" type="text/css" href="public/css/formulaire.css" media="screen" />';
echo "<h1>Ce site vous plait,<br />recommandez-le à un ami</h1>";
echo '<form id="start" action="?page=' . $page_courante . '" method="post">';
?>
<label for="tete"></label>
<?PHP
if ($err) {
    echo "<b style='text-decoration: blink; color: cyan; background-color: maroon;'>
		&nbsp;&nbsp;Veuillez renseigner tous les champs obligatoiores&nbsp;&nbsp;</b>";
} else {
    echo "<b>Les champs marqués <sup>*</sup> sont obligatoires</b>";
}
?>
<p>
    <label for="e_mail">Votre email *</label>
    <input type="text"
           id="exp_email" 
           name="exp_email" 
           size="40" 
           required="true"
           value="<?PHP echo $em ?>"
           >
</p>
<p>
    <label for="e_nom">Votre nom *</label>
    <input type="text" 
           id="exp_nom"
           name="exp_nom" 
           size="40" 
           required="true"
           value="<?PHP echo $en ?>"
           >
</p>
<p>
    <label for="d_mail">Email destinataire *</label>
    <input type="text"
           id="dest_email" 
           name="dest_email" 
           size="40" 
           required="true"
           value="<?PHP echo $dm ?>"
           >
</p>
<p>
    <label for="d_nom">Nom du destinataire *</label>
    <input type="text"
           id="dest_nom" 
           name="dest_nom" 
           size="40" 
           required="true"
           value="<?PHP echo $dn ?>"
           >
</p>
<p>
    <label for="d_nom">Votre message</label>
    <textarea id="body" name="body" rows="10" cols="65">
Bonjour cher/chère ami/(e)

je suis en train de visiter le site <?PHP echo $url; ?>.

La page <?PHP echo $retour; ?> que je suis en train de consulter devrait t'intéresser.

A  très bientôt
(signature)
    </textarea>
</p>
<p>
    <input type="submit" value="Cliquez-ici pour envoyer votre message">
</p>
</form>
