class Hewan {
    warna
    keahlian
    constructor(nama) {
        this.nama = nama
    }

    set newColor(color){
        this.warna = color
    }

    set newSkill(skill){
        this.keahlian = skill
    }

    get Detail() {
        return `hi saya ${this.nama}, saya berwarna ${this.warna}, dan keahlian saya ${this.keahlian}`
    }
}


const kucing = new Hewan("jojo")
kucing.newColor = "red";
kucing.newSkill = "Menggonggong"
console.log(kucing.Detail)