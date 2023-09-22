


$(function () {

  var my_number = 0;
  var fontSizenum = 16;
  var par = $('p');
  var my_pluse = $(".pluse");
  var my_minus = $(".minus");
  var my_reset = $(".reset");
  console.log(my_pluse);
  my_pluse.click(function () {
    my_number++;
    fontSizenum++;
    par.text(my_number);
    par.css("font-size", fontSizenum + "px");
  });
  my_minus.click(function () {
    my_number--;
    fontSizenum--;
    par.text(my_number);
    par.css("font-size", fontSizenum + "px");
  });
  my_reset.click(function () {
    my_number=0;
    fontSizenum=16;
    par.text(my_number);
    par.css("font-size", fontSizenum + "px");
  });
});


