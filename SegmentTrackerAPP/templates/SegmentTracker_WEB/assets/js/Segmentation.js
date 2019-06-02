

function Segmentation(){
    makeRequest("doSegmentation/")
    alert("La segmentación ha finalizado")
    window.location.replace("resultado_procesar_Imagenes.html");
}