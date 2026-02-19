# Script to build the detailedScenarioStem function with all scenarios

$scenariosContent = Get-Content "scenarios_complete.js" -Raw
# Extract just the scenarios object content (between const SCENARIOS = { and };)
$scenariosOnly = $scenariosContent -replace '(?s)^.*const SCENARIOS = \{', '' -replace '(?s)\};.*$', ''

# Build the complete function
$functionCode = @"
function detailedScenarioStem(term, rng) {
  const termName = term.term.toLowerCase();
  
  // NO GENERIC POOLS - Every term has ONE specific scenario
  // This ensures efficient study: each question teaches the SPECIFIC term definition
  
  // 121 term-specific scenarios - organized alphabetically  
  const SCENARIOS = {$scenariosOnly};
  
  // Look up the scenario for this term
  const scenario = SCENARIOS[termName];
  
  if (scenario) {
    return scenario;
  }
  
  // THIS SHOULD NEVER EXECUTE - Every term must have a scenario
  console.error(`MISSING SCENARIO for term: "$\{term.term}"`);
  return `ERROR: No scenario defined for "$\{term.term}". This is a configuration error - every term must have a specific scenario for effective study. Please report this issue.`;
}
"@

# Save to output file
$functionCode | Out-File "detailedScenarioStem_new.js" -Encoding UTF8 -NoNewline

Write-Host "Function built successfully! Check detailedScenarioStem_new.js"
Write-Host "Lines: $($functionCode -split "`n" | Measure-Object | Select-Object -ExpandProperty Count)"
