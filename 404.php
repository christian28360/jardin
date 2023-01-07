<table id="menu">
    <tr>
        <td id="menu">
            <div style="margin: 0%; align: center; text-align: center;">
                <br>
                <br>
                <br>
                <br>
                <br> <font face='Verdana' size='3'> <b>ATTENTION :</b> <br /> Le
                lien vers la page "<i><?php echo $page_courante ?>
                </i>"<br /> est introuvable sur le serveur !<br /> Veuillez nous en
                excusez.<br />
                <br /> Ceci est une erreur ou elle est peut-�tre en cours de mise �
                jour<br /> Essayez plus tard et si cela perdure, vous pouvez me
                contacter <!--  LIEN VERS LA BO�TE MAIL DU SITE  --> <?PHP
                $dest = "Cricri-28@christian-alcon.comule.com";
                $mess = "Dans la page " . $page_precedante . " le lien vers '" . $page_courante . "' est invalide. Merci de le corriger";
                echo "<a href='mailto:$dest?subject=Lien invalide dans $page_courante&body=$mess'>Le webmaster</a>";
                ?> </a> pour le signaler<br> Nous ferons notre possible pour
                r�tablir la situation au plus t�t.<br>
                <br> <?php
                echo 'Vous pouvez revenir � la page o� vous �tiez en cliquant ci dessous<br>
		<a title="Revenir � la page appelante" href="index.php?page=' . $page_precedante . '">Retour � ' . $page_precedante . '</a>';
                ?>
                </font>
            </div>
        </td>
    </tr>
</table>
