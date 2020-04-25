
$(document).ready(function(){

  /*Sitebar menu*/

  $('.sitebarBtn').click(function(){
    $('.sitebar').toggleClass('active');
    $('.sitebarBtn').toggleClass('toggle');
  });

  /*Portfolio page*/
  $(function(){
    $('.toggles-menu button').click(function(){

      console.log(this.id);
      var get_id = this.id;
      var get_current = $('.posts .' + get_id);

    $('.posts div').not(get_current).hide(500);
      get_current.show(500);
  });

  $('#all').click(function(){
    $('.posts div').show(500);
  });
})



 
  



});


 