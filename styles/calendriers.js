// 0 = en blanc; 1 = en jaune (passe de 0 à 1, alternativement)
var NoLig = 0;   	 		  // Noligne : couleur du fond du nom de la plante (alterne : blanc, jaune)
var Blanc = "#ffffff"; 
var Jaune = "#ffffcc";
var Vert  = "#33cc33";	
var Orange = "#ffcc00";
var Rouge  = "#ff3333";	
var CouleurFond;
var Couleur = [Blanc, Jaune, Vert];
var x, i, c;

// affichage du début de la table et du titre des colonnes + la liste des mois
function EnTeteCalendrier(Chapitre, Legende, Titre, Type) {
// affiche la légende des couleurs
document.write("<H2>Calendrier des " + Chapitre + "</H2>");
if (Legende !=="") {			   	   // si on n'affiche pas la légende des couleurs
document.write("<table border=0 cellpadding=0 cellspacing=0>");
document.write("<tr><a name='TopCal'></a>");			// pour revenir en bébut de liste
document.write("<Td width=15% rowspan=3  style='text-align: center'><B>Légende :</B></Td>");
document.write("<TD width=10% bgColor=" + Vert + "> </TD><TD width=1%> </TD>");
document.write("<TD width=25%>période de semis</TD>");
if (Type != "") {
  document.write("<Td width=10% rowspan=3  style='text-align: center'><B>Type :</B></Td>");
  document.write("<TD width=2%>a</TD><TD>annuelle</TD>");
  x="période de floraison";
  c="fleurit l'année suivante";
  }
else {
  x="période de récolte";
  c="récolte année suivante";
  }
document.write("</TR><tr><TD bgColor=" + Orange + "></TD><TD></TD><TD>" + x + "</TD>");
if (Type != "") document.write("<TD>v</TD><TD>vivace</TD>");
document.write("</TR><tr><TD bgColor=" + Rouge +"></TD><TD></TD><TD>" + c + "</TD>");
if (Type != "") document.write("<TD>b</TD><TD>bisannuelle</TD>");
document.write("</TR></TABLE>");
}
// affiche la ligne de titre des colonnes :
document.write("<table border=1 cellpadding=1 cellspacing=0 style=width:70% align=center>");
document.write("<br>");
LigneTete(Titre, Type);
}

function LigneTete(Titre, Type) {
document.write("<tr>");
document.write("<th width=30% class=FondNoir>" + Titre + "</th>");
if (Type != "") document.write("<th width=4% class=FondNoir>" + Type + "</th>");
document.write("<th width=4% class=FondNoir>J</th>");
document.write("<th width=4% class=FondNoir>F</th>");
document.write("<th width=4% class=FondNoir>M</th>");
document.write("<th width=4% class=FondNoir>A</th>");
document.write("<th width=4% class=FondNoir>M</th>");
document.write("<th width=4% class=FondNoir>J</th>");
document.write("<th width=4% class=FondNoir>J</th>");
document.write("<th width=4% class=FondNoir>A</th>");
document.write("<th width=4% class=FondNoir>S</th>");
document.write("<th width=4% class=FondNoir>O</th>");
document.write("<th width=4% class=FondNoir>N</th>");
document.write("<th width=4% class=FondNoir>D</th>");
document.write("</tr>");
}

function FinCal(Titre, Type) {
LigneTete(Titre, Type);
document.write("</table>");
}

function LigCal ( Lig, Type, Plante, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12 ) {
var Prec='';
document.write("<tr style=height: '10px'>");
// titre
// 1ère ligne, on fusionne les 2 cellules
if (x != Plante)  {
  if (Type != '') 
  	 Txt = Plante + "</td><td rowspan=2 style='text-align: center' bgcolor=" + Couleur[NoLig] + ">" + Type + "</td>";  
  else Txt = Plante + "</td>"; 
  document.write("<td rowspan=2 bgcolor=" + Couleur[NoLig] + " style='text-align: right'>" + Txt);
  }
// lignes mensuelles ( 1 à 12 )
//(Type != '') ? c=2 : c=3;
for (i=3; i < LigCal.arguments.length; i++) {
  switch (LigCal.arguments[i]) {
    case v :
      CouleurFond = Vert;
      break;
    case o :
      CouleurFond = Orange;
      break;
    case r :
      CouleurFond = Rouge;
      break;
    default :
	  CouleurFond = Couleur[NoLig];
	}
  document.write("<td with: 5%; bgcolor='" + CouleurFond + "'></td>");
}
document.write("</tr>");
if (x != Plante) x = Plante;
else if (NoLig++ == 1) NoLig = 0;
}

