$(function(){
    //스크롤 헤더고정 + 고정시 로고변경
    const header = document.querySelector("#header");
    const logos = document.querySelectorAll("#logoImg, #logoImgMobile");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");

            logos.forEach(logo => {
                logo.src = "./img/cath03.png"; // 바뀔 로고
            });

        } else {
            header.classList.remove("scrolled");

            logos.forEach(logo => {
                logo.src = "./img/cath02.png"; // 원래 로고
            });
        }
    });
    

    //원댑스,투댑스
    $('.navList>li').hover(function(){
        $(this).find('ul').stop().fadeIn(200)
    },function(){
        $(this).find('ul').stop().fadeOut(200)
    });
    //모바일 메뉴창열고닫기
    $('.m-menuIcon').click(function(){
        const $m0Menu =$('.m-navList');
        if($m0Menu.is(':visible')){
            $m0Menu.stop().slideUp()
        }else{
            $m0Menu.stop().slideDown()
        }
    });
    //모바일원,투댑스
    $('.m-navList > li').click(function () {
        const $currentUl = $(this).children('ul');

        // 이미 열려있는 상태면 닫기
        if ($currentUl.is(':visible')) {
            $currentUl.stop().slideUp();
        } else {
            // 다른 li의 ul 전부 닫기
            $('.m-navList > li ul').stop().slideUp();

            // 클릭한 li의 ul만 열기
            $currentUl.stop().slideDown();
        }
    });
    //메인슬라이더
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    });
    
    //스크롤내리면 info 보임
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // 한 번만 실행
        }
        });
    },
    {
        threshold: 0.2, // 20% 보이면 실행
    }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
    });

    
    //QnA
    const $firstLi = $('.qnaIfo > ul > li').first();
    $firstLi.children('ul').show();
    $firstLi.find('i')
    .removeClass('fa-chevron-down')
    .addClass('fa-chevron-up');
    
    $('.qnaIfo>ul>li').click(function () {
        const $qnaClick = $(this).children('ul');
        const $icon = $(this).find('i');
        
        // 이미 열려있는 상태면 닫기+아이콘바뀜
        if ($qnaClick.is(':visible')) {
            $qnaClick.stop().slideUp();
            $icon.removeClass('fa-chevron-up')
             .addClass('fa-chevron-down');
        } else {
            // 클릭한 li의 ul만 열기+아이콘바뀜
            $qnaClick.stop().slideDown();
            $icon.removeClass('fa-chevron-down')
             .addClass('fa-chevron-up');
        }
    });

    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const qnaTop = $('.qnaIfo').offset().top;

        if (scrollTop + windowHeight > qnaTop + 100) {
            $('.qnaIfo').addClass('active');
        }
    });

    //checkswiper
    var swiper = new Swiper(".checkSwiper", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      navigation: {
        nextEl: ".check-button-next",
        prevEl: ".check-button-prev",
      },
    });

    //cooperationSwiper
    var swiper = new Swiper(".cooperationSwiper", {
      slidesPerView:6,
        spaceBetween: 0,
        loop: true,
        autoplay: {
         delay: 2000,
         disableOnInteraction: false,
      },
    });
    
    
});