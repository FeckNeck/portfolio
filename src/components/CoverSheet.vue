<template>
  <div
    class="
      xl:px-24 xl:max-w-7xl
      lg:max-w-5xl lg:px-20
      md:max-w-5xl
      sm:max-w-2xl sm:px-8
      mx-auto
    "
  >
    <div class="sm:flex items-center py-10">
      <div class="sm:w-1/3 sm:text-left text-center">
        <p class="text-4xl">Mathis Dousse</p>
        <p class="text-2xl pt-3 pb-5 font-light">Etudiant en Informatique</p>
        <div class="flex justify-center sm:block">
          <a
            href="../assets/Mathis_Dousse_CV.pdf"
            download
            class="
              flex
              px-3
              py-2
              rounded
              border
              w-fit
              shadow-custom
              hover:bg-teal-400 hover:text-white hover:cursor-pointer
              transition-colors
              duration-300
              sm:mb-0
              mb-10
              dark:bg-secondary-dark
            "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="16"></line>
              <polyline points="8 12 12 16 16 12"></polyline>
              <line x1="8" y1="20" x2="16" y2="20"></line>
            </svg>

            <span>Download CV</span>
          </a>
        </div>
      </div>
      <img
        class="sm:w-2/3 sm:px-0 px-4"
        src="../assets/dev.svg"
        alt="Developper"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

<!-- <div>
          <svg viewBox="0 0 50 50" width="20" height="20">
            <path
              d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
            />
          </svg>
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path
              d="M 10.898438 2.101562 C 6.300781 2.601562 2.601562
            6.300781 2.101562 10.800781 C 1.601562 15.5 4.300781 19.699219
            8.398438 21.300781 C 8.699219 21.398438 9 21.199219 9 20.800781 L 9
            19.199219 C 9 19.199219 8.601562 19.300781 8.101562 19.300781 C
            6.699219 19.300781 6.101562 18.101562 6 17.398438 C 5.898438 17
            5.699219 16.699219 5.398438 16.398438 C 5.101562 16.300781 5
            16.300781 5 16.199219 C 5 16 5.300781 16 5.398438 16 C 6 16 6.5
            16.699219 6.699219 17 C 7.199219 17.800781 7.800781 18 8.101562 18 C
            8.5 18 8.800781 17.898438 9 17.800781 C 9.101562 17.101562 9.398438
            16.398438 10 16 C 7.699219 15.5 6 14.199219 6 12 C 6 10.898438 6.5
            9.800781 7.199219 9 C 7.101562 8.800781 7 8.300781 7 7.601562 C 7
            7.199219 7 6.601562 7.300781 6 C 7.300781 6 8.699219 6 10.101562
            7.300781 C 10.601562 7.101562 11.300781 7 12 7 C 12.699219 7
            13.398438 7.101562 14 7.300781 C 15.300781 6 16.800781 6 16.800781 6
            C 17 6.601562 17 7.199219 17 7.601562 C 17 8.398438 16.898438
            8.800781 16.800781 9 C 17.5 9.800781 18 10.800781 18 12 C 18
            14.199219 16.300781 15.5 14 16 C 14.601562 16.5 15 17.398438 15
            18.300781 L 15 20.898438 C 15 21.199219 15.300781 21.5 15.699219
            21.398438 C 19.398438 19.898438 22 16.300781 22 12.101562 C 22
            6.101562 16.898438 1.398438 10.898438 2.101562 Z M 10.898438
            2.101562 "
            />
          </svg>
        </div>
        <div>
          <p class="text-4xl">Mathis Dousse</p>
          <p class="text-2xl pt-3 pb-5 font-light">Etudiant en Informatique</p>
          <div class="flex justify-center sm:block">
            <a
              href="../assets/Mathis_Dousse_CV.pdf"
              download
              class="
                flex
                px-3
                py-2
                rounded
                border
                w-fit
                shadow-custom
                hover:bg-teal-400 hover:text-white hover:cursor-pointer
                transition-colors
                duration-300
                sm:mb-0
                mb-10
              "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="16"></line>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="8" y1="20" x2="16" y2="20"></line>
              </svg>

              <span>Download CV</span>
            </a>
          </div>
        </div> -->