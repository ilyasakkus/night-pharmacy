function getlist(){
    var city = document.getElementById("city").value;     
     fetch('https://www.nosyapi.com/apiv2/pharmacy?city='+city, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer Najo2GWhgdPw81ScW93TnkKFtEJMIwM70haofhNjtADrF5GdXS3CGgQ0OCCI'
    }
})
        .then(function(res) {
            return res.json();
        })
        .then(function(resJson) {
            document.getElementById('firstecz').innerText = resJson['data'][0]['EczaneAdi'];
                document.getElementById('firsteczadres').innerText = resJson['data'][0]['Adresi'];
                document.getElementById('firsteczyol').innerText = resJson['data'][0]['YolTarifi'];
                document.getElementById('firstecztel').innerText = resJson['data'][0]['Telefon'];
            document.getElementById('sececz').innerText = resJson['data'][1]['EczaneAdi'];
                document.getElementById('sececzadres').innerText = resJson['data'][1]['Adresi'];
                document.getElementById('sececzyol').innerText = resJson['data'][1]['YolTarifi'];
                document.getElementById('sececztel').innerText = resJson['data'][1]['Telefon'];
            document.getElementById('thirdecz').innerText = resJson['data'][2]['EczaneAdi'];
                document.getElementById('thirdeczadres').innerText = resJson['data'][2]['Adresi'];
                document.getElementById('thirdeczyol').innerText = resJson['data'][2]['YolTarifi'];
                document.getElementById('thirdecztel').innerText = resJson['data'][2]['Telefon'];
            document.getElementById('forthecz').innerText = resJson['data'][3]['EczaneAdi'];
                document.getElementById('fortheczadres').innerText = resJson['data'][3]['Adresi'];
                document.getElementById('fortheczyol').innerText = resJson['data'][3]['YolTarifi'];
                document.getElementById('forthecztel').innerText = resJson['data'][3]['Telefon'];
            document.getElementById('fifthecz').innerText = resJson['data'][4]['EczaneAdi'];
                document.getElementById('fiftheczadres').innerText = resJson['data'][4]['Adresi'];
                document.getElementById('fiftheczyol').innerText = resJson['data'][4]['YolTarifi'];
                document.getElementById('fifthecztel').innerText = resJson['data'][4]['Telefon'];
                var longi = resJson['data'][0]['Longitude'];
                var lati = resJson['data'][0]['Latitude'];

// Tab sistemi
            $(function(){
                $('a[title]').tooltip();
                
                // Tab Pane continue moving
                var tabCarousel = setInterval(function() {
                    var tabs = $('.nav-tabs > li'),
                        active = tabs.filter('.active'),
                        next = active.next('li'),
                        toClick = next.length ? next.find('a') : tabs.eq(0).find('a');
            
                    toClick.trigger('click');
                }, 5000);
            });
        });
}