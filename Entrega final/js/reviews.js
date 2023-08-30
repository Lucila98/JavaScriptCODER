const reviews = [
    {
      id: 1,
      name: 'Mariano',
      band: 'Mi Amigo Invencible',
      img: 'img/amigoinvencible.jpg',
      text: '"Que genia! muchas gracias por las fotos. Lindo compartir contigo!"',
    },
    {
      id: 2,
      name: 'Santi Muk',
      band: 'solista',
      img: 'img/santimuk.jpg',
      text: '"Sos lo mas! hermosas tus fotos, gracias por todo!"',
    },
    {
      id: 3,
      name: 'Santino',
      band: 'Apólimos',
      img: 'img/apolimos.jpg',
      text: '"Zarpadas fotos sacadas por una personita muy genuina, genia"',
    },
    {
      id: 4,
      name: 'Bruno',
      band: 'solista',
      img: 'img/bruno.jpg',
      text: '"Son increibles. No puedo explicar lo hermoso que se ve, super profesional. Me volvieron loco"',
    },
  ];
  
  const img = document.getElementById('person-img');
  const singer = document.getElementById('singer');
  const band = document.getElementById('band');
  const info = document.getElementById('info');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  let currentItem = 0;

  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    singer.textContent = item.name;
    band.textContent = item.band;
    info.textContent = item.text;
  });
  
 
  function mostrar(person) {
    const item = reviews[person];
    img.src = item.img;
    singer.textContent = item.name;
    band.textContent = item.band;
    info.textContent = item.text;
  }

  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    mostrar(currentItem);
  });
  
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    mostrar(currentItem);
  });
  
  randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    mostrar(currentItem);
  });