var array = [ 7, 8, 9, 0, 1, 2, 3 ];
function processArray(){
    for (var i=0; i<array.length; ++i){
        var result = handleData(arrayOfData[i]);
        postMessage(result);
    }
}

function handleData(data){
    var response = sendToRemoteServer(data);
    return response;
}

var worker;

function startWorker(){
    worker = new Worker('scripts/worker.js');
    worker.onmessage = function(event){
        document.getElementById("output").innerHTML = '<li>' + event.data + '</li>';
    };
}

function stopWorker(){
    worker.terminate();
}