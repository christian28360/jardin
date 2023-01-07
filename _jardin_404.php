<table class="calendrier">
    <tr>
        <td id="menu">
            <div style="margin: 0%; align: center; text-align: center;">
                <br>
                <br>
                <br> <font face='Verdana' size='3'> <b>ATTENTION :</b> <br /> Le
                lien vers la page "<i><?php echo $page_courante; ?>
                </i>"<br /> est introuvable sur le serveur !<br /> Veuillez nous en
                excusez.<br />
                <br />Elle est peut-être en cours de mise à jour, ou c'est une erreur
                <br />
                Essayez plus tard et si cela perdure, vous pouvez contacter
                <!--  LIEN VERS LA BOÏTE MAIL DU SITE  -->
                <?PHP
                $dest = "christian.alcon2@laposte.net";
                $pre = $page_precedante ? '"' . $page_precedante . '"' : '"Not set"';
                $cour = $page_courante ? '"'  . $page_courante  . '"' : "Not set";
                $mess = "Dans la page " . $pre . ", le lien vers " . $cour . " est invalide. Merci de le corriger";
                echo "<a href='mailto:$dest?subject=Lien invalide dans $cour&body=$mess'>Le webmaster</a>";
                ?>
                </a>
                pour le signaler
                <br>
                Nous ferons notre possible pour rétablir la situation au plus tôt.
                <br>
                <br>
                Vous pouvez revenir à la page où vous êtiez en cliquant ci dessous
                <br>
                <a title="Revenir à la page appelante" 
                   href="index.php?page=<?PHP echo $page_precedante; ?>">
                    Retour à '<?PHP echo $page_precedante; ?>'
                </a>
                </font> <br>
                <br>
                <br>
                <br>
            </div>
        </td>
    </tr>
</table>
