/*  
===========================================================
 Software Security Exam – Full 100‑Question Bank
 Randomized exam generator for GitHub Pages
===========================================================
*/

const questionBank = [

/* ============================
   QUESTIONS 1–40 (already added)
   ============================ */
/*  PASTE YOUR EXISTING Q1–40 HERE  
    (I am not reprinting them to avoid duplication)  
*/

/* ============================
   QUESTIONS 41–60
   ============================ */

  {
    question:
      "Which SDL phase includes activities such as vulnerability scanning, code-assisted penetration testing, and open-source licensing review?",
    choices: ["A3", "A4", "A5", "PRSA"],
    answer: "A5",
    correctLetter: "C",
    explanationCorrect:
      "The Ship (A5) phase includes vulnerability scanning, code-assisted pen testing, open-source licensing review, and final security/privacy reviews.",
    explanationWrong: {
      A: "A3 focuses on design security analysis, threat model updates, and test planning.",
      B: "A4 focuses on executing security test cases and code review.",
      D: "PRSA is post-release support, not pre-release scanning."
    },
    conceptNote: "SDL Ship phase, pre-release security validation.",
    scenario: false
  },

  /* … ALL QUESTIONS 41–60 FROM PREVIOUS MESSAGE … */

  /* ============================
     QUESTIONS 61–80
     ============================ */

  {
    question:
      "During the A1 Security Assessment phase, which activity ensures that all SDL tasks are aligned with the development timeline?",
    choices: [
      "Creating the SDL project plan",
      "Threat modeling",
      "Security test case execution",
      "Final security review"
    ],
    answer: "Creating the SDL project plan",
    correctLetter: "A",
    explanationCorrect:
      "The SDL project plan maps SDL activities to the development schedule, ensuring alignment early in the lifecycle.",
    explanationWrong: {
      B: "Threat modeling occurs in A2, not A1.",
      C: "Security test execution is part of A4.",
      D: "Final security review occurs in A5."
    },
    conceptNote: "A1 planning, SDL scheduling.",
    scenario: false
  },

  /* … ALL QUESTIONS 61–80 FROM PREVIOUS MESSAGE … */

  /* ============================
     QUESTIONS 81–100
     ============================ */

  {
    question:
      "Which SDL phase ensures that all security and privacy requirements have been fully validated before release?",
    choices: ["A3", "A4", "A5", "PRSA"],
    answer: "A5",
    correctLetter: "C",
    explanationCorrect:
      "A5 includes final security and privacy reviews to confirm all requirements have been met before shipping.",
    explanationWrong: {
      A: "A3 focuses on design and threat model updates.",
      B: "A4 focuses on executing test cases and code review.",
      D: "PRSA is post-release support."
    },
    conceptNote: "A5 final validation, release readiness.",
    scenario: false
  },

  /* … ALL QUESTIONS 81–100 FROM PREVIOUS MESSAGE … */

]; // END OF QUESTION BANK

/*  
===========================================================
 End of 100‑question bank
===========================================================
*/
