# ITCS386 — Automated UI Testing Lab

## Overview

This repository contains the individual Automated UI Testing Lab for ITCS386 Software Verification and Validation.

The two selected tools are:

- **Part 3:** Robot Framework
- **Part 4:** Cypress

The tests cover the Selenium Web Form and QuickPizza demo websites.

The main test case is QP-01: A Custom Pizza Reaches the Admin List. It verifies pizza restrictions, login requirements, and consistency between the recommendation and the admin list.

## Part 3 — Robot Framework

The `robot/` directory contains Robot Framework test cases, reusable keywords, HTML reports, XML results, and screenshots.

### Requirements

- Python 3.13.2
- Robot Framework 7.5.1
- SeleniumLibrary 6.9.0
- Google Chrome and compatible ChromeDriver

### Installation

From the repository root:

```powershell
cd robot
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Set the `CHROMEDRIVER` environment variable to the ChromeDriver executable path.

### Run Tests

```powershell
robot first.robot
robot web_form.robot
robot -d results/run1 -v BROWSER:headlesschrome pizza_scenario.robot
```

### Evidence

- `robot/results/run1/`
- `robot/results/run2/`

Both full QP-01 runs passed successfully using headless Chrome.

## Part 4 — Cypress

The `cypress/` directory contains JavaScript end-to-end tests, Cypress configuration, reusable admin login commands, screenshots, and video recordings.

### Requirements

- Node.js v22.14.0
- npm 10.9.2
- Cypress 16.2.1

### Installation

From the repository root:

```powershell
cd cypress
npm ci
```

### Run Tests

```powershell
npx cypress run --browser electron
```

Both Cypress specifications passed together in two full runs using Electron 146.

Chrome 158 and Edge 158 passed the individual tests but encountered a spec-transition error when running multiple specifications together. Electron 146 was marked as deprecated by Cypress.

### Evidence

- `cypress/evidence-run1/` — first successful full run
- `cypress/cypress/screenshots/` — latest run screenshots
- `cypress/cypress/videos/` — latest run videos

## Test Results

| Test | Result |
|---|---|
| Part 0 — Manual QP-01 | PASS |
| Robot Framework — First Test | PASS |
| Robot Framework — Web Form | PASS |
| Robot Framework — QP-01 Run 1 | PASS |
| Robot Framework — QP-01 Run 2 | PASS |
| Cypress — Web Form | PASS |
| Cypress — QP-01 | PASS |
| Cypress — Full Run 1 (Electron) | PASS |
| Cypress — Full Run 2 (Electron) | PASS |

## Results and Reflection

See [RESULTS.md](RESULTS.md) for detailed execution results, test evidence, intentional failures, observations, and answers to all seven reflection questions.

## Conclusion

Both Robot Framework and Cypress successfully automated QP-01.

Robot Framework provided readable keywords and detailed HTML reports. Cypress provided automatic retries, API interception, screenshots, and videos.

The lab also demonstrated the importance of browser compatibility and reproducible test execution.