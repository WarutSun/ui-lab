# ITCS386 — Automated UI Testing Lab Results

**Course:** ITCS386 Software Verification and Validation  
**Assignment:** Automated UI Testing Lab  
**Selected Tools:** Part 3 — Robot Framework and Part 4 — Cypress  
**Test Case:** QP-01 — A Custom Pizza Reaches the Admin List

---

## Part 0: Preparation and Manual Testing

### Environment

| Item | Version / Configuration |
|---|---|
| Operating System | Windows 64-bit |
| Google Chrome | 158.0.8127.37 (64-bit) |
| ChromeDriver | [TO FILL: ChromeDriver version] |
| ChromeDriver Path | `C:\drivers\chromedriver-win64\chromedriver.exe` |
| Python | 3.13.2 |
| Node.js | v22.14.0 |
| npm | 10.9.2 |

### Step 0.4 — QuickPizza Locators

The following locators were used to interact with the QuickPizza website during automated testing.

| Element | Locator |
|---|---|
| Pizza, Please! button | `name:pizza-please` |
| Advanced switch | `xpath://label[.//span[normalize-space()='Advanced']]` |
| Max Calories per Slice | `xpath://label[contains(.,'Max Calories')]/../input` |
| Excluded tools | `css:select` |
| Must be vegetarian | `id:default-checkbox` |
| Custom Pizza Name | `css:input#pizza-name` |
| Recommendation | `id:recommendations` |
| Love it! button | `name:rate-5` |
| Rating message | `id:rate-result` |
| Admin username | `id:username` |
| Admin password | `id:password` |

### Step 0.5 — Manual Test QP-01

**Test Objective:** Verify that a custom pizza recommendation follows the specified restrictions, rating requires login, and the pizza appears in the admin list.

**Test Data:**

| Field | Value |
|---|---|
| Max Calories per Slice | 600 |
| Excluded tools | Knife |
| Must be vegetarian | Checked |
| Custom Pizza Name | Lab Pizza 20261124-193500 |

**Manual Test Results:**

| Step | Actual Result | Pass or Fail |
|---|---|---|
| 1 | Opened the QuickPizza home page and confirmed that the heading "Looking to break out of your pizza routine?" appeared. | PASS |
| 2 | Enabled Advanced mode and displayed Max Calories per Slice, Excluded tools, Must be vegetarian, and Custom Pizza Name. | PASS |
| 3 | Entered maximum calories of 600, excluded Knife, selected vegetarian, and entered the custom pizza name. | PASS |
| 4 | Received a recommendation named Lab Pizza 20261124-193500, using Pizza cutter, with 500 calories per slice. The recommended tool was not Knife and the calories did not exceed 600. | PASS |
| 5 | Clicked Love it! without logging in. The page displayed "Please log in first." | PASS |
| 6 | Accessed the admin page using the lab credentials and viewed the latest pizza recommendations. | PASS |
| 7 | Found Lab Pizza 20261124-193500 in the admin list with tool=Pizza cutter and ingredients_number=5. The tool matched the recommendation. | PASS |

### Manual Recommendation Details

- **Pizza Name:** Lab Pizza 20261124-193500
- **Dough:** Thin
- **Recommended Tool:** Pizza cutter
- **Calories per Slice:** 500
- **Number of Ingredients:** 5
- **Result:** PASS

The recommendation satisfied the maximum calorie restriction and excluded the selected tool. The admin list also contained the same pizza name and tool.

---

## Part 3: Robot Framework

### Environment

| Item | Version |
|---|---|
| Python | 3.13.2 |
| Robot Framework | 7.5.1 |
| SeleniumLibrary | 6.9.0 |
| Browser | Google Chrome 158 |
| ChromeDriver | [TO FILL: ChromeDriver version] |

### Step 3.1 — Installation

Robot Framework and SeleniumLibrary were installed in a Python virtual environment.

