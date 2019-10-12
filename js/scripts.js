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
    $("form#address-form").submit(function (event) {
        event.preventDefault();
        var streetAddress = $("input#street-add").val();
        var city = $("input#city-add").val();
        var zipcode = $("input#zip-add").val();
        var newAddress = new Address(streetAddress, city, zipcode)
        $("#order-content").show();
        $("#landing-content").hide();
        $("#delivery-option").text("DELIVER TO: " + newAddress.deliveryAddress);
    });