// Testimonial Data
const testimonials = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: 4.5,
    comment:
      "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
    image: "./images/user1.png",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: 4.5,
    comment:
      "I like it because I like to travel far and still can connect with high speed.",
    image: "./images/user2.png",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: 4.5,
    comment:
      "This is very unusual for my business that currently requires a virtual private network that has high security.",
    image: "./images/user3.png",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5.0,
    comment:
      "The best VPN service I've ever used. Perfect for remote work and accessing region-locked content. Highly recommended!",
    image: "./images/user1.png",
  },
  {
    name: "Sarah Williams",
    location: "London, UK",
    rating: 4.8,
    comment:
      "Excellent service with great speeds. I use it daily for both work and streaming. The customer support is outstanding.",
    image: "./images/user2.png",
  },
  {
    name: "Alex Rodriguez",
    location: "Madrid, Spain",
    rating: 4.7,
    comment:
      "Been using it for 6 months now. The connection is stable and secure. Perfect for my online banking and business needs.",
    image: "./images/user3.png",
  },
  {
    name: "Emma Thompson",
    location: "Sydney, Australia",
    rating: 4.9,
    comment:
      "Amazing VPN service with fantastic global coverage. Never had any issues with speed or connectivity. Worth every penny!",
    image: "./images/user1.png",
  },
];

let swiper; // 👈 Declare globally

const swiperOptions = {
  slidesPerView: 2.5,
  spaceBetween: 30,
  loop: true,
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: false,
  // },
  slidesPerGroup: 1,
  watchSlidesProgress: true,
  slidesOffsetAfter: 40,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
  on: {
    init: equalizeSlideHeights,
    resize: equalizeSlideHeights,
    slideChangeTransitionEnd: equalizeSlideHeights,
  },
};

const swiperInit = () => {
  swiper = new Swiper(".testimonialSwiper", swiperOptions);
};

function generateTestimonials() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  testimonials.forEach((testimonial) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide h-full";

    slide.innerHTML = `
      <div class="h-full flex lg:p-[30px] md:p-6 p-5 flex-col gap-5 border-2 border-[#DDDDDD] rounded-[10px] hover:cursor-pointer hover:border-[#F53838] transition-all duration-300 ease-in-out">
          <div class="flex gap-2.5 items-center">
              <div class="flex gap-5 w-full max-w-[calc(100% - 70px)]">
                  <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                  <div class="flex flex-col gap-[5px] self-center">
                      <h3 class="text-secondary-h3 text-primary-heading leading-[100%]">
                          ${testimonial.name}
                      </h3>
                      <span class="text-secondary-p text-primary-text pl-[1px] leading-[100%]">
                          ${testimonial.location}
                      </span>
                  </div>
              </div>
              <div class="flex gap-2.5 items-center max-w-[50px] w-full">
                  <span class="text-primary-p text-primary">
                      ${testimonial.rating}
                  </span>
                  <img src="./images/star.png" alt="star" class="w-4 max-w-full h-4">
              </div>
          </div>
          <div class="flex flex-col gap-4 text-primary text-primary-p">
              <p>"${testimonial.comment}"</p>
          </div>
      </div>
    `;

    swiperWrapper.appendChild(slide);
  });
}

// ✅ Equal height only for visible, non-duplicate slides
function equalizeSlideHeights() {
  const swiperInstance = document.querySelector(".testimonialSwiper")?.swiper;
  if (!swiperInstance) return;

  // Reset all slide heights
  swiperInstance.slides.forEach((slide) => {
    slide.style.height = "auto";
  });

  const visibleSlides = swiperInstance.slides.filter(
    (slide) =>
      slide.classList.contains("swiper-slide-visible") &&
      !slide.classList.contains("swiper-slide-duplicate")
  );

  if (!visibleSlides.length) return;

  let maxHeight = 0;
  visibleSlides.forEach((slide) => {
    const content = slide.querySelector("div"); // inner card
    if (content) {
      content.style.height = "auto"; // reset
      maxHeight = Math.max(maxHeight, content.scrollHeight);
    }
  });

  visibleSlides.forEach((slide) => {
    const content = slide.querySelector("div");
    if (content) {
      content.style.height = `${maxHeight}px`;
    }
  });
}

// ✅ Initialize all on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  generateTestimonials();
  swiperInit();
});
