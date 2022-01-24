
//for select Subscription
$('.selectSubscription .heading').on('click',function(){
  $(this).parents('.selectSubscription').addClass('open');
});
$('.selectSubscription li').on('click',function(){
   $(this).parents('.selectSubscription').find('.heading').text($(this).attr('data-value'));
   $(this).parents('.selectSubscription').removeClass('open');
   console.log($(this).attr('data-value'));
})
// for tabs
$('.tabHeader li a').on('click',function(){
   $('.tabHeader li a').removeClass('active');
   $(this).addClass('active')
   $('.tabBody div').removeClass('active');
   $('.tabBody '+$(this).attr('data-href')).addClass('active');
})
//for Edit my detail
$('.editBtn').on('click',function(){
   $(this).parents('tr').find('input').prop('readonly', false).focus();
})
//for modal create account & sing in
$('.myaccountBtn').on('click',function(){
   $('body').addClass('openSingIn')
}) 
//for password field 
$('i.passwordShowBtn').on('click', function () {
    $(this).toggleClass("eyeOpen");
    if ($(this).parents('.form-group').find("input").attr("type") === "password") {
       $(this).parents('.form-group').find("input").attr("type", "text");
    } else {
       $(this).parents('.form-group').find("input").attr("type", "password");
    }  
 });