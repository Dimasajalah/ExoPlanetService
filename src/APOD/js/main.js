initialConfigs();

// Events.
function getURL(random = false, date = null) {
  let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
  if (random) url += "&count=1";
  if (date) url += `&date=${date}`;
  return url;
}

// Buttons.
$('#random-header').click(displayRandomPicture);
$('#random').click(displayRandomPicture);
$('#go-to-form').click(displayForm);
$('#back-btn').click(backToToday);

// Form.
$('.main-form').first().submit((event) => {
  event.preventDefault();

  const data = new FormData(event.target),
        date = data.get('date');
  
  const url = getURL(false, date); 
  handleData(url, displayPictureOfTheDay, displayError);

  event.target.reset();
});

// Modal.
$('#media-img').click(displayModal);
$('#close-modal').click(hideModal);
$('body').keyup((event) => {
  if (event.which === 27) {
    event.preventDefault();
    hideModal();
  }
});

function handleData(url, onSuccess, onError) {
  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    success: onSuccess,
    error: onError
  });
}

// Functions.
function initialConfigs() {
  const url = getURL();

  handleData(url, (data) => {
    displayPictureOfTheDay(data);
    setInputDateConfigs(data);
  });
  setCurrentYear($('#year')[0]);
}

function displayRandomPicture() {
  const url = getURL(true);

  handleData(url, displayPictureOfTheDay);
}

function displayPictureOfTheDay(data) {
  // If it's random data, returns an Array, so gets the first JSON.
  if (Array.isArray(data))
    data = data[0];
  
  hideForm();
  setContents(data);
}

function setContents(data) {
  // Defines the date and the media content.
  $('#date').text(getFormattedDate(data.date));
  
  if (data.media_type === 'image') {
    const altText = data.copyright ? `${data.title} by ${data.copyright}` : data.title;

    $('#media-video').hide();
    $('#modal-img').attr({ src: data.url, alt: altText });
    $('#media-img').attr({ src: data.url, alt: altText }).show();
    $('#hdr-img').attr('href', data.hdurl).show();
  } else {
    $('#media-img').hide();
    $('#hdr-img').hide();
    $('#media-video').attr('src', data.url).show();
  }
  
  // Defines the title, the explanation and the credits.
  $('#title').text(data.title);
  $('#explanation').text(data.explanation);
  
  if (data.copyright) {
    $('#copy-owner').text(data.copyright);
    $('.credits').first().show();
  } else
    $('.credits').first().hide();
}

function setInputDateConfigs(data) {
  $('#input-date').attr({ max: data.date, value: data.date });
}

function displayForm() {
  $('.content').first().hide();
  $('.main-form').first().show('fast');

  // Buttons.
  $('#go-to-form').hide();
  $('#hdr-img').hide();
  $('#back-btn').show();
  $('#random').show();
}

function hideForm() {
  $('.main-form').first().hide();
  $('.content').first().show();

  // Buttons.
  $('#go-to-form').show();
  $('#hdr-img').show();
  $('#back-btn').hide();
  $('#random').hide();
}

function backToToday() {
  $('.main-form').first().hide();
  $('.content').first().show();

  // Buttons.
  $('#go-to-form').show();
  $('#back-btn').hide();
  $('#random').hide();
}

function displayError(data) {
  $('#error').text(data.responseJSON.msg).show('fast');
  setTimeout(() => $('#error').hide('fast'), 5000);
}

function displayModal() {
  $('#modal').show('fast');
  $('body').css('overflow-y', 'hidden');
  $('.container-col').first().css('filter', 'blur(3px)');
}

function hideModal() {
  $('#modal').hide('fast');
  $('body').css('overflow-y', 'auto');
  $('.container-col').first().css('filter', 'none');
}

