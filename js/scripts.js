var modalWhriteUs = document.querySelector('#modal-write-us');
var linkWriteUs = document.querySelector('#btn-write-us');
var closeWriteUs = modalWhriteUs.querySelector('.modal-content-close');
var formWriteUs = modalWhriteUs.querySelector('form');
var nameWriteUs = modalWhriteUs.querySelector('#name-field');

var modalMap = document.querySelector('#modal-map');
var linkMap = document.querySelector('#btn-map');
var closeMap = modalMap.querySelector('.modal-content-close');

var modalOverlay = document.querySelector('.modal-overlay');

var servicesTabs = document.querySelectorAll('.services-list a');
var promoTabs = document.querySelectorAll('.promo-controls li');

var searchForm = document.querySelector('.search-form');
var searchField = searchForm.querySelector('[type=search]');
var searchBtn = searchForm.querySelector('[type=submit]');

searchField.addEventListener('change', function() {
  if (searchField.value) {
    searchBtn.classList.add('btn-show');
    searchField.classList.add('bottom-line');
  } else {
    searchBtn.classList.remove('btn-show');
    searchField.classList.remove('bottom-line');
  }
});

var html = document.documentElement;

html.className = html.className.replace("no-js","js");

linkWriteUs.addEventListener('click', function(e) {
  e.preventDefault();
  modalOpen(modalWhriteUs);
  nameWriteUs.focus();
});

closeWriteUs.addEventListener('click', function(e) {
  e.preventDefault();
  modalClose();
});

linkMap.addEventListener('click', function(e) {
  e.preventDefault();
  modalOpen(modalMap);
});

closeMap.addEventListener('click', function(e) {
  e.preventDefault();
  modalClose();
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    modalClose();
  }
});

modalOverlay.addEventListener('click', function(e) {
  e.preventDefault();
  modalClose();
});

function modalOpen(modal) {
  modal.classList.add('modal-show');
  modalOverlay.classList.add('modal-show');
}

function modalClose() {
  if (modalOverlay.classList.contains('modal-show')) {
    if (modalWhriteUs.classList.contains('modal-show')) {
      modalWhriteUs.classList.remove('modal-show');
    }
    if (modalMap.classList.contains('modal-show')) {
      modalMap.classList.remove('modal-show');
    }
    modalOverlay.classList.remove('modal-show');
  }
}

servicesTabs[0].addEventListener('click', function (e) {
    e.preventDefault();
    toggleServicesTabs(1);
  })

servicesTabs[1].addEventListener('click', function (e) {
    e.preventDefault();
    toggleServicesTabs(2);
  })

servicesTabs[2].addEventListener('click', function (e) {
    e.preventDefault();
    toggleServicesTabs(3);
  })

function toggleServicesTabs(n) {

  for (var i = 1; i < servicesTabs.length + 1; i++) {
    if (i != n) {
      document.querySelector('#service-tab-'+i).classList.remove('services-active');
      document.querySelector('#service-tab-content-'+i).classList.remove('service-current');
    }
  }

    document.querySelector('#service-tab-'+n).classList.add('services-active');
    document.querySelector('#service-tab-content-'+n).classList.add('service-current');

}

promoTabs[0].addEventListener('click', function (e) {
    e.preventDefault();
    togglePromoTabs(1);
  })

promoTabs[1].addEventListener('click', function (e) {
    e.preventDefault();
    togglePromoTabs(2);
  })

promoTabs[2].addEventListener('click', function (e) {
    e.preventDefault();
    togglePromoTabs(3);
  })

function togglePromoTabs(n) {

  for (var i = 1; i < promoTabs.length + 1; i++) {
    if (i != n) {
      document.querySelector('#promo-tab-'+i).classList.remove('promo-active');
      document.querySelector('.promo-list').classList.remove('promo-tab-content-'+i);
    }
  }

    document.querySelector('#promo-tab-'+n).classList.add('promo-active');
    document.querySelector('.promo-list').classList.add('promo-tab-content-'+n);

}
