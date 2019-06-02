
function doTrack(){
	
	document.getElementById("do").innerHTML = "Rastreo en proceso..."
	
    var celula =  document.getElementById("id_celula").value
	//alert(celula)
	var ds =  document.getElementById("id_ds").value
	//alert(ds)
	var req = "riniciar?id_celula=" + celula + "&id_ds=" + ds
	//alert(req)
    makeRequestAs(req)
	xmlHttpRequest.onreadystatechange = function() {
		if(xmlHttpRequest.readyState == XMLHttpRequest.DONE && xmlHttpRequest.status == 200) {         
			var res = xmlHttpRequest.responseText
			if(res.substring(0, 3) == "bad"){
				alert(res.substring(4, res.length))
			}else{
				alert("Listo")
				window.location.assign(req)
			}
			document.getElementById("do").innerHTML = "Rastrear"
        }
		
    }
}