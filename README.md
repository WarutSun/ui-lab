# ITCS386 — Automated UI Testing Lab

## Selected Tools

- **Part 3:** Robot Framework
- **Part 4:** Cypress

## Overview

This repository contains automated UI tests for the Selenium Web Form and QuickPizza websites.

The main test case, QP-01, verifies that a custom pizza recommendation satisfies the requested restrictions, rating requires login, and the pizza appears in the admin list.

## Part 3 — Robot Framework

The `robot/` folder contains Robot Framework test cases, reusable keywords, and execution evidence from two successful runs.

### Requirements

- Python 3.13.2
- Robot Framework 7.5.1
- SeleniumLibrary 6.9.0
- Google Chrome and compatible ChromeDriver

### Installation

```powershell
cd robot
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

Set the `CHROMEDRIVER` environment variable to the location of ChromeDriver.

### Run Tests

```powershell
robot first.robot
robot web_form.robot
robot -d results/run1 -v BROWSER:headlesschrome pizza_scenario.robot
```

### Evidence

Test reports, logs, XML results, and screenshots are stored in:

- `robot/results/run1/`
- `robot/results/run2/`

## Part 4 — Cypress

The `cypress/` folder contains JavaScript end-to-end tests, Cypress configuration, reusable admin login commands, screenshots, and videos.

### Requirements

- Node.js v22.14.0
- npm 10.9.2
- Cypress 16.2.1

### Installation

```powershell
cd cypress
npm ci
```

### Run Tests

```powershell
npx cypress run --browser electron
```

Both Cypress specifications passed together using Electron 146.

Chrome 158 and Edge 158 passed individual tests but encountered a spec-transition error when running both specifications together.

### Evidence

Screenshots and videos are stored in:

- `cypress/evidence-run1/`
- `cypress/cypress/screenshots/`
- `cypress/cypress/videos/`

## Test Results

See [RESULTS.md](RESULTS.md) for:

- Part 0: Manual testing results
- Part 3: Robot Framework execution results
- Part 4: Cypress execution results
- Part B: Reflection answers

## Summary

Both Robot Framework and Cypress successfully automated QP-01.

Robot Framework provided readable keywords and HTML reports, while Cypress provided automatic retries, API interception, screenshots, and videos.