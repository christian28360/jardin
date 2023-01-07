<?php

namespace app\common;

class JardinFonctions {

    /** imprime message de débug
     * 
     * @param mixed la variable dont on veut afficher le contenu
     */
    function debug($var, $mess = null) {
        print("<br /><div style='background: black; font-size: 15px; margin-left: 50px;'><span style='color: cyan;'>Débug :<br>");
        if ($mess) {
            print($mess . ' ');
        }
        if (!is_string($var)) {
            var_dump($var);
        } else {
            print("<b>$var</b>");
        }
        print("</span></div>");
    }

    /** rempli le tableau avec le calendrier des semis dans un fichier XML<br />
     * situé  dans 'app/common/fragments/calendrier_semis.xml'
     * @param string $TypePlante   vaut 'légume' ou 'fleur'
     */
    function afficheCalendrierSemis($TypePlante) {
// on charge le fichier
        $dom = new domDocument();
        $dom->load('app/common/fragments/calendrier_semis.xml');

// affiche l'en-tête du tableau
        print("<table style='width: 650px; align: center;'>");
        LigneTete($TypePlante);
// lignes détail contenue dans le fichier xml :
//	$LegumeOuFleur = $TypePlante;		// légume ou fleur en paramètre
        $legumes = $dom->getElementsByTagName($TypePlante)->item(0);
        $ListePlantes = $legumes->getElementsByTagName('plante');
// pour chaque item du fichier XML
        foreach ($ListePlantes as $Plante) {
            echo "<tr>";
            echo '<th class="haut" rowspan="2" style="text-align: right;">' . $Plante->getAttribute("nom") . '</th>';
// si fleur, alors colonne type de fleur (annuelle, vivace ...)
            if ($TypePlante == 'fleurs') {
                echo '<td rowspan="2" class="haut" style="text-align: center;">&nbsp;' . $Plante->getAttribute("type") . '</td>';
            }
            LigneDetail($Plante->getElementsByTagName('semis'));   // liste des semis
            if ($TypePlante == 'legumes') {
                LigneDetail($Plante->getElementsByTagName('recolte'));  // liste des récoltes
            }
            if ($TypePlante == 'fleurs') {
                LigneDetail($Plante->getElementsByTagName('floraison'));  // liste des récoltes
            }
        }
        echo "</tr>";
        LigneTete($TypePlante); // pour fermer le tableau
    }

    function ligneDetail($Annee) {
        foreach ($Annee as $mois) {
            for ($i = 1; $i < 13; $i++) {
                $attr = strtolower($mois->getAttribute('m' . substr('00' . strval($i), -2)));
                echo formateCell($attr);
            }
            echo "</tr>";
        }
    }

    /** formate la couleur des cellules du calendrier
     * 
     * @param string $Attr la couleur de fond
     * @return string 
     */
    function formateCell($Attr) {
// début balise td
        $balise = '<td class="calend ';
        /* définition des couleurs :
         * s  = 'green';    // semis
         * r  = 'orange';   // récolte
         * rs = 'red';      // récolte année suivante
         * b  = 'white';    // rien : vide, espace ou blanc
         */
        switch (strtolower($Attr)) {
            case "s": // semis
                $balise .= 'green';
                break;
            case 'r':     // récolte/floraison
                $balise .= 'orange';
                break;
            case 'f':     // récolte/floraison
                $balise .= 'orange';
                break;
            case "rs":      // récolte/floraison année suivante
                $balise .= 'red';
                break;
            case "fs":      // récolte/floraison année suivante
                $balise .= 'red';
                break;
            case 'b':
                $balise .= 'white';
                break;
            default :
                $balise .= 'white';
                break;
        }
//            echo htmlspecialchars_decode($balise);
        return $balise . '">&nbsp;</td>';
    }

