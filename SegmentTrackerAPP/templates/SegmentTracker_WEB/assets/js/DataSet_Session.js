
function DataSet_Session(){
    var detail =  document.getElementById("detail").value

    if(checkdetail(detail) == true){
        makeRequest("DataSetSession/?detail=" + detail)
        window.location.replace("Cargar_imagenes.html")
    }
    else{
		var present = xmlHttpRequest.responseText
    }
}

function checkdetail(detail){
    var detail_regex = /^[A-ZÀ-ÿa-z0-9,.\/]+[A-ZÀ-ÿa-z0-9,.\/\n ]*$/;
    if(!detail_regex.test(detail)){
        alert("Por favor ingrese un detalle válido.")
        return false
    }
    return true
}
