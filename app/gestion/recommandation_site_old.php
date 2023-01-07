<?PHP
//----------------------------------------------------------------------------//
// script de recommandation de site - script fait par Romain Lafert�
// version : 1.1 du 10/05/2003
// version : 2.2 du 15/01/2011, adapt�e par Christian Alcon pour son site de jardin
// Penser � lire le fichier d'aide avant de commencer.
//----------------------------------------------------------------------------//

require("gestion/define_recommandation_site.php");

//init champ formulaire pour r�affichage si erreur de saisie
$em = '';      // mail de l'exp�diteur
$en = '';      // nom de l'exp�diteur
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

if (  (isset($_POST['exp_email'])) &&
		(isset($_POST['dest_email'])) &&
		(isset($_POST['exp_nom'])) &&
		(isset($_POST['dest_nom'])) )
{
	if ($_POST['dest_email'] != "" &&
			$_POST['exp_email'] != "" &&
			$_POST['exp_nom'] != "" &&
			$_POST['dest_nom'] != "" )
	{
		$tete  = "From: ".$_POST['exp_email']."\n";
		$tete .= "Content-Type: text/html;";
		$t  = '<html><body bgcolor="'.$email_bgcolor.'">';
		$t .= '<font face="'.$email_police.'" size="'.$email_size.'" color="'.$email_color.'"><CENTER><B>Bonjour '.$_POST['dest_nom'].',</B></CENTER><br><br>';
		$t .= $_POST['exp_nom']." vous invite � venir visiter le site :<br>";
		$t .= '<A HREF="'.$url.'"><font face="'.$email_police.'" size="'.$email_size.'" color="'.$email_color.'">'.$url.'</font></A><br><br>';
		$t .= "voici le message qu'il vous � laiss� :<br><br>";
		$t .= $_POST['body']."<br><br>";
		$t .= "____________________________________</font><br>";
		$t .= '<font face="'.$email_police_l.'" size="'.$email_size_l.'" color="'.$email_color_l.'">Ce mail � �t� envoy� automatiquement par : '.$_POST['exp_email'].'<br>';
		$t .= "si vous consid�rez ce mail comme du spam veuillez �crire � ".$webm_email."</font><br>";
		$t .= "</body></html>";
		$sujet = $_POST['exp_nom']." vous recommande le site ".$nom_site;
		$corps = $t;

		// mettre actif pour localhost et en comment. en prod.
		//ini_set('SMTP','smtp.orange.fr');
		mail($_POST['dest_email'], $sujet, $corps, $tete);

		if ($email_envoi == "y")
		{
			mail("christian.alcon@gmail.com", "Nouvelle recommandation pour le site jardin", "Salut,\n
					il y a eu une recommandation pour mon site de jardin.\n\n
					mail de l'exp�dituer ".$_POST['exp_email']."\n
							mail du destinataire ".$_POST['dest_email']."\n\n
									de la part de ".$_POST['exp_nom']." pour ".$_POST['dest_nom']."\n\n
											le message �tait : ".$_POST['body']."\n",
											"from: $webm_email");
		}
		/* Redirige le client local vers l'index du site */
		if (is_array($page_precedante)) {
			$t = 'index.jard';
		}
		else if ($page_precedante == $page_courante) {
			$t = 'index.jard';
		}
		else {
			$t = $page_precedante;
		}
		// on initialise pour la phase 2.
		$s = 'Location: ./index.php?page=gestion/recommandation_site_mail_envoye&retour='.$t.'&dm='.$dm.'&dn='.$dn;
		header("$s");
		/* Garantie que le code ci-dessous n'est jamais ex�cut�. */
		exit();
	}
	else
	{
		$err = True;
	}
}

echo "<h1>$nom_site vous a plu,<br />recommandez-le � un ami</h1>";
echo '<form action="index.php?page='.$page_courante.'" method="post">';
?>

<table style="width: 95%" border='0'>
	<tr>
		<td width="32%"></td>
		<td width="68%"><?PHP
		if ($err) {
echo "<b>Veuillez renseigner tous les champs</b>";
}
else { echo "<b>Les champs marqu�s * sont obligatoires</b>";
}
?>
		</td>
	</tr>
	<tr>
		<td class="lib">Votre email *</td>
		<td><input type="text" id="exp_email" name="exp_email" size="40"
			value="<?PHP echo $em ?>"></td>
	</tr>
	<tr>
		<td class="lib">Votre nom *</td>
		<td><input type="text" id="exp_nom" name="exp_nom" size="40"
			value="<?PHP echo $en ?>"></td>
	</tr>
	<tr>
		<td class="lib">Email du destinataire *</td>
		<td><input type="text" id="dest_email" name="dest_email" size="40"
			value="<?PHP echo $dm ?>"></td>

	</tr>
	<tr>
		<td class="lib">Nom du destinataire *</td>
		<td><input type="text" id="dest_nom" name="dest_nom" size="40"
			value="<?PHP echo $dn ?>"></td>
	</tr>
	<tr>
		<td class="lib">Votre message</td>
		<td><textarea id="body" name="body" rows="7" cols="45"></textarea></td>
	</tr>
	<tr>
	
	
	<tr>
		<td colspan="2" style="padding-left: 30%;"><input type="submit"
			value="Cliquez-ici pour envoyer votre message">
		</td>
	</tr>
</table>
</form>
