jQuery(document).ready(function ($) {
  // Set current year
  $("#year").text(new Date().getFullYear());

  // Header style on scroll
  function updateHeaderOnScroll() {
    const $header = $(".main-header");
    const $logo = $(".logo-txt");
    const $signBtn = $(".sign-in");
    const $hamburgerBtn = $(".hamburger-btn");
    const $menuLink = $(".menu-link");

    if ($(window).scrollTop() > 0) {
      $header
        .removeClass("top-[34px] bg-white")
        .addClass("top-0 bg-black/75 backdrop-blur-md shadow-lg");
      $logo.removeClass("text-primary-header").addClass("text-white");
      $signBtn
        .removeClass("text-primary-header hover:text-[#152033]")
        .addClass("text-white hover:text-[#edf2f7]");
      $hamburgerBtn
        .removeClass("text-hamburger-btn")
        .addClass("text-hamburger-btn-dark");
      $menuLink
        .removeClass("text-menu-text hover:text-sky-500")
        .addClass("text-hamburger-btn-dark hover:text-teal-300");
    } else {
      $header
        .removeClass("top-0 bg-black/75 backdrop-blur-md shadow-lg")
        .addClass("top-[34px] bg-white");
      $logo.removeClass("text-white").addClass("text-primary-header");
      $signBtn
        .removeClass("text-white hover:text-[#edf2f7]")
        .addClass("text-primary-header hover:text-[#152033]");
      $hamburgerBtn
        .removeClass("text-hamburger-btn-dark")
        .addClass("text-hamburger-btn");
      $menuLink
        .removeClass("text-hamburger-btn-dark hover:text-teal-300")
        .addClass("text-menu-text hover:text-sky-500");
    }
  }

  // Run once on page load
  updateHeaderOnScroll();

  // Apply on scroll
  $(window).on("scroll", updateHeaderOnScroll);

  // Hamburger menu toggle
  $(".hamburger-btn").on("click", function () {
    $(".mobile-menu").slideToggle(200);
  });
});
