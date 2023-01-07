<!DOCTYPE html>
<head>
    <?PHP
    $ua = $fn->getBrowser(null, true);  // on récupère les infos techniques (navig., moteur ...)
    $fn->debug($ua);

    // ouverture du fichier qui sera chargé dans le corps
    // rechercher dans ce fichier la 1ère balise <h1> pour ensuite charger son contenu à la fin de la balise <title>
    $html = "";
    $titre_suite = "";

    $fichier_a_lire = fopen($corps, "r");
    $html = fread($fichier_a_lire, 5000);
    fclose($fichier_a_lire);
    unset($fichier_a_lire);
    $depart = stripos($html, "<h1>");
    if ($depart !== FALSE) {
        $depart += 3;
        $fin = stripos($html, "</h1>", $depart);
        if ($fin === FALSE) {
            $fin = $depart + 40;    // si pas de balise de fin, on prend 40 caractères
        }
        $titre = '<title>Jardinage bio, ' . str_replace("<br />", " ", substr($html, $depart + 1, $fin - $depart - 1)) . '</title>';
        // on affiche la balise title reconstituée :
        echo $titre;
    }
    unset($depart);
    unset($fin);
    unset($html);
    unset($titre_suite);
    ?>
    <!--<meta http-equiv="X-UA-Compatible" content="IE=Edge" />-->
    <meta http-equiv="Expires" content="-1" />
    <meta name="Expires" content="never" />
    <meta name="Reply-To" content="christian.alcon@free.fr" />
    <meta charset="UTF-8" />
    <meta name="description"
          CONTENT="Orienté potager et culture biologique, apprendre le jardinage naturel, sans produits. Comment lutter contre les mauvaises herbes apprendre plutôt à les utiliser à son profit voire même se venger en les mangeant ou les accomodant en recettes diverses : soupes, sirops, liqueur ...Ce site recense les trucs et astuces simples et économiques de nos aïeuxs. Indications claires et pratiques.">
    <meta name="keywords"
          content="jardinage, jardiner, jardin,  potager,légumes, legume, legumes, trucs, astuces, végétaux, associations bénéfiques, recycler, culture, biologique, sol, plants, terre, engrais, compost, planter, lombricomostage, vermiculture, compost, graines, plants">
    <meta name="category" content="jardin, culture, nature, biodiversité" />
    <meta name="author" lang="fr" content="Christian Alcon" />
    <meta name="identifier-url"
          content="http://jardin.alcon-christian.comule.com" />
    <meta name="robots" content="index, follow, all" />
    <meta name="GENERATOR" content="NetBeans IDE v12" />

    <link rel="icon" type="image/x-icon" href="/app/images/favicon.ico" />
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    <link 
        type="text/css" 
        rel="stylesheet" 
        href="/public/css/jardin.css" 
        />

    <!--  REFERENCEMENT GOOGLE : NE PAS SUPPRIMER LES BALISEs QUI SUIVENT -->
    <meta name="google-site-verification"
          content="hwL34DpmpTQmxc9oNmlowo1G5HdCII3Pack4MrbweMg" />
    <script
        type="text/javascript" 
        language="Javascript" 
        src="/public/js/jardin/menu.js"
        >
    </script>
    <script 
        type="text/javascript" 
        language="Javascript" 
        src="/public/js/jardin/liens_externes.js"
        >
    </script>

    <?PHP // Ajout de JQuery components ?>
    <link type="text/css" href="/inc/jquery-ui-1.8.23.custom.css" rel="stylesheet" />
    <script 
        src="/public/js/jQuery/jquery-3.6.0.min.js" 
        type="text/javascript"
        defer
        >
    </script>
    <script src="/inc/jquery-ui.js" type="text/javascript"></script>

    <?PHP /*
      ~ jquery.mb.components
      ~ Copyright (c) 2001-2010. Matteo Bicocchi (Pupunzi); Open lab srl, Firenze - Italy
      ~ email: mbicocchi@open-lab.com
      ~ site: http://pupunzi.com
     */
    ?>
    <!--jquery.mb.extruder-master<link type="text/css" media="all" href="/inc/mbExtruder.css" rel="stylesheet" />-->
    <link type="text/css" href="/inc/jquery.mb.extruder-master/css/mbExtruder.css" rel="stylesheet" />
    <script type="text/javascript" src="/inc/jquery.hoverIntent.min.js"></script>
    <script type="text/javascript" src="/inc/jquery.metadata.js"></script>
    <script type="text/javascript" src="/inc/jquery.mb.flipText.js"></script>
    <!--<script type="text/javascript" src="/inc/mbExtruder.js"></script>-->
    <script type="text/javascript" src="/inc/jquery.mb.extruder-master/inc/mbExtruder.js"></script>
    <!-- Mes fonctions JQuery -->
    <script 
        type="text/javascript" 
        language="Javascript" 
        src="/public/js/jardin/cookie.js"
        >
    </script>

    <script type="text/javascript">
        // quand page chargée
        $(document).ready(function () {
            menu(); // charge fonction mb.extruder pour affichage menu
            InitMenu(); // active les boutons pour afficher/masquer les sous-menus
        });
    </script>

    <!-- SCRIPT POUR GOOGLE ANALYTICS -->
    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-20317881-1']);
        _gaq.push(['_setDomainName', '.comule.com']);
        _gaq.push(['_trackPageview']);
        (function () {
            var ga = document.createElement('script');
            ga.type = 'text/javascript';
            ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(ga, s);
        })();
    </script>
    <!-- FIN DU SCRIPT POUR GOOGLE ANALYTICS  -->
