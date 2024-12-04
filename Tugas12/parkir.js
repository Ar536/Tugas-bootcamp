function parkir() {
    let jammasuk = Number(document.getElementById('masuk').value)
    let jamkeluar = Number(document.getElementById('keluar').value)


        
    let selisihWaktu = jamkeluar - jammasuk;
    let harga_1jam = 1000;
    let harga_2jam = 3000;
    let duaJamPertama = 2;
    let jamHarga = (selisihWaktu * 1000)+ 1000;
    let tambahHarga = harga_1jam + harga_2jam;

    if (selisihWaktu <= 2) {
        let hasil = document.getElementById("harga").innerHTML = ":BIAYA PARKIR" + harga_2jam
    } else {
        let hasil = document.getElementById("harga").innerHTML = ":BIAYA PARKIR" + jamHarga
    }
        
    
        
    

    
}

