class Balok {
    

    constructor(p,l,t){
        this.panjang = p
        this.lebar = l
        this.tinggi = t
    }

    hitungLuas(){
        return 2 * ((this.panjang * this.lebar) + (this.panjang * this.tinggi) + (this.lebar * this.tinggi))
    }

    hitungKeliling(){
        return 4 * (this.panjang + this.lebar + this.tinggi)
    }

    hitungVolume(){
        return this.panjang * this.lebar *this.tinggi
    }
}