Security Certification Test (D487)

This repository contains a single-file static HTML application used to generate certification-style software security exam questions for practice and exam modes.

Files
- SecurityCertificationTest.html — main interactive HTML + JavaScript app

Quick start
1. Open `SecurityCertificationTest.html` in your browser (double-click or use the command below).

PowerShell:

```powershell
start 'c:\Users\coretta.g\OneDrive - iMerit Technology Services\Documents\SecurityTest\SecurityCertificationTest.html'
```

2. Open Developer Tools → Console to view logs.
3. Click “Start new attempt” to generate an attempt.

Publishing
- To publish on GitHub and get a public URL, push this folder to a public repository and enable GitHub Pages (serve from `main` or `gh-pages`).

Suggested commands (PowerShell):

```powershell
cd 'c:\Users\coretta.g\OneDrive - iMerit Technology Services\Documents\SecurityTest'
git init
git add .
git commit -m "Initial commit: SecurityCertificationTest"
# Use GitHub CLI to create and push (recommended):
# gh repo create MySecurityTestRepo --public --source=. --push
```

Privacy
- Remove any secrets before publishing. The app stores attempts in browser `localStorage`; publishing the HTML does not expose your local files.

Export/Import
- The app currently stores attempts in localStorage per-browser. If you want to share specific attempt data, export/import functionality can be added (I can add this on request).