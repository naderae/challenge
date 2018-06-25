$(document).ready(function() {
  var dropdown_cat = document.getElementById('categories');
  var dropdown_sub = document.getElementById('subcategories');

  var rand1 = Math.floor(Math.random() *10);
  var rand2 = Math.floor(Math.random() *10);


  var option1 = document.createElement("option");
  option1.value = rand1;
  option1.text = "category " + rand1.toString();
  dropdown_cat.appendChild(option1);


  var option2 = document.createElement("option");
  option2.value = rand2;
  option2.text = "category " +rand2.toString();
  dropdown_cat.appendChild(option2);






    $('#categories').change(function(){

      // $('.all_subcategories').css("display","inline-block");
      $('#subcategories').empty();
      // var option = document.createElement("option");
      $('#subcategories').append('<option select=selected>All SubCategories</option>')


      var selected_option = $('#categories').find(":selected").text();
      console.log(selected_option);
      var cats = document.getElementById("categories").options;

      let option;



      if (selected_option == "All Categories") {
        //
        $('.all_subcategories').hide();
        // $('#all_subcategories').css( "display", "none" );
        for (var i = 1; i < cats.length; i++) {
          // console.log(cats[i].text);
          option = document.createElement("option");
          option.text = rand1 + " " + "(" + cats[i].text + ")";
          $('#subcategories').append(option);

          option = document.createElement("option");
          option.text = rand2 + " " + "(" + cats[i].text + ")";
          $('#subcategories').append(option);
      }

      } else {
      $('.all_subcategories').css("display","inline-block");
      var option3 = document.createElement("option");
      option3.text = rand1 + " " + "(" + selected_option + ")";
      dropdown_sub.appendChild(option3);

      var option4 = document.createElement("option");
      option4.text = rand2 + " " + "(" + selected_option + ")";
      dropdown_sub.appendChild(option4);
      }





    $('#subcategories').change(function(){
      $('.all_brands').css("display","inline-block");
      $('#brands').empty();

      $('#brands').append('<option select=selected>All Brands</option>')

      var selected_option = $('#subcategories').find(":selected").text();
      var sub_cats = document.getElementById("subcategories").options;
      let option;


      if (selected_option == "All SubCategories") {
        for (var i = 1; i < sub_cats.length; i++) {
          option = document.createElement("option");
          option.text = rand1 + " " + "(" + sub_cats[i].text + ")";
          $('#brands').append(option);

          option = document.createElement("option");
          option.text = rand2 + " " + "(" + sub_cats[i].text + ")";
          $('#brands').append(option);
        }
      } else {
        option = document.createElement("option");
        option.text = rand1 + " " + "(" + selected_option + ")";
        $('#brands').append(option);
        console.log(option);

        option = document.createElement("option");
        option.text = rand2 + " " + "(" + selected_option + ")";
        $('#brands').append(option);
        console.log(option);
      }


      })



  });
});





function apply(){
  var sub_cats = document.getElementById("subcategories").options;
  if (sub_cats.length > 1) {
    $('.all_subcategories').css("display","inline-block");
  } else {
    alert('You must select a category first');
  }
}

function reset(){
  var sub_cats = document.getElementById("subcategories").options;
  var all_brands = document.getElementById("brands").options;


  if (sub_cats.length > 1 && all_brands.length > 1) {
    $('#categories').val('All Categories');
    $('.all_subcategories').css("display","none");
    $('#brands').val([])
  }
}