function LigneCalendrier ( Titre, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12 )
{	   
var NoLigne = 0;

  document.write("<tr>");
// titre
  document.write("<td width=40% bgcolor='" + Couleur[NoLigne] + "'>" + Titre + "</td>");
// lignes mensuelles ( 1 à 12 )
  for (var i=1; i < LigneCalendrier.arguments.length; i++)
	{
	  CouleurFond = Couleur[NoLigne];
	  if ( LigneCalendrier.arguments[i] != 0 ) CouleurFond = Vert;
    document.write("<td with: 6%; bgcolor='" + CouleurFond + "'>&nbsp;</td>");
	}
  document.write("</tr>");
	if (NoLigne++ == 1) NoLigne = 0;
}

// Un Calendrier Grégorien perpétuel avec le calculs des jours férié, même Pâques et les autres...
var Ferie = new Array("01/01","01/05","08/05","14/07","15/08","01/11","11/11","25/12");
var LesMois = new Array("Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre");
var Semaine = new Array("Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche");
var DernierJour = new Array("31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31");
var CouleurFond = new Array("white", "silver" , "darkgray" , "#808080" , "#999999");
var Bordure = new Array("gray", "darkgray");
var Police = new Array("Arial", "Verdana" , "Verdana" , "Arial");
var TaillePolice = new Array("1" , "1" , "2" , "-1");
var CouleurPolice = new Array("white" , "black", "silver" , "darkgray");
var PositionTexteH = new Array("left" , "center" , "right");
var PositionTexteV = new Array("top", "middle", "bottom");
var CeJour = new Date();
var n = CeJour.getDay();    // Jour de la semaine
var j = CeJour.getDate();     // Jour du mois
var m = CeJour.getMonth();    // Mois
var a = CeJour.getFullYear();  // Année
var DimanchePaques = false ;


function Ecrit(txt) { document.write(txt) }

function annuel(Lannee) {
Ecrit("<table>");
for (var Trim = 0 ; Trim <4 ; Trim ++) {
  Ecrit("<tr>");
  for (var moi = 0 ; moi <3 ; moi ++){
   Ecrit("<td valign='"+PositionTexteV[0]+"' align='"+PositionTexteH[1]+"'>");
   calendrier(3*Trim+moi+1,Lannee);
   Ecrit("</td>");
   }
  Ecrit("</tr>");
}
Ecrit("</table>");
}

function trimestre(Trim,Lannee, Option){
Ecrit("<table>");
if (Option == 'h') {
Ecrit("<tr>");   
for (var tt = 0 ; tt < 3 ; tt++) {
  Ecrit("<td align='"+PositionTexteH[1]+"' valign='"+PositionTexteV[0]+"'>");
  calendrier(3*(Trim-1)+tt+1,Lannee);
  Ecrit("</td>");
}
Ecrit("</tr>");
}
else
{
for (var tt = 0 ; tt < 3 ; tt++) {
  Ecrit("<tr><td align='"+PositionTexteH[1]+"' valign='"+PositionTexteV[0]+"'>");
  calendrier(3*(Trim-1)+tt+1,Lannee);
  Ecrit("</td></tr>");
  }
}
Ecrit("</table>");
}

function isFerie(jf,mf) { 
   var i=0
     for(var i in Ferie) { 
  if ( test=(((jf<10)?'0'+jf:jf)+'/'+((mf<10)?'0'+mf:mf)) == Ferie[i++]) return true;}
  return false;
}

function isBissextile(an){  return  ((( an % 4 == 0 ) && ( an % 100 != 0 || an % 400 == 0 )) ? true : false ); }
function isWeekEnd(jwe){ return ( ((jwe == 5) || (jwe == 6)) ? true : false ); }

function isPaques(pan){
 DimanchePaques = true;
 var b = pan - 1900; 
 var c = pan % 19; 
 var d = Math.floor( (7 * c + 1) / 19);
 var e = (11 * c + 4 - d) % 29;
 var f = Math.floor( b / 4); 
 var g = (b + f + 31 - e) % 7;
 var date = 25 - e - g;
 if (date > 0) {mois = 4}
 else {date=31+date; mois=3};
 date = ( (date < 10)? '0' + date:date);
 Ferie.push( ((date<10) ? '0' + date:date) + '/' + ((mois < 10) ? '0' + mois:mois)); // Dimanche de Pâques
 date += 1;
 if ( (date > 31) && (mois = 3)) {date = 1; mois += 1}
 Ferie.push(((date < 10) ? '0' + date:date) + '/' + ((mois < 10) ? '0' + mois:mois)); //Lundi de Pâques férié
 date += 38;
 while (date > 31) {var tt = 0; date -= DernierJour[mois -1 + tt]; tt++ ; mois +=1}
 Ferie.push(((date < 10) ? '0' + date:date) + '/' + ((mois < 10) ? '0' + mois:mois)); // Jeudi de l'ascencion
 date += 10;
 while (date > 31) {var tt = 0; date -= DernierJour[mois - 1 + tt]; mois += 1}
 Ferie.push(((date < 10) ? '0' + date:date) + '/' + ((mois < 10) ? '0' + mois:mois)); // Pentecote
}

