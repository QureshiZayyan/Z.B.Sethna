 const slides = [

      {
        image:
          "images/Ashish Wangh Bungalow, Udvada copy.JPG",

        quote:
          "Designing spaces that inspire modern living."
      },

      {
        image:
          "images/Mr. Hoshang Mehta ,Dadar.jpg",

        quote:
          "Architecture is where creativity meets elegance."
      },

      {
        image:
          "images/zal kavarana.jpg",

        quote:
          "Building timeless spaces with luxury and vision."
      }

    ]

    const slider = document.getElementById("slider")

    let index = 0

    // CREATE SLIDES
    slides.forEach((slide) => {

      const div = document.createElement("div")

      div.className =
        "w-full h-screen flex-shrink-0 relative"

      div.innerHTML = `

        <!-- IMAGE -->
        <img
          src="${slide.image}"
          class="w-full h-full object-cover"
        />

        <!-- OVERLAY -->
        <div class="absolute inset-0 bg-black/50"></div>

        <!-- CONTENT -->
        <div class="absolute inset-0 flex items-center justify-center px-6">

          <div class="text-center max-w-4xl">

            <p class="text-blue-400 text-sm md:text-lg tracking-[6px] mb-6 font-semibold">
              Z.B.SETHNA ARCHITECTS
            </p>

            <h1 class="text-white text-4xl md:text-7xl font-black leading-tight">
              ${slide.quote}
            </h1>

          </div>

        </div>

      `

      slider.appendChild(div)

    })

    // AUTO SLIDER
    setInterval(() => {

      index = (index + 1) % slides.length

      slider.style.transform =
        `translateX(-${index * 100}%)`

    }, 3000)