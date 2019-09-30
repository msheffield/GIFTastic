$("button").on("click", function () {
    var button = $(this).attr("data-button");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        button + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

            let div = $("<div>");

            let p = $("<p>");
            p.text(results[i].rating);

            let img = $("<img>");
            img.attr("src", results[i].images.fixed_height.url);

            div.append(p);
            div.append(img);
            $("#gifs-appear-here").prepend(div);


        }
    })
});