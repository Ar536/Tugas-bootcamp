function convert() {
    let v1 = document.getElementById('n1').value;
    let s1 = document.getElementById('nilaiTukar').value;

    if (s1 == 'fromUSD') {
        hasil = v1 * 15945;
    } else if (s1 == 'fromSGD'){
        hasil = v1 * 11833;
    } else if (s1 == 'fromRGT'){
        hasil = v1 * 3568;
    }  else if (s1 == 'fromYEN'){
        hasil = v1 * 106 ;
    }else if (s1 == 'fromEURO'){
        hasil = v1 * 16723;
    }else if (s1 == 'fromRIYAL'){
        hasil = v1 * 4242;
    }else {
        hasil = 0;
    }
    

   
    document.getElementById('n2').value = hasil;
}

function convert2() {
    let v2 = document.getElementById('n2').value;
    let s2 = document.getElementById('nilaiTukar').value;

    if (s2 == 'fromUSD') {
        hasil = v2 / 15945;
    } else if (s2 == 'fromSGD'){
        hasil = v2 / 11833;
    } else if (s2 == 'fromRGT'){
        hasil = v2 / 3568;
    }  else if (s2 == 'fromYEN'){
        hasil = v2 / 106 ;
    }else if (s2 == 'fromEURO'){
        hasil = v2 / 16723;
    }else if (s2 == 'fromRIYAL'){
        hasil = v2 / 4242;
    }else {
        hasil = 0;
    }
    

   
    document.getElementById('n1').value = hasil;
}



   