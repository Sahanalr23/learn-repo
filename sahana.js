$(document).ready(function(){
    //on-click show -close tooltip
    $('.red-tooltip').tooltip({
      trigger:'click'
    });   
    //on-hover hide -close tooltip
    $('.red-tooltip').on('hover', function () {
    $(this).tooltip('hide');
   });
   //submit tooltip
   $("#myTooltip").tooltip({
    title: "<h6><img src='heart.png' width='30px'> Hello, <b>I'm</b> <i>Submit button</i></h6>",
    html: true
   });
 });

