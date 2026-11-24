## Part 0

- Step 0.1, Chrome version: 158.0.8127.37
- Step 0.5, Pizza name: Lab Pizza 20261124-193500
- Step 0.5, Recommended tool: Pizza cutter
- Step 0.5, Calories per slice: 500

| Step | Actual Result | Pass or Fail |
|------|---------------|--------------|
| 1 | QuickPizza home page opened successfully. | PASS |
| 2 | Advanced fields were displayed. | PASS |
| 3 | Entered max calories 600, excluded Knife, selected vegetarian, and entered the pizza name. | PASS |
| 4 | Recommended Lab Pizza 20261124-193500 with Pizza cutter and 500 calories per slice. | PASS |
| 5 | Clicked Love it! without logging in. The page displayed "Please log in first." | PASS |
| 6 | [Confirm the admin login result] | [Pending] |
| 7 | Found Lab Pizza 20261124-193500 in the admin list with tool=Pizza cutter. | PASS |




## Part 3: Robot Framework

- robot --version: Robot Framework 7.5.1 (Python 3.13.2 on win32)
- Step 3.2, failure message for the wrong title: [Paste actual error]

- Step 3.8, Run 1:
  - Result: PASS
  - Tests: 1 passed, 0 failed
  - Pizza name: Lab Pizza 20261124-201845
  - Elapsed time: [From results/run1/report.html]

- Step 3.8, Run 2:
  - Result: PASS
  - Tests: 1 passed, 0 failed
  - Pizza name: Lab Pizza 20261124-201856
  - Elapsed time: [From results/run2/report.html]


## Part 4: Cypress

- node --version: v22.14.0
- npm --version: 10.9.2
- npx cypress version: 16.2.1

- Step 4.3, failure message for the wrong title:
  Timed out retrying after 10000ms.
  Actual title: Web form - target page
  Expected title: Web Form - target page

## Part B: Reflection

### Question 1
The Max Calories per Slice input shares the same ID with other inputs on the page. Using the ID alone could select the wrong field. I used an XPath locator based on its label to identify the correct input. Giving this field a unique ID would make the locator simpler and more reliable.

### Question 2
Step 7 uses a consistency oracle because it compares the tool in the recommendation with the tool in the admin list. Both values should match for the same pizza. In my Cypress Run 2, both showed Pizza cutter. This check could detect a bug where the admin page displays incorrect information.

### Question 3
QP-01 checks that the vegetarian checkbox is selected, but it does not verify the ingredients. I would check the ingredients returned by the API against a reliable list of vegetarian ingredients. The test would need ingredient classification data from the API or another trusted source. It should fail if any non-vegetarian ingredient is found.

### Question 4
Robot Framework uses explicit waiting keywords, while Cypress automatically retries queries and assertions. Robot Framework was easy to understand because its keywords followed the manual test steps. Cypress provided useful API interception, screenshots, and videos. Robot Framework generated detailed HTML reports. Both tools passed QP-01, although Cypress had problems switching between specs in Chrome and Edge.

### Question 5
I would choose Cypress for Project 2 because it supports automatic retries and API interception. These features help test dynamic websites and verify API responses. Screenshots and videos also make debugging easier. However, I would investigate the browser compatibility issue before using it in Project 2.

### Question 6: Robot Framework
The Max Calories locator is stored in the quickpizza.resource file as the MAX CALORIES variable. If QuickPizza changes the input locator, I would update it in that resource file. The pizza_scenario.robot test would not need to change because it calls reusable keywords. This reduces duplicated code and makes maintenance easier.

### Question 7: Cypress
Cypress clears cookies before each test to maintain test isolation. QuickPizza uses a cookie to connect the browser to the same server. If Steps 6 and 7 were placed in another test, the browser might connect to a different server and fail to find the pizza. Keeping all seven steps in one test preserves the required state.

