var opened_block = -1;

function helpful(opinion,id_answer)
{
	window.open("http://www.gerbeaud.com/jardin/faq/qr_helpful_"+opinion+"_"+id_answer+".html","Donner son avis","width=300,height=250,scrollbars=yes");
}

function openblock(x)
{
	if(opened_block!=-1)
		closeblock(opened_block);
		
	//alert("Fermer: "+opened_block);me.style.display="none";

	//alert("Ouvrir: "+x);
	document.getElementById("header_qr_"+x).style.display="none";
	document.getElementById("block_qr_"+x).style.display="block";
	opened_block = x;

}

function closeblock(x)
{
	document.getElementById("block_qr_"+x).style.display="none";
	document.getElementById("header_qr_"+x).style.display="block";
	opened_block=-1;
}

function moderate(kind_of,id)
{
	var url;
	url = "qr_inappropriate_content_"+kind_of+"_"+id+".html";
	window.open("http://www.gerbeaud.com/jardin/faq/"+url,"Contenu inapproprié","width=450,height=250,scrollbars=yes");
}