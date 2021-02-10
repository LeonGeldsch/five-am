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
    if (parseInt(badgeWrapper.getBoundingClientRect().top) - parseInt(badgeWrapper.offsetHeight) >= parseInt(sectionGrey.getBoundingClientRect().top) && parseInt(badgeWrapper.getBoundingClientRect().top) - parseInt(badgeWrapper.offsetHeight) <= parseInt(sectionGrey.getBoundingClientRect().top) + parseInt(sectionGrey.offsetHeight)) {
        badge.style.filter = "invert()";
    } else {
        badge.style.filter = "none";
    }
});

menuGradientLight.addEventListener("click", function() {
    menuWrapper.click();
});

console.log(hoverEffectImages);


$.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', function() {
    console.log("loaded gsap");
    hoverEffectImages.forEach(hoverEffectImage => {
        hoverEffectImage.addEventListener('mouseover', function () {
            console.log("mouseover");
            gsap.to(hoverEffectImage, {
                scale: 1.15,
                duration: 1,
                ease: power1
            }); 
        });
        hoverEffectImage.addEventListener('mouseleave', function () {
            console.log("mouseleave");
            gsap.to(hoverEffectImage, {
                scale: 1,
                duration: 1,
                ease: power1
            }); 
        });
    });
});