The installation was verified using:

```powershell
python --version
robot --version
```

The terminal displayed:

```text
Python 3.13.2
Robot Framework 7.5.1 (Python 3.13.2 on win32)
```

**Result:** PASS

### Step 3.2 — First Robot Framework Test

**File:** `robot/first.robot`

The first test opened the Selenium Web Form and verified that the page title was `Web form`.

**Result:** PASS

An intentional failure was introduced by changing the expected title from `Web form` to `Web Form`.

**Intentional Failure Message:**

```text
[TO FILL: Exact failure message from the Robot Framework test]
```

After correcting the expected title, the test passed again.

### Step 3.3 — Every Kind of Field

**File:** `robot/web_form.robot`

This test automated different form inputs, including text, password, textarea, dropdown, checkbox, radio button, and date.

After submitting the form, the test verified the page title and confirmation message.

**Execution Result:**

```text
Every Kind Of Field | PASS |
1 test, 1 passed, 0 failed
```

**Result:** PASS

### Steps 3.4–3.7 — Automated QP-01

**Files:**

- `robot/pizza_scenario.robot`
- `robot/resources/quickpizza.resource`

The automated test completed all seven steps of QP-01.

The test opened QuickPizza, enabled Advanced mode, entered the pizza restrictions, requested a recommendation, verified the tool and calories, checked that rating required login, logged in as admin, and verified the pizza in the admin list.

**Full Test Result:**

```text
QP-01 A Custom Pizza Reaches The Admin List | PASS |
1 test, 1 passed, 0 failed
```

**Example Pizza Name:** Lab Pizza 20261124-201728

### Step 3.8 — Evidence from Two Full Runs

Both runs used headless Chrome.

#### Run 1

- **Browser:** Chrome (headless)
- **Result:** PASS
- **Tests:** 1 passed, 0 failed
- **Pizza Name:** Lab Pizza 20261124-201845
- **Elapsed Time:** [TO FILL: From run1/report.html]
- **Evidence Directory:** `robot/results/run1/`

#### Run 2

- **Browser:** Chrome (headless)
- **Result:** PASS
- **Tests:** 1 passed, 0 failed
- **Pizza Name:** Lab Pizza 20261124-201856
- **Elapsed Time:** [TO FILL: From run2/report.html]
- **Evidence Directory:** `robot/results/run2/`

### Robot Framework Evidence

Each run generated:

- `output.xml`
- `log.html`
- `report.html`
- `qp01-step3-fields.png`
- `qp01-step4-pizza.png`
- `qp01-step5-login-needed.png`
- `qp01-step7-admin-list.png`

**Overall Part 3 Result:** PASS — Both full runs completed successfully.

---

## Part 4: Cypress

### Environment

| Item | Version |
|---|---|
| Node.js | v22.14.0 |
| npm | 10.9.2 |
| Cypress | 16.2.1 |
| Chrome | 158 |
| Edge | 158 |
| Electron | 146 (deprecated) |

### Step 4.1–4.2 — Cypress Installation and Configuration

Cypress 16.2.1 was installed successfully using npm.

The installation was verified using:

```powershell
npx cypress version
```

The terminal displayed:

```text
Cypress package version: 16.2.1
Cypress binary version: 16.2.1
Electron version: 41.7.0
Bundled Node version: 24.15.0
```

The Cypress E2E Testing interface was opened successfully.

**Result:** PASS

### Step 4.3 — Selenium Web Form

**File:** `cypress/cypress/e2e/web-form.cy.js`

The test opened the Selenium Web Form, entered text, selected a dropdown option, submitted the form, and verified the result.

**Execution Result:**

```text
Selenium Web Form
  √ fills and submits the form

1 passing
```

**Result:** PASS

#### Intentional Failure

The expected title was intentionally changed from `Web form - target page` to `Web Form - target page`.

Cypress displayed:

