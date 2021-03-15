

function bissextile()
{
	var année =2000;
	if ((( année%4==0) && (année%100==0)) || (année%400==0))
	{
		var année = true;
		alert(true);
	}
	else{
		var année = false;
	 alert(false);
	}
	console.log(année);



}

	
