function tambah() {
    var angka1 = document.getElementById("ang1").value;
    var angka2 = document.getElementById("ang2").value;
    var hasil = parseInt(angka1) + parseInt(angka2);
    document.getElementById("hasil").innerHTML = "Hasil: "+ hasil;
}

function kurang(){
    var angka1 = document.getElementById("ang1").value;
    var angka2 = document.getElementById("ang2").value;
    var hasil = parseInt(angka1) - parseInt(angka2);
    document.getElementById("hasil").innerHTML = "Hasil: "+ hasil;
}

function kali(){
    var angka1 = document.getElementById("ang1").value;
    var angka2 = document.getElementById("ang2").value;
    var hasil = parseInt(angka1) * parseInt(angka2);
    document.getElementById("hasil").innerHTML = "Hasil: "+ hasil;
}

function bagi(){
    var angka1 = document.getElementById("ang1").value;
    var angka2 = document.getElementById("ang2").value;
    var hasil = parseInt(angka1) / parseInt(angka2);
    document.getElementById("hasil").innerHTML = "Hasil: "+ hasil;
}
function sisabagi(){
    var angka1 = document.getElementById("ang1").value;
    var angka2 = document.getElementById("ang2").value;
    var hasil = parseInt(angka1) % parseInt(angka2);
    document.getElementById("hasil").innerHTML = "Hasil: "+ hasil;
}
function reset(){
    document.getElementById("ang1").value = "";
    document.getElementById("ang2").value = "";
    document.getElementById("hasil").innerHTML = "lakukan perhitungan";
}

