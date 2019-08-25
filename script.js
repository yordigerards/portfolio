window.addEventListener("scroll", function() {
      let scroll = window.pageYOffset;
      if (scroll > 130) {
            document.querySelector("header").classList.add("bovenStil");
      } else {
            document.querySelector("header").classList.remove("bovenStil");
      };
})
