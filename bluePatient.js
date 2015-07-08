console.log('bluePatient loaded')

bp={
    msg:function(x,add){
        if(add){
            msg.textContent+='\n> '
        }else{
            msg.textContent='> '
        }      
        x.toString().split('').map(function(xi,i){
            setTimeout(function(){
                msg.textContent+=xi
            },i*10)
        })
        4    
    },
    
    loginGoogle:function(){//https://developers.google.com/identity/sign-in/web/devconsole-project
        
    },


    addHAPI:function(){
        var img = document.createElement('img')
        img.id='connect-health-data-btn' 
        img.src='https://connect.humanapi.co/assets/button/blue.png'
        bluePatientDiv.appendChild(img)
        $.getScript('https://connect.humanapi.co/connect.js')
        var connectBtn = document.getElementById('connect-health-data-btn');
        /*connectBtn.addEventListener('click', function(e) {
            var options = {
              clientUserId: encodeURIComponent('YOUR_USERS_ID'), // can be email
              clientId: 'PUBLIC_ID_FOR_YOUR_APP', // found in Developer Portal
              finish: function(err, sessionTokenObject) {
                // callback that would be called after user finishes 
                // connecting data.

                // you need to post `sessionTokenObject` to your server
                // append `clientSecret` to it and send it to our server.
                // sending POST request with jQuery might look like this.
                // NOTE: it's not necessary to use jQuery
                $.post('/your-server-connect-enpoint', sessionTokenObject, function(res){
                // handle server response here
                });
              },
              close: function() {
                // optional callback that will be called if the user 
                // closes the popup without connecting any data sources.
              },
              error: function(err) {
                // optional callback that will be called if an error occurs while 
                // loading the popup.
                // `err` is an object with the fields: `code`, `message`, `detailedMessage`
              }  
            }
        })
        HumanConnect.open();
        */
    }
}


// ini
if(!localStorage.bluePatient){
    bp.msg('... no login information found')
    // add Human API to it
    setTimeout(function(){
        bp.addHAPI()
    },1000)
}



/*
hAPI={
    dobra:function(x){
        return 2*x
    },
    connectBtn:function(){ // create connect button
        var img = document.createElement('img')
        img.id='connect-health-data-btn' 
        img.src='https://connect.humanapi.co/assets/button/blue.png'
        return img
    },
    ini:function(){
        console.log('initiatilizng Human API ...')
        
        hAPIdiv.appendChild(this.connectBtn())


    }
}

hAPI.ini()

*/