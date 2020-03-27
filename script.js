$(document).ready(function () {
    manarat();
});

const manarat = function() {
    let data = {
        init : function(){
            this.navigation();
            this.animation();
            this.testimonial();
            this.onePageNav();
        },
        domElement : {
            navIcon: $('.nav-icon'),
            navigation : $('.navigation'),
            navItem : $('ul.navigation').find('a'),
            mainNav: $('#main-nav')
        },
        navigation : function(){
            let navIcon = this.domElement.navIcon;
            let navItem = this.domElement.navItem;
            let navigation = this.domElement.navigation;
               navIcon.on('click', function () {
                    navigation.toggleClass('responsive');
               });
               navItem.click(function () {
                   navigation.toggleClass('responsive');
               });
        },
        animation : function(){
            AOS.init({
                duration: 1500,
                easing: 'ease-in-out-sine'
            });
        },
        onePageNav : function(){
            let mainNav = this.domElement.mainNav;
            mainNav.onePageNav({
                currentClass: 'active',
                changeHash: false,
                scrollSpeed: 750,
                scrollThreshold: 0.5,
                easing: 'swing',
            });
        },
        testimonial : function(){
            $('#testimonial-slider').owlCarousel({
                items: 1,
                nav: true,
                navText: ["", ""],
                loop: true,
                dots: true,
                autoPlay: true,
                singleItem: true,
                rewind: true,
                autoplaySpeed: 1000
            });
        }
    };
    data.init();
};