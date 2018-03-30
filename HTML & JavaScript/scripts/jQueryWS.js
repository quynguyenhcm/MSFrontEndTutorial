// function makeRequest(){
//     $.get({
//         url: 'http://httpbin.org/user-agent',
//         dataType: 'json'
//     })
//         .done(function(response) {
//             alert(JSON.stringify(response));
//             $('body > p').text(
//                 response['user-agent']
//             );
//         });
// }

function makeRequest(){
$.getJSON('http://httpbin.org/ip')
.done(function (response) {
    alert(JSON.stringify(response));
    $('body > p').text(response.origin);
})
}
$(document).ready(function() {
    makeRequest();
})