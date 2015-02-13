// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    $('#fortune-text').load('/fortune');
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    var zipcode = $("#zipcode-field").val();
    $.get(url,
        function (result) {
             var forecast_text = result.forecast;
             var temp_text = result.temp;
             console.log(forecast_text);
             console.log(temp_text);
            $("#weather-info").html(forecast_text + temp_text);
        }
    );
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);






// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    $.post("/order-melons",
        $('#order-form').serialize(),
        function (result) {
            $('#order-status').html(result.msg);
            console.log(result.code);
            if (result.code === "ERROR"){
                $('#order-status').addClass('order-error');
            }
            // TODO: show the result message after your form
            // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
        }
    );
}

$("#order-form").on('submit', orderMelons);


