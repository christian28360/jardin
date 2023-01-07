<?PHP
// 1ère arrivée sur le site : on pose notre 1er cookie de session
if (!isset($_SESSION['cookie'])) {
    setcookie('session', 'on');
    setcookie('smenu', 'aucun');          // tous les smenus repliés
    $_SESSION['cookie'] = 'oui';           // le navigateur gère les cookies
    // gestions des visites de l'utilisateur en cours
    // Il s'agit de la première visite de notre Internaute sur notre site
    $nombre = 1;
    // $decalage est le décalage horaire déclaré et initialisé dans compteurs_config.php
    if (!isset($decalage)) {
        $decalage = 0;
    }
    $visites_last = date("d/m/Y H:i", time() + $decalage);
    $visites_first = date("d/m/Y", time() + $decalage);
    $expire = time() + ( 3600 * 24 * 365 * 10 );  // exipire dans 10 ans !
    if (!isset($_COOKIE[$site . '_visites_cptr'])) {
    // Il s'agit de la première visite de notre Internaute sur notre site
        setcookie($site . '_visites_cptr', 1, $expire);
        setcookie($site . '_visites_first', $visites_first, $expire);
        setcookie($site . '_visites_last', $visites_last, $expire);
    } else {
    // Il s'agit d'un comeback de notre Internaute sur notre site
        $nombre = $_COOKIE[$site . '_visites_cptr'] + 1;
        $visites_last = $_COOKIE[$site . '_visites_last'];
        $visites_first = $_COOKIE[$site . '_visites_first'];
        setcookie($site . '_visites_cptr', $nombre, $expire);
        setcookie($site . '_visites_last', date("d/m/Y à H:i", time() + $decalage), $expire);
    }
    $_SESSION[$site . '_visites_cptr'] = $nombre;
    $_SESSION[$site . '_visites_last'] = $visites_last;
    $_SESSION[$site . '_visites_first'] = $visites_first;
} else {
    if (!isset($_SESSION['cookie']) || ( $_SESSION['cookie'] == 'non' )) {    // cookies non supportés car cookie 'session' non accessible
        echo ('<script>alert("Votre navigateur ne supporte pas les cookies.\n\n\
				La navigation sur le site ne sera pas optimisée\n\
				Vous pouvez les autoriseer uniquement pour ce site sans crainte\n\
				Nous ne collectons aucune donnée personelle !");</script>');
        $_SESSION['cookie'] = 'non';      // le navigateur ne gère pas les cookies
    }
}
