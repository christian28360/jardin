
function InitMenu() {
    $("#2011").click(function () {
        MasquerMenus();
        $(".2011").toggle(800);
    });
    $("#2012").click(function () {
        MasquerMenus();
        $(".2012").toggle(800);
    });
    $("#videos").click(function () {
        MasquerMenus();
        $(".videos").toggle(800);
    });
    // masquer tous les menus
    MasquerMenus();
}

function MasquerMenus() {
    $(".m").hide();
}

function AgrandirImage(img) {

    var source = $(img)[0].src;               // source de l'image
    source = source.replace("_small_", "");   // on enlève le préfixe '_small_' pour avoir l'image agrandie
    $("img#Agrandir")[0].src = source;        // on met à jour le lien de la source agrandie sur l'image de classe "Agrandir"

    // on appelle le plug-in
    $("#Agrandir").dialog({
        resizable: true,
        draggable: true,
        width: "auto",
        height: "auto",
        title: "Escape ou click sur la croix pour fermer",
        modal: true,
        closeOnEscape: true,
        show: {effect: 'drop', direction: "right"},
//     hide: { effect: 'drop', direction: "left" },
        hide: {effect: 'implose'}
    });
}

function AjoutOnClick() {
    $("img").each(function () {
        source = this.src;
        if (source.indexOf("_small_") > -1)
            $(this).attr({
                alt: 'Click pour agrandir l\'image',
                title: 'Click pour agrandir l\'image',
                onclick: 'AgrandirImage(this)'
            });
    });
}

function menu() {
    $("#extruderLeft").buildMbExtruder({
        position: "left",
        width: 315,
        positionFixed: true,
        top: 100,
        extruderOpacity: .8,
        hidePanelsOnClose: true,
        accordionPanels: true,
        onExtOpen: function () {},
        onExtContentLoad: function () {},
        onExtClose: function () {}
    });
}
