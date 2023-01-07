var Niv = '';
var TxtHtml = '';
var Txt = '';

////////////////////////////////////////////////////////////////////////////////////

function En_tete(Onglet_actif, Titre, niveau) {
var Classe = '';
var n;

  for (n=niveau; n>0; n--) { Niv = Niv + '../';  }
  document.write("<table cellspacing=0 cellpadding=0><tr><a name='top'></a>");
  TxtHtml = "<td class='";

// Onglet 1
  if  (Onglet_actif==1) Classe = "OngletActif";  else  Classe = "Onglet"; 
  TxtHtml += Classe + "'><a class='onglet' href='" + Niv + "Accueil.html'>ACCUEIL</a></td>";
  document.write(TxtHtml);

// Onglet 2
  if  (Onglet_actif==2) Classe = "OngletActif";  else Classe = "Onglet";
  TxtHtml = "<td class='" ;
  TxtHtml += Classe + "'><a class='onglet' href='" + Niv + "Index_thèmes.html'>FICHES PAR THEMES</a></td>";
  document.write(TxtHtml);	

// Onglet 3
  if  (Onglet_actif==3) Classe = "OngletActif"; else Classe = "Onglet";
  TxtHtml = "<td class='";
  TxtHtml += Classe + "'><a class='onglet' href='" + Niv + "Calendrier/Index_mois.html'>TRAVAUX<br>MOIS PAR MOIS</a></td>";
  document.write(TxtHtml);	

// Onglet 4
  if  (Onglet_actif==4) Classe = "OngletActif"; else Classe = "Onglet";
  TxtHtml = "<td class='";
  TxtHtml += Classe + "'><a class='onglet' href='" + Niv + "Conseils/Index_Conseils.html'>QUESTIONS<br>JARDIN</a></td>";
  document.write(TxtHtml);	
// fin de la table des onglets
  TxtHtml = "</tr><tr><td height='10' bgcolor='#ffcc33' colspan='4'><img src='" + Niv;
  TxtHtml += "Images/vide.gif'></td></tr></table>";
  document.write(TxtHtml);

// affichage du début de la table et du titre en fonction du paramètre 2
  document.write("<table border=0 cellpadding=0 cellspacing=0>");
  document.write("<tbody>");
  document.write("<tr><a name='Top'></a>");
  document.write("<td class='TraitJaune'>&nbsp;</td>");
  document.write("<td class='TraitBlanc'>&nbsp;</td>");
  document.write("<td colspan=4>");
// 1ère ligne du corps + image bubble
  document.write("<h1 class='fiches'>" + Titre + "</h1>");
  document.write("<p><img src='" + Niv + "Images/bubble.gif'>");
}
/////////////////////////////////////////////////////////////////////////////////

function En_tete_Index(Titre) {
  document.write("<a href=../Accueil.html>Accueil fiches pratiques</a><b> \> </b> ");
  document.write("<A href=../index_thèmes.html>Les fiches par thème</A><b> \> " + Titre + "</b></p>");
}
/////////////////////////////////////////////////////////////////////////////////

function En_tete_L1(Menu, Titre) {
  document.write("<a href='../Accueil.html'>Accueil fiches pratiques</a><b> \> </b> ");
  document.write("<A href='Index_" + Menu + ".html'>" + Titre + "</a></p>");
}
/////////////////////////////////////////////////////////////////////////////////

function En_tete_L2() {
  document.write("<a href='../Accueil.html'>Accueil fiches pratiques</a><b> \> </b> ");
  document.write("<A href='Index_mois.html'>Les fiches par mois</a><b> \> </b>");
if (page == 0)  document.write("<a href='" + mois + "_1.html'>" + mois + "</a></p>");
else document.write("<b>" + mois + "</b></p>");
}

