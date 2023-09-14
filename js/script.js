

function tampilkanFormLuas() { 
    document.getElementById("luasForm").style.display = "inline";
    document.getElementById("kelilingForm").style.display = "none";
}

function tampilkanFormKeliling() {
    document.getElementById("luasForm").style.display = "none";
    document.getElementById("kelilingForm").style.display = "block";
}

function hitungLuas() {
    var sisi = parseFloat(document.getElementById("sisi").value);
    var hasil = sisi * sisi;
    document.getElementById("hasilLuas").innerHTML = hasil;
}

function hitungKeliling() {
    var sisi = parseFloat(document.getElementById("sisiKeliling").value);
    var hasil = 4 * sisi;
    document.getElementById("hasilKeliling").innerHTML = hasil;
}

function reset() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasilLuas").innerHTML = "";

    document.getElementById("sisiKeliling").value = "";
    document.getElementById("hasilKeliling").innerHTML = "";
}