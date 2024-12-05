function hitung() {
    
     const panJang = document.getElementById('panJang').value;
     const leBar = document.getElementById('leBar').value;
     const tinGgi = document.getElementById('tinGgi').value;



    const Balok1 = new Balok(panJang, leBar,tinGgi)
    // const Balok2 = new Balok(leBar)
    // const Balok3 = new Balok(tinGgi)
       


    const luaspermukaan = Balok1.hitungLuas()
    const keliling = Balok1.hitungKeliling()
    const Volume = Balok1.hitungVolume()
    

    // tampilkan
    document.getElementById('hasil').textContent = `Luas ${luaspermukaan} cm2, keliling ${keliling} cm, Volume ${Volume} cm3`
}