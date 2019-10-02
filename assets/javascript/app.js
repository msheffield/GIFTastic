$("#add-show").on("click", function(event) {
    event.preventDefault();
    let show = $("#show-input").val().trim();

    let button = $("<button>");
    button.addClass("btn btn-primary");
    button.attr("data-button", show);
    button.text(show);

    $("#buttons").prepend(button);
  });


$("button").on("click", function () {
    var button = $(this).attr("data-button");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        button + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#display").empty();

        console.log(response);

        var results = response.data;

        for (var i = 0; i < 9; i++) {

            let div = $("<div>");
            $(div).addClass("col-md-4 col-xs-6 image-thumbnail");

            let img = $("<img>");
            img.addClass("gif");
            img.attr("src", results[i].images.fixed_height_still.url);
            img.attr("data-state", "still");
            img.attr("data-still", results[i].images.fixed_height_still.url);
            img.attr("data-animate", results[i].images.fixed_height.url);
            div.append(img);
            $("#display").prepend(div);
        }

        $(".gif").on("click", function () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });
    })


});


