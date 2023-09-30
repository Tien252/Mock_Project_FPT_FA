$().ready(function () {
    $("#back-link").click(function () {
        $.ajax({
            url: "/home",
            success: function (data) {
                $("#homeBody").html(data);
            }
        });
    });

    $("#form-editAccount").validate({
        errorClass: "error-message",
        errorElement: "label",

        rules: {
            username: {
                required: true,
                maxlength: 50,
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 50,
            },
            rePassword: {
                required: true,
                minlength: 6,
                maxlength: 50,
                equalTo: "#password",
            },
            fullName: {
                required: true,
                maxlength: 50,
            },
            dateOfBirth: {
                required: true,
            },
            gender: {
                required: true,
            },
            identityCard: {
                required: true,
                maxlength: 50,
            },
            email: {
                required: true,
                maxlength: 50,
                email: true
            },
            address: {
                required: true,
                maxlength: 100,
            },
            phoneNumber: {
                required: true,
                maxlength: 10,
            },
        },
        messages: {
            username: {
                required: "Please enter Username",
                maxlength: "Username is invalid",
            },
            password: {
                required: "Please enter Password",
                minlength: "Password is not match with rule",
                maxlength: "Password is not match with rule",
            },
            rePassword: {
                required: "Please re-enter Password",
                minlength: "Password is not match with rule",
                maxlength: "Password is not match with rule",
                equalTo: "Please enter the same password as above",
            },
            fullName: {
                required: "Please enter Full Name",
                maxlength: "Full Name is invalid",
            },
            dateOfBirth: {
                required: "Please enter Date Of Birth",
            },
            gender: {
                required: "Please enter Gender",
            },
            identityCard: {
                required: "Please enter Identity Card",
                maxlength: "Identity Card is invalid",
            },
            email: {
                required: "Please enter Email",
                maxlength: "Email is invalid",
                email: "Email is invalid",
            },
            address: {
                required: "Please enter Address",
                maxlength: "Address is invalid",
            },
            phoneNumber: {
                required: "Please enter Phone Number",
                maxlength: "Phone Number is invalid",
            },
        }
    });
    $('#form-editAccount').submit(function (event) {
        event.preventDefault(); // Ngăn chặn chuyển hướng trang sau khi submit
        if($("#form-editAccount").valid()){
            var formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: $(this).attr('action'), // Lấy URL action từ thuộc tính "action" của form
                data: formData,
                contentType: false,
                processData: false,
                success: function (data) {
                    $("#homeBody").html(data);
                }
            });
        }
    });
});