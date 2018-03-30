var sections = document.getElementsByTagName('section');
for (var i = 0; i< sections.length; ++i){
    sections[i].onclick = handleOnclick;
}

function handleOnclick(event){
    console.log('current element ' + this.className + ' | target element: ' + event.target.className);
    if (this.className == 'regular') {
        event.stopPropagation();
        console.log('event propogation stopped');
    }
}

function getPosition(position){
    console.log(position.coords.latitude + ' ' + position.coords.longitude);
}

function refreshPosition(position){
    var list = document.getElementById('positionList');
    list.innerHTML += '<li>' + position.coords.latitude + ' ' + position.coords.longtitude + '</li>';

}

navigator.geolocation.watchPosition(refreshPosition);