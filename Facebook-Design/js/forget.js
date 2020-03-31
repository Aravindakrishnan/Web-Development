var n=1;
function get_submit()
{	var number = document.getElementById("number").value;

	if(number=="" && n==1)
	{
		alert_place();
		n=0;
	}
	else if(number.length>0)
	{
		alert("searching");
		get_cancel();
		n=1;
	}
}
var tag;
var textnode;
var place;
function alert_place()
{
	tag = document.createElement("p");
	var data = "Please fill in at least one field Fill in at least one field to search for your account";
	textnode = document.createTextNode(data);
	tag.className = "alert p-2 alert-danger";
	tag.appendChild(textnode);
	place = document.getElementById("place");
	place.appendChild(tag);

}
