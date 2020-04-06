const api_key = '6cb9b116edf90cfe2d3fa9255bfe5933';


function submitForm() {
    let city = ($('.location input[name=City]').val())
    let zip = ($('.location input[name=Zipcode]').val())
    let country = ($('.location input[name=Country]').val())

    $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&zip=${zip},${country}&appid=${api_key}`,
        function (data) {

            if (city && zip && country) {

                $('.info').attr('id', 'showTable')
                
                let high = (((data.main.temp_max - 273.15) * (9 / 5)) + 32).toFixed(0)
                let low = (((data.main.temp_min - 273.15) * (9 / 5)) + 32).toFixed(0)
                let desc = data.weather[0].description
                let cur = (((data.main.temp - 273.15) * (9 / 5)) + 32).toFixed(0)
                let humidity = data.main.humidity
                
                $('.high').html(`${high}&deg;F`);
                $('.low').html(`${low}&deg;F`);
                $('.forecast').html(`Expected conditions: ${desc}</br>It is currently: ${cur}&deg;F`);
                $('.humidity').html(`${humidity}%`)
            
            } else {
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'One or more input fields empty',
                });
            }0
        })
};