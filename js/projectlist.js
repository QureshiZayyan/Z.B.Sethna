const projects = [

    {
        title: "Residential",

        image:
            "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200&auto=format&fit=crop",

        description:
            "Modern luxury homes with elegant interiors and timeless architecture.",

        link: "html/residential.html"
    },

    {
        title: "Commercial",

        image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",

        description:
            "Premium commercial spaces designed for functionality and modern business needs.",

        link: "html/commercial.html"
    },

    {
        title: "Restoration Work",

        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

        description:
            "Restoring heritage structures while preserving their original beauty.",

        link: "restorationwork.html"
    },

    {
        title: "Community & Social Work",

        image:
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",

        description:
            "Designing spaces that positively impact communities and society.",

        link: "communitywork.html"
    }

]

const container = document.getElementById("projectsContainer")

// CREATE CARDS
projects.forEach((project, index) => {

    const card = document.createElement("div")

    card.className =
        "project-fade group relative rounded-[28px] overflow-hidden h-[420px] sm:h-[460px] border border-white/10 bg-white/5"

    card.style.transitionDelay = `${index * 0.12}s`

    card.innerHTML = `

      <!-- IMAGE -->
      <img
        src="${project.image}"
        alt="${project.title}"
        class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />

      <!-- OVERLAY -->
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <!-- CONTENT -->
      <div class="absolute bottom-0 p-5 sm:p-7 z-10">

        <h2 class="text-2xl sm:text-3xl font-black mb-3 leading-tight">
          ${project.title}
        </h2>

        <p class="text-gray-300 leading-6 sm:leading-7 text-sm">
          ${project.description}
        </p>

        <a href="${project.link}">

          <button
            class="mt-5 bg-white text-black px-5 py-2.5 rounded-2xl font-semibold hover:bg-blue-400 hover:text-white transition duration-300 hover:scale-105"
          >
            Explore
          </button>

        </a>

      </div>

    `

    container.appendChild(card)

})

// SCROLL ANIMATION
const projectElements = document.querySelectorAll(".project-fade")

const projectObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("project-show")

        }

    })

}, {
    threshold: 0.2
})

projectElements.forEach((el) => projectObserver.observe(el))