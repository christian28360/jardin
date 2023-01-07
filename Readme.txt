========================== GUIDE D'INSTALLATION DES COMPTEURS PHP ==================================
====================================================================================================


1. Copier le contenu du répertoire "compteurs" dans la racine de votre site
2. Ajouter une base de donnée à Mysql ex: MaBase
3. Modifier le fichier de configuration compteurs_config.php et changer 
   les paramètere de votre base de données (db_user,db_password,db_host et db_name).
4. Ajouter la ligne là au tout début de votre page PHP
   <?php include('compteurs.php'); ?>
5. Ajouter la ligne là où vous vouler ajouter votre compteur
   <?php echo 'Visiteurs en ligne: '.$cpt_online.'<br>Site visité: '.$cpt_visitors.' fois '; ?>, 
   vous pouvez personnaliser le texte du compteur comme vous voulez! 



============================= ACCEDER A L'ADMINISTRATION ===========================================
====================================================================================================


1. Pour acceder à l'administration du site il faut appeler la page "compteurs_admin.php" 
   du réperoire racine de votre site