var closeBtn = document.querySelectorAll('.modal-content-close');
var modalForm = document.querySelectorAll('.modal-content');
var modalOverlay = document.querySelector('.modal-overlay');
var writeUsLink = document.querySelector('#btn-write-us');
var mapLink = document.querySelector('#btn-map');

for (var i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener('click', function (e) {
    e.preventDefault();
    formClose(modalForm);
    modalOverlay.classList.add("modal-closed");
  })
}

function formClose(forms) {
  for (var i = 0; i < forms.length; i++) {
    forms[i].classList.add("modal-closed");
  }
}

writeUsLink.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#modal-write-us').classList.remove("modal-closed");
  modalOverlay.classList.remove("modal-closed");
});

mapLink.addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('#modal-map').classList.remove("modal-closed");
  modalOverlay.classList.remove("modal-closed");
});

var tabs = document.querySelectorAll('.services-list a');

function toggleTabs(n) {

  for (var i = 1; i < tabs.length+1; i++) {
    if (i != n) {
      document.querySelector('#tab-'+i).classList.remove('services-active');
      document.querySelector('#tab-content-'+i).classList.remove('service-current');
    }
  }

    document.querySelector('#tab-'+n).classList.add('services-active');
    document.querySelector('#tab-content-'+n).classList.add('service-current');

}

tabs[0].addEventListener('click', function (e) {
    e.preventDefault();
    toggleTabs(1);
  })

tabs[1].addEventListener('click', function (e) {
    e.preventDefault();
    toggleTabs(2);
  })

tabs[2].addEventListener('click', function (e) {
    e.preventDefault();
    toggleTabs(3);
  })
