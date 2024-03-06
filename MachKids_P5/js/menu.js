$(document).ready(function() {
    $('.hamburger-menu').on('click', function() {
      $(this).toggleClass('is-active');
      $('#navbarNav').collapse('toggle');
    });
  });