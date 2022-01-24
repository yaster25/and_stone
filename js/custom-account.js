
$(document).ready(function(){
    
    $('.js-edit-account-contact-additional').click(function(){ 
        $(".form-account-contact-additional").find('input').prop("disabled", false);
        $(".form-account-contact-additional").find('input').prop("readonly", false);
        $('.account-contact-additional__buttons').show();
        $(this).hide();
        return false;
    });
    
    $('.js-edit-account-contact-additional-reset').click(function(){ 
        $(".form-account-contact-additional").find('input').prop("disabled", true);
        $(".form-account-contact-additional").find('input').prop("readonly", true);
        $('.account-contact-additional__buttons').hide();
        $('.js-edit-account-contact-additional').show();
        return false;
    });
    
    
    $('.js-account-contact-address-edit').click(function(){ 
        $(".form-account-contact-address").find('input').prop("disabled", false);
        $(".form-account-contact-address").find('input').prop("readonly", false);
        $('.account-contact-address__buttons').show();
        $(this).hide();
        return false;
    });

    $('.js-account-contact-address-reset').click(function(){ 
        $(".form-account-contact-address").find('input').prop("disabled", true);
        $(".form-account-contact-address").find('input').prop("readonly", true);
        $('.account-contact-address__buttons').hide();
        $('.js-account-contact-address-edit').show();
        return false;
    });
    
    
    $('.form-auth-lastname').each(function() {  
        $(this).validate({  
             //ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'lastname': "required"
            },
            messages: {
                'lastname': "Обязательно заполните фамилию"
            },
            submitHandler: function(form){
                $.fancybox.open({
                    src  : '#popup-edit-firstname',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false
                });
                //$.fancybox.close();
                   
            }
         });
    });
    
    $('.form-auth-firstname').each(function() {  
        $(this).validate({  
             //ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            rules: {
                'firstname': "required"
            },
            messages: {
                'firstname': "Обязательно заполните имя"
            },
            submitHandler: function(form){
                $.fancybox.open({
                    src  : '#popup-edit-surname',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false
                });
                //$.fancybox.close();
                   
            }
         });
    });

    
    
});
