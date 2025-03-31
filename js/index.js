const navItem = document.getElementsByClassName("navbar__link");
["load", "resize"].forEach((e) =>
  window.addEventListener(e, (evt) => {
    document.getElementById("closeBtn").style.display = "none";
    document.getElementById("menuIcon").addEventListener("click", () => {
        document.querySelector(".collapseNav").style.display ="flex";
        
        document.getElementById("closeBtn").style.display = "flex";
        document.getElementById("menuIcon").style.display = "none";
    });
    document.getElementById("closeBtn").addEventListener("click", () => {
        document.querySelector(".collapseNav").style.display ="none";
      document.getElementById("menuIcon").style.display = "flex";
      document.getElementById("closeBtn").style.display = "none";
    });

    if (window.visualViewport.width <= 645) {
      document.querySelector(".navbar").classList.add("collapseNav");
      document.querySelector(".navbar").style.display ="none";
      document.getElementById("menuIcon").style.display = "flex";
    } else {
      document.getElementById("navbar").classList.remove("collapseNav");
      document.getElementById("menuIcon").style.display = "none";
      document.getElementById("navbar").style.display = "flex";
    }
  })
);
