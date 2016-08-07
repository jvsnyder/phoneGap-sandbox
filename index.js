$latitude = null
$longitude = null

$(document).ready(function(){
    document.addEventListener('deviceready', onDeviceReady, false)

    function onDeviceReady() {
        
    }

    function geo(pos)
    {
        $latitude = pos.coords.latitude
        $longitude = pos.coords.$longitude
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(geo, function(er){alert('Unable to locate device')})
        alert('got lat and long')
    }
    else {
        alert('the application requires geolocation to be enabled on the device')
    }


})