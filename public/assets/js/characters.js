// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".kill-character").on("click", function(event) {
    var id = $(this).data("id");
    var newDead = $(this).data("dead");

    var newDeadState = {
      dead: newDead
    };

    // Send the PUT request.
    $.ajax("/api/character/" + id, {
      type: "PUT",
      data: newDeadState
    }).then(
      function() {
        
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newChar = {
      name: $("#character").val().trim(),
      dead: $("[name=dead]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/addcharacter", {
      type: "POST",
      data: newChar
    }).then(
      function() {
        console.log("created new Character");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
