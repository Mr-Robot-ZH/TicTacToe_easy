            // or combined: declare variable player and set player to "x"
            var player = "x";

            // life sign
            //alert(player);

            //alert value variable player
            //alert(player);

            //alert "Hello" plus value of player
            alert("Hello " + player);

            //declare variable hint and set it to element object with
            //id "hint", using document.querySelector(...);
            var hint = document.querySelector("#hint");
            

            //set inner HTML text of hint to "Hello" plus value
            //of player plus " - select a field!" at the end
            hint.innerHTML = "Hello " + player + "- select a field!";

            function markField(mouseEvent) {
                // dev only: alert target object of mouse event
                // alert(mouseEvent.target);
                //alert (mouseEvent.target);
                // declare variable field and set to target object of mouse event
                var field = mouseEvent.target;
                // label the field with the player's name (set aria-label attribute to set background-image)
                // set aria-label attribute to set background-image
                field.setAttribute('aria-label', player);
                
                // disable field against further mouse clicks (set disabled attribute)
                field.setAttribute("disabled", "disabled");

                // change player
                if (player === "x") {
                        player = "o"
                    } 
                    else {
                        player = "x";
                    }

                // set inner HTML text of hint to "Next player is " 
                // plus value of player plus "!"
                hint.innerHTML = "Next player is " + player + "!"; 
                
                allFieldsAreSelected();
            }            

                // declare the variable fields and set it to the list of field objects, 
                // using document.querySelectorAll()
            function allFieldsAreSelected() {
                var fields = document.querySelectorAll("#gameboard button");
                alert(fields);
                // fields is a list/Array, let’s get the length of the list
	            alert(fields.length);


          }


