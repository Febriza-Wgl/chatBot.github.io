function talk(){
    var know = {
        "Siapa namamu?" : "Namaku adalah Sir G",
        "Jam berapa sekarang?" : "Cari sendiri",
        "Siapa majikanmu?" : "Aku tidak punya majikan",
        "Punya instagram?" : "Coba cari @febriza.ae , itu aku",
        "Ily" : "Terima kasih, besok coba lagi yah >.<",
        "Berapa umurmu?" : "Aku tidak punya umur a.k.a immortal:()",
        "Punya berapa saudara?" : "Kebetulan aku baru dibuat kemaren, jadi tidak punya saudara",
        "Halo" : "Halo, salam kenal",
        "Satu kata dong" : "KONTOL"
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML = "Sorry I didn't understand <br>";
    }
}