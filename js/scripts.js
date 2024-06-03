var $ = jQuery;
$(document).ready(function(){
   
    $('body').on('click', "a.side-bar-open" , function(e){
        e.preventDefault();
        $('.dashboard-sidebar').toggleClass('active');
        $('.dashboard-inner > .row > .col-md-3').toggleClass('active');
    })
    $('body').on('click', ".sitter-profile-btns > a" , function(e){
      e.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
  })
  $('body').on('click', "a.messages-side-bar-open" , function(e){
        e.preventDefault();
        $('.messages-section .col-md-4').toggleClass('active');
        $('.messages-section .users-message-list').toggleClass('active');
  })
    
    $('#toggle-cat-dog').find('input[type="radio"]').change(function(){
        var $this = $(this);
        if($this.val() == 'cat'){
            $('#options-for-cat-search').show();
            $('#options-for-dog-search').hide();
        }else if($this.val() == 'dog'){
            $('#options-for-dog-search').show();
            $('#options-for-cat-search').hide();
        }else{
            $('#options-for-dog-search').show();
            $('#options-for-cat-search').hide();
        }
        return false;
    });
    $('#trigger-menu-sidebar').on('click' , function(){
        $('#the-main-menu').slideToggle()
        $(this).toggleClass('active');
        return false;
    });
    $('body').on('click', ".custom-radio-button > a" , function(e){
        e.preventDefault();
        var id 	=	$(this).data('tab');
        $('.tab[data-tab='+id+']').addClass('active').siblings().removeClass('active');

    });
    $('body').on('click', ".list-filter" , function(e){
        e.preventDefault();
        $('.sitter-tabs').addClass('active');
        $(this).addClass('active').siblings().removeClass('active');

    });
    $('body').on('click', ".tab-filter" , function(e){
        e.preventDefault();
        $('.sitter-tabs').removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');

    });
    
    $('.js-example-basic-single').select2();
    
    $(function() {
          $("#calendar").datepicker({
            onSelect: function(dateText, inst) {
              var selectedDate = new Date(dateText);
              var dateString = $.datepicker.formatDate('yy-mm-dd', selectedDate);
              var index = selectedDates.indexOf(dateString);
              if (index === -1) {
                selectedDates.push(dateString);
                $(this).find('td.ui-datepicker-current-day').addClass('selected');
              } else {
                selectedDates.splice(index, 1);
                $(this).find('td.ui-datepicker-current-day').removeClass('selected');
              }
              updateSelectedCount();
            },
            beforeShowDay: function(date) {
              var dateString = $.datepicker.formatDate('yy-mm-dd', date);
              if ($.inArray(dateString, selectedDates) != -1) {
                return [true, "selected"];
              }
              return [true, ""];
            }
          });
      
          var selectedDates = [];
      
          $(document).on('dblclick', '#calendar .ui-datepicker-calendar tbody td', function() {
            var date = $(this).text();
            var month = $("#calendar .ui-datepicker-month").val();
            var year = $("#calendar .ui-datepicker-year").val();
            var dateString = year + '-' + (parseInt(month) + 1) + '-' + date;
            if (!$(this).hasClass('ui-datepicker-unselectable')) {
              var index = selectedDates.indexOf(dateString);
              if (index === -1) {
                selectedDates.push(dateString);
                $(this).addClass('selected');
              } else {
                selectedDates.splice(index, 1);
                $(this).removeClass('selected');
              }
              updateSelectedCount();
            }
          });
      
          $(document).on('click', '#clearButton', function() {
            $("#calendar .selected").removeClass('selected');
            selectedDates = [];
            updateSelectedCount();
          });
      
          function updateSelectedCount() {
            var count = selectedDates.length;
            $("#selectedCount").text(count + " Day selected");
          }
        });
    
})


