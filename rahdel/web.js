function tambah() {
    var angka1 = parseFloat(document.getElementById("angka1").value) || 0;
    var angka2 = parseFloat(document.getElementById("angka2").value) || 0;
    
    var hasil = angka1 + angka2;
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function kurang() {
    var angka1 = parseFloat(document.getElementById("angka1").value) || 0;
    var angka2 = parseFloat(document.getElementById("angka2").value) || 0;
    
    var hasil = angka1 - angka2;
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function kali() {
    var angka1 = parseFloat(document.getElementById("angka1").value) || 0;
    var angka2 = parseFloat(document.getElementById("angka2").value) || 0;
    
    var hasil = angka1 * angka2;
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function bagi() {
    var angka1 = parseFloat(document.getElementById("angka1").value) || 0;
    var angka2 = parseFloat(document.getElementById("angka2").value) || 0;
    
    if (angka2 === 0) {
        document.getElementById("hasil").innerHTML = "yk u cant do 0 lol";
        return;
    }
    
    var hasil = angka1 / angka2;
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function reset() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("hasil").innerHTML = "Hasil: ";
}