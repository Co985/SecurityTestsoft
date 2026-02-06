import { questionBank } from "./questions.js";

// Attach event listener to the Start New Exam button
document.getElementById("newExamBtn").addEventListener("click", startNewExam);

function startNewExam() {
    console.log("Starting new exam...");
    console.log("Loaded questions:", questionBank.length);

    // Example: show the first question in the console
    // Replace this with your real exam rendering logic
    alert("Exam loaded with " + questionBank.length + " questions!");
}
