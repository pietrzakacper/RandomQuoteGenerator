function getRandomQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
        success: function(response) {
                var jsonObj = JSON.parse(response);
                document.getElementById("quote-text").innerHTML = jsonObj.quote;
                document.getElementById("author").innerHTML = jsonObj.author;
      }
    });
}

$(document).ready(function() {
    getRandomQuote();
    $("#generate-btn").on("click", function() {
        getRandomQuote();
    });
});
