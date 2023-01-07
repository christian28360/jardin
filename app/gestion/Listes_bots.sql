-- comptage du nombre de visiteur par IP et moteur de recherche
SELECT `ip_adress` , count( * ) as "Nbre"
FROM visiteurs_du_site
where
      ip_adress in ('64.241.243.65', '64.241.243.65', '209.249.67.1',
                    '64.241.242.177', '62.212.117.198', '65.214.38.10',
                    '212.127.141.180', '216.243.113.1', '217.205.60.225',
                    '62.119.21.157', '193.218.115.6', '210.59.144.149',
                    '66.237.60.22')
  or  ip_adress like '66.249.%'
  or  ip_adress like '207.68.146.%'
  or  ip_adress like '65.54.188.%'
  or  ip_adress like '66.196.%'
  or  ip_adress like '68.142.%'
  or  ip_adress like '195.101.94.%'
  or  ip_adress like '66.77.73.%'
  or  ip_adress like '65.214.36.%'
  or  ip_adress like '213.73.184.%'
  or  ip_adress like '218.145.25.%'
GROUP BY `ip_adress`
ORDER BY Nbre desc
LIMIT 0 , 300
