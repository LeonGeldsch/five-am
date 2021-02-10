var body = document.querySelector("body");

var badgeWrapper = document.querySelector(".badge_wrapper");

var badge = document.querySelector(".badge_wrapper img");

var sectionGrey = document.querySelector(".section.grey");

var menuGradientLight = document.querySelector(".menu_gradient.light");

var popUpMenu = document.querySelector(".pop-up-menu");

var menuLinks = document.querySelector(".menu_links");

var menuWrapper = document.querySelector(".menu-wrapper");

var burgerUpper = document.querySelector(".burger.upper");

var burgerLower = document.querySelector(".burger.lower");

var hoverEffectImages = document.querySelectorAll(".object-wrapper, .lab_wrapper");

var allImages = document.querySelectorAll(".case-image, .team-image");

var bigTextPreFooter = document.querySelector(".big-text.pre-footer");

var allCaseWrappers = document.querySelectorAll(".case_wrapper");

var allButtonTextLights = document.querySelectorAll(".button-text.light");

(function () {

    function loadScript(url, callback) {

        var script = document.createElement("script")
        script.type = "text/javascript";

        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    }

    loadScript("https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {

         //jQuery loaded
         console.log('jquery loaded');

    });

})();


window.addEventListener('scroll', function() {
    if (parseInt(badgeWrapper.getBoundingClientRect().top) + parseInt(badgeWrapper.offsetHeight) * 0.5 >= parseInt(sectionGrey.getBoundingClientRect().top) && parseInt(badgeWrapper.getBoundingClientRect().top) + parseInt(badgeWrapper.offsetHeight) * 0.5 <= parseInt(sectionGrey.getBoundingClientRect().top) + parseInt(sectionGrey.offsetHeight)) {
        badge.style.filter = "invert()";
    } else {
        badge.style.filter = "none";
    }
});

menuGradientLight.addEventListener("click", function() {
    menuWrapper.click();
});

allCaseWrappers.forEach(caseWrapper => {
    caseWrapper.style.overflow = "visible";
});

allButtonTextLights[1].style.color = "#333";


$.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', function() {
    console.log("loaded gsap");
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js', function() {
        console.log("loaded scrolltrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(bigTextPreFooter, {
            backgroundPosition: "50% 0%",
            duration: 0
        });

        gsap.to(bigTextPreFooter, {
            backgroundPosition: "50% 40%",
            filter: 'hue-rotate(90deg)',
            scrollTrigger: {
                trigger: ".big-text.pre-footer",
                start: "-=500",
                end: "+=500",
                scrub: true
            }
        });


        hoverEffectImages.forEach(hoverEffectImage => {
            hoverEffectImage.addEventListener('mouseover', function () {
                gsap.to(hoverEffectImage, {
                    scale: 1.05,
                    duration: 0.4,
                    ease: "power2"
                }); 
            });
            hoverEffectImage.addEventListener('mouseleave', function () {
                gsap.to(hoverEffectImage, {
                    scale: 1,
                    duration: 0.4,
                    ease: "power2"
                }); 
            });
        });
    
        allImages.forEach(image => {
            image.addEventListener('mouseover', function () {
                gsap.to(image, {
                    borderRadius: 20,
                    duration: 0.2,
                    scale: 1.02
                });
            });
            image.addEventListener('mouseleave', function () {
                gsap.to(image, {
                    borderRadius: 0,
                    duration: 0.2,
                    scale: 1
                });
            });
        });
    });
});