function En_tete_L3() {
var Titre = '';
var img = "<img src='../Images/bubble.gif'>";

document.write("<p class='fichessousmenu'>");
switch (page) {
   case 1 :
       Titre = "Arbres et arbustes";
      break;
   case 2 :
       Titre = "Fleurs";
      break;
   case 3 :
       Titre = "Fruits et verger";
      break;
   case 4 :
       Titre = "Plantes d'intérieur";
      break;
   case 5 :
       Titre = "Bassin";
      break;
   default :       
   	   Titre = "Travaux du mois";
}
// ligne 1
if (page != 1) Txt = "<A href='" + mois + "_1.html'>Arbres et arbustes, rosiers, pelouse</A>";
else 	 	   Txt = "<b>Arbres et arbustes, rosiers, pelouse</b>";
document.write(img + Txt + "<BR>");
// ligne 2
if (page != 2) Txt = "<A href='" + mois + "_2.html'>Fleurs, fenêtres et balcons</A>";
else 	 	   Txt = "<b>Fleurs, fenêtres et balcons</b>";
document.write(img + Txt + "<BR>");
// ligne 3
if (page != 3) Txt = "<A href='" + mois + "_3.html'>Fruits et verger, légumes</A>";
else 	 	   Txt = "<b>Fruits et verger, légumes</b>";
document.write(img + Txt + "<BR>");
// ligne 4 (et 5 concaténée éventuellement)
if (page != 4) { 
  Txt = "<A href='" + mois + "_4.html'>Plantes d'intérieur, travaux divers";
  if (NbPages == 4) Txt += ", bassin";
  Txt += "</A>"; 
  }
else {
  Txt = "<b>Plantes d'intérieur, travaux divers";
  if (NbPages == 4) Txt += ", bassin";
  Txt += "</b>";
  }
document.write(img + Txt + "<BR>");
// ligne 5 (optionnelle)
if (NbPages == 5) {
  if (page != 5) Txt = "<A href='" + mois + "_5.html'>Bassin</A>";
  else           Txt = "<b>Bassin</b>";
  document.write(img + Txt + "<BR>");
  }
// fin des sous-menus et titre du chapitre :
if (page != 0) document.write("</P><H3><IMG src='../Images/feuil_" + page + ".gif'>" + Titre + "</H3>");
}

/////////////////////////////////////////////////////////////////////////////////

function Pied_cal() {											   
var Precedent, Suivant, Home = "Index_mois.html";

// on ferme la table principale :
  document.write("<br><td class='TraitJaune'>&nbsp;</td>");
  TxtHtml = "</tr><tr><td height='10' bgcolor='#ffcc33' colspan='7'><img src='";
  TxtHtml += "../Images/vide.gif'></td></tr></table>";
  document.write(TxtHtml);

// on crée la table de pied de page avec les boutons de navigation :
  document.write("<table class='tete'><tbody><tr><td align='center'>");
  var Tmp1, Alt, Scr;
// Flèche gauche
if (page == 0) {
  switch (mois) {
   case "Janvier" :
     Precedent = "Index_mois";
   break;
   case "Février" :
     Precedent = "Janvier";
   break;
   case "Mars" :
     Precedent = "Février";
   break;
   case "Avril" :
     Precedent = "Mars";
   break;
   case "Mai" :
     Precedent = "Avril";
   break;
   case "Juin" :
     Precedent = "Mai";
   break;
   case "Juillet" :
     Precedent = "Juin";
   break;
   case "Août" :
     Precedent = "Juillet";
   break;
   case "Septembre" :
     Precedent = "Août";
   break;
   case "Octobre" :
     Precedent = "Septembre";
   break;
   case "Novembre" :
     Precedent = "Octobre";
   break;
   case "Décembre" :
     Precedent = "Novembre";
   break;
   default :       
     Precedent = "Index_mois"; 
   }
   Precedent += ".html"
}
else {  
  if (page == 1) Txt = "";
  else { Tmp1 = page - 1;
  	   Txt = "_" + Tmp1; }
  Precedent = mois + Txt + ".html"; 
}
  Tmp1 = "<a href='" + Precedent + "'>";
  Alt = "alt='" + Precedent + "'";
  Scr = " src='../Images/flech_g.gif' border='0'>";
  TxtHtml = Tmp1 + "<img " + Alt + Scr + "</a>";
  document.write(TxtHtml);
// Flèche Top
  document.write("<a href='#Top'><img alt='Haut de page' src='../Images/flech_h.gif' border='0'></a>");
// Flèche droite
  if (page == NbPages) {
  switch (mois) {
   case "Janvier" :
     Suivant = "Février";
   break;
   case "Février" :
     Suivant = "Mars";
   break;
   case "Mars" :
     Suivant = "Avril";
   break;
   case "Avril" :
     Suivant = "Mai";
   break;
   case "Mai" :
     Suivant = "Juin";
   break;
   case "Juin" :
     Suivant = "Juillet";
   break;
   case "Juillet" :
     Suivant = "Août";
   break;
   case "Août" :
     Suivant = "Septembre";
   break;
   case "Septembre" :
     Suivant = "Octobre";
   break;
   case "Octobre" :
     Suivant = "Novembre";
   break;
   case "Novembre" :
     Suivant = "Décembre";
   break;
   case "Décembre" :
     Suivant = "Index_mois";
   break;
   default :       
     Suivant = "Janvier"; 
   }
  Suivant += ".html";
}
else { Txt = page + 1; 
       Suivant = mois + "_" + Txt + ".html"; 
     }
  Tmp1 = "<a href='" + Suivant + "'>";
  Alt = "alt='" + Suivant + "'";
  Scr = " src='../Images/flech_d.gif' border='0'>";
  TxtHtml = Tmp1 + "<img " + Alt + Scr + "</a>";
  document.write(TxtHtml);
// Home
  document.write("<a href='" + Home + "'><img alt='Accueil' src='../Images/Home.gif' border='0' ></a>");
// fin du pied :
  document.write("<br></td></tr></tbody></table>");
}

