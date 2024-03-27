$(document).ready(function() {
  var loader = $('.loader');
  var carouselCommentsContainer = $('#comments-inner');
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
        carouselCommentsContainer.append(carouselItem);
        });
      },
      error: function(error) {
        console.log("Could not fetch API");
      }
    })
  }, 1500);

  function ratingCount(stars) {
    var starON = `<img src="images/star_on.png" alt="star on" width="15px"/>`
    var starOFF = `<img src="images/star_off.png" alt="star off" width="15px"/>`
    var finalRating = '';
    var i = 0
    for (i; i < stars; i++) {
      finalRating += starON;
    }
    for (i; i < 5; i++) {
      finalRating += starOFF
    }
    return finalRating;
  }

  var carouselItems = $('<div class"carousel-item"></div>')
  var carouselVideoContainer = $('#video_inner');
  var videoRow = $('<div class="row"></div>');
  setTimeout(() => {
    $.ajax({
      type: 'GET',
      url: 'https://smileschool-api.hbtn.info/popular-tutorials',
      success: function(data) {
        data.forEach(function(element, idx) {
          var carouselItem = `
          <div class="col-sm-6 col-md-6 col-lg-3 d-none d-sm-flex justify-content-md-start justify-content-lg-center">
            <div class="card">
              <img
                src="${element.thumb_url}"
                class="card-img-top"
                alt="Video thumbnail"
              />
              <div class="card-img-overlay text-center">
                <img
                  src="images/play.png"
                  alt="Play"
                  width="64px"
                  class="align-self-center play-overlay"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title font-weight-bold">${element.title}</h5>
                <p class="card-text text-muted">${element['sub-title']}</p>
                <div class="creator d-flex align-items-center">
                  <img
                    src="${element.author_pic_url}"
                    alt="Creator of
                    Video"
                    width="30px"
                    class="rounded-circle"
                  />
                  <h6 class="pl-3 m-0 main-color">${element.author}</h6>
                </div>
                <div class="info pt-3 d-flex justify-content-between">
                  <div class="rating">
                    ${ratingCount(element.star)}
                  </div>
                  <span class="main-color">${element.duration}</span>
                </div>
              </div>
            </div>
          </div>`
        videoRow.append(carouselItem);
        if ((idx + 1) % 4 === 0 || idx === data.length - 1) {
          carouselItems.append(videoRow);
          carouselVideoContainer.append(carouselItems);
        }
        });
      },
      error: function(error) {
        console.log("Could not fetch API");
      }
    })
  }, 1500);

  function videoCounter() {
    videoCountText = $('.video-count');
    vidCount = 0;
    // function that counts number of videos on screen
    videoCountText.text(`${vidCount} videos`)
  }

  setTimeout(() => {
    function showCoursesVideos() {
      $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/courses',

      })
    }
  }, 1500);
});