    function ligneTete($TypePlante) {
        $lPlante = ( $TypePlante == "legumes" ) ? "Légume" : "Fleur";
        echo("<tr>");
        echo("<th class='FondNoir' style='width: 30%;'>" . $lPlante . "</th>");
        echo ( $lPlante == "Fleur" ) ? "<th class='FondNoir'>Type</th>" : "";
// colonne supplémentaire pour type de fleur
        echo("<th class='FondNoir'>J</th>");
        echo("<th class='FondNoir'>F</th>");
        echo("<th class='FondNoir'>M</th>");
        echo("<th class='FondNoir'>A</th>");
        echo("<th class='FondNoir'>M</th>");
        echo("<th class='FondNoir'>J</th>");
        echo("<th class='FondNoir'>J</th>");
        echo("<th class='FondNoir'>A</th>");
        echo("<th class='FondNoir'>S</th>");
        echo("<th class='FondNoir'>O</th>");
        echo("<th class='FondNoir'>N</th>");
        echo("<th class='FondNoir'>D</th>");
        echo("</tr>");
    }

// renseigne la pop up avec les infos des nouvelles actualités
// utilisation du parser XML
    function infosPopup($fichier) {
        if (file_exists($fichier)) {
            $rubriques = simplexml_load_file($fichier);   // on charge le fichier
            foreach ($rubriques->rubrique as $rubrique) {
                echo '<b>' . $rubrique->titre . '</b>';
                echo '<p>' . utf8_decode($rubrique->contenu) . '</p>';
                echo '<hr />';
            }
            return;
        } else {
            exit('Echec lors de l\'ouverture du fichier' . $fichier . '.');
        }
// end function infos_popup()
    }

// renvoie les infos sur le navigateur
    function getBrowser() {
        $u_agent = $_SERVER['HTTP_USER_AGENT'];
        $bname = 'Non reconnu';
        $platform = 'Inconnu';
        $version = "Inconnue";
        $moteur = "Inconnue";
        $ub = "inconnu";
// First get the platform ?
        if (preg_match('/linux/i', $u_agent)) {
            $platform = 'Linux';
        } elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
            $platform = 'Mac';
        } elseif (preg_match('/windows|win32/i', $u_agent)) {
            $platform = 'Windows';
        }
// Next get the name of the useragent yes seperately and for good reason
        if (preg_match('/MSIE/i', $u_agent) && !preg_match('/Opera/i', $u_agent)) {
            $bname = 'Internet Explorer';
            $ub = "MSIE";
        } elseif (preg_match('/Firefox/i', $u_agent)) {
            $bname = 'Mozilla Firefox';
            $ub = "Firefox";
        } elseif (preg_match('/Chrome/i', $u_agent)) {
            $bname = 'Google Chrome';
            $ub = "Chrome";
        } elseif (preg_match('/Safari/i', $u_agent)) {
            $bname = 'Apple Safari';
            $ub = "Safari";
        } elseif (preg_match('/Opera/i', $u_agent)) {
            $bname = 'Opera';
            $ub = "Opera";
        } elseif (preg_match('/Netscape/i', $u_agent)) {
            $bname = 'Netscape';
            $ub = "Netscape";
        }
// finally get the correct version number
//echo "variable u_agent : " . $u_agent;
//    $known = array('Version', $ub, 'other');
//echo "<BR>array(version) : " . $known;
//    $pattern = '#(?<browser>' . join('|', $known) . ')[/ ]+(?<version>[0-9.|a-zA-Z.]*)#';
//    if (!preg_match_all($pattern, $u_agent, $matches)) {
// we have no matching number just continue
//    }
// see how many we have
//   if ( $ub != "inconnu" )  // navigateur dans la liste, recherche version
//   {
//      $i = count($matches['browser']);
//      if ($i != 1) {
//        //we will have two since we are not using 'other' argument yet
//        //see if version is before or after the name
//        if (strripos($u_agent,"Version") < strripos($u_agent,$ub)){
//            $version = $matches['version'][0];
//        }
//        else {
//            $version = $matches['version'][1];
//            }
//        }
//        else {
//             $version = $matches['version'][0];
//             }
//    }
// check if we have a number
        if ($version == null || $version == "") {
            $version = "non détectée";
        }
// recherche moteur de navigation
        $liste_moteurs = array("Electa", "KHTML", "webkit", "Gecko", "Presto", "Trident");
        foreach ($liste_moteurs as $m) {
            if (preg_match('/' . $m . '/i', $u_agent)) {
                $moteur = $m;
            }
        }
// c'est fini, on retourne les résultats
        return array(
            'userAgent' => $u_agent,
            'name' => $bname,
            'version' => $version,
            'platform' => $platform,
            //        'pattern'   => $pattern,
            'moteur' => $moteur,
            'ip' => $this->getIp()
        );
    }

    /** fonction qui renvoie l'adresse IP du visiteur
     * 
     * @return string l'adresse IP
     */
    function getIp() {
        if ($_SERVER) {
            if (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
//    $port = $_SERVER['REMOTE_PORT'];  on ne recupère pas le port car il change à chaque fois que l'on fait F5
            elseif (isset($_SERVER['HTTP_CLIENT_IP']))
                $ip = $_SERVER['HTTP_CLIENT_IP'];
            else
                $ip = $_SERVER['REMOTE_ADDR'];
        } else {
            if (getenv('HTTP_X_FORWARDED_FOR'))
                $ip = getenv('HTTP_X_FORWARDED_FOR');
            elseif (getenv('HTTP_CLIENT_IP'))
                $ip = getenv('HTTP_CLIENT_IP');
            else
                $ip = getenv('REMOTE_ADDR');
        }
        return $ip;
    }

// renvoie les données de navigation
    function majNavi(&$page_courante, &$page_precedante) {
        (isset($_SERVER['HTTP_REFERER'])) ? $URL = $_SERVER['HTTP_REFERER'] : $URL = '';
        if (empty($URL)) {
            $page = 'accueil';
        } else {
            $page = parse_url($URL);
            if (isset($page['query'])) {
                $result = array();
                parse_str($page['query'], $result);
                // modifié car page non renseigné si on vient du moteur de recherche
                $page = isset($result['page']) ? $result['page'] : "";
            }
            $page_precedante = $page;
            $page_courante = $page;
        }
        return;
    }

    function majCompteur($site) {
// connexion à la base de données
        include ("compteurs_config.php");   // on charge les paramètres de connexion
        $db = mysql_connect($DB_HOST, $DB_USER, $DB_PASSWORD);
        mysql_select_db($DB_NAME, $db);
// Comptage du nombre d'entrées dont le champ "ip" est l'adresse ip du visiteur
        $ip = get_ip();

// si le visiteur est un moteur de recherche, on ne le comptabilise pas :
        if (IsVisitorBot($ip))
            return;

// sinon, on continue les traitements
        $tmp = "SELECT COUNT(*) AS qte_ip FROM " . $TABLE_ONLINE . " WHERE ip_adress='" . $ip . "'";
        $retour = mysql_query($tmp) or die(mysql_error());
        $donnees = mysql_fetch_array($retour);

        if ($donnees['qte_ip'] == 0) {         // Si l'ip est introuvable on la rajoute
            mysql_query("INSERT INTO " . $TABLE_ONLINE . " VALUES('" . $ip . "', '" . time() . "')");
        } else { // Si l'ip existe on fait simplement une mise à jour
            mysql_query("UPDATE " . $TABLE_ONLINE . " SET duree='" . time() . "' WHERE ip='" . $ip . "'");
        }

//Suppression du visiteur si le timestamp date de 3 minutes
// On enregistre le temps écoulé par le visiteur
        $timestamp_3min = time() - (60 * 3);      // 60 * 3 = Nbr secondes dans 3 minutes (la fonction time() est en secondes)
        mysql_query("DELETE FROM " . $TABLE_ONLINE . " WHERE duree < '" . $timestamp_3min);

// Nombre de visiteurs connectées
// Comptage du nombre d'ip
        $retour = mysql_query("SELECT COUNT(*) AS qte_ip FROM " . $TABLE_ONLINE);
        $donnees = mysql_fetch_array($retour);

// Affichage du  Nombre de visiteurs connectées
        if ($donnees['qte_ip'] > 1) {
            $s = "s";
        } else {
            $s = "";
        }
    }

    /** Renvoie TRUE si le visiteur de la page est le robot d'un moteur de recherche<br><br>
     *       J'ai développé cette source afin d'éviter de compter les visites des robots<br>
     * dans mes compteurs de visites/visiteurs/téléchargements.<br>
     * Cette fonction renvoie true si le visiteur est un robot d'un moteur de recherche.<br>         * L'analyse se fait sur l'adresse IP du visiteur, donc si l'adresse IP d'un des robot<br>
     * vient à changer le script sera inefficace, c'est pourquoi il faut penser à maintenir à jour<br> 
     * la liste des adresses IP (tous les 6 mois je pense)<br>
     * La liste que j'ai récupérée vient d'ici :<br>
     * <b>http://www.actulab.com/identification-des-robots.php</b><br>
     * (un peu vieille, je sais pas si certaines adresses ont changées, si vous savez précisez le, merci ;)
     * @param type $ip L'adresse IP du visiteur
     * @return boolean
     */
    function isVisitorBot($ip) {

        $ret = false;

        if (isset($ip)) {
            // Tableau des adresses ip des principaux robots
            // peut être transféré dans un fichier texte
            $IPtab[] = '62.119.21.157';   // picsearch
            $IPtab[] = '62.212.117.198';  // Deepindex
            $IPtab[] = '64.241.242.177';  // Wisenut
            $IPtab[] = '64.241.243.65';   // Wisenut
            $IPtab[] = '65.54.188.';      // MSN Bot
            $IPtab[] = '65.214.36.';       // Teoma
            $IPtab[] = '65.214.38.10';    // Teoma
            $IPtab[] = '66.77.73.';       // Fast
            $IPtab[] = '66.196.';         // Yahoo
            $IPtab[] = '66.237.60.22';    // Openfind
            $IPtab[] = '66.249.';         // Googlebot
            $IPtab[] = '68.142.';         // Yahoo
            $IPtab[] = '193.218.115.6';   // Szukacz
            $IPtab[] = '195.101.94.';     // Voila
            $IPtab[] = '207.68.146.';     // MSN Bot
            $IPtab[] = '209.249.67.1';    // Wisenut
            $IPtab[] = '210.59.144.149';  // Openfind
            $IPtab[] = '212.127.141.180'; // Whalhello
            $IPtab[] = '213.73.184.';     // Whalhello
            $IPtab[] = '216.243.113.1';   // Gigablast
            $IPtab[] = '217.205.60.225';  // Mirago
            $IPtab[] = '218.145.25.';     // Naver+
            // Vérifie chaque adresse
            for ($t = 0; $t < count($IPtab); $t++) {
                if (strpos($ip, $IPtab[$t]) === 0) {
                    $ret = true;
                    break;
                }
            }
        }
        return $ret;
    }

//  prépare la popup d'actualités
// génère le code script pour préparer l'info bulle
    function actu() {
        $file_actu = htmlentities(file_get_contents('actu.html'));
//echo "\n<script language=\"javascript\">\n";
    }

    function voirBaliseH1() {
        foreach (getallheaders() as $name => $value) {
            echo "$name:$value\n" . "<br>";
            echo "<br>";
        }
    }

}
