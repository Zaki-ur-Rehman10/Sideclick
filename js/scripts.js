var $ = jQuery;
$(document).ready(function(){
   
    $('body').on('click', "a.side-bar-open" , function(e){
        e.preventDefault();
        $('.dashboard-sidebar').toggleClass('active');
        $('.dashboard-inner > .row > .col-md-3').toggleClass('active');
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
    // $('body').on('click', ".dash-menu-item" , function(e){
    //     e.preventDefault();
    //     var id 	=	$(this).data('tab');
    //     $('.tab[data-tab='+id+']').addClass('active').siblings().removeClass('active');
    //     $(this).addClass('active').siblings().removeClass('active');

    // });
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