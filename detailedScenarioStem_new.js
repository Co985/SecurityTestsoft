function detailedScenarioStem(term, rng) {
  const termName = term.term.toLowerCase();
  
  // NO GENERIC POOLS - Every term has ONE specific scenario
  // This ensures efficient study: each question teaches the SPECIFIC term definition
  
  // 121 term-specific scenarios - organized alphabetically  
  const SCENARIOS = {
  // A
  "agile methodology": `Your startup is building a new product with evolving requirements. Customer feedback will drive feature priorities, and the team needs to release working software every 2-3 weeks. Security must be integrated without slowing down rapid iterations. The development approach emphasizes collaboration, quick adaptation to change, and continuous delivery of value. Which methodology supports this fast-paced, feedback-driven development?`,
  
  "alpha level testing": `Your team has completed initial development of a mobile banking app. Before releasing to external users, you need internal testing that focuses on core functionality, security vulnerabilities, and performance issues. This testing phase should identify major bugs, security flaws, and usability problems before any public exposure. The goal is to catch critical issues early with your internal team and selected users. What testing phase accomplishes this pre-release validation?`,
  
  "application decomposition": `Your security architect is reviewing a new e-commerce platform before development begins. To perform effective threat modeling, you need to break down the application into logical components: web frontend, API layer, database, payment processor integration, and authentication service. This breakdown will help identify attack surfaces, trust boundaries between components, and where vulnerabilities might exist. What security analysis technique involves breaking down the application architecture in this way?`,
  
  "application security": `Your organization builds custom web applications for healthcare clients handling protected health information. Management wants a comprehensive approach to protecting these applications from security threats throughout their lifecycle. This includes secure coding practices, security testing, runtime protection, and vulnerability management specifically focused on the application layer. What security discipline addresses protecting software applications from threats?`,
  
  "application-centric threat modeling": `Your team is designing a new patient portal that will integrate with multiple backend systems. Security needs to analyze the application architecture, identify data flows between components, map trust boundaries, and apply STRIDE to each element to find threats specific to this application's design. The focus is on application-level threats rather than infrastructure. What threat modeling approach focuses specifically on application architecture and data flows?`,
  
  "appsec": `Your company's security program needs specialized focus on code-level vulnerabilities, API security, business logic flaws, and data handling within your applications. This goes beyond network security to address risks in the application layer itself - including injection flaws, authentication issues, and insecure deserialization. What term describes this application-layer security focus?`,
  
  "architecture (a2) phase": `The product architecture has been approved, and technical design is underway. The team is creating detailed component designs, defining APIs, selecting frameworks and libraries, and documenting data flows. Security activities include: performing threat modeling on the architecture, reviewing design documents for security weaknesses, validating that security controls from requirements are reflected in the design, and ensuring privacy requirements are addressed. Which SDL phase encompasses these activities?`,
  
  "asset-centric threat modeling": `Your senior management has identified that customer payment data, intellectual property, and user credentials are the organization's most critical assets requiring

 protection. The security team needs to build a threat model focused specifically on these high-value assets, identifying what threats target each asset and what controls protect them. What threat modeling approach focuses on protecting specific assets identified by management?`,
  
  "authenticated scans": `Your team is scanning an internal application that requires login. Unauthenticated scans only see the login page and miss 90% of the application's functionality. The security team has test credentials and wants the scanner to log in, navigate through the application using valid sessions, and test authenticated features, API endpoints, and admin functions. This will significantly improve coverage and reduce false negatives. What scanning approach requires credentials to test internal application features?`,
  
  // B
  "benchmarks": `Your security team implemented new security controls last quarter and management wants to know if they're effective. You need to compare your initial risk assessment estimates against actual results after implementation. This comparison will validate whether your risk analysis was accurate and if the controls achieved their intended risk reduction. What measurement approach compares estimates to actual outcomes?`,
  
  "beta level testing": `Your mobile app has passed all internal testing and is ready for real-world validation. You need to release it to a limited group of external users to identify usability issues, edge cases, and problems that only appear in actual user environments. This testing phase focuses on real-world usage patterns and unexpected scenarios that internal testing might have missed. What testing phase involves external users testing in real-world conditions?`,
  
  "black box testing": `Your company hired external penetration testers to assess your web application's security. The testers have no access to source code, architecture diagrams, or internal documentation. They must test the application purely from an external attacker's perspective, discovering vulnerabilities without any inside knowledge of how the system works internally. What testing approach involves testing with no knowledge of internal implementation?`,
  
  "building security in maturity model (bsimm)": `Your company is merging with another organization. Due diligence requires evaluating the acquisition target's security program. You need to assess: Do they have secure coding practices? Do they perform threat modeling? Do they do security testing? How mature is their SDL? The evaluation must be objective, measurable, and comparable to your organization's practices. What framework provides a maturity model for assessing software security programs?`,
  
  // C
  "code review": `Your development team just completed a new authentication module for your API. Before merging to the main branch, security requires manual inspection of the code to identify insecure coding patterns, hardcoded credentials, SQL injection vulnerabilities, and improper error handling. A senior developer will examine the actual source code line by line to find security flaws during development. What security practice involves manual inspection of source code for vulnerabilities?`,
  
  "common vulnerabilities and exposures (cve)": `A new vulnerability is discovered in OpenSSL, and your security team needs to quickly identify which applications are affected. You need a way to reference this specific vulnerability consistently across all security tools, databases, and communications so teams can search their environments and validate if they're vulnerable. The identifier must be universally recognized and work across different vendors' tools. What naming system provides this common vulnerability reference?`,
  
  "common vulnerability scoring system (cvss)": `Your security team uses multiple scanning tools: one reports "HIGH severity SQL injection," another reports "CRITICAL severity injection vulnerability" for the same issue. Different vendors use incompatible severity scales, making it impossible to prioritize findings consistently across tools. The team needs a standardized way to score vulnerability severity so that findings can be compared, prioritized, and tracked uniformly regardless of which tool discovered them. What system provides this standardized scoring?`,
  
  "construction": `Your organization follows OpenSAMM and is currently focused on defining security goals and building software within active development projects. This includes examining software security practices, conducting threat assessments, and ensuring secure architecture decisions during the building phase. What OpenSAMM business function covers defining goals and creating software within development projects?`,
  
  "control flow analysis": `Your security team is reviewing a complex authorization function with nested if-else statements and multiple logical conditions. To find security bugs, you need to step through all possible execution paths, analyzing how the code branches based on different conditions. This will help identify logic errors where unauthorized users might bypass access controls. What code analysis technique traces the logical flow and branching of program execution?`,
  
  "data flow analysis": `During code review, your security team needs to trace how user input flows through the application - from where it enters the system, through processing functions, to where it's output to the database or user interface. This tracing helps identify where input validation is missing and where dangerous data might reach sensitive operations. What analysis technique tracks data from input points to output points?`,
  
  "data flow diagrams (dfd)": `You're assessing a large web application with hundreds of pages and dynamic content. Before running vulnerability tests, you need to map the entire application: discover all URLs, forms, API endpoints, parameters, and inputs. The tool must crawl the application like a search engine, following links, submitting forms, and executing JavaScript to build a complete map of the attack surface. What tool creates this comprehensive application map?`,
  
  "denial of service": `Your e-commerce website experienced an attack where legitimate customers couldn't access the site during peak shopping hours. Attackers overwhelmed the servers with traffic, making the application unavailable to authorized users. This attack impacted the availability component of the CIA triad. Using the STRIDE threat categorization model, what type of threat is this?`,
  
  "deployment phase": `Development and testing are complete, and the application is ready to release to users. The team needs to determine how the software will be distributed, what data will be stored in production, how updates will be deployed, and what security configurations are needed for the production environment. What SDLC phase involves pushing the product out to users and establishing the deployment strategy?`,
  
  "design and development (a3) phase": `Your team is in active development of a REST API. Developers are writing code, committing to version control, and running unit tests. Security requirements specify that: all code must follow secure coding standards, static analysis must run on every commit, code reviews must check for security flaws, and secure libraries must be used for cryptography and input validation. The team needs continuous feedback on security issues while coding. Which SDL phase activities are being performed?`,
  
  "design and development (a4) phase": `Your application is nearly code-complete and entering the readiness phase. Security testing continues with more comprehensive penetration testing, policy compliance verification, and security issues that were missed in A3 are being identified through deeper testing and final code reviews. The focus is on ensuring the application is ready for release. What SDL phase focuses on readiness and continued security validation?`,
  
  "design phase": `Your team has completed requirements gathering and is now creating technical specifications for how the application will be built. This includes defining the architecture, identifying threats and security controls, documenting secure coding practices that developers must follow, and conducting risk analysis on the design. What SDLC phase focuses on how the system should be constructed?`,
  
  "design review": `Your security architect is inspecting the architecture diagrams, API specifications, database schemas, and technical design documents created by your development team. The goal is to identify security weaknesses in the design before any code is written - finding issues when they're cheaper and easier to fix. What security activity involves examining design artifacts for security flaws?`,
  
  "digital enterprise": `Your organization is transforming its business operations using cloud computing, Agile development practices, and DevOps automation to enable faster innovation and delivery. The security team needs to evaluate how these modern business activities impact security operations and controls. What term describes businesses enabling activities through Agile, DevOps, and cloud technologies?`,
  
  "dread": `Your team completed threat modeling and identified 50 potential threats. Now you need to prioritize which threats to address first based on objective scoring. For each threat, you'll rate Damage potential (1-3), Reproducibility (1-3), Exploitability (1-3), Affected users (1-3), and Discoverability (1-3). The scores will determine which threats pose the highest risk. What risk rating system uses these five factors to prioritize threats?`,
  
  "dynamic analysis": `A microservices architecture uses authentication tokens and encrypts data at rest. Before launch, the security team must verify that JWT validation, encryption implementations, and API authorization rules work correctly under real-world conditions. You need to test with actual HTTP traffic, database queries, and third-party service calls to ensure runtime security controls function as designed. The application must remain running during testing. Which approach validates runtime security effectively?`,
  
  "elevation of privilege": `During security testing, a regular user discovered they could modify a URL parameter to access admin-only functions. The application failed to properly enforce authorization checks, allowing users to gain elevated access they shouldn't have. What STRIDE threat category describes gaining access beyond your intended privilege level?`,
  
  "end of life phase": `Your company maintains a legacy inventory system that is no longer cost-effective to support. The decision has been made to decommission the software, migrate data to a new system, and shut down all associated infrastructure. The team needs to document the decommissioning process, evaluate backend dependencies, and safely turn everything off. What phase describes software that is no longer useful and requires decommissioning?`,
  
  "environment hardening": `Your application will run in a cloud environment. Before deployment, the security team needs to configure the operating environment according to SDL requirements and security maturity models. This includes OS hardening, network segmentation, security group configuration, and runtime protections. What term describes controls applied to the operating environment of software?`,
  
  "exploratory tests": `Your QA team has completed all scripted security test cases. To find issues that structured tests might have missed, testers are now freely exploring the application, trying unexpected input combinations, unusual workflows, and edge cases that weren't covered in the test plan. This unscripted testing provides valuable feedback about system behavior. What testing approach assesses quality beyond scripted test cases?`,
  
  "external resources": `Your internal security team lacks specialized penetration testing expertise. For your annual security assessment, you hired highly skilled security professionals from a consulting firm to test your applications and report findings. These temporary resources bring specialized skills your organization doesn't have in-house. What term describes temporary hired security testing professionals?`,
  
  "external scans": `Your security team needs to understand what vulnerabilities are visible to potential attackers from the internet. The scan will target your public-facing web servers, examining what attackers outside your firewall can see and potentially exploit. This perspective helps prioritize externally exploitable vulnerabilities. What type of scan targets security issues found outside the firewall?`,
  
  "extreme programming": `Your development team wants to improve code quality and security through: pair programming, continuous integration with automated tests, test-driven development, frequent small releases, and collective code ownership. The approach emphasizes engineering excellence, automated testing, and rapid feedback loops. Developers write tests before code, refactor continuously, and maintain a sustainable pace. Which agile methodology focuses on these technical practices?`,
  
  // F
  "functional requirements": `Your project team is documenting what the application must do: users shall be able to create accounts, transfer funds, view transaction history, and export reports. These requirements define the application's purpose and capabilities. During security assessment, these will be compared against functional testing to ensure security requirements are also met. What type of requirements describe what the software will do?`,
  
  "functional testing scripts": `Your QA team has written detailed step-by-step instructions for testers to verify that users can log in, change passwords, view their profile, and log out. These scripts test specific scenarios to ensure security requirements like proper authentication and authorization are implemented correctly. What testing artifact provides specific scenario instructions to verify requirements?`,
  
  "fuzz testing": `Your team built a file upload feature that processes PDFs, images, and Office documents. Security testing must verify the system handles corrupted files, oversized uploads, files with malicious payloads, and unusual MIME types safely. You need evidence that error handling prevents crashes and that the system fails securely. The testing should reveal weaknesses in input validation and parser robustness with minimal manual effort. What testing strategy fits these requirements?`,
  
  // G
  "governance": `Your organization has 20 development teams building applications across different business units. Leadership needs to establish how security activities are managed across the organization, ensure compliance with regulations, define SLAs for security reviews, implement mandatory training, and conduct security audits. What practice manages overall software development activities and compliance?`,
  
  "gray box testing": `Your security testers have limited access to source code and architecture documentation to help design better test cases. They can analyze the code structure and understand how components work, then use this knowledge to create targeted tests while the application is running. This hybrid approach combines static code knowledge with dynamic runtime testing. What testing approach combines code analysis with dynamic execution?`,
  
  "hardware": `During dynamic security analysis, your team is examining not just the software but also the physical components it runs on - processors, memory, storage devices, and network interfaces. Security flaws in hardware can be exploited to compromise software security. What term describes the physical components examined during security analysis?`,
  
  // I
  "implementation phase": `Developers are actively writing code based on approved designs. The team is building features, implementing security controls, and conducting unit testing. Security activities during this phase include code review, security testing of completed code, and examining resources used in development. What SDLC phase involves the actual development and testing of code?`,
  
  "information disclosure": `A security bug in your application allows users to read files they shouldn't have access to. An attacker discovered they could modify a file path parameter to view other users' confidential documents. This vulnerability affects the confidentiality component of the CIA triad. What STRIDE threat category describes unauthorized access to information?`,
  
  "internal resources": `Your company has in-house developers, project managers, security architects, and testing tools that are used for software development. During the Design and Development stage, the security team inventories these internal capabilities for test planning. What term describes tools, software, and personnel from within the company?`,
  
  "internal scans": `Your security team wants to understand what vulnerabilities exist inside your network that could be exploited by malicious insiders or if an attacker gains internal access. The scan targets systems behind the firewall to identify internal security issues. What type of scan identifies security issues from inside the company?`,
  
  "intrusive target search": `During your security assessment, the testing team isn't just identifying potential vulnerabilities - they're actively attempting to exploit them. The testers use ICMP and TCP pings to discover systems, then interact with discovered services to confirm vulnerabilities are exploitable. What type of security testing actively exploits identified vulnerabilities?`,
  
  // L
  "legacy code": `Your organization maintains a 15-year-old authentication system written in outdated coding practices that often introduces security risks. The code uses deprecated functions, lacks input validation, and wasn't written with modern security practices. The security team needs to test and review this old code for mitigation strategies. What term describes outdated code that introduces security risks?`,
  
  "maintenance phase": `Your application has been in production for six months. The security team is now focused on ongoing activities: monitoring for new vulnerabilities, developing security patches, managing the patch deployment process, and maintaining incident response procedures for security issues discovered after release. What SDLC phase covers ongoing security monitoring after product release?`,
  
  "measurement model": `Your security program uses CVSS scores from NVD to evaluate vulnerability severity with environmental scores (how it affects your environment), base scores (intrinsic vulnerability characteristics), and temporal scores (how exploitability changes over time). This data helps protect against vulnerabilities using quantitative metrics. What model uses environmental, base, and temporal scores to measure vulnerability?`,
  
  "merger and acquisition": `Your company is acquiring a startup and needs to assess both business value and security risks before finalizing the deal. The security team must evaluate the target company's code quality, security practices, existing vulnerabilities, and potential security liabilities. These security findings could be deal breakers. What business activity requires assessing security risks during company consolidation?`,
  
  "metric model": `Your organization scans applications weekly and generates hundreds of findings. The compliance team asks: "How do we prove we're fixing the most critical issues first? How do we measure if our security posture is improving over time? How do we track remediation progress across 50 applications?" Management wants metrics that demonstrate security effectiveness and support audit requirements. The solution must provide consistent measurement across tools and teams. What framework enables security measurement and tracking at scale?`,
  
  // N
  "national institute of standards and technology (nist)": `Your organization needs authoritative guidance on integrating security best practices into the software development lifecycle. You're looking for federal standards, research, and tools that provide comprehensive security reference material for both government and corporate security programs. What organization provides federal standard research and tools as an SDLC security reference?`,
  
  "nmap": `Your security team needs to audit a company subnet to discover what ports are open on servers and what services are running. This network scanning and security auditing tool will help map the network attack surface by identifying exposed services. What tool is used to audit open ports in a subnet for security assessments?`,
  
  "non-functional requirements": `Your project has requirements that don't change what the software does but impose restrictions on how it's built: "The system must authenticate users within 2 seconds," "All data must be encrypted at rest," "The application must support 10,000 concurrent users." These security and performance requirements describe design constraints. What type of requirements describe restrictions that don't impact the purpose but affect design?`,
  
  "nvd database": `Your security dashboard aggregates vulnerability data from multiple sources. You need a comprehensive US government archive that serves as the authoritative source for vulnerability standards, provides CVSS scores, and acts as a security checklist for IT vulnerability management. What database serves as the national archive for vulnerability standards?`,
  
  // O
  "open software assurance maturity model (opensamm)": `Your organization wants to implement software security practices that target your company's specific needs with flexible activities rather than prescriptive requirements. You need a framework to review current software security practices, determine your security program's maturity level, and create a roadmap for improvement tailored to your organization. What maturity model offers flexible, organization-specific security improvement?`,
  
  "open-source security testing methodology manual (osstmm)": `Your penetration testing team needs standardized templates and testing techniques that cover operational security, including human security, physical facilities security, and access control testing. The methodology should provide comprehensive standards for conducting security assessments. What methodology manual provides templates and standards focusing on operational security?`,
  
  "open web application security project (owasp)": `Your organization wants to build security into the software development organization using a flexible framework. This framework should help define security requirements, conduct audits and assessments, provide security training for developers, and identify vulnerabilities before release. What organization provides this flexible framework?`,
  
  "open-source software license compliance": `Your legal team discovered your development team incorporated open-source libraries into your commercial product without verifying license compatibility. Some licenses require you to open-source your entire application if you use their code. You need to ensure compliance to avoid legal proceedings that would delay product release. What compliance practice ensures in-house software meets licensing requirements?`,
  
  "open-source software security": `Your application uses 50+ open-source libraries as dependencies. The security team needs to identify security issues within these externally developed components by checking the open-source code for vulnerabilities and mitigating identified issues. What practice involves checking security issues in open-source components?`,
  
  "operational enablement": `During the deployment phase, your team is identifying and capturing critical security information: how to properly configure the application, secure deployment procedures, runtime security settings, and operational security controls users need to run the software safely. What activity captures security information needed to properly configure, deploy, and run software?`,
  
  "owasp zed attack proxy (zap)": `Your security team needs an open-source tool that can find vulnerabilities like XSS, SQL injection, and CSRF in your web applications. The tool should be useful for both automated security testing and security training for developers. What OWASP tool identifies these common web application vulnerabilities?`,
  
  // P
  "passive scanner": `Your security team needs to scan production web applications without disrupting business operations. The scanning must identify vulnerabilities like missing security headers, insecure cookies, potential XSS, and information disclosure, but cannot send attack payloads or modify data. The tool should analyze HTTP traffic passively as the application runs under normal use. This scan must be safe to run continuously in production environments. What scanning approach meets these requirements?`,
  
  "pasta": `Your organization needs a repeatable threat analysis framework that considers both business objectives and technical scope. The process should simulate attacks and analyze threats systematically, evaluating threats to the system while aligning with business goals. What threat analysis framework provides a repeatable process considering business objectives?`,
  
  "penetration testing": `Before a major release, security must validate the entire application for vulnerabilities. The scan should test for SQL injection, XSS, CSRF, authentication bypass, and other OWASP Top 10 issues by actually sending exploit attempts and analyzing responses. The application is deployed in staging, and aggressive testing is acceptable. You need comprehensive coverage of all vulnerabilities that can be detected through black-box testing. What scanner type should you use?`,
  
  "planning phase": `Your organization is starting a new software project. Before any design or development begins, the team needs to create a blueprint that defines the problem being solved, the project scope, objectives, timeline, and resources. Security planning includes gathering security tools for analysis and establishing security goals. What SDLC phase creates the initial blueprint defining problem, scope, and objectives?`,
  
  "policy and compliance": `Your organization's governance team is setting up mandatory security controls, coding standards, compliance requirements, and security requirements that must be followed throughout SDL and SDLC. These policies define what teams must do to maintain security and compliance. What governance practice defines mandatory controls and standards throughout development?`,
  
  "post-release support phase": `A production application has been running for two years. Yesterday, a security researcher disclosed a critical vulnerability via responsible disclosure. The PSIRT team validated the vulnerability, assessed its severity (CVSS 9.1), and determined it affects all customers. Now the team must: develop and test a security patch, prepare a security advisory, coordinate disclosure timing with the researcher, deploy the patch to production, and notify affected customers. What phase of the software lifecycle handles this scenario?`,
  
  "privacy impact assessment": `Your new customer relationship management system will collect and process personally identifiable information (PII) including names, addresses, social security numbers, and financial data. Before development proceeds, you must analyze the privacy impact, rate the sensitivity of PII, and evaluate privacy and data-protection risks. What assessment identifies privacy risks early during requirements and design?`,
  
  "product risk profile": `Your security team is assessing a new payment processing system. The product will cost $5M to develop and will handle highly sensitive credit card data with significant external exposure. This risk assessment will determine how rigorous security controls and testing must be throughout the development lifecycle. What assessment considers cost, data sensitivity, and exposure to determine security rigor?`,
  
  "product security incident response team (psirt)": `A security researcher just emailed your company reporting a SQL injection vulnerability in your customer portal. Someone must: receive and validate the vulnerability report, assess severity and impact, coordinate with engineering to develop a fix, manage disclosure timeline with the researcher, prepare a security advisory, notify affected customers, and track the issue through resolution. This requires managing external vulnerability disclosures and coordinating cross-functional response. What team handles this responsibility?`,
  
  "pull request": `Your developer completed a new feature and wants to merge code into the main branch. Before integration, the team requires that another developer review the code changes, check for security vulnerabilities, verify coding standards are followed, and approve the merge. What process requires code review before merging branches?`,
  
  // R
  "repudiation": `Your application's audit logging system was designed poorly - users can perform sensitive actions without leaving a trail, or they can deny having performed actions because logs don't capture sufficient detail. Strong authentication and cryptographic mechanisms are needed to prevent users from denying their actions. What STRIDE threat involves users denying they performed an action?`,
  
  "requirement phase": `Your project team is documenting all security requirements for the new application: what coding language will be used, what hardware is needed, how data will be stored, encryption requirements, authentication mechanisms, and security specifications. These security requirements will guide all subsequent development. What SDLC phase defines security requirements and technical specifications?`,
  
  "requirement traceability matrix": `Development teams must follow security policies, but compliance is inconsistent. The security team wants to track: Are security requirements documented? Is threat modeling performed? Are code reviews completed? Are security tests passed? They need a traceability system that maps every security requirement to design decisions, code implementations, and test results, ensuring nothing is missed and providing audit evidence. What artifact provides this requirement-to-implementation mapping?`,
  
  "risk model": `During development, your security team needs to assess potential vulnerabilities by identifying what threats could exploit them and what the impact would be if successful. This assessment will prioritize which security controls to implement based on likelihood and potential damage. What model assesses vulnerabilities by identifying threats and their potential impact?`,
  
  // S
  "scripts": `Your QA team needs to automate repetitive security testing tasks, document test procedures for consistent execution, and automate deployment security checks. These automated instructions will test the application's security and can be integrated into CI/CD pipelines. What artifact contains instructions for automated testing and security validation?`,
  
  "scrum": `Your development team follows an iterative approach with 2-week sprints. Each sprint starts with planning, includes daily standups, and ends with a demo and retrospective. Security requirements are added to the product backlog and prioritized alongside features. The team needs a framework that integrates security into this existing sprint-based workflow. What development methodology is being used?`,
  
  "secure architecture": `Your security architect is designing the system's structural framework with security controls built in from the start: authentication flows, authorization checks, encryption layers, audit logging, and secure communication channels. These security controls are architectural elements, not features added later. What term describes system structural design with built-in security controls?`,
  
  "secure code": `Your development team follows OWASP coding guidelines, uses parameterized queries to prevent SQL injection, validates all inputs, encodes outputs to prevent XSS, and implements proper error handling. The code is written according to security best practices to protect against known vulnerabilities. What term describes code following security best practices and protecting against known vulnerabilities?`,
  
  "secure testing scripts": `Your security automation includes test scripts specifically designed to validate security controls: authentication bypass attempts, authorization testing, input validation checks, and SQL injection tests. These scripts ensure consistent and repeatable security validation in your CI/CD pipeline. What term describes automated scripts that test security requirements?`,
  
  "security assessment (a1) phase": `Your project team has just completed initial requirements gathering for a new customer data platform. The product will handle PII including names, addresses, payment information, and health data. Before any design or coding begins, the security team must evaluate business risks, establish security goals, define compliance requirements (GDPR, HIPAA, PCI-DSS), and create a security plan. This assessment will determine how rigorous security testing must be and what security activities are needed throughout development. Which SDL phase is the team entering?`,
  
  "security development lifecycle (sdl)": `Your team is developing a cloud-based platform that handles sensitive customer data. Leadership wants to ensure security is built into the development process from the beginning. The security team needs to establish when security activities should occur, what security controls are required, and how to validate that security requirements are met. They need a systematic approach that works throughout the development lifecycle. The goal is to reduce vulnerabilities and ensure compliance with security standards. What framework or approach should guide the team's security efforts?`,
  
  "security requirements": `Your project security lead is documenting specific security expectations: "All user passwords must be hashed with bcrypt," "Session tokens must expire after 30 minutes," "All payment data must be encrypted," "API must implement rate limiting." These requirements promote security inclusion during development and establish what assets need protection. What requirements document specifies security controls and expectations?`,
  
  "security testing": `Your security team is validating that implemented security controls actually work as intended. This includes penetration testing, static analysis, dynamic analysis, and security test cases that evaluate the application's resilience against threats. The goal is to verify security controls function correctly. What activity evaluates application resilience through various testing techniques?`,
  
  "ship (a5) phase": `Development has finished writing code for a new features release. The application is now in staging, and the security team is conducting final validation before production deployment. Activities include: penetration testing of the deployed application, final vulnerability scans, security regression testing, open-source license compliance review, and obtaining security sign-off from stakeholders. The goal is to verify the application meets all security and compliance requirements before it goes live. What phase of the SDL is this?`,
  
  "software development lifecycle (sdlc)": `A security audit identified gaps in your organization's software development practices. Management wants to improve security across all development teams. The team needs guidance on: when to perform threat modeling, how to validate security requirements, what testing to perform, and how to handle vulnerabilities after release. The approach must integrate security into existing development workflows without requiring a complete process overhaul. What methodology or framework should the organization adopt?`,
  
  "software security champion (ssc)": `A software development team of 15 engineers needs a dedicated person to: advocate for security within the team, attend security training and share knowledge, run security tools and interpret results, coordinate with the central security team, conduct peer code reviews for security issues, and ensure the team follows secure coding standards. This person remains a full-time developer but has additional security responsibilities and acts as the security liaison. What role best describes this position?`,
  
  "software security policy": `Your organization has documented what data needs protecting, how it must be protected, security standards developers must follow, and security testing requirements. This policy provides guidance for developers, testers, and operations teams to ensure compliance throughout development and maintenance. What documentation defines what needs protecting and provides security guidance?`,
  
  "sonarqube": `Your development team needs continuous code quality monitoring that detects code smells, security vulnerabilities, and security hotspots in source code. The tool should integrate with your CI/CD pipeline to help developers detect issues before release and improve overall code quality through automated analysis. What source code analysis tool provides continuous quality and security monitoring?`,
  
  "spider": `You're assessing a large web application with hundreds of pages and dynamic content. Before running vulnerability tests, you need to map the entire application: discover all URLs, forms, API endpoints, parameters, and inputs. The tool must crawl the application like a search engine, following links, submitting forms, and executing JavaScript to build a complete map of the attack surface. What tool creates this comprehensive application map?`,
  
  "spoofing": `During your security assessment, testers discovered they could create forged authentication tokens to impersonate other users. The application's credential validation was weak, allowing attackers to take on someone else's identity. What STRIDE threat category describes taking someone's credentials or impersonating another user?`,
  
  "sql injection": `Your security team discovered that an attacker could manipulate user input in the search field to inject malicious database commands. Because the application doesn't validate or sanitize inputs before constructing SQL queries, attackers can extract sensitive data, modify records, or even drop tables. What vulnerability involves exploiting unsanitized input to manipulate databases?`,
  
  "static analysis": `Your organization maintains a legacy C++ application with known buffer overflow vulnerabilities. The codebase is 500,000 lines, and manual code review would take months. You need to identify security issues like SQL injection, XSS, insecure API usage, and buffer overflows before the security audit next month. The solution must analyze the code without executing it and provide line-number references to vulnerabilities. Management wants automated scanning that developers can run during development. What technique should you prioritize?`,
  
  "strategy and metrics": `Your security program needs to define overall security goals and measure their effectiveness. This involves establishing the organization's software assurance strategy and implementing processes to collect metrics showing whether security practices are working. What practice defines security goals and measures effectiveness?`,
  
  "stride": `Your team is performing threat modeling on a new web application. You need a systematic way to categorize potential threats to ensure comprehensive coverage. The framework should help identify: identity attacks (Spoofing), data modification (Tampering), denial of actions (Repudiation), unauthorized data access (Information Disclosure), service disruption (Denial of Service), and unauthorized privilege gains (Elevation of Privilege). What threat categorization model provides this comprehensive framework?`,
  
  "system test": `Your application integrates with payment processors, email services, authentication providers, and a CRM system. Testing needs to evaluate how your application interacts with these external systems, identify security weaknesses in the integrations, and verify that data flows securely across system boundaries. What testing type evaluates interaction with other systems?`,
  
  // T
  "tampering": `Security testing revealed that attackers can intercept and modify data in transit between your application and the database. Without integrity checks, users' account balances could be altered maliciously during transmission. What STRIDE threat category describes modifying or changing data for malicious purposes?`,
  
  "target machine": `Your security team has set up an isolated environment with intentionally vulnerable applications for training purposes. Security engineers use this environment to practice identifying attack surfaces, discovering vulnerabilities, and simulating attacks without risking production systems. What term describes machines used for practicing vulnerability identification and attack simulation?`,
  
  "testing phase": `Discoveries from the implementation phase are now being validated through test execution. The security team is looking at the infrastructure from an attacker's perspective, discovering potential targets, identifying vulnerabilities, and verifying that security controls work correctly. What SDLC phase involves running tests to discover vulnerabilities?`,
  
  "third party codes": `Your application uses reusable libraries and frameworks developed by external organizations - React, Spring Framework, Log4j, and others. A vulnerability was just disclosed in one of these dependencies that could affect your entire system. You need to manage these external risks. What term describes externally developed software components that introduce external risks?`,
  
  "threat assessment (ta)": `Early in your project, the security team needs to identify and characterize potential threats targeting your application. This assessment will help prioritize which security mitigations to implement based on which threats pose the greatest risk. What activity identifies and characterizes potential threats early in development?`,
  
  "threat modeling": `Your team is designing a new healthcare portal that will store patient records, integrate with insurance systems, and allow patients to schedule appointments. The system has external APIs for partners, internal admin interfaces, and mobile apps. Before writing any code, the security architect wants to identify where trust boundaries exist, what data flows between components, which assets attackers might target, and what security controls are needed. The goal is to find and mitigate threats during design rather than after deployment. What security activity should the team perform first?`,
  
  "threat profile": `Your web application operates in a specific environment: it's internet-facing, handles payment data, targets high-value customers, and operates in the financial sector. The security team needs to understand threats specific to this product environment to inform security requirements and design decisions. What document describes threats specific to the product's operating environment?`,
  
  "threat source": `During threat modeling, your team is identifying who or what might attack the system: organized cybercriminals seeking financial gain, nation-state actors conducting espionage, malicious insiders with access to systems, or automated bots scanning for vulnerabilities. What term describes the entities that might attack your system?`,
  
  "threat vector": `Security analysis revealed that attackers could exploit SQL injection vulnerabilities through the web application's search function, or they could target API endpoints with malformed JSON payloads. These describe the paths and methods attackers use to reach vulnerabilities. What term describes the means and paths attackers use to exploit vulnerabilities?`,
  
  "trike": `Your security team needs a framework for security auditing that takes an asset-centric approach with automated threat generation. The framework should help define how to protect and defend specific assets through systematic analysis. What conceptual framework provides asset-centric security auditing?`,
  
  // V
  "verification": `Your security program following OpenSAMM needs to inspect artifacts and conduct testing. This includes design reviews to examine architecture for security flaws and code reviews to inspect implementation, followed by comprehensive testing to identify vulnerabilities. What OpenSAMM practice involves checking artifacts and testing to find vulnerabilities?`,
  
  "virtualization": `Your security team wants to isolate applications and create separate testing environments to reduce risk. By running applications in isolated virtual environments, you can test security without affecting production systems and contain potential compromises. What technology isolates applications and environments to reduce risk?`,
  
  "v-model": `Your team is developing safety-critical software where security requirements must be verified at each stage. For every development phase (requirements, design, implementation), there must be a corresponding testing phase that validates security controls were implemented correctly. The methodology ensures traceability between requirements and tests, with security verification mirroring each development step. What development model enforces this parallel testing structure?`,
  
  "vulnerability": `During a security review, the team identified several weaknesses in the application: insecure configurations, missing security controls, design flaws that could be exploited, and outdated components with known security issues. Management wants to understand what category these security findings fall into and how to prioritize remediation efforts. What term best describes these types of security weaknesses that attackers could potentially exploit?`,
  
  "vulnerability assessments": `Your security program requires systematic identification of weaknesses across all applications. This comprehensive evaluation provides insight into your overall security posture and guides remediation efforts, helping prioritize what to fix first based on risk. What practice systematically identifies weaknesses to provide security posture insight?`,
  
  "vulnerability management (vm)": `Your organization receives vulnerability reports from internal scanners, external researchers, and vendor disclosures. You need a consistent process to manage these reports, track remediation, and limit security exposure across all systems. This ongoing practice enhances your security assurance program. What practice manages internal and external vulnerability reports to limit exposure?`,
  
  "vulnerability scan": `Your security team runs weekly automated scans across all applications using tools that check for known vulnerabilities from databases like CVE and NVD. These scans provide consistent, repeatable results that support continuous security improvement by detecting known weaknesses. What automated process detects known weaknesses using scanning tools?`,
  
  "vulnerability sites": `Your security team subscribes to feeds and follows websites that publish up-to-date information on newly discovered security flaws, exploits, and patches. These sources help the team stay aware of emerging risks affecting your technology stack and support timely patching decisions. What information sources provide up-to-date information on security flaws?`,
  
  // W
  "waterfall methodology": `Your project has well-defined requirements that are unlikely to change. The system must meet strict regulatory compliance with documented security gates at each phase. The customer expects a fixed-price contract with clear deliverables. Security reviews must be formal and documented before proceeding to the next phase. The project needs predictable timelines and comprehensive documentation. Which development methodology fits these requirements?`,
  
  "white box testing": `Your security testers have full access to source code, architecture diagrams, and internal documentation. They can examine the code's internal logic, trace how functions work, and perform deep analysis to identify hidden vulnerabilities that wouldn't be visible from external testing alone. What testing approach involves testing with full knowledge of internal code and logic?`,
  
  // Z
  "zed attack proxy (zap)": `Your security team needs a penetration testing tool that can identify runtime vulnerabilities by intercepting and manipulating HTTP traffic between your browser and the application. The tool should simulate real-world attacks to uncover issues that static analysis tools would miss. What penetration testing tool identifies runtime vulnerabilities through active testing?`
};
  
  // Look up the scenario for this term
  const scenario = SCENARIOS[termName];
  
  if (scenario) {
    return scenario;
  }  
  
  // THIS SHOULD NEVER EXECUTE - Every term must have a scenario
  console.error('MISSING SCENARIO for term: ' + term.term);
  return 'ERROR: No scenario defined for ' + term.term + '.This is a configuration error - every term must have a specific scenario for effective study. Please report this issue.';
}