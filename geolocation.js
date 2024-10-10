function getGeolocation() {
    if (navigator.geolocation) {
        // 如果浏览器支持 Geolocation API，则调用 getCurrentPosition 方法
        navigator.geolocation.getCurrentPosition(showGeolocation, showError);
    } else {
        // 如果浏览器不支持 Geolocation API，则更新页面内容以显示错误消息
        document.getElementById('geolocation').innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    // 更新页面内容以显示纬度和经度
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById('geolocation').innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('geolocation').innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('geolocation').innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            document.getElementById('geolocation').innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('geolocation').innerHTML = "An unknown error occurred.";
            break;
    }
}
