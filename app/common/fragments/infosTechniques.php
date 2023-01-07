<!--  ce bloc s'affichera au passage de la souris du bloc ci-dessus  -->
<div onmouseover="javascript:montre_info('info');"
     onmouseout="javascript:cache_info('info');">
    Infos techniques
</div>
<?PHP
echo ('
    <div id="info" class="petitblocG"
         style="position: absolute; visibility: hidden;">
        <b>Données techniques</b>
        <hr />
');

$ua = $fn->getBrowser(null, true);  // on récupère les infos techniques (navig., moteur ...)
// div de gauche : les noms des données
echo '<div style="float: left; text-align: right;">';
echo 'Votre adresse ip&nbsp;:&nbsp;<br />';
echo 'Nom DNS associé&nbsp;:&nbsp;<br />';
echo 'Navigateur&nbsp;:&nbsp;<br />';
echo 'N° de version&nbsp;:&nbsp;<br />';
echo 'Moteur du navigateur&nbsp;:&nbsp;<br />';
echo 'Système exploitation&nbsp;:&nbsp;<br />';
echo '</div>';
// div de droite : les réponses
echo '<div>';
echo $ua['ip'] . '<br />';
// nom DNS (les 15 premiers car.)
$tmp = gethostbyaddr($ua['ip']);    // renvoie le DNS
$tmp = ( strlen($tmp) > 15 ) ? substr($tmp, 0, 15) . '...' : $tmp;
echo $tmp . '<br />';
echo $ua['name'] . '<br />';
echo substr($_SERVER['HTTP_USER_AGENT'], -4) . '<br />';
//  echo $ua['version'].'<br />';
echo $ua['moteur'] . '<br />';
echo $ua['platform'] . '<br />';
echo '';
if ($_COOKIE) {
    echo "<hr><b>Cookies utilisés</b>";
    foreach ($_COOKIE as $key => $value) {
        echo ("$key => $value <br>");
    };
}

//echo '</div>';   // mis en comment. car fermée dans le js plus loin (je sais, pas propre !)
?>
<script language="JavaScript" type="text/javascript">
    // Largeur X Hauteur
    document.write('<hr />R&eacute;solution du navigateur : ' + screen.width + ' X ' + screen.height + '.<br />');
    //*********************************************************
    // Nombre de plug-ins installés
    var nbplugin = navigator.plugins.length;
    if (nbplugin) {
        document.write('Vous avez ' + nbplugin + ' Plug-in(s) installé(s) :<br />');
        document.write('<ol style="margin-top:3px;">');
        for (i = 0; i < nbplugin; i++) {// Affichage des noms des Plug-ins
            document.write('<li>' + navigator.plugins[i].name + '</li>');
            if (i == nbplugin - 1) {
                document.write('</ol>');
            }
        }
    } else {
        document.write('Il n\' y a aucun plug-in d\'installé.<br />');
    }
    document.write('<br />');
</script>
</div>
<!-- Fin du div masqué d'informations    -->

