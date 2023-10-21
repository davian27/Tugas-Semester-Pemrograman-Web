feather.replace();

document.getElementById("masuk").addEventListener("click", function() {
    var waktuSekarang = new Date();
    var jam = waktuSekarang.getHours();
    var menit = waktuSekarang.getMinutes();
    var detik = waktuSekarang.getSeconds();


    var formatwaktu = (jam < 10 ? "0" : "") + jam + ":" +
                        (menit < 10 ? "0" : "") + menit +
                        ":" + (detik < 10? "0" : "") + detik;

    document.getElementById("jammasuk").value = formatwaktu;
});