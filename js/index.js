const center = [58.00790199295418, 56.189077148519694];

const buildings = [
  {
    coords: [58.008414338540305, 56.187979282268365],
    balloonContent: {
      title: 'Корпус №1',
      items: [
        'столовая «Университетская» (1 этаж) <span>9:00 - 16:00</span>',
        'бар в столовой «Университетской» <span>10:00 - 18:00</span>',
        'столовая «Профессорская» (1 этаж) <span>11:00 - 16:00</span>',
        'буфет (1 этаж, рядом с переходом в корпус 8) <span>9:00 - 17:30</span>',
        'буфет (2 этаж, переход между корпусами 1 и 2) <span>9:00 - 17:00</span>'
      ],
      photos: ['./img/photo/1-1.jpg', './img/photo/1-1.2.jpg', './img/photo/1-1.3.jpg']
    },
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/1.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00694880896671, 56.18843913558199],
    balloonContent: {
      title: 'Корпус №2',
      items: [
        'буфет «Универ-буфет» (1 этаж) <span>8:00 - 20:00</span>',
        'буфет (2 этаж) <span>9:00 - 17:00</span>',
        'буфет (3 этаж) <span>11:00 - 16:00</span>',
      ],
      photos: ['./img/photo/2-1.jpg', './img/photo/2-2.jpg', './img/photo/2-3.jpg']
    },
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/2.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00714367647466, 56.18901798280322],
    balloonContent: {
      title: 'Корпус №3',
      items: [
        'буфет “РИНО” (3 этаж) <span>10:00 - 18:00</span>',
      ],
      photos: ['./img/photo/3.jpg']
    },
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/3.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00643506655118, 56.18837652513116],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/4.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00861083408945, 56.19063922222889],
    balloonContent: {
      title: 'Корпус №5',
      items: [
        'столовая (1 этаж, левое крыло) <span>9:00 - 17:00</span>',
        'буфет (1 этаж, правое крыло) <span> 8:00 - 20:00</span>',
        'кофейня <span>10:00 - 18:00</span>',
      ]
    },
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/5.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00760618094372, 56.18441548704642],
    balloonContent: {
      title: 'Корпус №6',
      items: [
        'столовая (1 этаж) <span>10:30 - 16:00</span>',
        'буфет (1 этаж, правое крыло) <span>8:30 - 19:00</span>',
      ],
      photos: ['./img/photo/6-1.jpg', './img/photo/6-1.1.jpg']
    },
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/6.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00803950744163, 56.18407712698365],
    balloonContent: {
      title: 'Корпус №7',
      items: [
        'буфет “Киты-Еды” <span>9:00 - 18:00</span>',
      ]
    },
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/7.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00793865109316, 56.186167874031796],
    balloonContent: {
      title: 'Корпус №8',
      items: [
        'столовая (1 этаж) <span>9:00 - 17:00</span>',
        'буфет-бар (1 этаж) <span>10:00 - 18:00</span>',
        'буфет (2 этаж, переход из корпуса 8 в 6 и 7) <span>8:30 - 17:30</span>',
      ],
      photos: ['./img/photo/8-1.jpg', './img/photo/8-2.jpg']
    },
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/8.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00751620174127, 56.19052352513118],
    balloonContent: {
      title: 'Корпус №9',
      items: [
        'буфет (2 этаж) <span>8:30 - 20:00</span>',
        'столовая «На Заимке» <span>10:00 - 16:30</span>',
        'столовая (2 этаж) <span>10:00 - 18:00</span>',
      ],
      photos: ['./img/photo/8-2.jpg']
    },
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/9.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.008251448958916, 56.18943271163935],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/10.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00700351009722, 56.19049356350697],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/11.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00909922997098, 56.18877694973745],
    balloonContent: {
      title: 'Корпус №12',
      items: [
        'кофейня “Monkey Grinder” (2 этаж) <span>9:00 - 17:00</span>',
        'бар-буфет (2 этаж) <span>8:00 - 20:00</span>',
      ],
      photos: ['./img/photo/12-2.jpg', './img/photo/12-2.2.jpg']
    },
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/12.png',
      iconImageSize: [27, 27],
    }
  },
  {
    coords: [58.00719714155442, 56.19148061642449],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/buildings/19.png',
      iconImageSize: [27, 27],
    }
  },
];

