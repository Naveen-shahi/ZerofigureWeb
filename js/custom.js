
//for select Subscription
$('.customSelectTag .heading').on('click', function () {
   $(this).parents('.customSelectTag').addClass('open');
});
$('.customSelectTag li').on('click', function () {
   $(this).parents('.customSelectTag').find('.heading').text($(this).attr('data-value'));
   $(this).parents('.customSelectTag').removeClass('open').addClass('nowSelected');
   console.log($(this).attr('data-value'));
})
// for tabs
$('.tabHeader li a').on('click', function () {
   $('.tabHeader li a').removeClass('active');
   $(this).addClass('active')
   $('.tabBody div').removeClass('active');
   $('.tabBody ' + $(this).attr('data-href')).addClass('active');
})
//for Edit my detail
$('.editBtn').on('click', function () {
   $(this).parents('tr').find('input').prop('readonly', false).focus();
})
//for frame Name Edit
$('.frameName .pencilIcon').on('click', function () {
   $(this).parents('.frameName').addClass('editMode');
})
//for Active frame modal 
$('.activeFrame').on('click', function () {
   $('body').addClass('frameActiveOpen');
})
$('.frameModal .closeIcon,.overlay').on('click', function () {
   $('body').removeClass('frameActiveOpen');
})
//for modal create account & sing in
$('.myaccountBtn').on('click', function () {
   $('body').addClass('openSingIn')
})
// for Enter tag
var myValues = [];
// var i = myValues.length;
$(document).on('keypress', function (e) {
   if (e.which == 13) {
      appendChips();
   }
});
function appendChips() {
   if ($('#enterTags').val()) {
      $('.makeTags input').before(`
      <span class="chips"><span class="text">${$('#enterTags').val()}</span> <i class="delIcon"></i></span>
    `)
      // i++;
      myValues.push($('#enterTags').val());
      $('.makeTags input').val('')
      $('.makeTags input').focus();
      console.log(myValues);
   }
}
// for delete Tags
$(document).on('click', '.makeTags i.delIcon', function () {
   console.log($(this).parent().attr('data-index'), 'ff')
   $(this).parent().remove();
   myValues.splice(myValues.indexOf($(this).parent().find('.text').text()),1);
   console.log(myValues)
})
// .on('keyup', function () {

// })
//for password field 
$('i.passwordShowBtn').on('click', function () {
   $(this).toggleClass("eyeOpen");
   if ($(this).parents('.form-group').find("input").attr("type") === "password") {
      $(this).parents('.form-group').find("input").attr("type", "text");
   } else {
      $(this).parents('.form-group').find("input").attr("type", "password");
   }
});