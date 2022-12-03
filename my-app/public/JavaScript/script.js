$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      item:3,
      auto:true,
      loop:true,
      speed: 600,
      pauseOnHover: true,
      controls: false,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  }); 
})