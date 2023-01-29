import axios from "axios";

const Card = (makale) => {
  let cb = document.createElement("div");
  cb.classList.add("card");

  let chl = document.createElement("div");
  chl.classList.add("headline");
  chl.textContent = makale.anabaslik;
  cb.appendChild(chl);

  let cau = document.createElement("div");
  cau.classList.add("author");
  cb.appendChild(cau);

  let cimg = document.createElement("div");
  cimg.classList.add("img-container");
  cau.appendChild(cimg);

  let cardimgorj = document.createElement("img");
  cardimgorj.src = makale.yazarFoto;
  cimg.appendChild(cardimgorj);

  let csp = document.createElement("span");
  csp.textContent = makale.yazarAdi + " tarafından";
  cau.appendChild(csp);

  cb.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return cb;
};

// GÖREV 5
// ---------------------
// Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
// Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
// Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
// Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
// Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
//
// <div class="card">
//   <div class="headline">{ anabaslik }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ yazarFoto }>
//     </div>
//     <span>{ yazarAdı } tarafından</span>
//   </div>
// </div>
//

const cardEkleyici = (secici) => {
  let crd = document.querySelector(secici);
  axios({
    method: "get",
    url: "http://localhost:5001/api/makaleler",
  }).then(function (response) {
    //console.log(response);
    let mdt = response.data.makaleler;
    for (let key in mdt) {
      for (let i = 0; i < mdt[key].length; i++) {
        crd.appendChild(Card(mdt[key][i]));
      }
    }
  });
};

export { Card, cardEkleyici };

// GÖREV 6
// ---------------------
// Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
// Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
// Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
// Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
// Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//
