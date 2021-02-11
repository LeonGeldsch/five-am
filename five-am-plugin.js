var body = document.querySelector("body");

var badgeWrapper = document.querySelector(".badge_wrapper");

var badge = document.querySelector(".badge_wrapper img");

var sectionGrey = document.querySelector(".section.grey");

var menuGradientLight = document.querySelector(".menu_gradient.light");

var cartWrapper = document.querySelector(".cart-wrapper-2");

var popUpMenu = document.querySelector(".pop-up-menu");

var menuLinks = document.querySelector(".menu_links");

var menuWrapper = document.querySelector(".menu-wrapper");

var burgerUpper = document.querySelector(".burger.upper");

var burgerLower = document.querySelector(".burger.lower");

var hoverEffectImages = document.querySelectorAll(".object-wrapper, .lab_wrapper");

var allImages = document.querySelectorAll(".case-image, .team-image");

var teamImage = document.querySelector(".team-image");

var bigTextPreFooter = document.querySelector(".big-text.pre-footer");

var allCaseWrappers = document.querySelectorAll(".case_wrapper");

var allButtonTextLights = document.querySelectorAll(".button-text.light");


var newBadgeWrapper = document.createElement('div');
newBadgeWrapper.classList.add('badge_wrapper');
body.appendChild(newBadgeWrapper);
newBadgeWrapper.style.zIndex = 1;


var newBadgeWrapper2 = document.createElement('div');
newBadgeWrapper2.classList.add('badge_wrapper');
body.appendChild(newBadgeWrapper2);
newBadgeWrapper2.style.zIndex = 0;
newBadgeWrapper2.style.filter = 'invert()';


var newBadgeImage = document.createElement('img');
newBadgeImage.classList.add('image');
newBadgeImage.style.position = 'relative';
newBadgeImage.src = 'https://assets.website-files.com/5f2ec4e1f6e7e520923483ec/5f5b7f30c28b1f58bfb19241_5AM_Badge_Tomorrow.svg';
newBadgeWrapper.appendChild(newBadgeImage);

var newBadgeImage2 = document.createElement('img');
newBadgeImage2.classList.add('image');
newBadgeImage.style.position = 'relative';
newBadgeImage2.src = 'https://assets.website-files.com/5f2ec4e1f6e7e520923483ec/5f5b7f30c28b1f58bfb19241_5AM_Badge_Tomorrow.svg';
newBadgeWrapper2.appendChild(newBadgeImage2);


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

    let sectionGreyY = parseInt(sectionGrey.getBoundingClientRect().top);
    let newBadgeWrapperY = parseInt(newBadgeWrapper.getBoundingClientRect().top);
    let sectionGreyHeight = parseInt(sectionGrey.offsetHeight);


    if (sectionGreyY + 100 >= newBadgeWrapperY) {
        let clipPathVar = ( newBadgeWrapperY - sectionGreyY + 100 ).toString();
        newBadgeWrapper.style.clipPath = 'inset(0px 0px ' + clipPathVar + 'px 0px)';
        newBadgeWrapper.style.zIndex = 1;
        newBadgeWrapper2.style.zIndex = 0;
        newBadgeWrapper2.style.clipPath = '';
    } else {
        let clipPathVar = ( newBadgeWrapperY - (sectionGreyY + sectionGreyHeight) + 100 ).toString();
        newBadgeWrapper2.style.clipPath = 'inset(0px 0px ' + clipPathVar + 'px 0px)';
        newBadgeWrapper2.style.zIndex = 1;
        newBadgeWrapper.style.zIndex = 0;
        newBadgeWrapper.style.clipPath = '';
    }
});







menuGradientLight.addEventListener("click", function() {
    menuWrapper.click();
});

allCaseWrappers.forEach(caseWrapper => {
    caseWrapper.style.overflow = "visible";
});

allButtonTextLights[1].style.color = "#333";

badgeWrapper.style.display = 'none';

$.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js', function() {
    console.log("loaded gsap");
    $.getScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js', function() {
        console.log("loaded scrolltrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.set(newBadgeImage, {
            rotation: "-=200",
            ease: 'none'
        });
        gsap.set(newBadgeImage2, {
            rotation: "-=200",
            ease: 'none'
        });
        gsap.to(newBadgeImage, {
            rotation: "-=" + 360 * 6,
            ease: 'none',
            scrollTrigger: {
                scrub: true,
                start: 'top top',
                end: '+=10000'            
            }
        });
        gsap.to(newBadgeImage2, {
            rotation: "-=" + 360 * 6,
            ease: 'none',
            scrollTrigger: {
                scrub: true,
                start: 'top top',
                end: '+=10000'            
            }
        });

        gsap.to(bigTextPreFooter, {
            backgroundPosition: "50% 30%",
            duration: 0
        });

        gsap.to(bigTextPreFooter, {
            backgroundPosition: "50% 30%",
            filter: 'hue-rotate(360deg)',
            scrollTrigger: {
                trigger: ".big-text.pre-footer",
                start: "-=100",
                end: "+=" + parseInt(window.innerHeight),
                scrub: true
            }
        });

        gsap.to(menuGradientLight, {
            filter: 'hue-rotate(720deg)',
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        });
        gsap.to(cartWrapper, {
            filter: 'hue-rotate(720deg)',
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
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
                if (image.style.transform == 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)') {
                    gsap.to(image, {
                        borderRadius: 20,
                        duration: 0.2,
                        scale: 1.02
                    });
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
                }
            });
        });
        teamImage.addEventListener('mouseover', function () {
            gsap.to(teamImage, {
                borderRadius: 20,
                duration: 0.2,
                scale: 1.02
            });
        });
        teamImage.addEventListener('mouseleave', function () {
            gsap.to(teamImage, {
                borderRadius: 0,
                duration: 0.2,
                scale: 1
            });
        });
    });
});