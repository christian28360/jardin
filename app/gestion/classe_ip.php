<?PHP
// La classe de recuperation de l'ip visiteur
class Ip {
	// function recuperation ip
	public static function get_ip() {
		if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
			$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
		}
		elseif(isset($_SERVER['HTTP_CLIENT_IP'])) {
			$ip = $_SERVER['HTTP_CLIENT_IP'];
		}
		else {
			$ip = $_SERVER['REMOTE_ADDR'];
		}
		return $ip;
	}
} // Fin de la classe de recuperation de l'ip visiteur
$br = "<br />";
$ip_classe = new ip;
$ip = "vide";
echo "'HTTP_X_FORWARDED_FOR'" . $_SERVER['HTTP_X_FORWARDED_FOR'] . $br;
echo "'HTTP_CLIENT_IP'" . $_SERVER['HTTP_CLIENT_IP'] . $br;
echo "'REMOTE_ADDR'" . $_SERVER['REMOTE_ADDR'] . $br;
echo " classe ip = " . $ip_classe->ip . $br;
echo " ip = " . $ip . $br;
