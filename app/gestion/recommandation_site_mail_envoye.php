<link 
    rel="stylesheet" 
    type="text/css" 
    href="public/css/formulaire.css"
    media="screen" 
    >
<table style="width: 80%" border='0'>
    <tr>
        <td align="center">
            <form action="index.php?page='<?PHP echo $_GET['retour']; ?> method="post">
                <br /> <br /> <b>Votre mail a bien été envoyé à<br /> <?PHP echo $_GET['dn']; ?><br />
                    <br /> à l'adresse<br /> <?PHP echo $_GET['dm']; ?>
                </b><br /> <br /> Cliquez ci-dessous pour fermer ce message et
                revenir à :<br /> <br /> 
                <input type="submit" id="page" name="page"
                       value="<?PHP echo $_GET['retour']; ?>">
            </form>
        </td>
    </tr>
</table>
