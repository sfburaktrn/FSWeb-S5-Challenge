const Header = (baslik, tarih, yazi) => {
  let Tdiv = document.createElement("div");
  Tdiv.classList.add("header");

  let Tdate = document.createElement("span");
  Tdate.classList.add("date");
  Tdate.textContent = tarih;
  Tdiv.appendChild(Tdate);

  let Th1 = document.createElement("h1");
  Th1.textContent = baslik;
  Tdiv.appendChild(Th1);

  let Tspan2 = document.createElement("span");
  Tspan2.classList.add("temp");
  Tspan2.textContent = yazi;
  Tdiv.appendChild(Tspan2);

  return Tdiv;
};
// GÖREV 1
// ---------------------
// Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
// Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
//
//  <div class="header">
//    <span class="date">{ tarih }</span>
//    <h1>{ baslik }</h1>
//    <span class="temp">{ yazi }</span>
//  </div>
//

const headerEkleyici = (secici) => {
  document
    .querySelector(secici)
    .appendChild(
      Header("Nft Ekosistemi Uçtu", "04.02.2022", "Nft topluluklari büyüyor")
    );
};

export { Header, headerEkleyici };

// GÖREV 2
// ---------------------
// Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
// Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
// Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
//
// İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
// fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
