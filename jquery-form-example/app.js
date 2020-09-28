$(function() {
    $("form[name="registration"]").validate({
        rules: {
            name: "required",
            address: "required",
            userid: "required",
            email: "required",
            password: {
                required: true,
                minlength: 6,
            },
            phone: "number",
            email: "email",


        }
    });
});