</head>

<body>
    <div id="extruderLeft"
         class="{
             title:'Cliquez pour accéder aux menus', url:('_jardin_menu.html')
         }">
    </div>
    <!-- Table globale de tout le html fermée dans footer -->
    <table>
        <tbody>
            <tr>
                <td>
                    <!-- table globale de l'en-tête -->
                    <table class="header">
                        <tbody>
                            <tr>
                                <td class="entete" width="32%">
                                    <!-- Référence hébergeur -->
                                    <a href="https://inneshop.com/"
                                       target="_blank"
                                       title="Hébergé chez inneShop, le spécialiste du eCommerce et du référencement naturel sur internet">
                                        <img src="//public/img/common/inneShop.png"
                                             alt="inneshop" 
                                             width="30%"
                                             border="0"
                                             />
                                    </a>
                                    <!--<div class="step">-->
                                    <!-- 
                                    -->                                  
                                    <div class="actu" onmouseover="javascript:actualite('actu');">
                                        Voyez ici l'actualité des dernières màj</div>
                                    <!--ce bloc s'affichera au passage de la souris du bloc ci-dessus-->  
                                    <!-- 
                                    <iframe id="actu" class="petitblocG" src="app/common/fragments/actu.html"
                                                                                style="position: absolute; visibility: hidden; width: 400px; height: 85%; overflow: hidden;">
                                                                        </iframe> 
                                    -->
                                    <!--                                    
                                    INFOS TECHNIQUES (Navigateur, système ...)  
                                    ce bloc s'affichera au passage de la souris
                                    -->
                                    <?PHP // include 'app/common/fragments/actu.html'; ?>
                                    <?PHP // include_once 'app/common/fragments/infosTechniques.php'; ?>
                                </td>
                                <td class="entete">
                                    <h2>
                                        Le jardinage au naturel,<br />sauvage ? presque !
                                    </h2>
                                    <?PHP
                                    //if  ($BD_accessible) {
                                    if ($BD_accessible) {
                                        // base de données accessible :
                                        ($cpt_visitors) > 1 ? $s = 'ème' : $s = 'er';
                                        echo "Vous êtes le " . number_format($cpt_visitors, 0, '', ' ') . "<sup>" . $s . "</sup> visiteur<br />";
                                        echo "Vous êtes actuellement " . $cpt_online . " en ligne";
                                    } else {
// base de données inaccessible, on utilise un site ami :
                                        echo '<script type="text/javascript" src="http://www.abcompteur.com/cpt/?code=5/46/10306/8/1&ID=572931">
    </script>
    visiteurs depuis l\'ouverture du site<br>
    <noscript>
    <a href="http://www.abcompteur.com/">Compteur indisponible, votre navigateur n\'accepte pas les scripts)';
                                        echo '</noscript>';
                                    }
                                    ?>
                                </td>
                                <td width="30%" class="entete">
                                    <div>
                                        <a href="http://jardin-bio.ze-forum.com" target="_blank"
                                           title="3 thèmes : 
                                           * jardinage biologique,
                                           * Bourse d'échanges / troc,
                                           * Nature et culture">
                                            <img align="right" src="/public/img/common/plume.gif" />
                                            <br />
                                            Forum des passionnés de jardinage
                                        </a>
                                    </div>
                                    <br />
                                    <?PHP
                                    // recherche visible ou masquée, car en cours de dev!
                                    if ($environnement == 'prode') {
                                        echo('<div style="display: none; visibility: hidden;">');
                                    } else {
                                        echo('<div>');
                                    }
                                    ?>
                                    <!--<div>-->
                                    <!--rechercher sur le site :-->
                                    <!-- FORMULAIRE DE RECHERCHE -->
                                    <?PHP
                                    // code à déplacer dans config recherche :
                                    if (!isset($PremiereRecheche)) {
                                        // si on n'a pas encore fait de recherche, on supprimera les fichiers anciens
                                        // lors de la première recherche.
                                        $PremiereRecheche = true;
                                    }
                                    if (!isset($blork2)) {
                                        $blork2 = "salut";
                                    }
                                    $form_recherche = '
                                        <form method="GET" action="/app/recherche/engine.php">
                                            <input type="hidden" name="action" value="go" />
                                            <input 
                                                name="blork"
                                                title="Tapez un mot, ou partie de mot (4 caractères minimum), pour le rechercher sur tout le site."
                                                type="text"
                                                value=""
                                                minlength="4"
                                                maxlength="25"
                                                size="35"
                                                placeholder="Recherche sur le site"
                                                style="display: inline-block;"
                                            >
                                            <button 
                                                type="submit"
                                                style="margin-left: -20px;"
                                            >
                                            GO !
                                            </button>
                                        </form>
                                            ';
                                    echo $form_recherche;
                                    ?>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="3" title="Heure de Paris">
                                    <?PHP
                                    // gestion des cookies
                                    // On affiche un petit message de bienvenue et d'indication de dernière visite
                                    if ($_SESSION['cookie'] == 'oui') {
                                        if ($_COOKIE[$site . '_visites_cptr']) {
//                                        if ($_SESSION[$site . '_visites_cptr']) {
                                            $nombre = $_COOKIE[$site . '_visites_cptr'];
                                            $visites_last = $_COOKIE[$site . '_visites_last'];
                                            $visites_first = $_COOKIE[$site . '_visites_first'];
                                            $Txt = "<b class='petitblocC'>Bonjour, ";
                                            if ($nombre == 1) {
                                                $Txt = $Txt . "nous sommes heureux de vous accueillir pour votre 1<sup>re</sup> visite, et vous souhaitons un bon surf !";
                                            } else {
                                                $Txt = $Txt . 'merci d\'être revenu nous voir. C\'est votre ' . number_format($nombre, 0, '', ' ') . '<sup>ème</sup> ';
                                                $Txt = $Txt . 'visite depuis le ' . $visites_first;
                                                $Txt = $Txt . ' (dernière fois le ' . $visites_last . ').';
                                            }
                                            echo $Txt . "</b>";
                                        }
                                    }
                                    ?>
                                    <div style="float: left;">
                                        <!--  BANDEAU DE NAVIGATION DANS LE SITE (LE FIL D'ARIANE) -->
                                        <?PHP
                                        // GESTION DE NAVIGATION
                                        //   CSS à utiliser selon le moteur de navigation
                                        if ($ua['name'] != 'Trident') {
                                            echo '<div id="pale-blue">';
                                        } else {
                                            echo '<div id="IE">';
                                        }
                                        $nbniveau = 1;
                                        $retour_a = false;
                                        // on afiche l'accueil : cliquable
                                        echo '<a href="index.php?page=accueil.jard"><button title="retour vers la page d\'accueil">Accueil</button></a>';
                                        // nouvelle procédure :
                                        //   echo "<br><p>Page courante avant fil ariane : " . sizeof(explode('/',$page_courante)) . "</p></br>";
                                        if (!is_array($page_courante)) {
                                            $nbniveau = sizeof(explode('/', $page_courante));
                                            $navi = ( explode('/', $page_courante) );
                                        } else {
                                            $nbniveau = 0;
                                            $navi = "";
                                        }
                                        for ($i = 0; $i < $nbniveau - 1; $i++) {
                                            ($i > 0) ? $m = $navi[$i - 1] . '/' : $m = '';
                                            echo '<a href="index.php?page=' . $m . $navi[$i] . '/index_' . $navi[$i] . '"><button title="retour vers le menu ' . $navi[$i] . '">' . $navi[$i] . '</button></a>';
                                            $retour_a = TRUE;
                                        }
                                        // on afiche la page courante : non cliquable
                                        if ($nbniveau > 0) {
                                            echo "<button title='Page sur laquelle vous vous trouvez'>" . $navi[$i] . "</button>";
                                        }
                                        echo '</div>';
                                        //$page_visitee = $navi[$i];
                                        ?>
                                        <!-- Placez cet appel d'affichage à l'endroit approprié. -->
                                        <script type="text/javascript">
                                            (function () {
                                                var po = document.createElement('script');
                                                po.type = 'text/javascript';
                                                po.async = true;
                                                po.src = 'https://apis.google.com/js/plusone.js';
                                                var s = document.getElementsByTagName('script')[0];
                                                s.parentNode.insertBefore(po, s);
                                            })();
                                        </script>
                                    </div>
                                    <div style="float: right;">
                                        <?PHP
                                        if (($retour_a) && ($page_precedante != '')) {
                                            if ($ua['name'] != 'Trident') {
                                                echo '<div id="pale-blue">';
                                            }  // CSS à utiliser selon le moteur de navigation
                                            else {
                                                echo '<div id="IE">';
                                            }
                                            echo '<a href="index.php?page=' . $page_precedante . '">';
                                            echo '<button>Retour à ' . $page_precedante . '</button></a>';
                                        }
                                        ?>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
