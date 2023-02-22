
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};




// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


function set_new_trigger_ivent(id = 1) {
  let trigger = document.querySelectorAll(`.swiper__cli-info${id}`)
  // console.log(trigger);
  let modal = document.querySelector(`.modal-wrapper${id}`)
  const body = document.body
  trigger.forEach(function (item) {
    item.addEventListener('click', function () {
      console.log('click');
      console.log(modal);
      modal.style.display = 'flex'
      body.classList.add('locked')
    });
  })
  // найти кнопку с классом modal__btn внутри модального окна
  let close = modal.querySelector('.modal__btn')
  close.addEventListener('click', e => {
    e.preventDefault()
    modal.style.display = 'none'
    body.classList.remove('locked')
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none'
      body.classList.remove('locked')
    }
  })
};



set_new_trigger_ivent(1)
set_new_trigger_ivent(2)
set_new_trigger_ivent(3)
set_new_trigger_ivent(4)
set_new_trigger_ivent(5)


const swiper = new Swiper('.clients__swiper', {

  // Navigation arrows
  navigation: {
    nextEl: '.clients__btns2-btn2',
    prevEl: '.clients__btns-btn1',
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 14,
  grabCursor: true,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    // when window width is >= 480px
    768: {

      slidesPerView: 4,

    },

    2560: {
      slidesPerView: 4,
    },
  }
});

const swiper2 = new Swiper('.swiper__tab', {


  // Navigation arrows
  navigation: {
    nextEl: '.swiper__btn1',
    prevEl: '.swiper__btn2',
  },

  slidesPerView: 2,


  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      centeredSlides: true,

    },

    768: {
      slidesPerView: 1.5,
      centeredSlides: true,

    },

    992: {
      slidesPerView: 2,
      centeredSlides: false,

    },
  }
});


let data_tarif = [
  {
    sell: [0, 5, 5, 10, 10, 15],
    setup: [1400, 1900, 2300, 2600, 2900, 'Individually'],
    sub: [400, 750, 1100, 1500, 1900, 'Individually']
  },
  {
    sell: [5, 5, 5, 10, 10, 15],
    setup: [3990, 5415, 6550, 7000, 7800, 'Individually'],
    sub: [1140, 2135, 3130, 4050, 5100, 'Individually']
  },
  {
    sell: [10, 10, 10, 15, 15, 20],
    setup: [7550, 10250, 12400, 13250, 14790, 'Individually'],
    sub: [2150, 4050, 5900, 7650, 9650, 'Individually']
  },
]

function set_data_tarif(p = 0) {
  // убрать класс active у всех tabs__header-item
  let tabs_header_item = document.querySelectorAll('.tabs__header-item')
  tabs_header_item.forEach(function (item) {
    item.classList.remove('active')
  })
  // текущему элементу добавить класс active
  tabs_header_item[p].classList.add('active')



  for (let i = 1; i < data_tarif[p].sell.length + 1; i++) {
    let sell = document.getElementById(`sell_${i}`)
    let setup = document.getElementById(`setup_${i}`)
    let sub = document.getElementById(`sub_${i}`)
    console.log(sell);
    console.log(setup);
    console.log(sub);


    sell.style.display = 'flex'

    if (data_tarif[p].sell[i - 1] == 0) sell.style.display = 'none'
    sell.innerHTML = '-' + data_tarif[p].sell[i - 1] + '%'
    setup.innerHTML = '$' + data_tarif[p].setup[i - 1]
    sub.innerHTML = '$' + data_tarif[p].sub[i - 1]

    if (data_tarif[p].setup[i - 1] === 'Individually') setup.innerHTML = data_tarif[p].setup[i - 1]
    if (data_tarif[p].sub[i - 1] === 'Individually') sub.innerHTML = data_tarif[p].sub[i - 1]
    // document.getElementById(`setup_${i}`).innerHTML = data_tarif[p].sell[0]
    // document.getElementById(`sub_${i}`).innerHTML = data_tarif[p].sell[0]
  }
}

set_data_tarif(0)


