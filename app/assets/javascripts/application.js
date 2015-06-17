// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

// disable button when clicked
function disabledButton(){
  var button = document.getElementById("btn").disabled;
  button.disabled = 'true';
}

// delete row
function deleteRow(button){
  var parentDiv = button.parentNode.parentNode.parentNode;
  parentDiv.style.display = "none";
}

// show/hide
function showHide(){
    if document.getElementsByClassName("fafa-plus").onclick;{
      document.getElementById("course_grade_thresholds_attributes_4_id").style.display ='none';
    } else {
      document.getElementById("course_grade_thresholds_attributes_4_id").style.display ='block';
      }
  }


// function hideRow() {
// // var foo = document.getElementById("row").onload = 'hidden';
//   alert("WAKE UP!");
// // foo.style.visibility = 'hidden';
// x
//
// }

// check if a row has been shown,
//
// button to do smooth scroll: $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
