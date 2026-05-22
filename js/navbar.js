const menuBtn = document.getElementById("menuBtn")
    const mobileMenu = document.getElementById("mobileMenu")

    const line1 = document.getElementById("line1")
    const line2 = document.getElementById("line2")
    const line3 = document.getElementById("line3")

    let menuOpen = false

    menuBtn.addEventListener("click", () => {

      menuOpen = !menuOpen

      if(menuOpen){

        mobileMenu.classList.remove("max-h-0", "opacity-0")
        mobileMenu.classList.add("max-h-[500px]", "opacity-100")

        line1.classList.add("rotate-45", "translate-y-[7px]")
        line2.classList.add("opacity-0")
        line3.classList.add("-rotate-45", "-translate-y-[7px]")

      }

      else{

        mobileMenu.classList.add("max-h-0", "opacity-0")
        mobileMenu.classList.remove("max-h-[500px]", "opacity-100")

        line1.classList.remove("rotate-45", "translate-y-[7px]")
        line2.classList.remove("opacity-0")
        line3.classList.remove("-rotate-45", "-translate-y-[7px]")

      }

    })


  const menu = document.getElementById("mobileMenu")

  function closeMenu(){

    menu.classList.add("max-h-0", "opacity-0")
    menu.classList.remove("max-h-[500px]", "opacity-100")

  }
