//swiper
const swiper = new Swiper('.clients__swiper', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__cli-btn2',
    prevEl: '.clients__btns-btn1',
  },

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
    setup: [1400, 1900, 2300, 2600, 2900, 'individually'],
    sub: [400, 750, 1100, 1500, 1900, 'individually']
  },
  {
    sell: [5, 5, 5, 10, 10, 15],
    setup: [3990, 5415, 6550, 7000, 7800, 'individually'],
    sub: [1140, 2135, 3130, 4050, 5100, 'individually']
  },
  {
    sell: [10, 10, 10, 15, 15, 20],
    setup: [7550, 10250, 12400, 13250, 14790, 'individually'],
    sub: [2150, 4050, 5900, 7650, 9650, 'individually']
  },
]

function set_data_tarif( p = 0) {
  // убрать класс active у всех tabs__header-item
  let tabs_header_item = document.querySelectorAll('.tabs__header-item')
  tabs_header_item.forEach(function (item) {
    item.classList.remove('active')
  })
  // текущему элементу добавить класс active
  tabs_header_item[p].classList.add('active')



  for (let i = 1; i < data_tarif[p].sell.length+1; i++) {
    let sell = document.getElementById(`sell_${i}`)

    let setup = document.getElementById(`setup_${i}`)
    let sub = document.getElementById(`sub_${i}`)
    
    sell.style.display = 'flex'

    if (data_tarif[p].sell[i - 1] == 0) sell.style.display = 'none'
    sell.innerHTML = '-' + data_tarif[p].sell[i - 1] + '%'
    setup.innerHTML = '$' + data_tarif[p].setup[i - 1]
    sub.innerHTML = '$' + data_tarif[p].sub[i - 1]
    
    if (data_tarif[p].setup[i - 1] === 'individually') setup.innerHTML = data_tarif[p].setup[i - 1]
    if (data_tarif[p].sub[i - 1] === 'individually') sub.innerHTML = data_tarif[p].sub[i - 1]
    // document.getElementById(`setup_${i}`).innerHTML = data_tarif[p].sell[0]
    // document.getElementById(`sub_${i}`).innerHTML = data_tarif[p].sell[0]
  }
}

set_data_tarif(0)


  //modal  первый

  let trigger = document.querySelectorAll('.swiper__cli-info1')
  let modal = document.querySelector('.modal-wrapper')
  let close = document.querySelector('.modal__btn')

  const body = document.body


  trigger.forEach(function (item) {

    item.addEventListener('click', function () {

      console.log(111);

      modal.style.display = 'flex'
      body.classList.add('locked')

    });

  });

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


  //modal  второй

  let trigger2 = document.querySelector('.swiper__cli-info2')
  let modal2 = document.querySelector('.modal-wrapper2')
  let close2 = document.querySelector('.modal__btn2')

  const body2 = document.body

  trigger2.addEventListener('click', function () {



    modal2.style.display = 'flex'
    body2.classList.add('locked')

  });


  close2.addEventListener('click', e => {
    e.preventDefault()
    modal2.style.display = 'none'
    body2.classList.remove('locked')
  });

  modal2.addEventListener('click', e => {
    if (e.target === modal2) {
      modal2.style.display = 'none'
      body2.classList.remove('locked')
    }
  })


  let trigger3 = document.querySelector('.swiper__cli-info3')
  let modal3 = document.querySelector('.modal-wrapper3')
  let close3 = document.querySelector('.modal__btn3')

  const body3 = document.body

  trigger3.addEventListener('click', function () {


    modal3.style.display = 'flex'
    body3.classList.add('locked')

  });


  close3.addEventListener('click', e => {
    e.preventDefault()
    modal3.style.display = 'none'
    body3.classList.remove('locked')
  });

  modal3.addEventListener('click', e => {
    if (e.target === modal3) {
      modal3.style.display = 'none'
      body3.classList.remove('locked')
    }
  })



  let trigger4 = document.querySelector('.swiper__cli-info4')
  let modal4 = document.querySelector('.modal-wrapper4')
  let close4 = document.querySelector('.modal__btn4')

  const body4 = document.body

  trigger4.addEventListener('click', function () {
    modal4.style.display = 'flex'
    body4.classList.add('locked')

  });


  close4.addEventListener('click', e => {
    e.preventDefault()
    modal4.style.display = 'none'
    body4.classList.remove('locked')
  });

  modal4.addEventListener('click', e => {
    console.log(e.target);
    if (e.target === modal4) {
      modal4.style.display = 'none'
      body4.classList.remove('locked')
    }
  })




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


  //tab

  // function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
  //   const header = document.querySelector(headerSelector),
  //     tab = document.querySelectorAll(tabSelector),
  //     content = document.querySelectorAll(contentSelector)
  //   function hideTabContent() {
  //     content.forEach(item => {
  //       item.style.display = 'none'
  //     });
  //     tab.forEach(item => {
  //       item.classList.remove(activeClass)
  //     });
  //   }
  //   function showTabContent(i = 0) {
  //     content[i].style.display = display
  //     tab[i].classList.add(activeClass)
  //   }
  //   hideTabContent()
  //   showTabContent()
  //   header.addEventListener('click', e => {
  //     const target = e.target
  //     if (target.classList.contains(tabSelector.replace(/\./, '')) ||
  //       target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
  //       tab.forEach((item, i) => {
  //         if (target == item || target.parentNode == item) {
  //           hideTabContent()
  //           showTabContent(i)
  //         }
  //       });
  //     }
  //   })
  // }

  // ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
  // ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
  // ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
  // ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
  // tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active')
