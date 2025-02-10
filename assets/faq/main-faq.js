// Get all the h2 elements and blockquote elements
var headings = document.querySelectorAll("h2");
var blockquotes = document.querySelectorAll("blockquote");

// Loop through the h2 elements and blockquote elements
for (var i = 0; i < headings.length; i++) {
    // Assign a class name to the h2 element
    headings[i].classList.add("faq-page");

    // Add a click event listener to the h2 element
    headings[i].addEventListener("click", function () {
        // Check if the clicked headings is already active
        var isActive = this.classList.contains("active");

        // Remove 'active' class from all headings
        for (var j = 0; j < headings.length; j++) {
            headings[j].classList.remove("active");
        }

        // Hide all blockquote
        for (var k = 0; k < blockquotes.length; k++) {
            blockquotes[k].style.display = "none";
        }

        // Toggle display of the blockquote associated with the clicked heading
        var body = this.nextElementSibling;
        if (isActive) {
            // If the question was already active, close the answer
            body.style.display = "none";
        } else {
            // Otherwise, display the answer
            body.style.display = "block";
            // Add 'active' class to the clicked question
            this.classList.add("active");
        }
    });
}

var faq = document.getElementsByClassName("question");
var ans = document.getElementsByClassName("answer");

for (var i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        // Check if the clicked question is already active
        var isActive = this.classList.contains("active");

        // Remove 'active' class from all questions
        for (var j = 0; j < faq.length; j++) {
            faq[j].classList.remove("active");
        }

        // Hide all answers
        for (var k = 0; k < ans.length; k++) {
            ans[k].style.display = "none";
        }

        // Toggle display of the answer associated with the clicked question
        var body = this.nextElementSibling;
        if (isActive) {
            // If the question was already active, close the answer
            body.style.display = "none";
        } else {
            // Otherwise, display the answer
            body.style.display = "block";
            // Add 'active' class to the clicked question
            this.classList.add("active");
        }
    });
}