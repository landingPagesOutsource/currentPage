$(document).ready(function () {

  // Animation

  var animData = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: '../js/hero.json'
  };
  var anim = lottie.loadAnimation(animData);
  anim.addEventListener("DOMLoaded", function () {
    anim.play();
  });


  // ScrollTo

  $(".scrollTo").on("click", function(){
    var idScroll = $(this).attr('data-scroll');
    $.scrollTo(idScroll, 1000, { offset:-105 });
    return false;
  });

  // При скролле вниз

  $(window).scroll(function(){
    var wrap = document.getElementById("top__header-wrap");
    var sticky = document.getElementById("sticky");
    var topHeader = document.getElementsByClassName("top-screen__header")[0];
    var extraSpace = topHeader.offsetHeight - sticky.offsetHeight;
    var stickyBottom = sticky.getBoundingClientRect().top + extraSpace;

    var slidePosition;

    var item1Bottom = document.getElementById("topItem-1").getBoundingClientRect().bottom;
    var item2Bottom = document.getElementById("topItem-2").getBoundingClientRect().bottom;
    var item3Bottom = document.getElementById("topItem-3").getBoundingClientRect().bottom;
    var item4Bottom = document.getElementById("topItem-4").getBoundingClientRect().bottom;
    var item5Bottom = document.getElementById("topItem-5").getBoundingClientRect().bottom;
    var item6Bottom = document.getElementById("topItem-6").getBoundingClientRect().bottom;

    function menuScroll(linkId) { 
      if ($(linkId).hasClass("active")) {
        return;
      }
      slidePosition = document.querySelector(linkId).getBoundingClientRect().left - wrap.getBoundingClientRect().left;
      $(".container-wrap").animate({scrollLeft: slidePosition}, 300);
      $(".top__header-item").removeClass("active");
      $(linkId).addClass("active");
    };

    if (stickyBottom <= item1Bottom) { 
      menuScroll("#link1");
    } else if (stickyBottom >= item1Bottom && stickyBottom <= item2Bottom) {
      menuScroll("#link2");

    } else if (stickyBottom >= item2Bottom && stickyBottom <= item3Bottom) {
      menuScroll("#link3");

    } else if (stickyBottom >= item3Bottom && stickyBottom <= item4Bottom) {
      menuScroll("#link4");

    } else if(stickyBottom >= item4Bottom && stickyBottom <= item5Bottom){
      menuScroll("#link5");

    } else if(stickyBottom >= item5Bottom && stickyBottom <= item6Bottom){
      menuScroll("#link6");
    }
  });


  // Вычисление отступа до контейнера слева, чтобы отцентровать хедер

  var offsetLeft = $("#leftDetector").offset();

  $(".container-wrap").css("padding-left", offsetLeft.left);
  $(".top__header-item:last-of-type").css("margin-right", offsetLeft.left);
  
  $(window).resize(function() {
    offsetLeft = $("#leftDetector").offset();
    $(".container-wrap").css("padding-left", offsetLeft.left);
    $(".top__header-item:last-of-type").css("margin-right", offsetLeft.left);
  });    
  
  
  // Липкий хедер
  var offsetTop = $("#stickyDetector").offset().top;

  $(window).resize(function() {
    offsetTop = $("#stickyDetector").offset().top;
  }); 
  $(window).scroll(function () {
    offsetTop = $("#stickyDetector").offset().top;
    var scroll_position = $(window).scrollTop();
    if (scroll_position > offsetTop) {
      $('#sticky').addClass('sticky');
      $("#stickyDetector").addClass("placeholder");
    } else {
      $('#sticky').removeClass('sticky');
      $("#stickyDetector").removeClass("placeholder");
    }
  });

  
   

  /*********    Year    *********/
  var now = new Date();
  year = now.getFullYear();
  $('.year').html(year);

  



  /*********  Slider-testimonials  *********/

  function getScreenSize() {
    const w = window;
    const d = document;
    const e = d.documentElement;
    const g = d.getElementsByTagName('body')[0];
  
    const width = w.innerWidth || e.clientWidth || g.clientWidth;
    const height = w.innerHeight || e.clientHeight || g.clientHeight;
  
    return {
      width,
      height
    };
  }
  
  const slides = document.querySelectorAll(
    '.js-testimonials-slider .js-slider-item',
  );
  
  const ROOT_SELECTOR = '.js-testimonials-slider';
  
  const ORDERED_SLIDES = Array.from(slides).map((slide) => {
    return slide.getAttribute('data-type');
  });
  
  const types = [...new Set(ORDERED_SLIDES)];
  
  let testimonialsConfig = {};
  
  types.forEach((type) => {
    testimonialsConfig[type] = {
      start: ORDERED_SLIDES.indexOf(type),
      total: ORDERED_SLIDES.filter((item) => item === type).length,
    };
  });
  
  const DURATION = 300;
  
  const KEYCODE_RIGHT_ARROW = 39;
  const KEYCODE_LEFT_ARROW = 37;
  
  
  class Testimonials {
    constructor() {
      this.onResizeWindow = () => {
        const updatedScreenWidth = getScreenSize().width;
        if (this.screenWidth === updatedScreenWidth) {
          return;
        }
        this.screenWidth = updatedScreenWidth;
        // timeout to avoid transition effect after resize
        setTimeout(() => {
          this.updateActiveItem(this.slider.innerElements, this.slider.currentSlide);
          this.updateHeightWrap();
        }, DURATION);
      };
      this.onKeyDown = (e) => {
        if (e.keyCode === KEYCODE_LEFT_ARROW) {
          this.slider.prev();
        }
        if (e.keyCode === KEYCODE_RIGHT_ARROW) {
          this.slider.next();
        }
      };
      this.slider = {
        currentSlide: 0,
        innerElements: [],
        destroy: () => {},
        prev: () => {},
        next: () => {},
        goTo: () => {},
      };
      const testimonialsContainer = document.querySelector('.js-testimonials');
      if (testimonialsContainer) {
        this.container = testimonialsContainer;
      }
      const currentNumberWrap = this.container.querySelector('[data-current-number]');
      const totalNumberWrap = this.container.querySelector('[data-total-number]');
      if (currentNumberWrap && totalNumberWrap) {
        this.currentNumberWrap = currentNumberWrap;
        this.totalNumberWrap = totalNumberWrap;
      }
      this.screenWidth = getScreenSize().width;
    }
    isMobile() {
      return window.matchMedia('(max-width: 767px)').matches;
    }
    getHeightActiveItem() {
      const active = this.container.querySelector('.js-slider-item[data-active="true"]');
      if (active) {
        return active.offsetHeight;
      }
      return null;
    }
    updateHeightWrap() {
      const testimonialsContainer = document.querySelector('.js-testimonials');
      const height = this.getHeightActiveItem();
      const slidesWrapper = this.container.querySelector(ROOT_SELECTOR);
      if (height && slidesWrapper) {
        slidesWrapper.style.height = height + 'px';
      }
    }
    scrollTabs(activeTab) {
      const wrapper = activeTab.closest('.index-testimonials__tabs-wrap');
      if (wrapper) {
        const activeTabLeftPos = activeTab.offsetLeft;
        const activeTabRightPos = activeTab.offsetLeft + activeTab.offsetWidth;
        const rect = wrapper.getBoundingClientRect();
        if (activeTabRightPos > rect.right) {
          wrapper.scrollLeft =
            activeTabRightPos - rect.right + activeTab.offsetWidth;
        } else if (activeTabLeftPos <= rect.left ||
          wrapper.scrollLeft > activeTabLeftPos) {
          wrapper.scrollLeft = Math.abs(activeTabLeftPos);
        }
      }
    }
    updateTabsState(currentTabState) {
      if (currentTabState !== this.activeTab.getAttribute('data-type')) {
        this.activeTab.removeAttribute('data-active');
        const activeTab = this.container.querySelector(`.js-testimonials-tab[data-type="${currentTabState}"]`);
        if (activeTab) {
          activeTab.setAttribute('data-active', 'true');
          this.activeTab = activeTab;
          if (this.isMobile()) {
            this.scrollTabs(activeTab);
          }
        }
      }
    }
    updateActiveItem(innerElements, current) {
      const items = document.querySelectorAll('.js-slider-item');
      items.forEach((item) => {
        item.setAttribute('data-active', 'false');
      });
      const currentSlide = innerElements[current];
      currentSlide.setAttribute('data-active', 'true');
      const currentType = currentSlide.getAttribute('data-type');
      if (currentType) {
        this.container.setAttribute('data-type', currentType);
        this.currentType = currentType;
      }
    }
    loadImages() {
      const lazyImages = document.querySelectorAll(`${ROOT_SELECTOR} img[data-lazy-src]`);
      const promises = [];
      lazyImages.forEach((item) => {
        const src = item.getAttribute('data-lazy-src') || '';
        const srcSet = item.getAttribute('data-lazy-srcset') || '';
        item.setAttribute('src', src);
        item.setAttribute('srcset', srcSet);
        item.removeAttribute('data-lazy-src');
        item.removeAttribute('data-lazy-srcset');
        const onLoadPromise = new Promise((resolve) => {
          item.onload = () => {
            resolve();
          };
          item.onerror = () => {
            resolve();
          };
        });
        promises.push(onLoadPromise);
      });
      Promise.all(promises).then(() => {
        this.updateHeightWrap();
      });
    }
    onChangeSlide(slider) {
      const currentSlide = slider.currentSlide;
      this.updateTabsState(ORDERED_SLIDES[currentSlide]);
      this.updateActiveItem(slider.innerElements, currentSlide);
      this.updateCounters();
      this.loadImages();
      // sendEvent('page:main', 'change_slide_testimonials', ORDERED_SLIDES[currentSlide]);
    }
    getInstanceSlider() {
      const self = this;
      return new Siema({
        selector: ROOT_SELECTOR,
        duration: DURATION,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: false,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: function () {
          self.updateActiveItem(this.innerElements, 0);
          self.updateHeightWrap();
        },
        onChange: function () {
          self.onChangeSlide(this);
        },
      });
    }
    initControls() {
      const btnSliderLeft = this.container.querySelector('.js-testimonials [data-control="prev"]');
      const btnSliderRight = this.container.querySelector('.js-testimonials [data-control="next"]');
      if (btnSliderLeft && btnSliderRight) {
        btnSliderLeft.addEventListener('click', () => {
          if (this.slider.prev) {
            this.slider.prev();
          }
        });
        btnSliderRight.addEventListener('click', () => {
          this.slider.next();
        });
      }
    }
    updateCounters() {
      const totalInToolkit = testimonialsConfig[this.currentType].total;
      const currentInToolkit = this.slider.currentSlide - testimonialsConfig[this.currentType].start;
      this.totalNumberWrap.innerText = totalInToolkit.toString();
      this.currentNumberWrap.innerText = (currentInToolkit + 1).toString();
    }
    initTabs() {
      for (const property in testimonialsConfig) {
        const startIndex = testimonialsConfig[property].start;
        const tab = this.container.querySelector(`.js-testimonials-tab[data-type="${property}"]`);
        if (tab) {
          tab.addEventListener('click', () => this.slider.goTo(startIndex));
        }
      }
      const activeTab = this.container.querySelector('.js-testimonials-tab[data-active]');
      if (activeTab) {
        this.activeTab = activeTab;
        this.currentType = activeTab.getAttribute('data-type') || '';
      }
    }
    init() {
      this.slider = this.getInstanceSlider();
      window.addEventListener('resize', this.onResizeWindow);
      window.addEventListener('keydown', this.onKeyDown);
      this.initTabs();
      this.initControls();
      this.updateCounters();
      this.container.classList.add('initialized');
    }
  }
  window.Testimonials = Testimonials;

  const testimonialsSlider = new Testimonials();
  testimonialsSlider.init();


  

});