function calendrier(LeMois, Lannee) {
  var EnCours = new Date(Lannee,LeMois - 1);
  var PremierJour = EnCours.getDay();
  if (PremierJour == 0) PremierJour = 7 ;
  if (isBissextile(Lannee)) {DernierJour[1] = 29 ;}
  if (!DimanchePaques) isPaques(Lannee); 
  var jour=0;
  Ecrit("<TABLE border=2 cellspacing='0' cellpadding='2' bordercolorlight='"+Bordure[0]+"' bordercolordark='"+Bordure[1]+"'");
  Ecrit("<TR><TD valign='"+PositionTexteV[0]+"' align='"+PositionTexteH[0]+"'>");

  Ecrit("<FONT FACE='"+Police[1]+"' size='"+TaillePolice[2]+"' color='"+CouleurPolice[0]+"'><CENTER><B>"+LesMois[LeMois-1]+" "+Lannee+"</B></CENTER></FONT>");
  Ecrit("<TABLE border=1 cellspacing='0' cellpadding='2' bordercolorlight='"+Bordure[0]+"' bordercolordark='"+Bordure[1]+"'");
  Ecrit("<TR>");
  var tt = 0;
  for (temp in Semaine) { 
    Ecrit("<TD width='10' bgcolor='"+CouleurFond[4]+"' valign='"+PositionTexteV[0]+"' align='"+PositionTexteH[0]+"'><FONT face='"+Police[2]+"' size='"+TaillePolice[3]+"'color='"+CouleurPolice[1]+"'>"+Semaine[tt++].substring(0,1)+"</FONT></TD>");  }
  Ecrit("</TR>");  
  for(var i=0;i<6;i++) {
    Ecrit("<TR>");
    for (j=0;j<7;j++) {
      jour=7*i+j-PremierJour+2;      
      if ((7*i+j>=PremierJour-1)&&(jour<=DernierJour[LeMois-1])) {
         if ((jour==j)&&(LeMois==m+1)&&(Lannee==a)) {
            Ecrit("<TD width='10' bgcolor='"+CouleurFond[3]+"' valign='"+PositionTexteV[1]+"' align='"+PositionTexteH[1]+"'><FONT face='"+Police[0]+"' size='"+TaillePolice[3]+"' color='"+CouleurFond[1]+"'  color='black'><I><U>"+jour+"</I><U></FONT></TD>");}
        else if (isFerie(jour,LeMois) ) 
            Ecrit("<TD width='10' bgcolor='"+CouleurFond[2]+"' valign='"+PositionTexteV[1]+"' align='"+PositionTexteH[1]+"'><FONT face='"+Police[0]+"' size='"+TaillePolice[3]+"' color='"+CouleurPolice[1]+"'>"+jour+"</FONT></TD>");
        else if (isWeekEnd(j)) 
            Ecrit("<TD width='10' bgcolor='"+CouleurFond[1]+"' valign='"+PositionTexteV[1]+"' align='"+PositionTexteH[1]+"'><FONT face='"+Police[0]+"' size='"+TaillePolice[3]+"' color='"+CouleurFond[0]+"'>"+jour+"</FONT></TD>");
        else 
            Ecrit("<TD width='10' bgcolor='"+CouleurFond[0]+"' valign='"+PositionTexteV[1]+"' align='"+PositionTexteH[1]+"'><FONT face='"+Police[0]+"' size='"+TaillePolice[3]+"' color='"+CouleurPolice[1]+"'>"+jour+"</FONT></TD>");
      }
      else 
          Ecrit("<TD width='10' bgcolor='"+CouleurFond[0]+"'><FONT size='"+TaillePolice[3]+"'> </FONT></TD>");
    }
    Ecrit("</TR>");
    if (jour >= DernierJour[LeMois - 1]) {break};
  }
  Ecrit("</TABLE>");
  Ecrit("</TD></TR></TABLE>");
} 

/* 
Il suffit d'enregistrer le code dans un fichier .js (calendrier.js) et de l'appeler dans un fichier html avec la commande 
<script language='JavaScript src='calendrier.js'></script>
Pour afficher le calendrie trois facon ... 
=> calendrie (mois, année)
=> trimestre(numéro du trimestre, année, option)
=> annuel(année)
Voila ...  */
