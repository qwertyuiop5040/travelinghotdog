(function(){
	  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1hpktTGQ-26oLIo-5ien5do76eMEYspk",
    authDomain: "travelinghotdog.firebaseapp.com",
    databaseURL: "https://travelinghotdog.firebaseio.com",
    projectId: "travelinghotdog",
    storageBucket: "travelinghotdog.appspot.com",
    messagingSenderId: "1071086047019"
  };
  firebase.initializeApp(config);

  const txtEmail= document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogOut = document.getElementById('btnLogOut');

  //Log in event
  btnLogin.addEventListen('click', e => {
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.signInWithEmailAndPassword(email,pass);
  	promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListen('click', e => {
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.createUserWithEmailAndPassword(email,pass);
  	promise.catch(e => console.log(e.message));
  });

  btnLogOut.addEventListen('click', e => {
 	firebase.auth().signOut(); 	
 });

  firebase.auth().onAuthStateChanged(firebaseUser =>{
  	if(firebaseUser) {
  		console.log(firebaseUser);
  	}else{
  		console.log('not logged in')
  	}
  })

}());