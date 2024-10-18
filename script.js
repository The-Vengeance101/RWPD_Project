// jQuery for form submission
$(document).ready(function () {
    // Handle form submission
    $("form").on("submit", function (event) {
        event.preventDefault();
        alert("Thank you for contacting us! We'll get back to you soon.");
        // Clear form fields after submission
        $(this).trigger("reset");
    });
});
