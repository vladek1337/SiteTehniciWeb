function showLogo()
{
	document.getElementById("titlu").innerHTML = "technology explained";
}
function hideLogo()
{
	document.getElementById("titlu").innerHTML = "<br>";
}
function showInfo()
{
	var para = document.createElement("h2");
	para.id = "h";
	var node = document.createTextNode("Acest site a fost realizat pentru cursul de Tehnici Web");
	para.appendChild(node);
	var element = document.getElementById("sect");
	element.appendChild(para);
}
function hideInfo()
{
	var parent = document.getElementById("sect");
	var child = document.getElementById("h");
	parent.removeChild(child);
}
function readForm()
{
	var form = document.getElementById("form1");
	var text = 'Datele introduse sunt: <br>';
	var i;
	for (i = 0; i < form.length; i++)
	{
		text += form.elements[i].value + "<br>";
	}
	document.getElementById("data").innerHTML = text;
}
