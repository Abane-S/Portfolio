document.addEventListener("DOMContentLoaded", () => {

  /* Cacher les skills */
  const skillsContent = document.getElementsByClassName('skills_content'),
        skillsHeader = document.querySelectorAll('.title');

  function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = 'skills_content skills_close';
    }
    if (itemClass == 'skills_content skills_close') {
      this.parentNode.className = 'skills_content skills_open';
    }
  }
  skillsHeader.forEach(el => {
    el.addEventListener('click', toggleSkills);
  });

  /* Qualification */
  const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach(tabContent => {
        tabContent.classList.remove('qualification_active');
      });
      target.classList.add('qualification_active');

      tabs.forEach(tab => {
        tab.classList.remove('qualification_active');
      });
      tab.classList.add('qualification_active');
    });
  });

  /* Services modal */
  const modalViews = document.querySelectorAll('.services_modal'),
        modalBtns = document.querySelectorAll('.services_button'),
        modalCloses = document.querySelectorAll('.services_modal-close');
  console.log(typeof modalViews);
  console.log(modalViews);

  let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
  };

  modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener('click', () => {
      modal(index);
    });
  });

  modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
      modalViews.forEach(modalView => {
        modalView.classList.remove('active-modal');
      });
    });
  });

  /* Swiper Project */
  let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    mousewheel: true,
    keyboard: true
  });
});