const testCases = [
  {
    "uuid": 5,
    "type": "testCase",
    "title": "Sample test case",
    "steps": [
      {
        "uuid": 6,
        "title": "Step 1",
        "action": "Do this operation",
        "parameters": [
          "par1",
          "par2"
        ],
        "pass_cond": "element x === element y"
      },
      {
        "uuid": 7,
        "title": "Step 2",
        "action": "Type in msg into textbox",
        "parameters": [
          "My message."
        ],
        "pass_cond": "Message box is not empty."

      },
      {
        "uuid": 8,
        "title": "Step 3",
        "action": "Press enter button",
        "parameters": [
        ],
        "pass_cond": "Element with id='enterButton' is visible."
      }
    ],
    "pass_cond": "Element with id='validator' is hidden."
  },
  {
    "uuid": 9,
    "type": "testCase",
    "title": "Sample test case 2",
    "steps": [
      {
        "uuid": 10,
        "title": "Do step 1",
        "action": "Hover pointer device over element with id='someid' and hit some keyboard keys.",
        "parameters": [
          "k",
          "u",
          "r",
          "k",
          "a"
        ],
        "pass_cond": "Element with id='someid' has attribute background='black'"
      },
      {
        "uuid": 11,
        "title": "Do step 2",
        "action": "Hover pointer over element with id='anotherId' and double-click pointer device",
        "parameters": [
        ],
        "pass_cond": "Element with id='anotherId' has attribute somAttr='10'"
      },
      {
        "uuid": 12,
        "title": "Last step",
        "action": "Focus on element with id='lastElement' and type in arguments seperated by spaces.",
        "parameters": [
          "Arg1",
          "Arg2 "
        ],
        "pass_cond": "True"
      }
    ],
    "pass_cond": "True if all steps passed, false otherwise."
  },
  {
    "uuid": 13,
    "type": "testCase",
    "title": "Testing main content section",
    "steps": [
      {
        "uuid": 14,
        "title": "Step 1",
        "action": "Hover pointer over main content section",
        "parameters": [],
        "pass_cond": "Element with id='main' is visible."
      },
      {
        "uuid": 15,
        "title": "Step 2",
        "action": "Press some keyboard buttons while maintaining pointer over main content.",
        "parameters": [
          "a",
          "b"
        ],
        "pass_cond": "Element with id='main' remains visible."
      },
      {
        "uuid": 16,
        "title": "Step 3",
        "action": "Move pointer so that it does not hover over main content.",
        "parameters": [],
        "pass_cond": "Element with id='main' becomes invisible."
      }
    ],
    "pass_cond": "True if all steps passed, otherwise false."
  }
];

module.exports = testCases;
