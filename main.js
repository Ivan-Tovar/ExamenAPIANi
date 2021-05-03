const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
const info = document.querySelector(".info");

// The speech recognition interface lives on the browserÃ¢â‚¬â„¢s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if (SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "es-MX";

  searchForm.insertAdjacentHTML("beforeend", '<button type="button" class="btn btn-dark" ><i class="fas fa-microphone"></i></button>');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if (micIcon.classList.contains("fa-microphone")) { // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    }
    else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {

    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    if (transcript.toLowerCase().trim() === "ayuda del sitio") {
      window.open('ayuda.html');
    }
    else if (!searchFormInput.value) {
      searchFormInput.value = transcript;
    }
      
      else if (transcript.toLowerCase().trim() === "Rebote") {
        var t1 = just.animate({
            targets: "#img",
            duration: 1300,
            web: {
               transform: [
                  { offset: 0, value: "scale(1, 1)" },
                  { offset: 0.3, value: "scale(1.25, .75)" },
                  { offset: 0.4, value: "scale(.75, 1.25)" },
                  { offset: 0.5, value: "scale(1.15, .85)" },
                  { offset: 0.65, value: "scale(.95, 1.05)" },
                  { offset: 0.75, value: "scale(1.05, .95)" },
                  { offset: 1, value: "scale(1, 1)" }
               ]
            }
         });
         t1.play();
         just.tools.player(t1);
      }
      else if (transcript.toLowerCase().trim() === "Desenfoque") {

        var t2 = just.animate({
            targets: "#img",
            duration: 1500,
            props: {
               innerHTML: ['Animacion', 'Ivan'] 
             },
            web: {
                opacity: [0, 1]
            }
         })
         
         t2.play()
         just.tools.player(t2);
      }
      else if (transcript.toLowerCase().trim() === "Deslizar a la izquierda") {

        var t3 = just.animate({
            targets: "#img",
            duration: 1500,
            web: {
                x: [200, 0]
            }
         })
         
         t3.play()
         just.tools.player(t3);
      }
      else if (transcript.toLowerCase().trim() === "Encogerse") {
        var t4 = just.animate({
            targets: "#img",
            duration: 1500,
            web: {
               transform: [
                  { offset: 1, value: "scale(1, 1)" },
                  { offset: 0.9, value: "scale(1, .10)" },
                  { offset: 0.8, value: "scale(2, .20)" },
                  { offset: 0.7, value: "scale(1, .30)" },
                  { offset: 0.6, value: "scale(2, .40)" },
                  { offset: 0.5, value: "scale(1, .50)" },
                  { offset: 0.4, value: "scale(2, .60)" },
                  { offset: 0.3, value: "scale(1, .70)" },
                  { offset: 0.2, value: "scale(2, .80)" },
                  { offset: 0.1, value: "scale(1, .90)" },
                  { offset: 0, value: "scale(2, 1 )" }
               ]
            }
         });
         
         t4.play();
         just.tools.player(t4);
      }
      else if (transcript.toLowerCase().trim() === "Minimizar y maximizar") {

        var t7 = just.animate({
            targets: "#img",
            duration: 1500,
            web: {
               transform: [
                  { offset: 0, value: "scale(1, 1)" },
                  { offset: 0.3, value: "scale(2, 2)" },
                  { offset: 0.4, value: "scale(3, 3)" },
                  { offset: 0.5, value: "scale(4, 4)"},
                  { offset: 0.65, value: "scale(5, 5)" },
                  { offset: 0.75, value: "scale(6, 6)" },
                  { offset: 0.90, value: "scale(5, 5)" },
                  { offset: 1, value: "scale(4, 4)" },
                  { offset: 1.3, value: "scale(3, 3)" },
                  { offset: 1.4, value: "scale(2, 2)"},
                  { offset: 1.75, value: "scale(1, 1)" },
                  { offset: 1.9, value: "scale(2, 2)" },
                  { offset: 2, value: "scale(3, 3)" },
                  { offset: 2.2, value: "scale(4, 4)"},
                  { offset: 2.4, value: "scale(5, 5)" },
                  { offset: 2.5, value: "scale(6, 6)" },
                  { offset: 2.65, value: "scale(5, 5)" },
                  { offset: 2.8, value: "scale(4, 4)" },
                  { offset: 3, value: "scale(3, 3)" },
                  { offset: 3.2, value: "scale(2, 2)"},
                  { offset: 3.4, value: "scale(1, 1)" }
               ]
            }
         });
         t7.play();
         just.tools.player(t7);
      }
      else if (transcript.toLowerCase().trim() === "Dezlizar hacia abajo") {

        var t8 = just.animate({
            targets: "#img",
            duration: 1500,
             web: {
               transform: [
                  { offset: 0,   value: 'translateY(100px)' },
                  { offset: 0.1, value: 'translateY(150px)' },
                  { offset: 0.2, value: 'translateY(200px)' },
                  { offset: 0.3, value: 'translateY(250px)'},
                  { offset: 0.4, value: 'translateY(300px)'},
                  { offset: 0.5, value: 'translateY(350px)'},
                  { offset: 0.6, value: 'translateY(200px)'},
                  { offset: 0.7, value: 'translateY(250px)'},
                  { offset: 0.8, value: 'translateY(280px)'},
                  { offset: 0.9, value: 'translateY(300px)'},
                  { offset: 1,   value: 'translateY(0px)'}
               ]
             }
         });
         t8.play();
         just.tools.player(t8);
      }
      else if (transcript.toLowerCase().trim() === "Agrandamiento") {

        var t11 = just.animate({
            targets: "#img",
            duration: 1500,
            web: {
               scale: [0.5, 0, 1]
            }
         });
         t11.play();
         just.tools.player(t11);
      }
      else if (transcript.toLowerCase().trim() === "Maximizar") {

        var t6 = just.animate({
            targets: "#img",
            duration: 1500,
            web: {
               transform: [
                  { offset: 0, value: "scale(1, 1)" },
                  { offset: 0.3, value: "scale(1.25, 4)" },
                  { offset: 0.4, value: "scale(4, 1.25)" },
                  { offset: 0.5, value: "scale(1.25, 4)"},
                  { offset: 0.65, value: "scale(4, 1.25)" },
                  { offset: 0.75, value: "scale(1.25, 4)" },
                  { offset: 0.90, value: "scale(4, 1.25)" },
                  { offset: 1, value: "scale(1.25, 4)" },
                  { offset: 1.3, value: "scale(4, 1.25)" },
                  { offset: 1.4, value: "scale(1.25, 4)"},
                  { offset: 1.5, value: "scale(4, 1.25)" },
                  { offset: 1.65, value: "scale(1.25, 4)" },
                  { offset: 1.75, value: "scale(4, 1.25)" },
                  { offset: 2, value: "scale(1, 1)" }
               ]
            }
         });
         t6.play();
         just.tools.player(t6);
      }
      else if (transcript.toLowerCase().trim() === "Volteo") {

        var t78 = just.animate({
            targets: "#img",
            duration: 1524,
            web: {
                rotateX: [24,1800]
            }
         });
         t78.play();
         just.tools.player(t78);
         
      }
      else if (transcript.toLowerCase().trim() === "Delizar hacia arriba") {

        var t99 = just.animate({
            targets: "#img",
            duration: 1524,
            web: {
                marginTop: [524, 0]
            }
         });
         t99.play();
         just.tools.player(t99);
        
      }

     else if(transcript.toLowerCase().trim()==="salir del sitio") {
         var mensaje;
         var opcion = confirm("¿Deseas salir?");
        
         if (opcion == true) {
            mensaje = "Haz aceptado salir";
            
            window.close();     
            recognition.stop();
       } else {
           mensaje = "Haz Cancelado";
       }
       document.getElementById("ejemplo").innerHTML = mensaje;
     }
      

      else if (transcript.toLowerCase().trim() === "borrar") {
        searchFormInput.value = "";
      }
      else {
        searchFormInput.value = transcript;
      }
    }
    // searchFormInput.value = transcript;
    // searchFormInput.focus();
    // setTimeout(() => {
    //   searchForm.submit();
    // }, 500);
  

  //info.textContent = 'Comandos de voz:';

}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}


function ver(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
          document.getElementById("img").src = reader.result;
          const imagen=document.getElementById("img"); }}}