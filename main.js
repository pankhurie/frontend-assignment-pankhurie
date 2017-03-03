$(document).ready(function() {
    $(".success").hide();

    $(document).ajaxStart(function() {
      //
    }).ajaxSuccess(function() {
        $(".success").fadeIn("slow");
    })

    $.ajax({
        url: "https://public-api.wordpress.com/rest/v1/sites/25262138/posts",
        success: function(data) {
            console.log(data.posts[0].author.first_name)
            $("#profile-pic").attr("src", data.posts[0].author.avatar_URL);
            $("#user-name").text(data.posts[0].author.first_name);
            $("#innerparagraph").html(data.posts[0].content);
            $("#full-name").text(data.posts[0].author.first_name + " " + data.posts[0].author.last_name
          +" /"+data.posts[0].author.nice_name)
            $("#title").text(data.posts[0].title)
        },
        error: function() {
            alert("Error Occured while fetching profile")
        }
    })


});
