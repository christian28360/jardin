<?php

namespace App\Controller;

require_once('vendor/autoload.php');

#[Route('/config', name: 'config', methods: ['GET'])]
class ConfigController {

    const BDD_NAME = "alcon";

    const myYaml = 'toto';

    public function __construct() {
        print "<hr>In BaseClass constructor\n<hr>";
        $this->myYaml = Yaml::parseFile(__DIR__ . "\confige\config.yaml");
        define("titi",'titi');
    }

    public static function getConf() {
        return Yaml::parseFile(__DIR__ . "\config\config.yaml");
    }

    /**
     * @Route("/", name="")
     */
    public function indexAction(): Response {
        return $this->render('portail/indexPortail.htm.twig', [
                    'controller_name' => 'portailController',
                    'title' => "Bienvenue sur mon portail d'applications !",
        ]);
    }

    /**
     * @Route("/phpInfos", name="php_infos", methods={"GET"})
     */
    public static function phpInfosAction() {
        $phpInfo = phpinfo();
//        $fn->debug($phpInfo);
    }

    /**
     * @Route("/infoBdd", name="infoBdd", methods={"GET"})
     */
    public function infoBddAction(Request $request): Response {
        return $this->infoBdd($request, $portail = true);
    }

    /**
     * @Route("/varEnv", name="var_env", methods={"GET"})
     */
    public function varEnvAction(Request $request): Response {
        $vars = getenv();
        ksort($vars);
        // affiche les résultats
        return $this->render('portail/infosEnv.html.twig', array(
                    'environnement' => $vars,
        ));
    }

    /**
     * @Route("/backup", name="backup")
     */
    public function dumpAction(Request $request): Response {
        // lance la sauvegarde avec les paramètres ci-dessous
        $r = new BackupSQL(array(
            'ftp' => true,
            'module' => 'portail',
            'nom_fichier' => '', // ce sera le nom de la BdD
            'prefix' => '', // on prendra toutes les tables
            'sous_dossier' => '', // ce sera la racine des backUps (var)
        ));

        // affiche les résultats
        return $this->render('common/fragments/messageBackUp.html.twig', array(
                    'application' => 'le portail',
                    'menu' => 'administration',
                    'module' => 'portail',
                    'route' => 'portail',
                    'messages' => $r->getMess(),
        ));
    }

}
