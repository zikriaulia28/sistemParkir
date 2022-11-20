// parkir
// ada 2 tipe mobile atau motor
// tarif mobil 2 jam pertama 10000, setalahnya 4000/jam
// tarif motor 2 jam pertama 4000, setalahnya 1000/jam


let ulang = true;
while (ulang) {
  let lamaParkir = prompt("Masukkan lama parkir :")
  let typeKendaraan = prompt("Type kendaraan :")
  if (typeKendaraan === "mobil") {
    totalHarga = 10000
    if (lamaParkir > 2) {
      totalHarga = totalHarga + ((lamaParkir - 2) * 4000)
    }
  } else if (typeKendaraan === "motor") {
    totalHarga = 4000
    if (lamaParkir > 2) {
      totalHarga = totalHarga + ((lamaParkir - 2) * 1000)
    }
  } else {
    totalHarga = "bukan kendaraan"
  }
  alert("Lama Parkir : " + lamaParkir + " jam\n" + "Type kendaraan : " + typeKendaraan + "\n" + "Total : Rp. " + totalHarga)
  ulang = confirm("Apakah anda ingin mengulang ?")
}
