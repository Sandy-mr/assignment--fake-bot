document.querySelector('#validate-field input').addEventListener('keypress', function (e) {

    var key = e.which || e.keyCode;
     var display = document.querySelector(".flash-message");

    if (key === 13) { // 13 is enter
      console.log(e.target.value.length)
      size = e.target.value.length;
      var sizeName;
      if(size <= 0 ){
         display.textContent = "fake bot: Not empty box";
         display.classList.add('invalid');
       }else if (size > 0) {
         display.classList.remove("invalid");
         display.textContent = "";
         console.log(e.target.value.length);
         if (e.target.value.length < 6) {
           sizeName = 'fake bot: That’s a short name.';
         }
         if (e.target.value.length > 6) {
           sizeName = 'fake bot: That’s a long name.';
         }
         console.log(sizeName)
         var message = e.target.value+': Hello, my name is '+ e.target.value;
         var message2 = e.target.value+': I was an system student, but right now I’m studying Web Development.';
         var message3 = e.target.value+': I like to play soccer and play with my soon';
         var message4 = 'fake bot: Nice to meet you '+e.target.value;
         var mensajes = [message, sizeName, message2, message3, message4];
         var i = -1;
          var counter = mensajes.length;
          function running() {
            counter--
           var boot = document.querySelector("#boot-chat");
            console.log("Turn: ",  counter);
            i = (i + 1) % mensajes.length;
            console.log(mensajes[ i ])
            var z = document.createElement('p'); // is a node
            z.className += " greeting";
            z.innerHTML = mensajes[ i ];
            boot.appendChild(z);
            if (counter <= 0) {
              clearInterval(time);
            }
          }
          var time = setInterval(running, 1000);
       }
      }
});
