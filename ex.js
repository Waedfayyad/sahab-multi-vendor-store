$(function () {

$("p").not(":has(*)").not(".ignore");
$("div").html($("p").not(":has(*)").not(".ignore"));
});