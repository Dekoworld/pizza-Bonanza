
//User Interface Logic
$(document).ready(function (event) {
    /////Landing Page Btns
    $("#pickup-btn").click(function () {
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("PICKUP BY CUSTOMER");
    });
    $("#delivery-btn").click(function () {
        $("#address").show();
        $("#pickup-btn,#delivery-btn,#landing-tagline").hide();
    });