```text
Timed out retrying after 10000ms

+ expected - actual

-'Web form - target page'
+'Web Form - target page'
```

After correcting the expected title, the test passed again.

### Steps 4.4–4.5 — QuickPizza UI Testing

**File:** `cypress/cypress/e2e/pizza-scenario.cy.js`

The test opened QuickPizza, enabled Advanced mode, entered the restrictions, requested a pizza, and verified the recommendation.

The test also verified that clicking Love it! without logging in displayed the expected message.

**Result:** PASS

### Step 4.6 — API Verification

Cypress intercepted the POST request to `/api/pizza` using `cy.intercept()`.

The test checked that:

- The request contained `maxCaloriesPerSlice = 600`.
- The API returned HTTP status 200.
- The recommended tool displayed on the page matched the API response.
- The displayed calories matched the API response.
- The recommended tool was not Knife.
- The calories per slice did not exceed 600.

**Result:** PASS

**Verified Run 2 Recommendation:**

- Pizza Name: Lab Pizza 20261124-205446
- Recommended Tool: Pizza cutter
- Calories per Slice: 575
- Maximum Calories: 600

### Step 4.7 — Admin Login and Verification

Cypress used the custom command `cy.adminLogin()` to log in to the QuickPizza admin page.

The test verified that the heading `Latest pizza recommendations` appeared.

It then searched the admin list for the pizza created earlier in the same test and compared the tool with the recommendation.

**Verified Admin List Entry:**

```text
Lab Pizza 20261124-205446 (tool=Pizza cutter, ingredients_number=7)
```

**Result:** PASS

### Step 4.8 — Screenshots, Videos and Two Full Runs

#### Run 1

- **Browser:** Electron 146 (headless, deprecated)
- **Result:** PASS
- **Tests:** 2 passed, 0 failed
- **Total Duration:** 14 seconds
- **Pizza Scenario Duration:** 11 seconds
- **Web Form Duration:** 3 seconds
- **Pizza Name:** [TO FILL: From Run 1 screenshot]
- **Evidence Directory:** `cypress/evidence-run1/`

#### Run 2

- **Browser:** Electron 146 (headless, deprecated)
- **Result:** PASS
- **Tests:** 2 passed, 0 failed
- **Total Duration:** 14 seconds
- **Pizza Scenario Duration:** 11 seconds
- **Web Form Duration:** Approximately 2–3 seconds
- **Pizza Name:** Lab Pizza 20261124-205446
- **Recommended Tool:** Pizza cutter
- **Calories per Slice:** 575
- **Admin List Verification:** PASS

### Cypress Evidence

Each successful full run generated three QuickPizza screenshots:

- `qp01-step4-recommendation.png`
- `qp01-step5-login-needed.png`
- `qp01-step7-admin-list.png`

Cypress also generated videos for both test specifications:

- `pizza-scenario.cy.js.mp4`
- `web-form.cy.js.mp4`

### Additional Observation — Browser Compatibility

Both Cypress specifications passed individually using Chrome 158.

However, running both specifications together using Chrome 158 caused the error:

```text
* is not a valid URL
```

The error occurred when Cypress attempted to switch from the first specification to the second.

The same problem occurred using Edge 158 and after moving the project outside OneDrive.

Running both specifications together using Electron 146 completed successfully twice.

Cypress reported that Electron 146 was deprecated as a test browser.

**Overall Part 4 Result:** PASS — Both full runs completed successfully using Electron 146.

---

## Part B: Reflection

### Question 1: Why locate Max Calories per Slice through its label instead of its ID?

The Max Calories per Slice input shares the same ID with other number inputs on the QuickPizza page. Using the ID alone could select the wrong input field. In this lab, I used an XPath locator based on the Max Calories label to identify the correct field. The developers could assign a unique ID such as `max-calories-per-slice` to this input. This would make the test easier to write, more reliable, and simpler to maintain.

