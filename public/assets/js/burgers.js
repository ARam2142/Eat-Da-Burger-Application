// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    //burger to be updated to devoured
    $(".change-status").on("click", function(event) {
      var id = $(this).data("id");
      var eatenBurger = $(this).data("eatenburger");
  
      var devouredStatus = {
        devoured: eatenBurger
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredStatus 
      }).then(
        function() {
          console.log("changed status of burger to", eatenBurger);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
    
    //enter and submit new burger
    $(".form-create").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#request").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("inserted new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  

