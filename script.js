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
            $("#twitter-anchor").attr("href",
            "https://twitter.com/intent/tweet?text=" +
            jsonObj.quote + "%0A" + jsonObj.author +
            "%0A&url=https://pietrzakacper.github.io/RandomQuoteGenerator");
        }
    });
}
    $(document).ready(function() {
        getRandomQuote();
        $("#generate-btn").on("click", function() {
            getRandomQuote();
        });
    });