### Question 2: What kind of test oracle is used in QP-01 Step 7?

Step 7 uses a consistency oracle because it compares the tool displayed in the pizza recommendation with the tool displayed in the admin list. Both values should match because they refer to the same pizza. In my Cypress Run 2, the recommendation showed Pizza cutter, and the admin list also showed Pizza cutter for Lab Pizza 20261124-205446. This check could detect a bug where the admin page stores or displays an incorrect tool.

### Question 3: How could we verify that the pizza is vegetarian?

QP-01 currently checks that the vegetarian checkbox is selected, but it does not verify whether the recommended pizza contains only vegetarian ingredients. I would add a test that examines the ingredients returned by the QuickPizza API. The test would compare each ingredient against a reliable list of vegetarian and non-vegetarian ingredients. This would require ingredient classification data from the API or another trusted source. The test should fail if any non-vegetarian ingredient is found.

### Question 4: Compare Robot Framework and Cypress.

Robot Framework uses explicit waiting keywords, such as `Wait Until Element Contains`, while Cypress automatically retries queries and assertions. I found Robot Framework easy to understand because its keywords closely followed the manual test steps. Cypress required JavaScript code but provided useful features such as `cy.intercept()` for checking API requests and responses. Robot Framework generated detailed HTML logs and reports, while Cypress provided screenshots and videos that helped me review the tests. Both tools successfully completed QP-01, although Cypress experienced an error when switching between multiple specifications in Chrome and Edge.

### Question 5: Which tool would you choose for Project 2?

I would choose Cypress for Project 2 because it supports automatic retries and API interception. These features make it easier to test dynamic websites and verify that the information displayed on the page matches the server response. I also found Cypress screenshots and videos useful for debugging and reviewing test results. However, I experienced a browser compatibility issue when running multiple specifications together in Chrome and Edge. Therefore, I would investigate this issue before using Cypress for Project 2.

### Question 6: Part 3 — Robot Framework Resource File

In Robot Framework, the locator for Max Calories per Slice is stored in the `${MAX CALORIES}` variable inside `resources/quickpizza.resource`. If QuickPizza changes the structure of this input field, I would update the locator in that resource file. The `pizza_scenario.robot` test would not need to change because it uses the reusable `Fill In The Pizza Request` keyword. This separation makes the test easier to maintain and reduces duplicated code.

### Question 7: Part 4 — Cypress Test Isolation

Cypress clears cookies before each test to maintain test isolation. QuickPizza uses a cookie to keep the browser connected to the same server. If Steps 6 and 7 were placed in a separate test, the browser might connect to a different server and fail to find the pizza created earlier. Therefore, all seven steps of QP-01 should remain inside one `it()` test. This preserves the necessary state and allows the admin list to verify the same pizza created during the test.

---

## Final Test Summary

| Part | Test | Result |
|---|---|---|
| Part 0 | Manual QP-01 | PASS |
| Part 3 | First Robot Framework Test | PASS |
| Part 3 | Every Kind of Field | PASS |
| Part 3 | QP-01 Run 1 | PASS |
| Part 3 | QP-01 Run 2 | PASS |
| Part 4 | Selenium Web Form | PASS |
| Part 4 | QP-01 Steps 1–7 | PASS |
| Part 4 | Full Run 1 (Electron) | PASS |
| Part 4 | Full Run 2 (Electron) | PASS |

### Conclusion

The lab demonstrated how automated UI testing can verify user interactions and expected results using Robot Framework and Cypress.

Both tools successfully automated QP-01 and verified the pizza recommendation, login requirement, and admin list consistency.

Robot Framework provided readable keywords and detailed HTML reports, while Cypress provided API interception, automatic retries, screenshots, and videos.

The browser compatibility issue encountered during Cypress testing also demonstrated the importance of testing automation tools in the target environment.

**Final Status:** All selected automated test scenarios completed successfully, with the Cypress full runs performed using Electron 146.