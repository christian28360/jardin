if (document.getElementById) {
  addEvent(window, 'load', prepareHelpLinks) ;
}
function addEvent(source, type, callback) {
  // fonction d'abstraction pour enregistrer un gestionnaire d'evenement
  // comprend le DOM standard, la syntaxe prorietaire MSIE, l'ancien modele HTML
  // source : objet sur lequel ajouter le gestionnaire d'evenement
  // type : type d'evenement
  // callback : fonction qui traitera l'evenement
  if (source.addEventListener){   // code standard DOM
    source.addEventListener(type, callback, false);
    return true;
  } else if (source.attachEvent){   // code propriétaire MSIE
    var r = source.attachEvent("on"+type, callback);
    return r;
  } else {          // code navigateur sans support DOM-event
    eval('source.on' + type + '= callback') ;
  }
}
function getStandardEvent(e) {
 // abstraction pour recuperer un objet standard pour l'evenement en cours 
 // comprend le modele DOM standard et le modele proprietaire de MSIE
 // e : parametre recu lors de l'appel du gestionnaire d'evenement 
 // retour : objet d'evenement standard
 if (e == null && window.event) {
   // cas particulier de MSIE pour recuperer l'evenement en cours
   e = window.event ;
 }
 if (e.target == null && e.srcElement) {
   // cas particulier de MSIE pour recuperer la balise DOM cible
   e.target = e.srcElement ;
 }
 if (! e.preventDefault ){
   // cas particulier de MSIE pour empecher l'action par defaut du navigateur
   e.preventDefault = function () { this.returnValue = false ; } ;
 }
 return e ;
}
function openLinkInPopupWhenClick(e) {
  // gestionnaire d'evenement actif lors d'un clic sur les liens
  // ouvre le lien dans une popup et pas dans une page normale
  // e : evenement de clic
  e = getStandardEvent(e)  ;
  var link =  e.target  ;
  var addr = link.getAttribute('href') ; 
  window.open(addr, '_blank', 'resizable=yes,width=200,height=300')  ;
  e.preventDefault()  ;
  return false ;
}
function prepareHelpLinks() {
 // explore le document pour rechercher les liens d'aide
 // à chaque lien, on verifie s'il a "help" dans la liste de ses classes
 // si oui, on enregistre un gestionnaire d'evenement pour le clic de ce lien
 var link, list, i ;
 list = document.getElementsByTagName('a') ;
 for(i=0; i<list.length; i++) {
   link = list.item(i) ;
   if (link.getAttribute('href') && link.className) {
     if ((' '+link.className+' ').indexOf(' externe ') != -1) {
//       addEvent(link, 'click', openLink) ;
       addEvent(link, 'click', openLinkInPopupWhenClick) ;
     }
   }
 }
}