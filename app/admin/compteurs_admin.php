<?php
require_once("app/common/global.php");

$classes = get_declared_classes();
sort($classes);

foreach ($classes as $classe) {
//        debug(substr($classe, 0, 3));
    if (substr($classe, 0, 1) == 'S') {
//    if (substr($classe, 0, 3) == 'Sgb')
    }
}

if ((isset($_POST['password'])) && (isset($_POST['user']))) {
    $_SESSION['admin_user'] = $_POST['user'];
    $_SESSION['admin_password'] = $_POST['password'];
}
if ((isset($_SESSION['admin_password'])) &&
        (isset($_SESSION['admin_user'])) &&
        ($_SESSION['admin_password'] == $ADMIN_PASSWORD) &&
        ($_SESSION['admin_user'] == $ADMIN_USER)) {
    $params['host'] = $DB_HOST;
    $params['dbname'] = $DB_NAME;
    $params['user'] = $DB_USER;
    $params['pwd'] = $DB_PASSWORD;
    ?>
    <table style="width: 98%;">
        <tr style="width: 50%;">
            <td rowspan="2">
                <table style="width: 95%">
                    <tr>
                        <td colspan="3" class="Style10">Liste des visiteurs</td>
                    </tr>
                    <tr bgcolor="#FFCC00">
                        <td width="179">
                            <div align="center" class="Style7">IP du visiteur</div>
                        </td>
                        <td width="295"><div align="center" class="Style7">Date
                                d'entr&eacute;e</div></td>
                        <td width="112"><div align="center" class="Style7">En ligne</div></td>
                    </tr>
                </table>
                <div style="height: 850px; overflow: auto;">
                    <table style="width: 95%">
                        <?php
                        $nbVisiteurs = $bdd->preparation("SELECT count(*) FROM " . $TABLE_VISITORS)->execute();
                        $sql = "SELECT "
                                . "     visit.session_id, "
                                . "     visit.ip_adress, "
                                . "     visit.entry_time "
                                . "FROM " . $TABLE_VISITORS . " visit "
                                . "LEFT JOIN " . $TABLE_ONLINE . " connect "
                                . "     ON visit.session_id = connect.session_id "
                                . "GROUP BY visit.entry_time "
                                . "ORDER BY "
                                . "     connect.expiry DESC, "
                                . "     visit.entry_time DESC "
                                . "LIMIT 0 , 500";
                        $fn->debug($sql);
                        $sth = $bdd->preparation($sql);
                        $sth->execute();
                        $records = $sth->fetchAll();
                        $cpt = 0;
                        $on_line = 0;

                        foreach ($records as $key => $record) {
                            $ip = $record['ip_adress'];    // récupère la valeur du champ 'ip'
                            $date = date("d/m/Y H:i:s", $record['entry_time'] + $decalage);
                            $sth = $bdd->preparation("SELECT count(*) as nb FROM " . $TABLE_ONLINE . " WHERE session_id='" . $record['session_id'] . "'");
                            $sth->execute();
                            $rec = $sth->fetch()['nb'];
                            if ($rec) {
                                $online = '<IMG src="/public/img/common/on_line.gif" style="margin: 0px;">';
                                $on_line++;
                            } else {
                                $online = '<IMG src="/public/img/common/off_line.gif" style="margin: 0px;">';
                            }
                            ($cpt % 2) ? $bg = '<tr bgcolor="#FFFFCC">' : $bg = '<tr>';
                            echo $bg;
                            ?>
                            <td height="10px" width="40%" class="Style12"><?php echo $ip; ?></td>
                            <td class="Style12" width="38%"><?php echo $date; ?></td>
                            <td align='center' width="12%"><?php echo $online; ?></td>
                            </tr>
                            <?php
                            $cpt++;
                        }
                        ?>
    <!--                        <td height="10px" width="40%" class="Style12"><?php //echo $ip;     ?></td>
        <td class="Style12" width="38%"><?php //echo $date;     ?></td>
        <td align='center' width="12%"><?php //echo $online;     ?></td>-->
                        </tr>
                    </table>
            </td>
        </tr>
        <tr style="width: 50%;">
            <td valign="top">
                <table border="1" style='width: 50%'>
                    <tr>
                        <td colspan=7 align=left width="50%" class="Style12">
                            <span class="Style12">&nbsp;Nombre total de visiteurs : <?php echo $cpt_visitors; ?></span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan=7 align=left width="366" class="Style12">
                            <span class="Style12">&nbsp;actuellement connectés   : <?php echo $cpt_online; ?></span>
                        </td>
                    </tr>
            </td>
            <td colspan=7 align=center width="50%" bgcolor="#006699"
                class="Style14">
                Graphe des visiteurs de la semaine (j-7 à aujourd'hui)</td>
        </tr>
        <tr bgcolor="#006699" class="Style14">
            <?php
            // on compte les visiteurs de la semaine
            $aujourdhui = getdate();
            $liste = array();
            for ($i = 0; $i < 7; $i++) {
                $d1 = mktime(0, 0, 0, $aujourdhui['mon'], $aujourdhui['mday'] - $i, $aujourdhui['year']);  // aujourd'hui, puis hier ...
                $d2 = mktime(0, 0, 0, $aujourdhui['mon'], $aujourdhui['mday'] + 1 - $i, $aujourdhui['year']);  // hier, puis avant-hier ...
//                $fn->debug($d1,'d1');
//                $fn->debug($d2,'d2');
//                $fn->debug('SELECT count(*) as nb FROM ' . $TABLE_VISITORS . ' WHERE (entry_time >= ' . $d1 . ') AND (entry_time <= ' . $d2 . ')','select');
//    $cpt = $bdd->requete("SELECT count(*) as nb FROM " . $TABLE_VISITORS . " WHERE (entry_time > " . $d1 . ") AND (entry_time <= " . $d2 . ")")->fetch()['nb'];
                $cpt = $bdd->requete("SELECT count(*) as nb FROM " . $TABLE_VISITORS . " WHERE (entry_time >= " . $d1 . ") AND (entry_time <= " . $d2 . ")")->fetch()['nb'];
//                $cpt = $bdd->preparation("SELECT count(*) FROM " . $TABLE_VISITORS . " WHERE (entry_time > " . $d1 . ") AND (entry_time <= " . $d2 . ")")->execute();
//                $fn->debug($cpt, 'admin, cpt');
                $liste[$i] = $cpt;
            }
            // savoir le jour de la semaine actuel
            $first = $aujourdhui['wday'];
            $jours_tab = array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Sam');
            // on remplit le tableau de la semaine :
            // départ = demain à dimanche
            for ($i = $first + 1; $i < 7; $i++) {
                echo '<td width="14%" align="center">' . $jours_tab[$i] . '</td>';
            }
            // affiche jour 0 à aujourd'hui
            for ($i = 0; $i <= $first; $i++) {
                echo '<td width="14%" align="center">' . $jours_tab[$i] . '</td>';
            }
            ?>
        </tr>
        <tr>
            <?PHP
            // affiche le nbre de visiteurs par jour
            for ($i = 6; $i >= 0; $i--) {
                echo "<td align='center'>" . $liste[$i] . "</td>";
            }
            ?>
        </tr>
        <?PHP
        // affiche un comptage par IP, désactivé, trop gourmand en ressources//      echo '<tr>';
        //      echo '<th colspan="3">Adresse IP</th>';
        //      echo '<th colspan="4">Nbre connexions</th>';
        //      echo '</tr>';
        // limite à changer plus tard
        //   $rqSQL = 'SELECT ip_adress, count(*) as "Nbre" FROM ' . $TABLE_VISITORS;
        //   $rqSQL = $rqSQL . ' GROUP BY ip_adress LIMIT 0 , 50';
        //   $qry = mysql_query( $rqSQL );
        //  while ($row = mysql_fetch_array($qry))
        //  {
//    $ip = $row['ip_adress'];    // récupère la valeur du champ 'ip'
//    $Nb = $row['Nbre'];         // récupère la valeur du champ comptage
        // affichage
        //    echo '<td colspan="3">&nbsp;' . $ip . '&nbsp;</td>';
        //    echo '<td colspan="4">&nbsp;' . $Nb . '&nbsp;</td>';
        //    echo '</tr><tr>';
        //  }
        ?>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    <?php
} else {
    ?>
    <table border="1" align="center" style='width: 50%'>
        <tr>
            <td width="347" class="Style7"><?php
                if (isset($_POST['user'])) {
                    ?> <span class="Style15"> Informations de connexion incorrectes </span>
                <?php } ?> <br> Veuillez saisir vos informations de connexion afin de
                pouvoir accéder &agrave; l'administration</td>
        </tr>
        <tr>
            <td>
                <form name="form1"
                      method="post"
                      action="index.php?page=app/admin/compteurs_admin">
                    <span class="Style12"> Nom d'utilisateur</span>
                    <input type="text"
                           name="user"> <br> <span class="Style12">Mot de passe</span> <input
                           type="password" name="password"> <br> <input type="submit"
                           name="Submit" value="Envoyer" style="font-size: 9px">
                </form>
            </td>
        </tr>
    </table>
    <?php
}
