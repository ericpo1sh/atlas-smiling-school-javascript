$(document).ready(function() {
  var loader = $('.loader');
  var carouselContainer = $('#inner');
  var nextArrow = $('.carousel-control-next');
  var backArrow = $('.carousel-control-prev');
  backArrow.hide();
  nextArrow.hide()
  setTimeout(() => {
  $.ajax({
    type: 'GET',
    url: 'https://smileschool-api.hbtn.info/quotes',
    success: function(data) {
      loader.hide();
      backArrow.show();
      nextArrow.show()
      data.forEach(function(element, idx) {
        var activeStatus = (idx == 0) ? "active" : "" 
        var carouselItem = `
        <div class="carousel-item ${activeStatus}">
          <div class="row mx-auto align-items-center">
            <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
              <img
                src="${element.pic_url}"
                class="d-block align-self-center"
                alt="Carousel Pic 1"
              />
            </div>
            <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
              <div class="quote-text">
                <p class="text-white">${element.text}</p>
                <h4 class="text-white font-weight-bold">${element.name}</h4>
                <span class="text-white">${element.title}</span>
              </div>
            </div>
          </div>
        </div>`
        carouselContainer.append(carouselItem);
        });
      },
      error: function(error) {
        console.log("Could not fetch API");
      }
    })
  }, 1500);
});
