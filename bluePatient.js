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
    },

    onSignInGoogle:function(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    },


    
    loginGoogle:function(){//https://developers.google.com/identity/sign-in/web/devconsole-project
        /*gapi.load('auth2',function(){
            console.log('google auth2 loaded')
            var gu = gapi.auth2.getAuthInstance()
            //gapi.auth2.init({
            //    client_id: '4735868770-qubgnkvpa5qk4l4hn2t8b8bei4m2p9at.apps.googleusercontent.com'
            //})
            $('<div class="g-signin2" data-onsuccess="onSignIn" id="googleSignInButton"></div>').appendTo($('#bluePatientDiv'))
            4
        })
        */
        bp.auth2 = gapi.auth2.getAuthInstance()
        bp.profile=bp.auth2.currentUser.get().getBasicProfile()
        $('<img src="'+bp.profile.wc+'" height=34>').appendTo($('span',onSignInDiv)[2])
        $('<div>... signed in Google as '+bp.profile.ha+' (<a href="https://plus.google.com/"'+bp.profile.B+' target=_blank>'+bp.profile.G+')</div>').appendTo(onSignInDiv)
        bp.msg('... connected to your Google account as '+bp.profile.ha+' ('+bp.profile.B+'), connecting to your HEALTH DATA now ...')
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
bp.msg('Checking connection to your account in Google ...')


if(false){//!localStorage.bluePatient){
    bp.msg('... please connect to your HEALTH DATA')
    // add Human API to it
    setTimeout(function(){
        bp.addHAPI()
    },1000)
}

//bp.loginGoogle()
/*
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

}
*/
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