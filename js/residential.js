window.scrollTo(0, 0)

// IMAGES
const projects = [

    {
        title: "Ashish Wangh Bungalow, Udvada",

        images: [
            "../images/Ashish Wangh Bungalow, Udvada.JPG",
            "../images/img1.JPG",
            "../images/img2.JPG",
            "../images/img3.JPG"
        ]
    },

    {
        title: "Franey Bathena",

        images: [
            "../images/Frany Bathena.JPG",
            "../images/img4.JPG",
            "../images/img5.JPG",
            "../images/img6.JPG",
            "../images/img7.JPG"
        ]
    },

    {
        title: "Mr. Hoshang Mehta, Dadar",

        images: [
            "../images/Mr. Hoshang Mehta ,Dadar.JPG",
            "../images/20241214_180929.JPG",
            "../images/20241214_181020.JPG",
            "../images/20241214_181109.JPG",
            "../images/20241214_181127.JPG"
        ]
    },

    {
        title: "Sharukh Kothawala Bungalow",

        images: [
            "../images/Sharukh Kothawala Bungalow.JPG",
            "../images/sk1.JPG",
            "../images/sk2.JPG",
            "../images/sk3.JPG"
        ]
    },

    {
        title: "Sohrab Chinoy, Parsi Colony",

        images: [
            "../images/Sohrab Chinoy, Parsi colony, Dadar.JPG",
            "../images/sc1.JPG",
            "../images/sc2.JPG",
            "../images/sc3.JPG",
            "../images/sc4.JPG",
        ]
    },

    {
        title: "Zal Kavarana",

        images: [
            "../images/zal kavarana.JPG",
            "../images/z1.JPG",
            "../images/z2.JPG",
            "../images/z3.JPG",
        ]
    },

    {
        title: "Homiar lam",

        images: [
            "../images/h1.JPG",
            "../images/h2.JPG",
            "../images/h3.JPG",
            "../images/h4.JPG",
            "../images/h5.JPG",
        ]
    },
    {
        title: "Hoshedar Confectioner",

        images: [
            "../images/hc1.JPG",
            "../images/hc2.JPG",
            "../images/hc3.JPG",
            "../images/hc4.JPG",
            "../images/hc5.JPG",
        ]
    },
    {
        title: "Sam Turel Breach Candy",

        images: [
            "../images/st1.JPG",
            "../images/st2.JPG",
            "../images/st3.JPG",
            "../images/st4.JPG",
            "../images/st5.JPG",
        ]
    },
    {
        title: "Pearl Kavasmanek Edenwalabuilding Dadar.",

        images: [
            "../images/pk1.JPG",
            "../images/pk2.JPG",
            "../images/pk3.JPG",
            "../images/pk4.JPG",
        ]
    },
    {
        title: "Merzban Mehta",

        images: [
            "../images/mm1.JPG",
            "../images/mm2.JPG",
            "../images/mm3.JPG",
            "../images/mm4.JPG",
            "../images/mm5.JPG",
            "../images/mm6.JPG",
            "../images/mm7.JPG",
        ]
    },

]

const container = document.getElementById("projectsContainer")

const modal = document.getElementById("modal")
const modalImage = document.getElementById("modalImage")
const modalTitle = document.getElementById("modalTitle")

const closeBtn = document.getElementById("closeBtn")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")

const dotsContainer = document.getElementById("dotsContainer")

let selectedProject = null
let currentImage = 0

// CREATE CARDS
projects.forEach((project, index) => {

    const card = document.createElement("div")

    card.className =
        "project-card group relative cursor-pointer rounded-[24px] overflow-hidden bg-[#161616] border border-white/10"

    card.style.transitionDelay = `${index * 0.08}s`

    card.innerHTML = `

        <!-- IMAGE -->
        <div class="overflow-hidden h-[260px]">

          <img
            src="${project.images[0]}"
            alt=""
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

        </div>

        <!-- OVERLAY -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

        <!-- CONTENT -->
        <div class="absolute bottom-0 left-0 p-5 z-10">

          <h2 class="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            ${project.title}
          </h2>

          <p class="text-sm text-gray-300 mt-2">
            Click to explore project gallery
          </p>

          <button class="mt-4 px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-blue-400 hover:text-white transition duration-300">
            Explore
          </button>

        </div>

      `

    // OPEN MODAL
    card.addEventListener("click", () => {

        selectedProject = project
        currentImage = 0

        openModal()

    })

    container.appendChild(card)

})

// OPEN MODAL
function openModal() {

    modal.classList.remove("hidden")
    modal.classList.add("flex")

    updateSlider()

}

// CLOSE MODAL
closeBtn.addEventListener("click", () => {

    modal.classList.add("hidden")
    modal.classList.remove("flex")

})

// NEXT
nextBtn.addEventListener("click", () => {

    currentImage =
        currentImage === selectedProject.images.length - 1
            ? 0
            : currentImage + 1

    updateSlider()

})

// PREV
prevBtn.addEventListener("click", () => {

    currentImage =
        currentImage === 0
            ? selectedProject.images.length - 1
            : currentImage - 1

    updateSlider()

})

// UPDATE SLIDER
function updateSlider() {

    modalImage.src = selectedProject.images[currentImage]

    modalTitle.innerText = selectedProject.title

    // IMAGE ANIMATION
    modalImage.style.opacity = "0"

    setTimeout(() => {

        modalImage.style.opacity = "1"

    }, 100)

    // DOTS
    dotsContainer.innerHTML = ""

    selectedProject.images.forEach((img, index) => {

        const dot = document.createElement("div")

        dot.className =
            `w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${currentImage === index
                ? "bg-blue-400 scale-125"
                : "bg-white/30"
            }`

        dot.addEventListener("click", () => {

            currentImage = index
            updateSlider()

        })

        dotsContainer.appendChild(dot)

    })

}

// SCROLL ANIMATION
const cards = document.querySelectorAll(".project-card")

const projectObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show")

        }

    })

}, {
    threshold: 0.2
})

cards.forEach((card) => {

    projectObserver.observe(card)

})
