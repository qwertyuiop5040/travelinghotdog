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

  var database = firebase.database();

  const txtEmail= document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogIn = document.getElementById('btnLogIn');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogOut = document.getElementById('btnLogOut');

  //Log in event
  btnLogIn.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    talk();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
  });

  //Sign Up Event
  btnSignUp.addEventListener('click', e => {
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();

  	const promise = auth.createUserWithEmailAndPassword(email,pass);
  	promise.catch(e => console.log(e.message));
  });

  // Log Out Event
  btnLogOut.addEventListener('click', e => {
 	firebase.auth().signOut(); 	
 });

  firebase.auth().onAuthStateChanged(firebaseUser =>{
  	if(firebaseUser) {
  		console.log(firebaseUser);
  	}else{
  		console.log('not logged in')
      talk();
  	}
  })

  function talk() {
  	firebase.database().ref('nothing').set({
    "nothing": "there"
 	 });
	}