function setAnim() {


  gsap.to('.header__content-item', {

    scrollTrigger: {
      trigger: '.header__content',
      start: '300px top',
      scrub: true,
      duration: 3,
    },
    ease: "linear",

    yPercent: -80,
    duration: 1,
    scale: 0.5,
    opacity: 0,

  })

  gsap.to('.header__content-img', {

    scrollTrigger: {
      trigger: '.header__content',
      start: '300px top',
      scrub: true,
      duration: 3,
    },

    yPercent: -80,
    duration: 1,
    scale: 0.5,
    opacity: 0,

  })

  gsap.to('.section__main', {

    scrollTrigger: {
      trigger: '.main',
      start: 'top top',
      scrub: true,
      duration: 5,
    },

    yPercent: -80,
    duration: 5,
    scale: 0.5,
    opacity: 0,

  })


  gsap.from('.clients', {

    scrollTrigger: {
      trigger: '.header__content',
      start: 'center top',
      scrub: true,
      duration: 3,
    },

    yPercent: -80,
    duration: 1,
    scale: 0.5,
    opacity: 0,

  })




  gsap.from('.faq', {

    scrollTrigger: {
      trigger: '.section__clients',
      start: 'top top',
      scrub: true,
      duration: 3,
    },

    yPercent: 80,
    duration: 1,
    scale: 0.5,
    opacity: 0,

  })

  gsap.from('.section__step', {

    scrollTrigger: {
      trigger: '.section__faq',
      start: 'top top',
      scrub: true,
      duration: 3,
    },

    yPercent: 20,
    duration: 1,
    scale: 0.5,


  })

  gsap.from('.feat', {

    scrollTrigger: {
      trigger: '.section__step',
      start: 'top top',
      scrub: true,
      duration: 3,
    },

    yPercent: 100,
    duration: 1,
    scale: 0.5,
    opacity: 0,

  })

  gsap.from('.tabs__content', {

    scrollTrigger: {
      trigger: '.section__feat',
      start: 'top bottom',
      scrub: true,
      duration: 3,
    },

    yPercent: -80,
    duration: 1,
    scale: 0.5,
    opacity: 0,

  })


  gsap.from('.section__footer', {

    scrollTrigger: {
      trigger: '.section__feat',
      start: 'top bottom',
      scrub: true,
      duration: 3,
    },

    yPercent: 80,
    duration: 1,
    scale: 0.5,
    opacity: 0,

  })
}

const create_new_item_monday = () => {
  let dta = {
    company: 'AMAL COMPANY',
    lang: 'ru',
    phone: '+79628855545',
    position: 'B2B Sales',
    email: 'amal.agishev@mail.ru'
  }
  var raw = {
    "query": `mutation { create_item (board_id: 3995711691, group_id: \"topics\", item_name: \"New site lead\", column_values: \"{\\\"email5\\\": \\\"${dta.email}\\\", \\\"name2\\\":\\\"${dta.company}\\\", \\\"_____\\\":\\\"${dta.position}\\\", \\\"phone\\\": \\\"${dta.phone}\\\", \\\"_________________\\\":\\\"${dta.lang}\\\" } \") { id } }`
  }
  //let raw = { "query": "mutation { create_item (board_id: 3995711691, group_id: \"topics\", item_name: \"New site item\", column_values: \"{\\\"email5\\\": \\\"amal.agishev@mail.ru\\\", \\\"name2\\\":\\\"Amal Company\\\", \\\"_____\\\":\\\"B2B Sales\\\", \\\"phone\\\": \\\"+79628855545\\\", \\\"_________________\\\":\\\"en\\\" } \") { id } }" }
  raw = JSON.stringify(raw)
  var myHeaders = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjE0MTYzMjUzMywidWlkIjoyNjIxNTYxMCwiaWFkIjoiMjAyMi0wMS0xOVQxNTozNzoxMy4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTA1MjgzODAsInJnbiI6InVzZTEifQ.hWGhBfJv0FGes7OVhvo0WQ5X97O6v5M2BojvGTDD3FQ"
  }

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.monday.com/v2", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}