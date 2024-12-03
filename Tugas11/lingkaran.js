function lingkaran(a,b) {
    let phi = 3.14;
    let r = null
    let jari_jari = document.getElementById("jari").value;
    let luas = phi * jari_jari ** 2;
    let keliling = 2 * phi * jari_jari;
    let hasil = `Luas : ${luas} Keliling : ${keliling}`;
    document.getElementById("hasil").innerHTML = hasil;
    
    
}
    
