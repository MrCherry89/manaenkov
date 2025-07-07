$(document).ready(function() {
    $('[data-feedback-form]').on("submit", function(){
        $.ajax({
            url: '/email.php',
            method: 'post',
            dataType: 'html',
            data: $(this).serialize(),
            success: function(data){
                $('.feedback-form').addClass('_hide');
                $('.form-success').addClass('_active');
            }
        });
        return false;
    });
});