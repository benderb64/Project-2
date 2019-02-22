<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

$("#submit").on("click", event => {
    event.preventDefault();
    if($("#username").val() === "" || $("#firstName".val() === "") || $("#lastName".val() === "")) {
        alert("Please fill out all required forms.")
    }
    else {
        var newUser = {
            username: $("#username").val(),
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            nature: $("#questionOne").val(),
            cost: $("#questionTwo").val(),
            history: $("#questionThree").val(),
            adventure: $("#questionFour").val(),
            culture: $("#questionFive").val(),
            urban: $("#questionSix").val(),
            activity: $("#questionSeven").val(),
            climate: $("#questionEight").val(),
            access: $("#questionNine").val(),
            stay: $("#questionTen").val(),
        }
        $.post("/api/survey", newUser).then(data => {
            $("#bestMatchCity").text(data.city);
            $("#bestMatchCountry").text(data.country);
            $("#bestMatchPhoto").attr("src", data.image);
            $("#bestMatchDesc").text(data.description);
            $("#bestMatch").modal("show");
        });
    }
});