////////////////////////////////////////////////////////////////////////////////////

function Pied(Niveau, Precedent, Suivant, Home) {											   
  var Tmp1, Alt, Scr, n;
// on ferme la table principale :
   Niv='';
  for (n=Niveau; n>0; n--) { Niv = Niv + '../';  }
  document.write("<br><td class='TraitJaune'>&nbsp;</td>");
  TxtHtml = "</tr><tr><td height='10' bgcolor='#ffcc33' colspan='7'><img src='" + Niv;
  TxtHtml += "Images/vide.gif'></td></tr></table>";
  document.write(TxtHtml);

// on crée la table de pied de page avec les boutons de navigation :
  document.write("<table class='tete'><tbody><tr><td align='center'>");
// Flèche gauche
  Tmp1 = "<a href='" + Precedent + ".html'>";
  Alt = "alt='" + Precedent + ".html'";
  Scr = " src='" + Niv + "Images/flech_g.gif' border='0'>";
  if (Precedent.length == 0) TxtHtml = "<img alt='Pas de lien précédent'" + Scr;	
  else TxtHtml = Tmp1 + "<img " + Alt + Scr + "</a>";
  document.write(TxtHtml);
// Flèche Top
  TxtHtml = "<a href='#Top'><img alt='Haut de page' src='"
  TxtHtml += Niv + "Images/flech_h.gif' border='0'></a>";
  document.write(TxtHtml);
// Flèche droite
  Tmp1 = "<a href='" + Suivant + ".html'>";
  Alt = "alt='" + Suivant + ".html'";
  Scr = " src='" + Niv + "Images/flech_d.gif' border='0'>";
  if (Suivant.length == 0) TxtHtml = "<img alt='Pas de lien suivant'" + Scr;	
  else TxtHtml = Tmp1 + "<img " + Alt + Scr + "</a>";
  document.write(TxtHtml);
// Home
  if (Home=="") Home="../Acceuil";
  document.write("<a href='" + Home + ".html'><img alt='Accueil' src='" + Niv + "Images/Home.gif'  width='43' height='43'  border='0' ></a>");
// fin du pied :
  document.write("<br></td></tr></tbody></table>");
}

/*********** Debut du script qui affiche la date en temp reel dans le status de la fenetre  *****************/
function Affiche_Heure_Dans_Status() {
 var JourSem = new Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'vendredi', 'Samedi' );
 var MoisAn = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
 var MaDate = new Date(); 
 var NoJourSem = MaDate.getDay() ;
 var Jour = MaDate.getDate();
 var NoMois = MaDate.getMonth();
 var An = MaDate.getYear();
 timer = 900000; //le timer c'est a dire le chrono est regle pour 1000 milisecondes c-a-d 1 seconde * 15 mn
 window.status = "Nous sommes le " + JourSem[NoJourSem] + " " + Jour + " " + MoisAn[NoMois] + " " + An ;
 setTimeout("Affiche_Heure_Dans_Status();",timer); // on regarde tous les 1/4 d'heure si on change de jour
}