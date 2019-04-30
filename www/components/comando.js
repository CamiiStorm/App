// This is a JavaScript file
$(document).on("click", "#camera", function(){
  navigator.camera.getPicture (onSuccess, onFail, {
    quality:50,
    destinationType: Camera.DestinationType.DATA_URL,
    saveToPhotoAlbum:true,

  });

function onSuccess (imageURI) {
    var image =  document.getElementById ('my Image');
    image.src = imageURI;
} 
  function onFail (message){
      alert('Failed because:' + message);
  }
  });
   $(document).on("click", "#btn", function() {

     var onSuccess = function(position){
        L.mapquest.key = 'xHmkdc5vLO1qt3U9ooBdyjIV2DAupiwY';
        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 18
        });   

        map.addControl(L.mapquest.control());
        }

        navigator.geolocation.getCurrentPosition(onSuccess);

        checkConnection();

    });

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    if(networkState != states[Connection.NONE]){
      navigator.notification.beep(1);
    }
    else{
      navigator.notification.beep(3);
      navigator.vibrate(6000);
      navigator.notification.alert("1", "2", "3", "4");
    }
}
