﻿(function () {

    $(function () {
        var AccountManager = {};
        AccountManager.AjaxLogin = function () {
            var form = $("#form_login");
            $.ajax({
                url: "/Account/LoginPopup",
                type: "POST",
                data: form.serialize(),
                //dataType: "json",
                //contentType: "application/json; charset=utf-8",
                success: function (data) {
                    alert(data.rez);
                }
            });
        }
        var aMgr = AccountManager;

        $("#btnLoginPopup").on("click", function () {
            aMgr.AjaxLogin();
        });


        AccountManager.AjaxRegister = function () {
            var form = $("#form_register");
            $.ajax({
                url: "/Account/RegisterPopup",
                type: "POST",
                data: form.serialize(),
                //dataType: "json",
                //contentType: "application/json; charset=utf-8",
                success: function (data) {
                    alert(data.rez);
                }
            });
        }
        var aMgr = AccountManager;

        $("#btnRegisterPopup").on("click", function () {
            aMgr.AjaxRegister();
        });
    });

})();