$(function() {
    $("#calendar").datepicker({
      onSelect: function(dateText, inst) {
        var selectedDate = new Date(dateText);
        var dateString = $.datepicker.formatDate('yy-mm-dd', selectedDate);
        var index = selectedDates.indexOf(dateString);
        if (index === -1) {
          selectedDates.push(dateString);
          $(this).find('td.ui-datepicker-current-day').addClass('selected');
        } else {
          selectedDates.splice(index, 1);
          $(this).find('td.ui-datepicker-current-day').removeClass('selected');
        }
        updateSelectedCount();
      },
      beforeShowDay: function(date) {
        var dateString = $.datepicker.formatDate('yy-mm-dd', date);
        if ($.inArray(dateString, selectedDates) != -1) {
          return [true, "selected"];
        }
        return [true, ""];
      }
    });

    var selectedDates = [];

    $(document).on('dblclick', '#calendar .ui-datepicker-calendar tbody td', function() {
      var date = $(this).text();
      var month = $("#calendar .ui-datepicker-month").val();
      var year = $("#calendar .ui-datepicker-year").val();
      var dateString = year + '-' + (parseInt(month) + 1) + '-' + date;
      if (!$(this).hasClass('ui-datepicker-unselectable')) {
        var index = selectedDates.indexOf(dateString);
        if (index === -1) {
          selectedDates.push(dateString);
          $(this).addClass('selected');
        } else {
          selectedDates.splice(index, 1);
          $(this).removeClass('selected');
        }
        updateSelectedCount();
      }
    });

    $(document).on('click', '#clearButton', function() {
      $("#calendar .selected").removeClass('selected');
      selectedDates = [];
      updateSelectedCount();
    });

    function updateSelectedCount() {
      var count = selectedDates.length;
      $("#selectedCount").text(count + " Day selected");
    }
  });
  function updateStickyPosition() {
    var sitterProfileData = document.getElementById('sitterProfileData');
    var stickyPosition = document.getElementById('stickyPosition');
    var stickyMargin = document.getElementsByClassName('stickymargin');
    var rect = sitterProfileData.getBoundingClientRect();
    var stickyHeight = stickyPosition.offsetHeight;

    // Check if the sticky element should be fixed
    if (rect.top <= 0 && rect.bottom >= stickyHeight) {
        stickyPosition.style.top = '0px';
        stickyMargin.style.marginTop = '44%';
    } else if (rect.top > 0) {
        stickyPosition.style.top = rect.top + 'px';
        stickyPosition.style.marginTop = '0px';
    } else if (rect.bottom < stickyHeight) {
        stickyPosition.style.top = (rect.bottom - stickyHeight) + 'px';
    }
}

window.addEventListener('scroll', updateStickyPosition);
window.addEventListener('resize', updateStickyPosition);

// Initial update to set the correct position
updateStickyPosition();
  $(document).ready(function() {
    function modifyElements() {
        if ($(window).width() <= 991) {
            // Remove class and ID from .sticky-remove
            $('.sticky-remove').removeClass('sticky-position').removeAttr('id');
            
            // Add class and ID to .profile-book-btns
        } 
    }
  
    // Check on page load
    modifyElements();
  
    // Check on window resize
    $(window).resize(function() {
        modifyElements();
    });
  });
  function moveToNext(current, nextFieldID) {
    if (current.value.length >= 1) {
        document.getElementById(nextFieldID).focus();
    }
}

function moveToPrevious(event, prevFieldID) {
    if (event.key === "Backspace" && !event.target.value) {
        document.getElementById(prevFieldID).focus();
    }
}
  var slider3 = new rSlider({
    target: '#sampleSlider',
    values: {min: 0, max: 50},
    step: 5,
    range: true,
    set: [0, 50],
    scale: false,
    labels: false,
    onChange: function (vals) {
        console.log(vals);
    }
});
var slider2 = new rSlider({
    target: '#sampleSlider2',
    values: {min: 2, max: 19},
    step: 5,
    range: true,
    set: [0, 50],
    scale: false,
    labels: false,
    onChange: function (vals) {
        console.log(vals);
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const videoOverlay = document.getElementById("videoOverlay");

  const playVideo = () => {
      video.play();
      videoOverlay.classList.add("hidden");
  };

  videoOverlay.addEventListener("click", playVideo);

  video.addEventListener("pause", () => {
      videoOverlay.classList.remove("hidden");
  });

  video.addEventListener("play", () => {
      videoOverlay.classList.add("hidden");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); 

      const formData = new FormData(form); 

      fetch("your-server-endpoint-url", {
          method: "POST",
          body: formData
      })
      .then(response => response.json())
      .then(data => {
          document.getElementById("result").innerText = "Form submitted successfully!";
          console.log("Success:", data);
      })
      .catch(error => {
          document.getElementById("result").innerText = "Error submitting form.";
          console.error("Error:", error);
      });
  });
});
const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer(); // For parsing multipart/form-data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/your-server-endpoint-url', upload.none(), (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Process the form data (e.g., save to database)

    res.json({ message: "Form data received", name, email, message });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});












