
function getPosition(position){
    console.log(position.coords.latitude + ' ' + position.coords.longitude);
}

function refreshPosition(position){
    var list = document.getElementById('positionList');
    list.innerHTML += '<li>' + position.coords.latitude + ' ' + position.coords.longtitude + '</li>';

}

navigator.geolocation.watchPosition(refreshPosition);