const marks = [
  {
    coords: [58.00852184853696, 56.18396470101921],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/parking.png',
      iconImageSize: [60, 25],
      iconImageOffset: [-25, -14]
    }
  },
  {
    coords: [58.008595881065766, 56.18686148675529],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/dorm2.png',
      iconImageSize: [60, 25],
      iconImageOffset: [-25, -13]
    }
  },
  {
    coords: [58.00749543961996, 56.1897103559865],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/dorm8.png',
      iconImageSize: [60, 25],
      iconImageOffset: [-25, -10]
    }
  },
  {
    coords: [58.00751425477945, 56.18630120516961],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/fountain.png',
      iconImageSize: [70, 25],
      iconImageOffset: [-35, 0]
    }
  },
  {
    coords: [58.007878731428534, 56.18822166682428],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/eni.png',
      iconImageSize: [50, 25],
      iconImageOffset: [-25, -10]
    }
  },
  {
    coords: [58.00662582733898, 56.18594715357967],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/garden.png',
      iconImageSize: [150, 25],
      iconImageOffset: [-75, 12]
    }
  },
  {
    coords: [58.00821931081124, 56.18327597264616],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_right_lg.png',
      iconImageSize: [25, 25],
      iconImageOffset: [-20, -12]
    }
  },
  {
    coords: [58.00706323464964, 56.18375877026884],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_right_lg.png',
      iconImageSize: [25, 25],
      iconImageOffset: [-20, -10]
    }
  },
  {
    coords: [58.00885049431688, 56.191761642738484],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_left_lg.png',
      iconImageSize: [25, 25],
      iconImageOffset: [-0, -12]
    }
  },
  {
    coords: [58.00818531319584, 56.18468048584545],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_left_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [0, -12]
    }
  },
  {
    coords: [58.007725875041295, 56.18500739467986],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_left_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [0, 0]
    }
  },
  {
    coords: [58.00790811274998, 56.18611246479401],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_top_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [0, -5]
    }
  },
  {
    coords: [58.007326608848075, 56.18633777035127],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_bottom_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-7, 0]
    }
  },
  {
    coords: [58.00866491031148, 56.18775397671116],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_right_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-13, 0]
    }
  },
  {
    coords: [58.00767400256563, 56.1879256380881],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_right_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-10, 0]
    }
  },
  {
    coords: [58.00707033262485, 56.18820458782562],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_right_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-13, -7]
    }
  },
  {
    coords: [58.00660903078138, 56.18819385898957],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_bottom_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-7, -12]
    }
  },
  {
    coords: [58.007257284005746, 56.1888631528529],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_right_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-10, -12]
    }
  },
  {
    coords: [58.00713199339424, 56.188959712377425],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_right_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-13, 0]
    }
  },
  {
    coords: [58.00716616360469, 56.18961417137706],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_right_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-7, 0]
    }
  },
  {
    coords: [58.00776413698674, 56.19054758011426],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_bottom_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-7, -10]
    }
  },
  {
    coords: [58.00820264442691, 56.18933522163953],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_top_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-7, -3]
    }
  },
  {
    coords: [58.00909672730509, 56.18888947018753],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_top_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [-7, -3]
    }
  },
  {
    coords: [58.00873226310616, 56.19091722020278],
    mark: {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemarks/arrow_left_sm.png',
      iconImageSize: [13, 13],
      iconImageOffset: [0, -7]
    }
  },
];

document.querySelector('.popup__close').addEventListener('click', function (e) {
  e.target.parentElement.classList.remove('active')
});

function setPopupContent(index) {
  const popup = document.querySelector('.popup__content');
  const bldng = buildings[index];
  popup.innerHTML = `
    <div class="balloon">
      <div class="balloon__header">${bldng.balloonContent.title}</div>
      <ul class="balloon__list">
        ${bldng.balloonContent.items.map(item => `<li class="balloon__item">${item}</li>`).join('')}
      </ul>
      ${bldng.balloonContent.photos ? `
        <div class="balloon__slider swiper">
          <div class="swiper-wrapper">
            ${bldng.balloonContent.photos.map(img => `
              <div class="swiper-slide">
                <img class="balloon__img" src=${img}>
              </div>
            `).join('')}
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </div >
      ` : ''}
    </div>
  `;
  new Swiper(".balloon__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  popup.parentElement.classList.add('active');
}

function init() {
  const map = new ymaps.Map('map', {
    center: center,
    zoom: 17
  });

  map.options.set('yandexMapDisablePoiInteractivity', true);

  buildings.forEach((bldng, index) => {
    const mark = new ymaps.GeoObjectCollection();
    mark.add(new ymaps.Placemark(
      bldng.coords, {},
      bldng.mark
    ));

    map.geoObjects.add(mark);

    mark.events.add('click', function (e) {
      setPopupContent(index)
    })
  });


  const mapMarks = new ymaps.GeoObjectCollection();

  marks.forEach(mrk => mapMarks.add(new ymaps.Placemark(mrk.coords, {}, mrk.mark)));
  map.geoObjects.add(mapMarks);

  map.events.add('boundschange', function (e) {
    if (e.get('newZoom') < 17) {
      mapMarks.options.set('visible', false);
    } else {
      mapMarks.options.set('visible', true);
    }
  });

  map.controls.remove('geolocationControl');
  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
  map.controls.remove('fullscreenControl');
  map.controls.remove('rulerControl');
  map.behaviors.disable(['scrollZoom']);
}

ymaps.ready(init);