function init() {
  var svg = document.querySelector(".scene");
  var zoom = false;
  var animationOn = false;

  var viewBoxes = {
    "overHouses": {
      x: 43,
      y: 290,
      width: 130,
      height: 67
    },
    "overSnowmen": {
      x: 250,
      y: 325,
      width: 225,
      height: 115
    },
    "overPenguins": {
      x: 634,
      y: 310,
      width: 95,
      height: 140
    },
    "overHanging": {
      x: 774,
      y: 416,
      width: 49,
      height: 38
    },
    "overSkilift": {
      x: 897,
      y: 284,
      width: 217,
      height: 130,
    }
  };

  var skiliftDom = svg.querySelector("#skilift"),
    houses = {
      dom: svg.querySelector("#houses")
    },
    penguinsDom = svg.querySelectorAll("#penguins > g"),
    babyPenguins = [penguinsDom[2], penguinsDom[3], penguinsDom[4]],
    snowManHat = svg.querySelector("#hatman"),
    handHat = snowManHat.querySelector("#handhat_1_"),
    eyesHat = snowManHat.querySelector("#eyesHatMan"),
    elfMan = svg.querySelector("#elfman"),
    elfButtons = elfMan.querySelectorAll("#elfButtons circle"),
    elfBow = elfMan.querySelectorAll("#bowElf"),
    scarfMan = svg.querySelector("#scarfman"),
    hangingDom = svg.querySelectorAll("#hanging > g"),
    letters = svg.querySelectorAll("#letters path");

  function startScene() {

    TweenMax.set([svg.querySelector("#leftSkiLift"), svg.querySelector("#rightSkiLift")], {
      y: -600
    });
    TweenMax.set(svg.querySelector("#trailSkiLift"), {
      scaleX: 0,
      transformOrigin: "left bottom"
    });
    TweenMax.set(svg.querySelector("#lift"), {
      opacity: 0
    });
    TweenMax.set(houses.dom, {
      scaleY: 0,
      transformOrigin: "center bottom"
    });
    TweenMax.set(svg.querySelector("#snowPenguins"), {
      y: -600,
      opacity: 0
    });
    TweenMax.set(svg.querySelector("#penguins"), {
      scale: 0,
      transformOrigin: "10% 50%"
    });
    TweenMax.set([svg.querySelector("#snowManSnow1"), svg.querySelector("#snowManSnow2")], {
      y: -600,
      opacity: 0
    });
    TweenMax.set(snowManHat, {
      rotationZ: -60,
      scale: 0,
      transformOrigin: "center bottom"
    });
    TweenMax.set(elfMan, {
      rotationZ: 60,
      scale: 0,
      transformOrigin: "center bottom"
    });
    TweenMax.set(scarfMan, {
      rotationZ: 90,
      scale: 0,
      transformOrigin: "center bottom"
    });
    TweenMax.set(hangingDom, {
      opacity: 0
    });

    //Letters intro
    for (var i = 0; i < letters.length; i++) {
      TweenMax.set(letters[i], {
        transformOrigin: "center top",
        rotationZ: Math.random() * 180,
        scale: 0,
      });
    }

    copyAnim();

  }

  function openBox() {
    document.querySelector(".gift").removeEventListener("click", openBox);
    TweenMax.set(".hat", {
      transformOrigin: "left bottom"
    });
    TweenMax.to(".hat", 1, {
      rotationZ: -80,
      x: -500,
      opacity:0,
      ease: Power2.easeIn
    });
    TweenMax.to(".box", 1, {
      y: 800,
      ease: Power2.easeIn
    });
    TweenMax.to(".gift", 1, {
      opacity: 0,
      delay: 1,
      onStart: function() {
        startScene();
      },
      onComplete: function() {
        document.querySelector(".gift").classList.add("hidden");
      }
    });
  }

  function startAnimations() {
    animationOn = true;

    //Ski Lift
    var skilift = new TimelineMax({
      repeat: -1,
      repeatDelay: 0.5
    });
    skilift.to(skiliftDom.querySelector("#lift"), 7, {
      x: 145,
      y: -64,
      ease: Power1.easeInOut
    });
    skilift.to(skiliftDom.querySelector("#lift"), 7, {
      x: 0,
      y: 0,
      ease: Power1.easeInOut
    }, "+=.5");

    //Ski Lift
    houses.smoke1 = houses.dom.querySelectorAll("#smokes > g:nth-child(5) path");
    houses.smoke2 = houses.dom.querySelectorAll("#smokes > g:nth-child(4) path");
    houses.smoke3 = houses.dom.querySelectorAll("#smokes > g:nth-child(3) path");
    houses.smoke4 = houses.dom.querySelectorAll("#smokes > g:nth-child(2) path");
    houses.smoke5 = houses.dom.querySelectorAll("#smokes > g:nth-child(1) path");
    TweenMax.staggerTo(houses.smoke1, 4, {
      y: -11,
      opacity: 0,
      repeat: -1,
      ease: Linear.easeNone
    }, 0.5);
    TweenMax.staggerTo(houses.smoke2, 4, {
      y: -13,
      opacity: 0,
      repeat: -1,
      ease: Linear.easeNone
    }, 0.5);
    TweenMax.staggerTo(houses.smoke3, 4, {
      y: -9,
      opacity: 0,
      repeat: -1,
      ease: Linear.easeNone
    }, 0.8);
    TweenMax.staggerTo(houses.smoke4, 4, {
      y: -14,
      opacity: 0,
      repeat: -1,
      ease: Linear.easeNone
    }, 1);
    TweenMax.staggerTo(houses.smoke5, 7, {
      y: -17,
      opacity: 0,
      repeat: -1,
      ease: Linear.easeNone
    }, 1.3);

    //Hanging
    var hanging = new TimelineMax({
      repeat: -1
    });
    TweenMax.set(hangingDom, {
      transformOrigin: "center top"
    });
    TweenMax.set(hangingDom[0], {
      rotationZ: 10
    });
    TweenMax.set(hangingDom[1], {
      rotationZ: 5
    });
    TweenMax.set(hangingDom[2], {
      rotationZ: -13
    });
    TweenMax.set(hangingDom[3], {
      rotationZ: -8
    });
    TweenMax.set(hangingDom[4], {
      rotationZ: 15
    });
    TweenMax.to(hangingDom[0], 3, {
      rotationZ: -10,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true
    });
    TweenMax.to(hangingDom[1], 2, {
      rotationZ: -5,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true
    });
    TweenMax.to(hangingDom[2], 5, {
      rotationZ: 13,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true
    });
    TweenMax.to(hangingDom[3], 4, {
      rotationZ: 8,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true
    });
    TweenMax.to(hangingDom[4], 3, {
      rotationZ: -15,
      ease: Power1.easeInOut,
      repeat: -1,
      yoyo: true
    });

    //Pinguins
    var penguins1 = new TimelineMax({
      repeat: -1
    });
    penguins1.to(penguinsDom[0], 3, {
      x: 35,
      y: 90,
      ease: Power2.easeIn
    });
    penguins1.set(penguinsDom[0], {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0
    });
    penguins1.to(penguinsDom[0], 0.7, {
      opacity: 1,
      scale: 1
    }, "+=1");

    var penguins2 = new TimelineMax({
      repeat: -1,
      delay: 1
    });
    penguins2.to(penguinsDom[1], 3, {
      x: 34,
      y: 90,
      ease: Power2.easeIn
    });
    penguins2.set(penguinsDom[1], {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0
    });
    penguins2.to(penguinsDom[1], 0.7, {
      opacity: 1,
      scale: 1
    }, "+=1");

    var penguins3 = new TimelineMax({
      repeat: -1
    });
    penguins3.staggerTo(babyPenguins, 4, {
      x: 39,
      y: 100,
      ease: Power2.easeIn
    }, 1.1);
    penguins3.set(babyPenguins, {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 0
    });
    penguins3.staggerTo(babyPenguins, 0.7, {
      opacity: 1,
      scale: 1
    }, .2);
    penguins3.progress(.5);

    //Snowman hat
    TweenMax.set(handHat, {
      transformOrigin: "70% bottom"
    });
    TweenMax.to(handHat, 3, {
      rotationZ: 20,
      yoyo: true,
      repeat: -1,
      ease: Power1.easeInOut
    });
    TweenMax.set(eyesHat, {
      transformOrigin: "center center"
    });
    var eyesHatTl = new TimelineMax({
      repeat: -1,
      repeatDelay: 1.5
    });
    eyesHatTl.to(eyesHat, 0.1, {
      scaleY: 0
    });
    eyesHatTl.to(eyesHat, 0.1, {
      scaleY: 1
    });

    //Snowman elf
    var elfButtonsTl = new TimelineMax({
      repeat: -1
    });
    elfButtonsTl.set(elfButtons[0], {
      fill: "#EE4250"
    });
    elfButtonsTl.set(elfButtons[0], {
      fill: "#22BC34"
    }, "+=0.3");
    elfButtonsTl.set(elfButtons[1], {
      fill: "#EE4250"
    });
    elfButtonsTl.set(elfButtons[1], {
      fill: "#22BC34"
    }, "+=0.3");
    elfButtonsTl.set(elfButtons[2], {
      fill: "#EE4250"
    });
    elfButtonsTl.set(elfButtons[2], {
      fill: "#22BC34"
    }, "+=0.3");

    TweenMax.set(elfBow, {
      transformOrigin: "center center"
    })
    var elfBowTl = new TimelineMax({
      repeat: -1,
      repeatDelay: .4
    });
    elfBowTl.to(elfBow, 0.4, {
      scaleX: 1.6
    });
    elfBowTl.to(elfBow, 0.8, {
      scaleX: 1,
      ease: Elastic.easeOut
    });

    TweenMax.set(elfMan.querySelector("#elfLeftArm"), {
      transformOrigin: "right top",
      rotationZ: 55
    });
    TweenMax.to(elfMan.querySelector("#elfLeftArm"), 1, {
      rotationZ: 100,
      yoyo: true,
      repeat: -1,
      ease: Power1.easeInOut
    });
    TweenMax.set(elfMan.querySelector("#elfRightArm"), {
      transformOrigin: "left top",
      rotationZ: -60
    });
    TweenMax.to(elfMan.querySelector("#elfRightArm"), 1, {
      rotationZ: -110,
      yoyo: true,
      repeat: -1,
      ease: Power1.easeInOut,
      delay: -0.21
    });

    //Snowman scard
    TweenMax.to(scarfMan.querySelector("#pieceScarfMan"), 3, {
      rotationZ: -18,
      yoyo: true,
      repeat: -1,
      ease: Linear.easeNone
    });

    var scarfManTl = new TimelineMax({
      repeat: -1,
      repeatDelay: 1
    });
    TweenMax.set(scarfMan, {
      transformOrigin: "center bottom"
    });
    scarfManTl.to(scarfMan, 0.2, {
      scaleY: 0.92
    });
    scarfManTl.to(scarfMan, 0.6, {
      scaleY: 1.07,
      y: -8
    });
    scarfManTl.to(scarfMan, 0.4, {
      scaleY: 1,
      y: 0,
      ease: Power1.easeIn
    });

  }

  //SNOW
  var snow = svg.querySelector("#snow").querySelectorAll("ellipse, path");
  var snows = [
    [],
    []
  ];
  for (var i = 0; i < snow.length; i++) {
    rand = Math.floor(Math.random() * 2);
    var offset = snow[i].getBoundingClientRect();
    TweenMax.set(snow[i], {
      y: -(offset.top + offset.width + 100)
    });
    TweenMax.to(snow[i], Math.random() * 50 + 50, {
      y: 920,
      repeat: -1,
      delay: -Math.random() * 100
    });
  }

  function copyAnim() {
    var appearance = new TimelineMax({
      onComplete: startAnimations
    }).timeScale(1);
    appearance.staggerTo(letters, 3, {
        scale: 1,
        rotationZ: 0,
        ease: Elastic.easeOut
      }, 0.1)
      .to(houses.dom, 1, {
        scaleY: 1,
        ease: Elastic.easeOut
      }, "-=2")
      .to(svg.querySelector("#snowManSnow1"), 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
      }, "-=1.7")
      .to(svg.querySelector("#snowManSnow2"), 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
      }, "-=1.2")
      .to(scarfMan, 1, {
        rotationZ: 0,
        scale: 1,
        ease: Elastic.easeOut
      }, "-=0.8")
      .to(snowManHat, 1, {
        rotationZ: 0,
        scale: 1,
        ease: Elastic.easeOut
      }, "-=0.8")
      .to(elfMan, 1, {
        rotationZ: 0,
        scale: 1,
        ease: Elastic.easeOut
      }, "-=0.8")
      .to(svg.querySelector("#snowPenguins"), 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
      }, "-=.8")
      .to(svg.querySelector("#penguins"), 1, {
        scale: 1,
        ease: Power2.easeOut
      })
      .to(hangingDom, 0.3, {
        opacity: 1
      })
      .to(svg.querySelector("#leftSkiLift"), 0.7, {
        y: 0,
        ease: Power1.easeOut
      })
      .to(svg.querySelector("#rightSkiLift"), 0.7, {
        y: 0,
        ease: Power1.easeOut
      })
      .to(svg.querySelector("#trailSkiLift"), 0.7, {
        scaleX: 1
      })
      .to(svg.querySelector("#lift"), 0.3, {
        opacity: 1
      }, "-=0.7")
  }

  //HOVER EFFECTS
  function enterOverlay(e) {
    if (!zoom && animationOn) {
      svg.style.cursor = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/glass-01.png) 20 20, auto";
      TweenMax.to(e.target, .3, {
        opacity: 1,
        ease: Power2.easeOut
      });
    }
  }

  function leaveOverlay(e, el) {
    if (!el) {
      el = e.target;
    }
    if (!zoom) {
      svg.style.cursor = "auto";
    }
    TweenMax.to(el, .5, {
      opacity: 0,
      ease: Power2.easeOut
    });
  }

  function zoomViewBox(e) {
    if (zoom || !animationOn) {
      return;
    }
    e.stopPropagation();
    var id = this.getAttribute("id");
    
    TweenMax.to(svg, 2, {attr:{viewBox: viewBoxes[id].x + " " + viewBoxes[id].y + " " + viewBoxes[id].width + " " + viewBoxes[id].height},
      ease: Power3.easeOut
    });
    
    zoom = true;
    leaveOverlay(false, this);
    svg.style.cursor = "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/cross.png) 20 20, auto";
  }

  function unZoom() {
    zoom = false;
    svg.style.cursor = "auto";
     TweenMax.to(svg, 2, {attr:{viewBox:"0 0 1600 900"}, ease: Power3.easeOut});
  }

  var overlays = svg.querySelectorAll("#overlays > g");
  for (var i = 0; i < overlays.length; i++) {
    overlays[i].addEventListener("mouseenter", enterOverlay);
    overlays[i].addEventListener("mouseleave", leaveOverlay);
    overlays[i].addEventListener("click", zoomViewBox);
  }
  svg.addEventListener("click", unZoom);

  document.querySelector(".gift").addEventListener("click", openBox);
  document.body.style.background = "#bfe2dc";
  document.querySelector(".scene").style.display = "block";

}

//preload images
var glass = new Image()
glass.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/glass-01.png";
var cross = new Image()
cross.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/cross.png";

          
window.onload = function() {
  init();
};