// Python Workshop course data. Format: see ../COURSES-FORMAT.md.
// Sources: the workshop syllabus (2026_MSBA_PYTHON_WORKSHOP_SYLLABUS_DRAFT.pdf,
// also held as syllabi/python-workshop-syllabus.pdf), Canvas Module 1 to 7
// overviews and reading assignments, the held Week 1 to 3 lecture notebooks
// (Week-1.zip: Ch02; Week-2.zip: Ch03; Week-3.zip: Ch04, Ch05), week-3-intro.ipynb,
// and course-topics.md. Lectures 4 to 7 have no held lecture notebooks (the
// Learning Vault sync is stale as of Oct 8, 2026); their topics are PROVISIONAL.
window.COURSE_DATA = window.COURSE_DATA || {};
window.COURSE_DATA["python-workshop"] = {
  "id": "python-workshop",
  "name": "Python Workshop: Python Fundamentals",
  "professor": "Prof. Paul Deitel",
  "term": "Fall 2026",
  "examInfo": "No final exam and no GPA grade. Deitel awards a certificate grade (Completed, High Pass, or Pass with Distinction) based on the chapter quizzes (Chapters 2 to 10, one 9 or 10 question multiple choice quiz per chapter, open book, work on your own) and the required weekly lab notebooks. Labs are due Mondays at 12:00pm PT; chapter quizzes are due Tuesdays at 11:59pm PT. Lectures are Thursdays 8:00 to 11:00am PT on Zoom.",
  "inStudyQueue": false,
  "termDates": { "start": "2026-09-25", "end": "2026-12-04" },
  "weekly": [
    { "id": "lab", "label": "lab notebook due (Mon 12:00pm PT)", "weekday": 1, "until": "2026-12-04" },
    { "id": "quiz", "label": "chapter quiz due (Tue 11:59pm PT)", "weekday": 2, "until": "2026-12-04" }
  ],
  "aiPolicy": "Strict, from the syllabus: generative AI may be used for research and learning purposes only, and to help with Markdown formatting. You may NOT use AI to solve coding exercises, to explain your solutions, or to determine the answers to the chapter quizzes. Submit your own work, and verify anything an AI returns, because AIs hallucinate and produce code that may not run or may be wrong.",
  "productionMode": "typed",
  "rules": [
    "AI is for research, learning, and Markdown help only. Never use AI to solve an exercise, explain your solution, or answer a chapter quiz (syllabus policy).",
    "Use only techniques presented through the chapter an exercise belongs to. Chapter 3 exercises use Chapters 1 to 3 techniques only (syllabus precision rule).",
    "Explain every code solution in Markdown cells. Each lab notebook opens with a self-assessment and uses the required file name: LastName_FirstName_StudentID_LectureNLabExercises.ipynb.",
    "Read each exercise in the textbook, then its LabAssist notes in the syllabus. The LabAssist notes sometimes modify the exercise, and they win when they differ.",
    "Type the book's examples yourself rather than just running the downloaded code (Deitel's recommendation for learning faster).",
    "Standing note: Ben has excluded this workshop from his daily study chunk system because it is not graded. This course is imported for completeness and deadline visibility only: labs due Mondays 12:00pm PT, chapter quizzes due Tuesdays 11:59pm PT. No engine behavior changes for this course."
  ],
  "chapters": [
    {
      "id": "lec1",
      "title": "Chapter 1 (Thu Sep 3): Chapter 2, Introduction to Python Programming",
      "topics": [
        {
          "id": "lec1-variables-arithmetic",
          "title": "Variables, Arithmetic, and Types",
          "pieces": [
            {
              "id": "variables-assignment",
              "name": "Variables and assignment",
              "fn": "A variable name binds to an object when you assign to it; the type belongs to the object, and rebinding a name to a different type is allowed (dynamic typing).",
              "predict": "After `x = 7` and then `x = \"seven\"`, what is `type(x)`, and why is that legal in Python?"
            },
            {
              "id": "arithmetic-operators",
              "name": "Arithmetic operators",
              "fn": "Python splits division into true division /, floor division //, and remainder %, and uses ** for exponentiation on integers of arbitrary size.",
              "predict": "What are `7 / 2`, `7 // 2`, and `7 % 2`? Predict all three before running anything."
            },
            {
              "id": "print-and-strings",
              "name": "print and strings",
              "fn": "print displays values; strings come in single, double, and triple quotes, and triple-quoted strings can span lines with the newlines stored inside.",
              "predict": "What exactly is stored in a triple-quoted string written across three lines?"
            }
          ],
          "lesson": [
            {
              "title": "Variables and assignment",
              "body": "In IPython and scripts, an **assignment statement** like `x = 7` creates a variable that refers to an object. Python uses **dynamic typing**: a name can later be rebound to a different type, as in `x = \"seven\"`, because the type lives with the object, not the name. Objects no longer referenced are reclaimed by **garbage collection**.\n\nThe lecture notebook (Section 2.2) also introduces **type hints** style naming and shows values through the interactive interpreter, which echoes the value of an expression you type.",
              "workedExample": {
                "title": "Rebinding a name",
                "body": "```\nx = 7\nprint(type(x))\nx = \"seven\"\nprint(type(x))\n```\nThe first line reports the int class; after rebinding, the str class. The name x never had a type of its own."
              }
            },
            {
              "title": "Arithmetic operators",
              "body": "Python's arithmetic operators: `+`, `-`, `*`, and three division flavors. **True division** `/` always produces a float (`7 / 2` is 3.5). **Floor division** `//` discards the fractional part (`7 // 2` is 3). The **remainder operator** `%` gives what is left over (`7 % 2` is 1), which is the standard odd/even test from Lab Exercise 2.6. The **exponentiation operator** `**` raises to a power, and Python integers have arbitrary precision: Exercise 2.13 raises 10 to the powers 10, 100, and 1000 to show how big Python integers can be.\n\nA bad operation, like dividing by zero, raises an **exception** and shows a **traceback** naming where it happened.",
              "workedExample": {
                "title": "Circle values (Exercise 2.5 pattern)",
                "body": "For a radius r = 2, using the formulas from the exercise:\n\n```\ndiameter = 2 * r\ncircumference = 2 * 3.14159 * r\narea = 3.14159 * r ** 2\n```\nOperator precedence makes `r ** 2` evaluate before the multiplication in the area line."
              }
            },
            {
              "title": "print and strings",
              "body": "**print** displays one or more values. Strings can be written with **single quotes**, **double quotes**, or **triple quotes**. A **triple-quoted string** can span multiple lines, and the newline characters are stored as part of the string. When a single print statement gets long, a line can be continued so the statement ignores a line break.",
              "workedExample": {
                "title": "What is stored",
                "body": "```\ntext = \"\"\"line one\nline two\"\"\"\n```\nThe value of text is the two lines joined by an embedded newline character, not two separate strings."
              }
            }
          ],
          "examples": [
            {
              "title": "Investment return (Exercise 2.12 pattern)",
              "scenario": "The 7% investment exercise asks for the value of a principal after 10, 20, and 30 years. A student writes one formula with the numeric values typed straight into it, three times. What does the LabAssist note require instead?",
              "answer": "Define the variables named in the exercise (principal, rate, years) and use the variables in the formula, rather than inserting the numeric values directly. And no looping statements: they have not been presented yet in Chapter 2.",
              "piece": "arithmetic-operators",
              "principle": "variables-in-formulas"
            },
            {
              "title": "Odd or even without if",
              "scenario": "Exercise 2.6: input an integer and report whether it is odd or even, in Chapter 2, where the if statement has only just appeared at the chapter's end and the LabAssist note says do not use if...else. Which operator does the test?",
              "answer": "The remainder operator %. value % 2 is 0 for even and 1 for odd. The hint in the exercise points at %, and the note also requires duplicating the code in multiple cells to test both an odd and an even input.",
              "piece": "arithmetic-operators",
              "principle": "remainder-test"
            }
          ],
          "methods": [
            {
              "id": "eval-expression",
              "name": "Evaluate an expression by hand",
              "trigger": "Any 'what does this print / what is the value' question: apply precedence (exponent, then *, /, //, %, then +, -), track each name's current object, and only then read the result."
            }
          ],
          "sorting": [
            {
              "statement": "Decide whether 41 is odd or even.",
              "principle": "remainder-test",
              "cue": "A leftover after dividing by 2 is a % job."
            },
            {
              "statement": "Compute how many whole dollars are in 23.75 dollars, dropping the cents.",
              "principle": "floor-division",
              "cue": "Dropping the fractional part is floor division //."
            },
            {
              "statement": "Show 2 raised to the 10th power as an exact integer.",
              "principle": "exponentiation",
              "cue": "Raising to a power is **, and Python ints do not overflow."
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Three divisions",
              "prompt": "Predict, then check: `17 / 5`, `17 // 5`, `17 % 5`.",
              "solution": "```\n17 / 5   # 3.4, true division always returns a float\n17 // 5  # 3, floor division drops the fraction\n17 % 5   # 2, the remainder\n```"
            },
            {
              "rung": "completion",
              "title": "Circle, Exercise 2.5 shape",
              "prompt": "Complete the code so it computes diameter, circumference, and area for radius 5, using the formulas' structure from the worked example (fill in the two missing operators).",
              "solution": "```\nr = 5\ndiameter = 2 * r\ncircumference = 2 * 3.14159 * r\narea = 3.14159 * r ** 2\n```\nThe missing operators are `*` in the diameter line and `**` in the area line."
            },
            {
              "rung": "full",
              "title": "Big integers (Exercise 2.13 shape)",
              "prompt": "Write the three expressions that show 10 raised to the powers 10, 100, and 1000, and state in one sentence what the results demonstrate.",
              "solution": "```\n10 ** 10\n10 ** 100\n10 ** 1000\n```\nPython integers have arbitrary precision: they grow as large as memory allows instead of overflowing at a fixed size."
            }
          ],
          "questions": [
            {
              "id": "py-ch2-q01",
              "type": "mc",
              "prompt": "After these two statements run, what is true?\n\n```\nx = 7\nx = \"seven\"\n```",
              "options": [
                "It is an error: x was already an int",
                "x now refers to a string, because the type belongs to the object, not the name",
                "x is still an int with a string stored inside",
                "Python converts \"seven\" to the integer 7"
              ],
              "answer": 1,
              "principle": "dynamic-typing",
              "difficulty": 1,
              "feedback": {
                "step": "Rebinding step.",
                "why": "Dynamic typing means a name can be rebound to an object of a different type. Nothing about the first assignment locks the name.",
                "cue": "The cue is the second assignment to the same name: ask what the name refers to now, not what it referred to first."
              }
            },
            {
              "id": "py-ch2-q02",
              "type": "mc",
              "prompt": "What are the values of `7 / 2`, `7 // 2`, and `7 % 2`, in that order?",
              "options": [
                "3.5, 3, 1",
                "3, 3.5, 1",
                "3.5, 3.5, 0",
                "4, 3, 1"
              ],
              "answer": 0,
              "principle": "division-flavors",
              "difficulty": 1,
              "feedback": {
                "step": "Operator identification step: /, //, % are three different operations.",
                "why": "True division always returns a float; floor division drops the fraction; % returns the remainder.",
                "cue": "When three division symbols appear together, name each one before computing anything."
              }
            },
            {
              "id": "py-ch2-q03",
              "type": "production",
              "prompt": "Write one expression that tests whether the integer stored in `value` is odd, using the operator the Chapter 2 exercises point to. Do not use an if statement.",
              "solution": "`value % 2 == 1` (equivalently, check that `value % 2` is nonzero). The remainder after dividing by 2 is 1 exactly when the value is odd.",
              "principle": "remainder-test",
              "difficulty": 2,
              "feedback": {
                "step": "Technique selection step.",
                "why": "Parity is a remainder question: % 2 isolates the leftover that decides odd vs even. The LabAssist note for Exercise 2.6 also forbids if...else here.",
                "cue": "The cue is 'odd or even' combined with a chapter where selection statements are not yet the tool: reach for %."
              }
            },
            {
              "id": "py-ch2-q04",
              "type": "mc",
              "prompt": "What does `10 ** 1000` demonstrate about Python integers (Exercise 2.13)?",
              "options": [
                "Integers overflow and wrap around past a fixed limit",
                "Integers have arbitrary precision and grow as large as memory allows",
                "The ** operator converts the result to a float automatically",
                "Python refuses integers with more than 308 digits"
              ],
              "answer": 1,
              "principle": "exponentiation",
              "difficulty": 2,
              "feedback": {
                "step": "Result interpretation step.",
                "why": "Python ints are arbitrary precision; 10 ** 1000 is an exact 1001-digit integer, which is the point of the exercise.",
                "cue": "Huge exact integer results are the signature of arbitrary precision, unlike fixed-width ints in many languages."
              }
            },
            {
              "id": "py-ch2-q05",
              "type": "mc",
              "prompt": "A triple-quoted string is written across three lines in the source. What is stored in the variable?",
              "options": [
                "Only the first line",
                "The three lines with newline characters embedded between them",
                "A list of three strings",
                "The lines joined with spaces"
              ],
              "answer": 1,
              "principle": "strings",
              "difficulty": 1,
              "feedback": {
                "step": "Storage step: what object actually gets created.",
                "why": "Triple-quoted strings store the line breaks as embedded newline characters; the value is one string containing newlines.",
                "cue": "The cue is the triple quotes: multiline is their defining feature."
              }
            },
            {
              "id": "py-ch2-q06",
              "type": "mc",
              "prompt": "In the Exercise 2.12 investment calculation, what does the LabAssist note require?",
              "options": [
                "Insert the numeric values directly into the formula for speed",
                "Define the variables listed in the exercise and use those variables in the formula",
                "Use a loop to compute every year from 1 to 30",
                "Round every intermediate result to two decimals"
              ],
              "answer": 1,
              "principle": "variables-in-formulas",
              "difficulty": 2,
              "feedback": {
                "step": "Instruction reading step: the LabAssist note overrides habit.",
                "why": "The note requires named variables used in the formula, and forbids loops because they have not been presented yet in Chapter 2.",
                "cue": "When a syllabus note speaks directly to a technique, it outranks the generic way you would normally write the code."
              }
            },
            {
              "id": "py-ch2-q07",
              "type": "production",
              "prompt": "Write the statements that compute and print the diameter, circumference, and area of a circle with radius 2, defining variables in the Exercise 2.5 pattern.",
              "solution": "```\nr = 2\ndiameter = 2 * r\ncircumference = 2 * 3.14159 * r\narea = 3.14159 * r ** 2\nprint(diameter, circumference, area)\n```",
              "principle": "circle-formulas",
              "difficulty": 2,
              "feedback": {
                "step": "Formula assembly step.",
                "why": "Each value gets its own named variable built from r, and area needs ** for the square. Precedence handles r ** 2 before the multiplication.",
                "cue": "Three named results from one input value is the variables-in-formulas pattern."
              }
            },
            {
              "id": "py-ch2-q08",
              "type": "mc",
              "prompt": "Running `7 / 0` produces a traceback. What is a traceback?",
              "options": [
                "A saved copy of the program's output",
                "A report naming the exception and where in the code it occurred",
                "A prompt asking whether to continue",
                "The list of variables currently in memory"
              ],
              "answer": 1,
              "principle": "exceptions-intro",
              "difficulty": 1,
              "feedback": {
                "step": "Vocabulary step.",
                "why": "When an exception occurs, Python displays a traceback identifying the exception type and the location that raised it.",
                "cue": "Errors in the interpreter announce themselves as tracebacks; reading them is a core debugging skill in this course."
              }
            }
          ]
        },
        {
          "id": "lec1-input-conversion",
          "title": "Input, Conversion, and Comparisons",
          "pieces": [
            {
              "id": "input-returns-string",
              "name": "input always returns a string",
              "fn": "The input function gives you text; any arithmetic needs an explicit conversion with int or float first.",
              "predict": "A user types 5 at an input prompt. What is `value + 3` if value came straight from input, and what must happen first?"
            },
            {
              "id": "comparisons",
              "name": "Comparison operators and decisions",
              "fn": "Comparisons (==, !=, <, <=, >, >=) produce True or False, can be chained (1 <= x <= 10), and drive the chapter's first if statements.",
              "predict": "How would you test, in one expression, that a grade is between 0 and 100 inclusive?"
            },
            {
              "id": "min-max-stats",
              "name": "Minimum, maximum, and basic statistics",
              "fn": "Built-in min and max reduce a set of values to its extremes, a first functional-style reduction used again in the data science sections.",
              "predict": "Which built-in function gives the smallest of 88, 92, and 79 without writing any comparisons yourself?"
            }
          ],
          "lesson": [
            {
              "title": "input always returns a string",
              "body": "The **input** function displays a prompt and returns what the user typed **as a string, always**. `value + value` on input text concatenates: '5' + '5' is '55', because `+` **concatenates strings**. To do arithmetic, convert first: the built-in **int** function converts a string to an integer, and conversions between floats and ints follow the same explicit pattern. The syllabus LabAssist note for Exercise 2.6 repeats this because it is the most common Chapter 2 bug.",
              "workedExample": {
                "title": "The conversion pattern",
                "body": "```\nvalue = int(input(\"Enter an integer: \"))\n```\nOne line does prompt, read, and convert. Every Chapter 2 program that computes with user input uses this shape."
              }
            },
            {
              "title": "Comparison operators and decisions",
              "body": "**Comparison operators** (==, !=, <, <=, >, >=) compare values and produce True or False. Python allows **chained comparisons** such as `0 <= grade <= 100`, read the way you would say it. Section 2.7 introduces the **if statement** for making a decision based on a comparison: the suite under the if runs only when the condition is true. Full selection statements are Chapter 3; Chapter 2 plants the comparisons they run on.",
              "workedExample": {
                "title": "Chained comparison",
                "body": "```\n0 <= grade <= 100\n```\nThis is one expression meaning grade is at least 0 and at most 100. There is no need to write two comparisons joined by hand."
              }
            },
            {
              "title": "Minimum, maximum, and basic statistics",
              "body": "Section 2.9 closes the chapter with basic descriptive statistics: determining the minimum of three values by comparisons, then the built-in functions **min** and **max**, which accept several values or an iterable and return the extreme. Deitel frames this as **functional-style programming: a reduction**, folding many values down to one, an idea that returns with filter, map, and reduce in Chapter 5.",
              "workedExample": {
                "title": "min and max",
                "body": "```\nmin(88, 92, 79)   # 79\nmax(88, 92, 79)   # 92\n```\nNo comparisons written by hand: the built-ins do the reduction."
              }
            }
          ],
          "examples": [
            {
              "title": "The '55' bug",
              "scenario": "A student's program asks for two numbers, adds them, and prints 55 when the user typed 5 and 5. Nothing crashed. What happened?",
              "answer": "Both inputs are strings, so + concatenated them: '5' + '5' is '55'. The fix is int(...) around each input call (or around the values) before adding.",
              "piece": "input-returns-string",
              "principle": "input-conversion"
            },
            {
              "title": "Range check in one line",
              "scenario": "A quiz score must be between 0 and 100 inclusive. A student writes two separate tests and combines them awkwardly. What does Chapter 2 offer instead?",
              "answer": "A chained comparison: 0 <= score <= 100. Python evaluates it as the conjunction of both comparisons, written the way you would say it.",
              "piece": "comparisons",
              "principle": "chained-comparison"
            }
          ],
          "methods": [
            {
              "id": "input-convert-compute",
              "name": "Input, convert, compute pattern",
              "trigger": "Any program reading numbers from the user: input for text, int/float to convert immediately, then compute. If a result looks like digits glued together, the conversion step was skipped."
            }
          ],
          "sorting": [
            {
              "statement": "A user types 12 and 30; the program prints 1230. Find the missing step.",
              "principle": "input-conversion",
              "cue": "Digits glued together means strings were concatenated, not added."
            },
            {
              "statement": "Test whether a temperature is between 32 and 212 inclusive in one expression.",
              "principle": "chained-comparison",
              "cue": "Between, inclusive, one expression: chained comparison."
            },
            {
              "statement": "Get the largest of five exam scores with no hand-written comparisons.",
              "principle": "min-max-reduction",
              "cue": "Extreme of a set with no branching asked: min/max reduction."
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Convert then add",
              "prompt": "Trace what prints when the user types 4 and 6:\n\n```\na = int(input(\"First: \"))\nb = int(input(\"Second: \"))\nprint(a + b)\n```",
              "solution": "It prints 10. Each input string is converted by int before the addition, so + is integer addition, not concatenation."
            },
            {
              "rung": "completion",
              "title": "Chained range test",
              "prompt": "Complete the condition so it is True exactly when score is a valid quiz score from 0 to 100 inclusive: `_____ <= score <= _____`.",
              "solution": "`0 <= score <= 100`. Chaining compares score against both ends in one expression."
            },
            {
              "rung": "full",
              "title": "Smallest of three",
              "prompt": "Write one expression that gives the smallest of the values 45, 12, and 78 using a built-in function, and say what it returns.",
              "solution": "`min(45, 12, 78)` returns 12. min reduces its arguments to the smallest value."
            }
          ],
          "questions": [
            {
              "id": "py-ch2b-q01",
              "type": "mc",
              "prompt": "What does the input function return?",
              "options": [
                "An integer, if the user types digits",
                "A float, if the user types a decimal point",
                "Always a string",
                "Whatever type the prompt asks for"
              ],
              "answer": 2,
              "principle": "input-conversion",
              "difficulty": 1,
              "feedback": {
                "step": "Return type step.",
                "why": "input always returns a string, no matter what the user types. Conversion is a separate, explicit step.",
                "cue": "Any question about input's result starts from: it is text until converted."
              }
            },
            {
              "id": "py-ch2b-q02",
              "type": "production",
              "prompt": "A program does `a = input(\"First: \")` and `b = input(\"Second: \")`, then prints `a + b`. The user typed 4 and 6, and the program printed 46. Explain the bug in one sentence and write the corrected two assignment lines.",
              "solution": "The values are strings, so + concatenated them ('4' + '6' is '46') instead of adding. Corrected:\n\n```\na = int(input(\"First: \"))\nb = int(input(\"Second: \"))\n```",
              "principle": "input-conversion",
              "difficulty": 2,
              "feedback": {
                "step": "Diagnosis step: the output 46 is concatenation, not addition.",
                "why": "input returns strings; + on strings concatenates. Wrapping each input in int converts before any arithmetic.",
                "cue": "Glued-together digits in the output are the signature of skipped conversion."
              }
            },
            {
              "id": "py-ch2b-q03",
              "type": "mc",
              "prompt": "Which expression tests that x is between 1 and 10 inclusive, the Python way from Chapter 2?",
              "options": [
                "1 <= x and x <= 10, and nothing shorter exists",
                "1 <= x <= 10",
                "x in range(1, 10)",
                "1 < x < 10"
              ],
              "answer": 1,
              "principle": "chained-comparison",
              "difficulty": 1,
              "feedback": {
                "step": "Idiom step.",
                "why": "Python chains comparisons: 1 <= x <= 10 means both comparisons at once, endpoints included because of <=.",
                "cue": "The cue is 'between, inclusive, one expression': chained comparison with <= on both ends."
              }
            },
            {
              "id": "py-ch2b-q04",
              "type": "mc",
              "prompt": "What does `'5' + '5'` evaluate to, and why?",
              "options": [
                "10, because + adds the numbers inside the quotes",
                "'55', because + concatenates strings",
                "An error, because strings cannot be added",
                "'10', as a string"
              ],
              "answer": 1,
              "principle": "string-concat",
              "difficulty": 1,
              "feedback": {
                "step": "Operator meaning step: + depends on the operands' types.",
                "why": "On strings, + is concatenation, so '5' + '5' is '55'. This is exactly why unconverted input misbehaves.",
                "cue": "Quotes around the operands change what + means: text in, glued text out."
              }
            },
            {
              "id": "py-ch2b-q05",
              "type": "mc",
              "prompt": "Which call returns the largest of 88, 92, and 79?",
              "options": [
                "largest(88, 92, 79)",
                "max(88, 92, 79)",
                "top(88, 92, 79)",
                "sum(88, 92, 79) / 3"
              ],
              "answer": 1,
              "principle": "min-max-reduction",
              "difficulty": 1,
              "feedback": {
                "step": "Built-in selection step.",
                "why": "min and max are the built-in reduction functions from Section 2.9; max returns 92 here.",
                "cue": "Extreme value of a set, no branching: reach for min or max by name."
              }
            },
            {
              "id": "py-ch2b-q06",
              "type": "production",
              "prompt": "Write a single expression, using a built-in function, that gives the minimum of the three variables a, b, and c.",
              "solution": "`min(a, b, c)`",
              "principle": "min-max-reduction",
              "difficulty": 1,
              "feedback": {
                "step": "Built-in selection step.",
                "why": "min accepts multiple arguments and returns the smallest, replacing the hand-written comparison chain from earlier in Section 2.9.",
                "cue": "Smallest of several named values is a one-call reduction."
              }
            },
            {
              "id": "py-ch2b-q07",
              "type": "mc",
              "prompt": "Converting the string '42' for arithmetic uses which built-in, and what does converting '4.5' with that same built-in do?",
              "options": [
                "int; it converts '4.5' to 4",
                "int; it raises an error, because '4.5' is not a valid integer literal",
                "float; it converts '4.5' to 4.5 and '42' is invalid",
                "number; it handles both"
              ],
              "answer": 1,
              "principle": "int-conversion-limits",
              "difficulty": 2,
              "feedback": {
                "step": "Conversion validity step.",
                "why": "int('42') is 42, but int('4.5') raises a ValueError: the string must be a valid integer literal. Decimal text needs float.",
                "cue": "A decimal point inside the string is the cue that int is the wrong converter."
              }
            },
            {
              "id": "py-ch2b-q08",
              "type": "mc",
              "prompt": "Why does the course call min and max an example of functional-style programming?",
              "options": [
                "They are written in a functional language",
                "They reduce many values down to a single value",
                "They never use variables",
                "They run faster than loops in all cases"
              ],
              "answer": 1,
              "principle": "min-max-reduction",
              "difficulty": 2,
              "feedback": {
                "step": "Concept step: what reduction means.",
                "why": "Section 2.9 frames min/max as a reduction: a function that folds a collection of values into one result, the same idea behind reduce in Chapter 5.",
                "cue": "Many values in, one value out: that shape is a reduction wherever it appears."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lec2",
      "title": "Chapter 2 (Thu Sep 10): Chapter 3, Control Statements and Program Development",
      "topics": [
        {
          "id": "lec2-selection",
          "title": "Selection: if, if-else, and if-elif-else",
          "pieces": [
            {
              "id": "if-suites",
              "name": "The if statement and suites",
              "fn": "An if runs its indented suite only when its condition is true; indentation is syntax in Python, and every expression has a truth value.",
              "predict": "What makes the statements under an if part of the if, and what happens when the condition is false?"
            },
            {
              "id": "if-else-elif",
              "name": "if-else and if-elif-else",
              "fn": "if-else picks between two suites; if-elif-else tests conditions in order and runs the first true suite, with else as the catch-all.",
              "predict": "Three grade bands (A, B, else fail): which selection form fits, and in what order are its conditions tested?"
            },
            {
              "id": "boolean-operators",
              "name": "Boolean operators and, or, not",
              "fn": "and needs both sides true, or needs at least one, and not flips a truth value; they combine conditions inside selections and loops.",
              "predict": "When is `a and b` true, and when is `a or b` false? State both boundary rules."
            }
          ],
          "lesson": [
            {
              "title": "The if statement and suites",
              "body": "An **if statement** tests a condition and executes its **suite**, the indented block beneath it, only when the condition is true. **Indentation is syntax**: the suite is defined by its indent level, and inconsistent indentation is an error. Any expression can be interpreted as True or False (zero, empty, and None are false; most other values are true), which is what conditions ultimately evaluate.\n\nChapter 3 builds selection on the comparisons from Chapter 2. The Lecture 3 exercise review also stressed validating input, Exercise 3.1's theme, which is selection applied to user data.",
              "workedExample": {
                "title": "A single selection",
                "body": "```\nif grade >= 60:\n    print(\"Passed\")\n```\nThe print is the suite: indented under the if, it runs only when the condition holds."
              }
            },
            {
              "title": "if-else and if-elif-else",
              "body": "The **if-else** statement runs one suite when the condition is true and a different suite when it is false. The **conditional expression** (`a if cond else b`) is the expression form of the same choice. For several alternatives, **if-elif-else** tests conditions from the top and executes only the first suite whose condition is true; the trailing **else is optional** and acts as the catch-all when nothing matched.\n\nOrder matters: because only the first true condition runs, specific tests go before general ones.",
              "workedExample": {
                "title": "Grade bands",
                "body": "```\nif grade >= 90:\n    band = \"A\"\nelif grade >= 80:\n    band = \"B\"\nelse:\n    band = \"Below B\"\n```\nA grade of 95 stops at the first test; it never reaches the elif, even though 95 >= 80 is also true."
              }
            },
            {
              "title": "Boolean operators and, or, not",
              "body": "Section 3.16 adds the **boolean operators**. `and` is true only when both operands are true. `or` is true when at least one operand is true, so it is false only when both are false. `not` reverses its operand. Combined with comparisons, they express compound conditions like valid ranges and multi-part tests without nesting ifs.",
              "workedExample": {
                "title": "Compound condition",
                "body": "```\nif 0 <= score <= 100 and score != 55:\n    ...\n```\nThe chained comparison from Chapter 2 is itself a hidden and; here and joins a second, separate test."
              }
            }
          ],
          "examples": [
            {
              "title": "First match wins",
              "scenario": "A student writes grade bands with `if grade >= 80: band = \"B\"` placed BEFORE `if grade >= 90: band = \"A\"` as separate statements in an elif chain reordered so the B test comes first. A grade of 95 gets band B. Why?",
              "answer": "In an if-elif-else chain, conditions are tested in order and only the first true suite runs. 95 satisfies >= 80 first, so the chain stops there. Most specific (highest threshold) tests must come first.",
              "piece": "if-else-elif",
              "principle": "elif-order"
            },
            {
              "title": "Validating input (Exercise 3.1 theme)",
              "scenario": "A script should keep asking until the user enters 1 or 2. Which combination of selection and a boolean operator expresses 'input is not valid'?",
              "answer": "The invalid condition is `value != 1 and value != 2` (equivalently `not (value == 1 or value == 2)`): the loop continues while the entry fails both allowed values. Deitel's LabAssist for 3.1 has students prompt genAIs to modify the Fig. 3.3 script and explain the changes, then test the result thoroughly.",
              "piece": "boolean-operators",
              "principle": "compound-conditions"
            }
          ],
          "methods": [
            {
              "id": "condition-ordering",
              "name": "Order tests from most specific to most general",
              "trigger": "Any if-elif-else chain over ranges or categories: the first true condition wins, so thresholds are written highest first (or narrowest first), with else as the catch-all."
            }
          ],
          "sorting": [
            {
              "statement": "Print Passed when a grade is at least 60, and nothing otherwise.",
              "principle": "single-selection",
              "cue": "One outcome, no alternative: a plain if."
            },
            {
              "statement": "Print Passed or Failed, exactly one of them, for every grade.",
              "principle": "double-selection",
              "cue": "Two mutually exclusive outcomes: if-else."
            },
            {
              "statement": "Assign A, B, C, or F from four score bands.",
              "principle": "elif-chain",
              "cue": "Several ordered bands, first match wins: if-elif-else."
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Trace the chain",
              "prompt": "For grade = 73, trace this code and state the printed band:\n\n```\nif grade >= 90:\n    print(\"A\")\nelif grade >= 80:\n    print(\"B\")\nelif grade >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")\n```",
              "solution": "It prints C. Tests run in order: 73 fails >= 90 and >= 80, passes >= 70, and the chain stops there."
            },
            {
              "rung": "completion",
              "title": "Finish the validation condition",
              "prompt": "Complete the condition so the suite runs only when entry is valid, meaning entry is 1 or entry is 2:\n\n```\nif entry == 1 _____ entry == 2:\n    accept()\n```",
              "solution": "The missing operator is `or`: the entry is valid when at least one of the two equalities holds."
            },
            {
              "rung": "full",
              "title": "Pass/fail with an else",
              "prompt": "Write an if-else that prints \"Passed\" when score is at least 60 and \"Failed\" otherwise.",
              "solution": "```\nif score >= 60:\n    print(\"Passed\")\nelse:\n    print(\"Failed\")\n```"
            }
          ],
          "questions": [
            {
              "id": "py-ch3-q01",
              "type": "mc",
              "prompt": "What defines which statements belong to an if statement's suite?",
              "options": [
                "Curly braces around them",
                "Their indentation level under the if",
                "A semicolon at the end of the if line",
                "The keyword suite at the block's start"
              ],
              "answer": 1,
              "principle": "suites-indentation",
              "difficulty": 1,
              "feedback": {
                "step": "Syntax step.",
                "why": "Python uses indentation as syntax: the indented block under the if is its suite, and inconsistent indentation is an error.",
                "cue": "Block membership in Python is visual: same indent, same suite."
              }
            },
            {
              "id": "py-ch3-q02",
              "type": "mc",
              "prompt": "In an if-elif-else chain, how many suites can execute for one pass through the chain?",
              "options": [
                "All whose conditions are true",
                "Exactly one: the first whose condition is true",
                "One per elif, plus the else",
                "Two at most"
              ],
              "answer": 1,
              "principle": "elif-order",
              "difficulty": 1,
              "feedback": {
                "step": "Chain semantics step.",
                "why": "The chain tests in order and stops at the first true condition; the else runs only when none matched.",
                "cue": "First match wins is the whole semantics of elif chains."
              }
            },
            {
              "id": "py-ch3-q03",
              "type": "production",
              "prompt": "A grade of 95 is assigned band \"B\" by this chain. Explain the bug and state the fix.\n\n```\nif grade >= 80:\n    band = \"B\"\nelif grade >= 90:\n    band = \"A\"\n```",
              "solution": "The >= 80 test comes first and 95 satisfies it, so the chain stops before ever testing >= 90. Fix: order the tests from most specific to most general, testing >= 90 before >= 80.",
              "principle": "elif-order",
              "difficulty": 2,
              "feedback": {
                "step": "Ordering step: which condition is reached first.",
                "why": "if-elif-else executes the first true suite only. Broad tests placed early swallow the cases meant for narrower tests below them.",
                "cue": "When a top score lands in a middle band, suspect test order before suspecting the comparisons."
              }
            },
            {
              "id": "py-ch3-q04",
              "type": "mc",
              "prompt": "`a or b` is False in exactly which case?",
              "options": [
                "When a is true and b is false",
                "When both are true",
                "When both are false",
                "When exactly one is true"
              ],
              "answer": 2,
              "principle": "boolean-operators",
              "difficulty": 1,
              "feedback": {
                "step": "Truth table step.",
                "why": "or needs at least one true operand; both false is the only way it fails.",
                "cue": "Boundary rules: and fails on any false, or fails only on all false."
              }
            },
            {
              "id": "py-ch3-q05",
              "type": "mc",
              "prompt": "Which condition keeps a validation loop asking while the user's entry is neither 1 nor 2?",
              "options": [
                "value == 1 or value == 2",
                "value != 1 and value != 2",
                "value != 1 or value != 2",
                "not value == 1 and value == 2"
              ],
              "answer": 1,
              "principle": "compound-conditions",
              "difficulty": 2,
              "feedback": {
                "step": "Negation step: 'neither' is an and of two nots.",
                "why": "Neither 1 nor 2 means value != 1 AND value != 2 simultaneously. With or, the condition would stay true forever for any single value, since every value differs from at least one of them.",
                "cue": "'Neither/nor' phrasing is the cue: both denials must hold at once, which is and."
              }
            },
            {
              "id": "py-ch3-q06",
              "type": "mc",
              "prompt": "What is the value of the conditional expression `10 if x > 5 else 20` when x is 3?",
              "options": [
                "10",
                "20",
                "True",
                "An error, conditional expressions need an if statement"
              ],
              "answer": 1,
              "principle": "conditional-expression",
              "difficulty": 2,
              "feedback": {
                "step": "Expression form step.",
                "why": "A conditional expression picks the value after if when the condition holds and the value after else otherwise; x > 5 is false, so the result is 20.",
                "cue": "Value if condition else other value: read it left to right as a choice between two values."
              }
            },
            {
              "id": "py-ch3-q07",
              "type": "production",
              "prompt": "Write an if-elif-else chain that sets `label` to \"High\" for a score of 90 or more, \"Middle\" for 60 to 89, and \"Low\" below 60.",
              "solution": "```\nif score >= 90:\n    label = \"High\"\nelif score >= 60:\n    label = \"Middle\"\nelse:\n    label = \"Low\"\n```",
              "principle": "elif-chain-build",
              "difficulty": 2,
              "feedback": {
                "step": "Construction step: thresholds in descending order, else as catch-all.",
                "why": "Descending thresholds guarantee first-match correctness, and the else covers everything under 60 without a third explicit test.",
                "cue": "Bands from the top down plus a catch-all is the standard elif chain shape."
              }
            },
            {
              "id": "py-ch3-q08",
              "type": "mc",
              "prompt": "Which value is treated as False when an expression is used as a condition?",
              "options": [
                "The integer 1",
                "A non-empty string",
                "0",
                "Any negative number"
              ],
              "answer": 2,
              "principle": "truthiness",
              "difficulty": 2,
              "feedback": {
                "step": "Truth value step.",
                "why": "Every expression can be interpreted as True or False; 0 (like empty values and None) is false, while 1, non-empty strings, and negatives are true.",
                "cue": "Zero and emptiness are Python's false family; nonzero numbers, including negatives, are true."
              }
            }
          ]
        },
        {
          "id": "lec2-iteration",
          "title": "Iteration and Program Development",
          "pieces": [
            {
              "id": "while-and-for",
              "name": "while and for iteration",
              "fn": "while repeats while a condition holds; for walks an iterable, usually built by range; both need a way to make progress or they never stop.",
              "predict": "A loop must count from 1 to 10 and stop. Which loop forms fit, and what does each need to terminate?"
            },
            {
              "id": "loop-tools",
              "name": "Loop tools: augmented assignment, break, continue",
              "fn": "Augmented assignments (+=, -=) update a variable in place; break leaves the loop now; continue skips to the next iteration.",
              "predict": "Inside a loop, what is the difference between what break and continue do to the remaining iterations?"
            },
            {
              "id": "program-development",
              "name": "Program development: sequence, sentinel, and nested control",
              "fn": "Programs are developed from a requirements statement through pseudocode refined top-down; iteration is either sequence-controlled (known count) or sentinel-controlled (ends on a special value), and control statements stack and nest.",
              "predict": "Averages for a class where the teacher types grades until entering -1: sequence or sentinel controlled, and why?"
            }
          ],
          "lesson": [
            {
              "title": "while and for iteration",
              "body": "The **while statement** repeats its suite while its condition stays true; something inside must change the condition's value or the loop is infinite. The **for statement** iterates over an **iterable**, most often the values from the built-in **range** function (`range(10)` yields 0 through 9; range's arguments set start, stop, and step). Section 3.8 also covers **iterables, lists, and iterators**, and `print`'s `sep` keyword argument.\n\nDefinite counts suit for; conditions that end on data suit while.",
              "workedExample": {
                "title": "Counting with for and range",
                "body": "```\nfor number in range(1, 11):\n    print(number, end=\" \")\n```\nrange(1, 11) produces 1 through 10: the stop value is excluded, which is why the stop is 11, not 10."
              }
            },
            {
              "title": "Loop tools: augmented assignment, break, continue",
              "body": "**Augmented assignments** like `total += grade` update a variable using its current value, the standard accumulator move. The **break** statement exits the loop immediately, skipping any remaining iterations. **continue** skips the rest of the current iteration and moves to the next one. Section 3.15 presents them as fine control inside loops, to be used deliberately rather than as structure substitutes.",
              "workedExample": {
                "title": "Accumulator pattern",
                "body": "```\ntotal = 0\nfor grade in [98, 76, 71]:\n    total += grade\n```\nAfter the loop, total is 245. Initialize before, accumulate inside: the shape every summation program in the chapter shares."
              }
            },
            {
              "title": "Program development: sequence, sentinel, and nested control",
              "body": "Sections 3.10 to 3.12 teach a development method: start from a **requirements statement**, write **pseudocode**, and refine it with **top-down, stepwise refinement** until it codes directly. **Sequence-controlled iteration** knows the count in advance (ten students, so loop ten times). **Sentinel-controlled iteration** reads values until a **sentinel**, a special value like -1, signals the end, and needs control-statement stacking (a loop containing a selection). **Nested control statements** put one control statement inside another's suite, as in Exercise 3.17's nested loops printing asterisk triangles, and the class average and examination results problems.\n\nSection 3.14 adds the **Decimal** type for monetary amounts, where binary floats would introduce representation errors.",
              "workedExample": {
                "title": "Sentinel shape",
                "body": "```\ngrade = int(input(\"Enter grade, -1 to end: \"))\nwhile grade != -1:\n    # process grade\n    grade = int(input(\"Enter grade, -1 to end: \"))\n```\nThe priming read before the loop and the repeated read at its end are the sentinel pattern's signature."
              }
            }
          ],
          "examples": [
            {
              "title": "Investment return with a loop (Exercise 3.10)",
              "scenario": "Chapter 3 revisits the 7% investment exercise. What changes versus the Chapter 2 version, per the LabAssist note?",
              "answer": "Use a for loop: Chapter 3 has presented iteration, so the years 10, 20, and 30 (and the loop years between) are computed by looping rather than by three hand-written formulas. The techniques-through-the-chapter rule now permits, and the note requires, the loop.",
              "piece": "while-and-for",
              "principle": "technique-window"
            },
            {
              "title": "Nested loops (Exercise 3.17)",
              "scenario": "Printing four asterisk triangles, one per pattern, where each row's star count depends on the row number. What control structure does this force, and what print constraint does the LabAssist note impose?",
              "answer": "Nested loops: an outer loop over rows and an inner loop printing that row's asterisks. The note requires printing each asterisk using only the print statement shown in the exercise, and the triangles are displayed one after another, not side by side as the book's figure shows.",
              "piece": "program-development",
              "principle": "nested-control"
            }
          ],
          "matrix": {
            "title": "Sequence-controlled vs sentinel-controlled iteration",
            "columns": [
              "Sequence-controlled",
              "Sentinel-controlled"
            ],
            "rows": [
              "How the count is known",
              "What ends the loop",
              "Typical loop form",
              "The classic bug"
            ]
          },
          "methods": [
            {
              "id": "sentinel-loop",
              "name": "Sentinel-controlled loop pattern",
              "trigger": "Input of unknown length ending on a special value: priming read, while value != sentinel, process, read again at the bottom. The sentinel itself is never processed as data."
            },
            {
              "id": "accumulator",
              "name": "Accumulator pattern",
              "trigger": "Totals and counts over iterated values: initialize before the loop, update with an augmented assignment inside, use the result after."
            }
          ],
          "sorting": [
            {
              "statement": "Print the integers 0 through 9, one per line.",
              "principle": "for-range",
              "cue": "A known count over a regular sequence is for with range."
            },
            {
              "statement": "Keep averaging entered grades until the user types -1.",
              "principle": "sentinel-loop",
              "cue": "Unknown count ending on a special value is the sentinel pattern."
            },
            {
              "statement": "Print a 5 by 5 grid of asterisks.",
              "principle": "nested-control",
              "cue": "Rows containing repeated per-row work means a loop inside a loop."
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Trace the accumulator",
              "prompt": "Trace total after this loop:\n\n```\ntotal = 0\nfor value in range(1, 5):\n    total += value\n```",
              "solution": "range(1, 5) yields 1, 2, 3, 4. total goes 1, 3, 6, 10. Final value: 10. The stop value 5 is excluded."
            },
            {
              "rung": "completion",
              "title": "Finish the sentinel loop",
              "prompt": "Complete the loop so it keeps reading grades until -1 is entered, without processing the -1:\n\n```\ngrade = int(input(\"Grade (-1 to end): \"))\nwhile grade _____ -1:\n    count += 1\n    grade = int(input(\"Grade (-1 to end): \"))\n```",
              "solution": "The missing operator is `!=`: the loop runs while the grade is not the sentinel. The priming read before the loop and the re-read at the bottom keep the sentinel itself out of the processing."
            },
            {
              "rung": "full",
              "title": "Sum 1 to 100",
              "prompt": "Write a for loop using range and an accumulator that computes the sum of the integers from 1 to 100.",
              "solution": "```\ntotal = 0\nfor number in range(1, 101):\n    total += number\n```\nThe stop must be 101 because range excludes its stop value."
            }
          ],
          "questions": [
            {
              "id": "py-ch3b-q01",
              "type": "mc",
              "prompt": "What does `range(1, 11)` produce?",
              "options": [
                "1 through 11",
                "1 through 10",
                "0 through 10",
                "0 through 11"
              ],
              "answer": 1,
              "principle": "range-stop-excluded",
              "difficulty": 1,
              "feedback": {
                "step": "Boundary step.",
                "why": "range includes its start and excludes its stop: range(1, 11) is 1 to 10. This is why counting to 10 needs a stop of 11.",
                "cue": "Every range question turns on the excluded stop value."
              }
            },
            {
              "id": "py-ch3b-q02",
              "type": "mc",
              "prompt": "Averaging grades that a teacher enters until she types -1 is which kind of iteration?",
              "options": [
                "Sequence-controlled, because grades are numbers in sequence",
                "Sentinel-controlled, because a special value signals the end",
                "Nested, because an average needs division",
                "Infinite, because the count is unknown"
              ],
              "answer": 1,
              "principle": "sentinel-loop",
              "difficulty": 1,
              "feedback": {
                "step": "Classification step: how is the end known?",
                "why": "The count is not known in advance; the value -1, the sentinel, ends the loop. That is the definition of sentinel-controlled iteration from Section 3.11.",
                "cue": "A special terminating value in the data is the sentinel cue."
              }
            },
            {
              "id": "py-ch3b-q03",
              "type": "production",
              "prompt": "This loop never ends. Name the missing ingredient and fix it.\n\n```\ncount = 1\nwhile count <= 10:\n    print(count)\n```",
              "solution": "Nothing inside the loop changes count, so the condition count <= 10 stays true forever. Fix: add `count += 1` inside the suite so the loop makes progress toward its terminating condition.",
              "principle": "while-progress",
              "difficulty": 2,
              "feedback": {
                "step": "Termination step: what changes the condition?",
                "why": "A while loop repeats while its condition holds; the suite must update the variables the condition tests. Augmented assignment is the usual update.",
                "cue": "When a while loop hangs, look for the condition variable that nobody updates."
              }
            },
            {
              "id": "py-ch3b-q04",
              "type": "mc",
              "prompt": "Inside a loop over values 1 to 10, `break` runs when the value is 4, and in a second version `continue` runs instead. What prints in each version if the print is after the statement?",
              "options": [
                "break prints 1, 2, 3; continue prints 1, 2, 3, 5, 6, 7, 8, 9, 10",
                "break prints 1 to 10; continue prints nothing",
                "Both print 1, 2, 3 only",
                "break prints 1, 2, 3, 4; continue prints 1 to 4"
              ],
              "answer": 0,
              "principle": "break-vs-continue",
              "difficulty": 2,
              "feedback": {
                "step": "Control flow step: exit the loop vs skip the iteration.",
                "why": "break abandons the loop entirely; continue abandons only the current iteration and the loop proceeds with 5.",
                "cue": "break ends the loop, continue ends the pass: the remaining values are the tell."
              }
            },
            {
              "id": "py-ch3b-q05",
              "type": "mc",
              "prompt": "What is top-down, stepwise refinement (Sections 3.11 to 3.12)?",
              "options": [
                "Rewriting finished code from the bottom up",
                "Starting with a complete pseudocode outline and repeatedly expanding one part at a time until each part codes directly",
                "Testing the program from the last line to the first",
                "A method for choosing variable names"
              ],
              "answer": 1,
              "principle": "program-development",
              "difficulty": 1,
              "feedback": {
                "step": "Method vocabulary step.",
                "why": "The chapter's development method: state requirements, draft pseudocode, refine the pseudocode level by level, then code it. It is how the sentinel and nested control programs are built.",
                "cue": "Requirements, pseudocode, refinement, code: the four beats of program development in this chapter."
              }
            },
            {
              "id": "py-ch3b-q06",
              "type": "mc",
              "prompt": "Why does Section 3.14 use the Decimal type for money instead of float?",
              "options": [
                "Floats cannot represent large amounts",
                "Binary floats introduce small representation errors that are unacceptable for monetary amounts",
                "Decimal values print with dollar signs automatically",
                "Floats do not support the + operator"
              ],
              "answer": 1,
              "principle": "decimal-money",
              "difficulty": 2,
              "feedback": {
                "step": "Representation step.",
                "why": "Values like 0.1 have no exact binary float representation; Decimal stores base-10 values exactly, which monetary calculations require. The section builds the compound-interest program on Decimal.",
                "cue": "Money plus float is the cue: exact decimal representation is the requirement."
              }
            },
            {
              "id": "py-ch3b-q07",
              "type": "production",
              "prompt": "Write the sentinel-controlled loop skeleton (reads only) that keeps prompting for an integer until the user enters -1, using a priming read.",
              "solution": "```\nvalue = int(input(\"Enter an integer (-1 to end): \"))\nwhile value != -1:\n    # process value here\n    value = int(input(\"Enter an integer (-1 to end): \"))\n```",
              "principle": "sentinel-loop",
              "difficulty": 2,
              "feedback": {
                "step": "Pattern assembly step.",
                "why": "The priming read before the loop, the != sentinel test, and the repeated read as the suite's last statement are the whole pattern; the sentinel is never processed.",
                "cue": "Unknown count plus a special end value: priming read, test, process, re-read."
              }
            },
            {
              "id": "py-ch3b-q08",
              "type": "mc",
              "prompt": "Exercise 3.17's asterisk triangles need which structure, and why?",
              "options": [
                "A single loop, because rows are independent",
                "Nested loops: the outer loop picks the row, the inner loop prints that row's asterisks",
                "A while loop with a sentinel, because the triangle ends",
                "Recursion, because the pattern repeats"
              ],
              "answer": 1,
              "principle": "nested-control",
              "difficulty": 2,
              "feedback": {
                "step": "Structure selection step.",
                "why": "Each row contains a repeated action (printing stars) whose count depends on the row, so a loop must run inside another loop. That is nested control from Section 3.12.",
                "cue": "Repeated work inside repeated work is the nesting cue."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lec3",
      "title": "Chapter 3 (Thu Sep 24): Chapter 4, Functions",
      "topics": [
        {
          "id": "lec3-functions",
          "title": "Defining and Calling Functions",
          "pieces": [
            {
              "id": "def-and-return",
              "name": "Defining functions and returning values",
              "fn": "def names a function and its parameters; its suite is the body; return sends a value back to the caller, and a docstring documents the function's job.",
              "predict": "What three things does a function definition's first line give you, and how does a result get back to the caller?"
            },
            {
              "id": "argument-flexibility",
              "name": "Default, keyword, and arbitrary arguments",
              "fn": "Parameters can carry default values, callers can pass arguments by keyword in any order after positional ones, and an arbitrary argument list collects extra arguments into a tuple.",
              "predict": "A function `power(base, exponent=2)` is called as `power(5)`. What is computed, and which feature makes it work?"
            },
            {
              "id": "modules-and-methods",
              "name": "Imports, methods, and discovery",
              "fn": "import brings in module identifiers; a method is a function that belongs to an object and is called through it; tab completion in IPython discovers what an object offers.",
              "predict": "What is the difference between calling print(x) and calling text.upper(), in terms of where the function lives?"
            }
          ],
          "lesson": [
            {
              "title": "Defining functions and returning values",
              "body": "A **function definition** starts with `def`, the function's name, and its **parameters** in parentheses, followed by the indented body. The first statement of the body is usually a **docstring** describing what the function does, readable through IPython's help. A function sends a result back with **return**; the notebook names three ways to return a result to a caller, and a function with no return statement hands back None.\n\nBuilt-in functions like max and min show the pattern at full strength: they accept several arguments or a single iterable.",
              "workedExample": {
                "title": "The square function (Section 4.2)",
                "body": "```\ndef square(number):\n    \"\"\"Calculate the square of number.\"\"\"\n    return number ** 2\n```\nsquare(7) evaluates to 49: the argument binds to the parameter, the body runs, and return delivers the value."
              }
            },
            {
              "title": "Default, keyword, and arbitrary arguments",
              "body": "A parameter with a **default value** can be omitted by the caller, who then gets the default. **Keyword arguments** name the argument at the call site and can be passed in any order after required positional arguments. An **arbitrary argument list** (`*args`) collects any number of extra positional arguments into a tuple, which is how a function like average can accept a whole list of values; unpacking an iterable with * passes its elements as individual arguments.",
              "workedExample": {
                "title": "Defaults at work",
                "body": "```\ndef power(base, exponent=2):\n    return base ** exponent\n\npower(5)      # 25, exponent defaults to 2\npower(5, 3)   # 125\n```\nThe default fills in only when the caller leaves the argument out."
              }
            },
            {
              "title": "Imports, methods, and discovery",
              "body": "**import** loads a module so its identifiers can be used; you can import several identifiers from a module, bind a shorter name, and should avoid wildcard imports, which pollute the namespace with unknown names. A **method** is a function that belongs to an object, called as `object.method(...)`. **Tab completion** in IPython, typing a name and a dot then Tab, lists an object's methods, which is the discovery workflow the lectures model.",
              "workedExample": {
                "title": "Function vs method",
                "body": "```\nlen(\"abc\")        # built-in function, called on its own\n\"abc\".upper()     # method, called through the string object\n```\nSame idea, two homes: standalone functions vs functions an object carries with it."
              }
            }
          ],
          "examples": [
            {
              "title": "Temperature conversion (Exercise 4.9)",
              "scenario": "The data science exercise for Chapter 4 is temperature conversion. Why does the syllabus file it under Functions rather than under Chapter 2's arithmetic?",
              "answer": "Conversion is a repeatable transformation, so it belongs in a function: define the conversion once, call it for every value. The LabAssist note frames conversion as a common data-wrangling operation, which is precisely the reuse functions exist for.",
              "piece": "def-and-return",
              "principle": "function-purpose"
            },
            {
              "title": "Average of anything",
              "scenario": "A function must average 3 values in one call and 7 in another, with no fixed parameter count. Which Chapter 4 feature is built for this, and what does the function receive?",
              "answer": "An arbitrary argument list (*args): the extra arguments arrive packed as a tuple, and the function averages the tuple's elements. Section 4.11 also shows passing an existing iterable's elements as arguments by unpacking it with * at the call.",
              "piece": "argument-flexibility",
              "principle": "arbitrary-args"
            }
          ],
          "methods": [
            {
              "id": "function-contract",
              "name": "Function contract: inputs, one job, return",
              "trigger": "Writing any function: name the parameters, do one well-defined job in the body, return the result (never print it as the result), and document the job in a docstring."
            }
          ],
          "sorting": [
            {
              "statement": "Square a number inside a reusable block that other code calls with different values.",
              "principle": "function-purpose",
              "cue": "Reusable transformation with a result: define a function and return."
            },
            {
              "statement": "Call a two-parameter function supplying only the second argument by name.",
              "principle": "keyword-args",
              "cue": "Supplying by name at the call is a keyword argument."
            },
            {
              "statement": "Use the upper method on a string variable.",
              "principle": "methods",
              "cue": "Called through an object with a dot: it is a method."
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Trace square",
              "prompt": "Trace `square(7)` using the definition in the lesson: what binds to number, what the body computes, and what the caller receives.",
              "solution": "number binds to 7; the body computes 7 ** 2 = 49; return sends 49 back, so square(7) evaluates to 49 wherever it is used."
            },
            {
              "rung": "completion",
              "title": "Default fills in",
              "prompt": "Given `def power(base, exponent=2): return base ** exponent`, complete the results: `power(5)` is ____ and `power(5, 3)` is ____.",
              "solution": "power(5) is 25, because exponent takes its default 2. power(5, 3) is 125, because the caller supplied 3."
            },
            {
              "rung": "full",
              "title": "Write maximum3's shape",
              "prompt": "Write a function `cube` that takes one number and returns its cube, with a docstring.",
              "solution": "```\ndef cube(number):\n    \"\"\"Return the cube of number.\"\"\"\n    return number ** 3\n```"
            }
          ],
          "questions": [
            {
              "id": "py-ch4-q01",
              "type": "mc",
              "prompt": "In `def square(number):`, what is number, and how does the result reach the caller?",
              "options": [
                "A global variable; the caller reads it after the call",
                "A parameter; the result is sent back by the return statement",
                "A local constant; the result is printed automatically",
                "An argument; the caller passes a return variable"
              ],
              "answer": 1,
              "principle": "def-and-return",
              "difficulty": 1,
              "feedback": {
                "step": "Definition anatomy step.",
                "why": "The parentheses name the parameters, values the caller supplies as arguments; return delivers the function's result to the call site.",
                "cue": "def line names inputs; return is the only road back."
              }
            },
            {
              "id": "py-ch4-q02",
              "type": "mc",
              "prompt": "What does a function return if its body ends without a return statement?",
              "options": [
                "0",
                "An empty string",
                "None",
                "It cannot be called"
              ],
              "answer": 2,
              "principle": "return-none",
              "difficulty": 1,
              "feedback": {
                "step": "Implicit result step.",
                "why": "Every function returns something; with no return statement the result is None.",
                "cue": "No return written means None returned: a silent bug source when callers use the value."
              }
            },
            {
              "id": "py-ch4-q03",
              "type": "production",
              "prompt": "Write a function `fahrenheit` that converts a Celsius temperature to Fahrenheit (multiply by 9/5 and add 32) and returns the result, with a docstring. This is the Exercise 4.9 conversion pattern.",
              "solution": "```\ndef fahrenheit(celsius):\n    \"\"\"Convert a Celsius temperature to Fahrenheit.\"\"\"\n    return (9 / 5) * celsius + 32\n```",
              "principle": "function-purpose",
              "difficulty": 2,
              "feedback": {
                "step": "Construction step: parameter in, one transformation, return out.",
                "why": "A conversion is one reusable transformation; the function takes the value as a parameter and returns the converted value rather than printing it.",
                "cue": "Repeatable transformation plus a caller who needs the value: function with return."
              }
            },
            {
              "id": "py-ch4-q04",
              "type": "mc",
              "prompt": "Given `def power(base, exponent=2): return base ** exponent`, what is `power(5)`?",
              "options": [
                "An error: exponent is required",
                "10",
                "25",
                "32"
              ],
              "answer": 2,
              "principle": "default-args",
              "difficulty": 1,
              "feedback": {
                "step": "Default value step.",
                "why": "exponent has the default value 2, used when the caller omits it: 5 ** 2 = 25.",
                "cue": "A parameter with = in the definition is optional at the call."
              }
            },
            {
              "id": "py-ch4-q05",
              "type": "mc",
              "prompt": "What does the parameter `*grades` in `def average(*grades):` collect?",
              "options": [
                "The first grade only",
                "All positional arguments, packed into a tuple",
                "Keyword arguments, packed into a dictionary",
                "A list the caller must build first"
              ],
              "answer": 1,
              "principle": "arbitrary-args",
              "difficulty": 2,
              "feedback": {
                "step": "Packing step.",
                "why": "An arbitrary argument list packs the extra positional arguments into a tuple inside the function, so average can accept any count of values.",
                "cue": "Star on a parameter means: gather the extras into a tuple."
              }
            },
            {
              "id": "py-ch4-q06",
              "type": "mc",
              "prompt": "Why does the chapter warn against wildcard imports (`from module import *`)?",
              "options": [
                "They are slower than named imports",
                "They pull unknown names into your namespace, so you cannot tell what is available or where it came from",
                "They only work in scripts, not notebooks",
                "They import the module twice"
              ],
              "answer": 1,
              "principle": "imports",
              "difficulty": 2,
              "feedback": {
                "step": "Namespace hygiene step.",
                "why": "Section 4.14 cautions against wildcard imports because they bind every public name from the module invisibly; explicit imports keep the namespace knowable.",
                "cue": "Invisible names are the cost of the star: prefer naming what you import."
              }
            },
            {
              "id": "py-ch4-q07",
              "type": "production",
              "prompt": "A caller has `values = [70, 85, 90]` and a function defined as `def average(*grades):`. Write the call that passes the list's elements as the individual arguments.",
              "solution": "`average(*values)`\n\nThe * at the call site unpacks the iterable, so average receives 70, 85, and 90 as its argument tuple.",
              "principle": "arbitrary-args",
              "difficulty": 3,
              "feedback": {
                "step": "Unpacking step: star at the call, not in the definition.",
                "why": "The definition's * packs arguments into a tuple; the call site's * does the reverse, spreading an iterable's elements into separate arguments.",
                "cue": "Star in def packs; star in a call unpacks. The two mirror each other."
              }
            },
            {
              "id": "py-ch4-q08",
              "type": "mc",
              "prompt": "What is the difference between `len(text)` and `text.upper()`?",
              "options": [
                "No difference; they are two spellings of one call",
                "len is a built-in function called on its own; upper is a method, a function that belongs to the string object",
                "upper is a function and len is a method",
                "Methods take no arguments, functions do"
              ],
              "answer": 1,
              "principle": "methods",
              "difficulty": 1,
              "feedback": {
                "step": "Function vs method step.",
                "why": "Section 4.12: methods are functions that belong to objects and are called through the object with dot notation; len is a standalone built-in function.",
                "cue": "A dot before the name is the method cue."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lec4",
      "title": "Chapter 3 (Thu Sep 24): Chapter 5, Sequences: Lists and Tuples",
      "topics": [
        {
          "id": "lec4-lists-tuples",
          "title": "Lists and Tuples: Indexing, Slicing, Packing",
          "pieces": [
            {
              "id": "lists-mutable",
              "name": "Lists: indexing and mutability",
              "fn": "Lists are ordered, mutable sequences: index from 0, negative indices count from the end, elements can be replaced, and len gives the length.",
              "predict": "For `values = [10, 20, 30]`, what are values[0], values[-1], and len(values)?"
            },
            {
              "id": "tuples-immutable",
              "name": "Tuples: packing and immutability",
              "fn": "Tuples are ordered and immutable; packing gathers values into a tuple, a one-element tuple needs a trailing comma, and tuples may still contain mutable objects.",
              "predict": "Why does `(5)` fail to be a tuple, and what must you write instead?"
            },
            {
              "id": "unpacking-slicing",
              "name": "Unpacking and slicing",
              "fn": "Unpacking assigns a sequence's elements to names in one statement (and powers value swapping); slicing copies a subsequence with start, stop, and step.",
              "predict": "How do you swap a and b in one statement, and what does numbers[1:4] give from a 6 element list?"
            }
          ],
          "lesson": [
            {
              "title": "Lists: indexing and mutability",
              "body": "A **list** is an ordered sequence, typically of one type. Elements are accessed by **index**, starting at 0, through the subscription operator `[]`; an out-of-bounds index raises an exception. **Negative indices** count from the end, so values[-1] is the last element. **len** returns the length. Lists are **mutable**: elements can be replaced, inserted, and deleted in place, unlike strings and tuples. Entire lists can be compared element by element with the comparison operators, and concatenated with +.",
              "workedExample": {
                "title": "Indexing facts",
                "body": "```\nvalues = [10, 20, 30]\nvalues[0]    # 10\nvalues[-1]   # 30, the last element\nlen(values)  # 3\nvalues[1] = 99   # legal: lists are mutable\n```"
              }
            },
            {
              "title": "Tuples: packing and immutability",
              "body": "A **tuple** is an ordered, **immutable** sequence: once created, its elements cannot be reassigned. Writing values separated by commas **packs** them into a tuple. A **one-element tuple** needs a trailing comma, `(5,)`, because `(5)` is just a parenthesized integer. Immutability is shallow: a tuple may contain a mutable object like a list, and that object's contents can change even though the tuple itself cannot.\n\nExercise 5.6 builds functions that return tuples, using packing on the way out and unpacking on receipt.",
              "workedExample": {
                "title": "Packing and the comma",
                "body": "```\npoint = (3, 4)     # a packed tuple\nsingle = (5,)      # a one-element tuple\nnot_tuple = (5)    # just the integer 5\n```"
              }
            },
            {
              "title": "Unpacking and slicing",
              "body": "**Unpacking** assigns a sequence's elements to a row of names in one statement; gathering with * collects the rest. Swapping two variables is packing plus unpacking: `a, b = b, a`. **enumerate** gives index and value together while iterating. **Slicing** (`seq[start:stop:step]`) builds a new sequence from a range of indices, stop excluded; slices can omit bounds, use negative steps to reverse, and assigning an empty list to a list slice deletes those elements.",
              "workedExample": {
                "title": "Swap and slice",
                "body": "```\na, b = 1, 2\na, b = b, a          # now a is 2, b is 1\nnumbers = [0, 1, 2, 3, 4, 5]\nnumbers[1:4]         # [1, 2, 3], stop excluded\nnumbers[::-1]        # the list reversed\n```"
              }
            }
          ],
          "examples": [
            {
              "title": "Function returning a tuple (Exercise 5.6)",
              "scenario": "A function computes a circle's diameter, circumference, and area and must hand all three back. Chapter 4 said a function returns one value. How does Exercise 5.6 square that circle?",
              "answer": "Return a packed tuple: return (diameter, circumference, area). One return, one object, three values inside; the caller unpacks it into three names. The LabAssist note ties the exercise to the packing and unpacking from Section 5.4, the same mechanism as swapping variables.",
              "piece": "tuples-immutable",
              "principle": "tuple-returns"
            },
            {
              "title": "The parentheses trap",
              "scenario": "A student writes `t = (5)` and later complains that t has no tuple behavior and len(t) fails. What is t?",
              "answer": "The integer 5. Parentheses alone just group; a one-element tuple requires the trailing comma, (5,).",
              "piece": "tuples-immutable",
              "principle": "one-element-tuple"
            }
          ],
          "matrix": {
            "title": "List vs Tuple",
            "columns": [
              "List",
              "Tuple"
            ],
            "rows": [
              "Can it change after creation",
              "How you write one (and the one-element case)",
              "What happens on element assignment",
              "Typical use in this course"
            ]
          },
          "methods": [
            {
              "id": "swap-idiom",
              "name": "Swap via packing and unpacking",
              "trigger": "Exchanging two variables' values: a, b = b, a. No temporary variable, and it generalizes to rotating several names at once."
            }
          ],
          "sorting": [
            {
              "statement": "Store a fixed set of weekday names that must never change during the program.",
              "principle": "tuple-choice",
              "cue": "Fixed and unchangeable points to a tuple."
            },
            {
              "statement": "Collect survey responses as they arrive, adding each new one.",
              "principle": "list-choice",
              "cue": "Growing by appends needs a mutable list."
            },
            {
              "statement": "Hand three computed statistics back from one function in one return.",
              "principle": "tuple-returns",
              "cue": "Several values, one return: pack a tuple."
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Index trace",
              "prompt": "For `values = [10, 20, 30, 40]`, give values[2], values[-2], and values[1:3].",
              "solution": "values[2] is 30 (indices start at 0). values[-2] is 30 (second from the end). values[1:3] is [20, 30] (start included, stop excluded)."
            },
            {
              "rung": "completion",
              "title": "One-element tuple",
              "prompt": "Complete the statement so t is a tuple containing only 7: `t = (7__)`.",
              "solution": "`t = (7,)`. The trailing comma makes it a tuple; (7) would be the integer 7 in parentheses."
            },
            {
              "rung": "full",
              "title": "Swap and unpack",
              "prompt": "Write one statement that swaps the values of x and y, and one that unpacks the tuple (88, 92) into the names first and second.",
              "solution": "```\nx, y = y, x\nfirst, second = (88, 92)\n```"
            }
          ],
          "questions": [
            {
              "id": "py-ch5-q01",
              "type": "mc",
              "prompt": "For `values = [10, 20, 30]`, which statement is true?",
              "options": [
                "values[3] is 30",
                "values[-1] is 30 and len(values) is 3",
                "values[0] is an error because indices start at 1",
                "Assigning values[1] = 99 is an error because lists are immutable"
              ],
              "answer": 1,
              "principle": "list-indexing",
              "difficulty": 1,
              "feedback": {
                "step": "Indexing step.",
                "why": "Indices start at 0, negative indices count from the end (so -1 is the last element, 30), len gives 3, and lists are mutable, so values[3] would be out of bounds rather than 30.",
                "cue": "0-based from the front, negative from the back: -1 is always the last element."
              }
            },
            {
              "id": "py-ch5-q02",
              "type": "mc",
              "prompt": "What is `(5)` in Python?",
              "options": [
                "A tuple with one element",
                "The integer 5 in parentheses",
                "A list with one element",
                "A syntax error"
              ],
              "answer": 1,
              "principle": "one-element-tuple",
              "difficulty": 1,
              "feedback": {
                "step": "Literal reading step.",
                "why": "Parentheses only group. The comma creates a tuple, so a one-element tuple is written (5,).",
                "cue": "No comma, no tuple: (5,) vs (5) is the trap this chapter plants."
              }
            },
            {
              "id": "py-ch5-q03",
              "type": "production",
              "prompt": "Write the single statement that swaps the values of variables a and b using Chapter 5's idiom, and say in one phrase what makes it work.",
              "solution": "`a, b = b, a`\n\nPacking and unpacking: the right side packs (b, a) into a tuple, and the left side unpacks it into a and b in one motion, so no temporary variable is needed.",
              "principle": "swap-idiom",
              "difficulty": 2,
              "feedback": {
                "step": "Idiom step.",
                "why": "Assignment evaluates the right side first as a tuple, then unpacks left to right. The old values are captured before any name is rebound.",
                "cue": "Two names, two values, one line: that symmetry is packing and unpacking."
              }
            },
            {
              "id": "py-ch5-q04",
              "type": "mc",
              "prompt": "What does `numbers[1:4]` return for `numbers = [0, 1, 2, 3, 4, 5]`?",
              "options": [
                "[1, 2, 3, 4]",
                "[0, 1, 2, 3]",
                "[1, 2, 3]",
                "[2, 3, 4]"
              ],
              "answer": 2,
              "principle": "slicing",
              "difficulty": 1,
              "feedback": {
                "step": "Slice bounds step.",
                "why": "A slice includes the start index and excludes the stop index: elements at 1, 2, 3, which are [1, 2, 3].",
                "cue": "Slices share range's rule: stop excluded. Read the indices, not the values, first."
              }
            },
            {
              "id": "py-ch5-q05",
              "type": "mc",
              "prompt": "Which operation is legal on a tuple `t`?",
              "options": [
                "t[0] = 9, replacing the first element",
                "t.append(9), adding an element",
                "Reading t[0] and checking `9 in t`",
                "Deleting t[0] with del"
              ],
              "answer": 2,
              "principle": "tuple-immutability",
              "difficulty": 2,
              "feedback": {
                "step": "Mutability boundary step.",
                "why": "Tuples are immutable: no element assignment, append, or deletion. Reading elements and membership tests are fine. (A tuple can contain a mutable list whose contents change, but the tuple's own elements cannot be rebound.)",
                "cue": "Immutable means the container is frozen, not that it is unreadable."
              }
            },
            {
              "id": "py-ch5-q06",
              "type": "mc",
              "prompt": "A function must return a student's minimum, maximum, and average quiz scores in a single return statement. Per Exercise 5.6, how?",
              "options": [
                "It cannot; write three functions",
                "Return a packed tuple of the three values and let the caller unpack it",
                "Print two of them and return the third",
                "Store them in global variables"
              ],
              "answer": 1,
              "principle": "tuple-returns",
              "difficulty": 2,
              "feedback": {
                "step": "Return design step.",
                "why": "Packing the three results into one tuple returns one object carrying all three; the caller unpacks it into three names, the same mechanism as the variable swap.",
                "cue": "Several results, one return statement: pack a tuple."
              }
            },
            {
              "id": "py-ch5-q07",
              "type": "production",
              "prompt": "Write the expression that produces the reverse of the list `letters` using a slice, without modifying letters.",
              "solution": "`letters[::-1]`\n\nA slice with step -1 walks the sequence backwards and builds a new list, leaving the original untouched.",
              "principle": "slicing",
              "difficulty": 2,
              "feedback": {
                "step": "Step direction step.",
                "why": "Slicing with a negative step selects in reverse order; omitting start and stop with step -1 reverses the whole sequence as a copy.",
                "cue": "A -1 step is the reversal cue in slice syntax."
              }
            },
            {
              "id": "py-ch5-q08",
              "type": "mc",
              "prompt": "What does `first, *rest = [10, 20, 30, 40]` assign?",
              "options": [
                "first is 10 and rest is 40",
                "first is 10 and rest is [20, 30, 40]",
                "An error: unpacking needs exact counts",
                "first is [10] and rest is 40"
              ],
              "answer": 1,
              "principle": "unpacking-gather",
              "difficulty": 3,
              "feedback": {
                "step": "Gathering step.",
                "why": "Section 5.4's unpacking with gathering: the starred name collects all remaining elements into a list, so rest is [20, 30, 40].",
                "cue": "A star on the receiving side gathers the leftovers into a list."
              }
            }
          ]
        },
        {
          "id": "lec4-processing-sequences",
          "title": "Processing Sequences: Methods, Comprehensions, and Functional Style",
          "pieces": [
            {
              "id": "list-methods",
              "name": "List methods and searching",
              "fn": "append, extend, insert, remove, count, index, and the in operator mutate and interrogate lists; index finds the first match or raises ValueError.",
              "predict": "How do append and extend differ when you add [1, 2] to a list?"
            },
            {
              "id": "comprehensions",
              "name": "List comprehensions and generator expressions",
              "fn": "A comprehension builds a list in one expression with an optional if filter; a generator expression produces values on demand instead of storing them.",
              "predict": "Rewrite `[n * 2 for n in range(5) if n % 2 == 0]` in words: what list comes out?"
            },
            {
              "id": "sorting-and-builtins",
              "name": "Sorting, searching, and sequence built-ins",
              "fn": "list.sort() sorts in place; sorted() returns a new list; any sequence processing should prefer one pass when the LabAssist notes say a sort is too expensive.",
              "predict": "sorted(x) vs x.sort(): which one leaves x untouched, and which returns None?"
            }
          ],
          "lesson": [
            {
              "title": "List methods and searching",
              "body": "Lists carry methods for the common jobs: **append** adds one element at the end, **extend** adds every element of another sequence, **insert** places an element at an index, **remove** deletes the first element with a given value, **clear** empties the list, and **count** tallies occurrences. **Searching**: the **in** operator tests membership, and the **index** method returns the position of the first matching element, raising a ValueError when it is absent. The **del** statement removes an element by index, or a whole slice by assigning an empty list to it.",
              "workedExample": {
                "title": "append vs extend",
                "body": "```\nvalues = [1, 2]\nvalues.append([3, 4])   # [1, 2, [3, 4]], one new element\nvalues = [1, 2]\nvalues.extend([3, 4])   # [1, 2, 3, 4], two new elements\n```\nappend adds its argument as a single element; extend iterates its argument."
              }
            },
            {
              "title": "List comprehensions and generator expressions",
              "body": "A **list comprehension** builds a list in a single expression: an expression, a for clause over any iterable, and optional **if clauses that filter**. Deitel presents comprehensions as functional-style mapping and filtering, the concise successors to explicit loops, and Exercise 5.7's duplicate elimination pattern (keep an item only if it is `not in` the result so far) is the filtering idea in loop form. A **generator expression** looks the same with parentheses and produces values on demand rather than storing a whole list.",
              "workedExample": {
                "title": "Map and filter in one line",
                "body": "```\n[n * 2 for n in range(5) if n % 2 == 0]   # [0, 4, 8]\n```\nThe if filters to even n (0, 2, 4); the expression doubles each survivor."
              }
            },
            {
              "title": "Sorting, searching, and sequence built-ins",
              "body": "A list's **sort** method sorts **in place** and returns None; the built-in **sorted** function **creates a new list** and leaves the original alone, the distinction Exercise 5.14 turns on. Its LabAssist note rejects the sort-a-copy approach for checking whether a sequence is sorted: sorting is expensive, so make **one pass**, comparing each adjacent pair, allowing duplicates, and stop at the first out-of-order pair. Other built-ins take a **key** argument (max, min, sorted), **zip** combines iterables into tuples of corresponding elements, and two-dimensional lists are processed with nested for statements.",
              "workedExample": {
                "title": "One-pass sorted check (Exercise 5.14 pattern)",
                "body": "```\ndef is_sorted(seq):\n    for i in range(len(seq) - 1):\n        if seq[i] > seq[i + 1]:\n            return False\n    return True\n```\nOne pass, adjacent pairs, duplicates allowed because only a strict decrease fails the test."
              }
            }
          ],
          "examples": [
            {
              "title": "Duplicate elimination (Exercise 5.7)",
              "scenario": "Remove duplicates from a list of survey values, keeping first occurrences in order. The LabAssist note bans NumPy's unique here. What is the prescribed algorithm?",
              "answer": "For each item in the original list, use `not in` to test whether it is already in the new list; if not, append it. First occurrences survive, order is preserved, and no library shortcut is used.",
              "piece": "comprehensions",
              "principle": "duplicate-elimination"
            },
            {
              "title": "Survey statistics (Exercise 5.28)",
              "scenario": "Count how many times each unique response value occurs in a list of 1 to 5 ratings. Which tool from Section 5.17.2 does the LabAssist note point to, and what extra argument matters?",
              "answer": "NumPy's unique function, called with a second argument that tells it to also return the counts of each unique value. The note exists because unique alone returns only the distinct values, not their frequencies.",
              "piece": "sorting-and-builtins",
              "principle": "unique-counts"
            }
          ],
          "methods": [
            {
              "id": "one-pass-check",
              "name": "One-pass adjacent check",
              "trigger": "Questions about whether a sequence is ordered, or has a local property: walk adjacent pairs once instead of sorting a copy; sorting to answer a local question wastes time and memory (the space-time trade-off from Exercise 5.14)."
            }
          ],
          "sorting": [
            {
              "statement": "Build the squares of the even numbers from 0 to 9 as a new list.",
              "principle": "comprehension-filter",
              "cue": "Transform plus a keep-test in one expression: a comprehension with an if."
            },
            {
              "statement": "Add the list [7, 8] to the end of results so results grows by two elements.",
              "principle": "extend-vs-append",
              "cue": "Growing by the argument's elements is extend, not append."
            },
            {
              "statement": "Find the position of the first 90 in a grades list, or learn that it is absent.",
              "principle": "index-search",
              "cue": "First position or a ValueError: the index method."
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Comprehension trace",
              "prompt": "State the list produced by `[n * 2 for n in range(5) if n % 2 == 0]` and name its two functional-style parts.",
              "solution": "[0, 4, 8]. The expression n * 2 is the mapping; the if clause is the filtering, keeping only even n (0, 2, 4)."
            },
            {
              "rung": "completion",
              "title": "Duplicate elimination loop",
              "prompt": "Complete the loop body so unique collects each value from values only the first time it appears:\n\n```\nunique = []\nfor value in values:\n    if value _____ unique:\n        unique.append(value)\n```",
              "solution": "The missing words are `not in`: an item is appended only when it is not already in unique, which is exactly the LabAssist algorithm for Exercise 5.7."
            },
            {
              "rung": "full",
              "title": "Sorted without side effects",
              "prompt": "Write the statement that creates ordered, a sorted copy of the list scores, while scores itself keeps its original order, and name the alternative that would have reordered scores.",
              "solution": "```\nordered = sorted(scores)\n```\nsorted returns a new list. The alternative, scores.sort(), sorts in place and returns None."
            }
          ],
          "questions": [
            {
              "id": "py-ch5b-q01",
              "type": "mc",
              "prompt": "What is the difference between `values.append([3, 4])` and `values.extend([3, 4])`?",
              "options": [
                "None; they are synonyms",
                "append adds [3, 4] as one nested element; extend adds 3 and 4 as two elements",
                "extend adds [3, 4] as one element; append adds both elements",
                "append works only on empty lists"
              ],
              "answer": 1,
              "principle": "extend-vs-append",
              "difficulty": 2,
              "feedback": {
                "step": "Method argument step: one object vs an iterable of objects.",
                "why": "append takes its argument as a single element, even a list; extend iterates its argument and adds each element.",
                "cue": "Ask what lands in the list: the argument itself (append) or its contents (extend)."
              }
            },
            {
              "id": "py-ch5b-q02",
              "type": "mc",
              "prompt": "What list does `[x ** 2 for x in range(4)]` build?",
              "options": [
                "[0, 1, 2, 3]",
                "[1, 4, 9, 16]",
                "[0, 1, 4, 9]",
                "[0, 2, 4, 6]"
              ],
              "answer": 2,
              "principle": "comprehension-map",
              "difficulty": 1,
              "feedback": {
                "step": "Comprehension reading step.",
                "why": "The for clause supplies 0, 1, 2, 3 (range excludes 4); the expression squares each: 0, 1, 4, 9.",
                "cue": "Evaluate the iterable first, then the expression on each element."
              }
            },
            {
              "id": "py-ch5b-q03",
              "type": "production",
              "prompt": "Write a list comprehension that produces the cubes of the odd numbers from 1 to 9 inclusive.",
              "solution": "`[n ** 3 for n in range(1, 10) if n % 2 != 0]`\n\nThe if clause filters to odd n (1, 3, 5, 7, 9) and the expression cubes each survivor.",
              "principle": "comprehension-filter",
              "difficulty": 2,
              "feedback": {
                "step": "Construction step: expression, for, if, in that order.",
                "why": "A comprehension is expression first, then the for over the iterable, then the optional if filter. The remainder test from Chapter 2 supplies the oddness filter.",
                "cue": "Transform with a keep-test is a comprehension with an if clause."
              }
            },
            {
              "id": "py-ch5b-q04",
              "type": "mc",
              "prompt": "What do `scores.sort()` and `sorted(scores)` each return?",
              "options": [
                "Both return the sorted list",
                "sort returns None and reorders scores in place; sorted returns a new sorted list and leaves scores alone",
                "sort returns a new list; sorted returns None",
                "Both return None"
              ],
              "answer": 1,
              "principle": "sort-vs-sorted",
              "difficulty": 1,
              "feedback": {
                "step": "Side effect step.",
                "why": "Methods that mutate typically return None: sort rearranges the list itself. The built-in sorted is pure: new list out, original untouched.",
                "cue": "In place means None back: whenever a method does the work on the object itself, expect None."
              }
            },
            {
              "id": "py-ch5b-q05",
              "type": "mc",
              "prompt": "Why does the Exercise 5.14 LabAssist note forbid checking sortedness by sorting a copy and comparing?",
              "options": [
                "Because sorted() is not allowed in Chapter 5",
                "Because sorting is expensive in time and memory, and a single pass over adjacent pairs answers the question directly",
                "Because copies of lists cannot be compared",
                "Because duplicates make sorted() fail"
              ],
              "answer": 1,
              "principle": "one-pass-check",
              "difficulty": 3,
              "feedback": {
                "step": "Efficiency reasoning step.",
                "why": "The note names the space-time trade-off: copying and sorting a huge sequence can cost enormous time and memory, while one pass comparing neighbors settles sortedness and allows duplicates.",
                "cue": "When a heavyweight operation answers a lightweight local question, suspect the one-pass alternative."
              }
            },
            {
              "id": "py-ch5b-q06",
              "type": "mc",
              "prompt": "Per the Exercise 5.7 LabAssist note, duplicate elimination must be done how?",
              "options": [
                "With NumPy's unique function",
                "By testing each item with not in against the result list and appending only new items",
                "By sorting, then deleting neighbors",
                "By converting to a set and back"
              ],
              "answer": 1,
              "principle": "duplicate-elimination",
              "difficulty": 2,
              "feedback": {
                "step": "Prescribed algorithm step.",
                "why": "The note is explicit: for each item, use not in to check the new list, append if absent, and do not use NumPy's unique. First occurrences and original order survive.",
                "cue": "When the syllabus prescribes an algorithm and bans the shortcut, the prescribed one is the answer being tested."
              }
            },
            {
              "id": "py-ch5b-q07",
              "type": "production",
              "prompt": "Write the call that returns both the unique values in the list `responses` and how many times each occurs, per Section 5.17.2 as the Exercise 5.28 note describes.",
              "solution": "`unique(responses, return_counts=True)` using NumPy's unique (imported as in the section), which returns the unique values together with their frequencies because the second argument asks for counts.",
              "principle": "unique-counts",
              "difficulty": 3,
              "feedback": {
                "step": "Argument purpose step.",
                "why": "unique by itself returns only the distinct values; the counts come only when the second argument requests them, which is the entire point of the LabAssist reminder.",
                "cue": "Distinct values plus frequencies: the extra return has to be switched on."
              }
            },
            {
              "id": "py-ch5b-q08",
              "type": "mc",
              "prompt": "What does the list method `index` do when the value it seeks is not in the list?",
              "options": [
                "Returns -1",
                "Returns None",
                "Raises a ValueError",
                "Appends the value and returns its index"
              ],
              "answer": 2,
              "principle": "index-search",
              "difficulty": 2,
              "feedback": {
                "step": "Failure mode step.",
                "why": "index returns the first matching position, and raises ValueError when there is no match. Testing membership with in first is the safe pattern when absence is expected.",
                "cue": "index promises a position; absence breaks the promise as an exception, not a sentinel value."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lec5",
      "title": "Chapter 4 (Thu Oct 8): Chapter 6, Dictionaries and Sets",
      "topics": [
        {
          "id": "lec5-dictionaries-sets",
          "title": "Dictionaries and Sets",
          "provisional": "Built from the syllabus and the Canvas module overview only: the Week 4 lecture notebook is not held (the Learning Vault sync for this course is stale as of Oct 8, 2026), and the question pool is below the format minimum of a quiz plus three retest rounds. Treat lesson wording as the syllabus's framing, not the lecture's.",
          "pieces": [
            {
              "id": "dict-operations",
              "name": "Dictionary operations",
              "fn": "A dictionary maps keys to values; you look up, add, update, and delete by key, and iterate keys, values, or items.",
              "predict": "For a dictionary of student grades keyed by name, how do you get one student's grade and add a new student?"
            },
            {
              "id": "sets",
              "name": "Sets",
              "fn": "A set is an unordered collection of unique values: duplicates are impossible, which makes sets the natural duplicate test.",
              "predict": "What happens when you build a set from [1, 2, 2, 3]?"
            },
            {
              "id": "duplicate-word-removal",
              "name": "Duplicate word removal (Exercise 6.6 pattern)",
              "fn": "Split text into words, normalize case, and return the sorted list of unique words: dictionary and set thinking applied to real text.",
              "predict": "Why does the updated Exercise 6.6 insist uppercase and lowercase be treated as the same word?"
            }
          ],
          "lesson": [
            {
              "title": "Dictionary operations",
              "body": "A **dictionary** stores **key-value pairs**: each value is reached through its key rather than a position. Section 6.2 demonstrates the core operations the labs use: looking a key up, adding a new pair, updating an existing key's value, and removing pairs. Dictionaries are the chapter's answer to data that is naturally labelled, like grades by student or counts by word, where a list index would be meaningless.",
              "workedExample": {
                "title": "Lookup and update",
                "body": "```\ngrades = {\"Ann\": 88, \"Ben\": 92}\ngrades[\"Ann\"]        # 88, lookup by key\ngrades[\"Cid\"] = 75   # a new key adds a pair\ngrades[\"Ann\"] = 90   # an existing key updates its value\n```"
              }
            },
            {
              "title": "Sets",
              "body": "A **set** is an unordered collection with **no duplicate elements**: adding a value that is already present changes nothing. That uniqueness makes sets the direct tool for membership and duplicate questions, and set operations compare collections. Chapter 5 eliminated duplicates by hand with `not in`; sets build the same guarantee into the type.",
              "workedExample": {
                "title": "Uniqueness for free",
                "body": "```\nset([1, 2, 2, 3])   # {1, 2, 3}\n```\nThe second 2 simply does not exist in the set."
              }
            },
            {
              "title": "Duplicate word removal (Exercise 6.6 pattern)",
              "body": "The updated Exercise 6.6 (the syllabus replaces the book's version) asks for a function that receives a list of words and returns a **sorted list of the unique words**, treating uppercase and lowercase as the same, so apple and Apple yield one apple. The caller then displays the words alphabetically, one per line. The LabAssist note frames the techniques as **data-wrangling operations** and recalls that string sorting is lexicographic, so case must be normalized before sorting to get true alphabetical order.",
              "workedExample": {
                "title": "Normalize, unique, sort",
                "body": "The pattern: split the sentence into words first (the caller does this), lowercase each word, keep the unique ones, return them sorted. Each step is a Chapter 5 or 6 operation reused in sequence."
              }
            }
          ],
          "examples": [
            {
              "title": "Dictionary manipulations (Exercise 6.9)",
              "scenario": "An exercise asks for a sequence of dictionary operations: add entries, update one, delete one, and report the result. Where does the LabAssist note send you for the models?",
              "answer": "To the dictionary operations demonstrated in Section 6.2: the exercise is those same operations recombined, so the section's examples are the templates for each step.",
              "piece": "dict-operations",
              "principle": "dict-operations"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Trace the updates",
              "prompt": "Trace the dictionary after each line:\n\n```\nd = {\"a\": 1}\nd[\"b\"] = 2\nd[\"a\"] = 10\n```",
              "solution": "After line 2, d is {\"a\": 1, \"b\": 2} (new key added). After line 3, d is {\"a\": 10, \"b\": 2} (existing key updated, not duplicated). A key appears at most once."
            },
            {
              "rung": "full",
              "title": "Unique words shape",
              "prompt": "Write the expression that returns the sorted list of unique lowercase words from the list `words`, applying the Exercise 6.6 pattern in one line.",
              "solution": "`sorted({word.lower() for word in words})`\n\nThe set comprehension lowercases and deduplicates; sorted turns the set into the alphabetical list the exercise requires."
            }
          ],
          "questions": [
            {
              "id": "py-ch6-q01",
              "type": "mc",
              "prompt": "What does assigning `grades[\"Ann\"] = 90` do when \"Ann\" is already a key in grades?",
              "options": [
                "Adds a second \"Ann\" entry alongside the first",
                "Updates the value stored under \"Ann\"",
                "Raises an error because keys cannot change",
                "Appends 90 to a list of Ann's grades"
              ],
              "answer": 1,
              "principle": "dict-operations",
              "difficulty": 1,
              "feedback": {
                "step": "Key semantics step.",
                "why": "A dictionary holds each key once: assignment to an existing key replaces its value; assignment to a new key adds a pair.",
                "cue": "One key, one value: assignment either adds or overwrites, never duplicates."
              }
            },
            {
              "id": "py-ch6-q02",
              "type": "mc",
              "prompt": "What is `len(set([4, 4, 5, 5, 6]))`?",
              "options": [
                "5",
                "3",
                "6",
                "An error: sets reject duplicates at creation"
              ],
              "answer": 1,
              "principle": "set-uniqueness",
              "difficulty": 1,
              "feedback": {
                "step": "Uniqueness step.",
                "why": "A set keeps unique values only: {4, 5, 6}, so its length is 3. Duplicates in the source are silently dropped.",
                "cue": "Building a set is a deduplication: count what survives, not what went in."
              }
            },
            {
              "id": "py-ch6-q03",
              "type": "production",
              "prompt": "Per the updated Exercise 6.6 in the syllabus, state the three things the returned list must be, and the case rule that applies before sorting.",
              "solution": "The function returns a list of the unique words from its input, sorted alphabetically, with uppercase and lowercase treated as the same word (normalize case, so apple and Apple produce a single apple). The caller displays them one per line.",
              "principle": "duplicate-word-removal",
              "difficulty": 2,
              "feedback": {
                "step": "Specification reading step.",
                "why": "The syllabus's replacement exercise text is explicit: unique, sorted, case-insensitive, because string sort order is lexicographic (by character codes) and would otherwise split case variants.",
                "cue": "When the syllabus replaces an exercise, its replacement text is the spec being tested."
              }
            },
            {
              "id": "py-ch6-q04",
              "type": "mc",
              "prompt": "Why must case be normalized before sorting words alphabetically (LabAssist note for 6.6)?",
              "options": [
                "Python cannot sort strings with mixed case",
                "String sort order is lexicographic, based on the characters' underlying integer values, so case differences distort alphabetical order",
                "Sorted lists must be lowercase by rule",
                "Uppercase words are stored at the end of every list"
              ],
              "answer": 1,
              "principle": "lexicographic-order",
              "difficulty": 2,
              "feedback": {
                "step": "Ordering basis step.",
                "why": "Characters compare by their underlying integer values, and uppercase letters have smaller values than lowercase, so unnormalized sorting groups all capitalized words first. Lowercasing first gives the alphabetical order people mean.",
                "cue": "Lexicographic means character codes decide: normalize case before trusting a string sort."
              }
            },
            {
              "id": "py-ch6-q05",
              "type": "mc",
              "prompt": "Which structure fits storing each student's grade under the student's name, so any grade can be fetched by name?",
              "options": [
                "A list of grades in seating order",
                "A dictionary mapping names to grades",
                "A tuple of grades",
                "A set of grades"
              ],
              "answer": 1,
              "principle": "dict-choice",
              "difficulty": 1,
              "feedback": {
                "step": "Structure selection step.",
                "why": "Labelled lookup is the dictionary's job: keys are the names, values are the grades. A set cannot hold pairs, and list positions carry no names.",
                "cue": "Fetch by label, not by position: dictionary."
              }
            },
            {
              "id": "py-ch6-q06",
              "type": "mc",
              "prompt": "A word appears in a sentence as both \"Apple\" and \"apple\". After correct Exercise 6.6 processing, the output contains:",
              "options": [
                "Both forms, sorted separately",
                "One entry, \"apple\"",
                "One entry, \"Apple\"",
                "Neither, duplicates are removed entirely"
              ],
              "answer": 1,
              "principle": "duplicate-word-removal",
              "difficulty": 2,
              "feedback": {
                "step": "Normalization outcome step.",
                "why": "Treating case as the same word means the two forms collapse to one unique word, kept in its lowercase form per the exercise's example.",
                "cue": "Case variants of one word are one word: the output shows it once, lowercased."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lec6",
      "title": "Chapter 4-5 (Oct 8-22): Chapter 7, Array-Oriented Programming with NumPy and an Intro to Pandas",
      "topics": [
        {
          "id": "lec6-numpy",
          "title": "NumPy Arrays, Broadcasting, and Indexing/Slicing",
          "provisional": "Built from the syllabus and the Canvas module overview only: the Week 4 lecture notebook is not held (the Learning Vault sync for this course is stale as of Oct 8, 2026), and the question pool is below the format minimum of a quiz plus three retest rounds. Treat lesson wording as the syllabus's framing, not the lecture's.",
          "pieces": [
            {
              "id": "arrays-vs-lists",
              "name": "Arrays vs lists",
              "fn": "A NumPy array is a homogeneous, fixed-type grid of numbers built for whole-array operations, unlike a general purpose list.",
              "predict": "Why does NumPy exist when Python already has lists? Name the two properties that make arrays different."
            },
            {
              "id": "broadcasting",
              "name": "Broadcasting",
              "fn": "Broadcasting applies an operation between arrays of different shapes by stretching the smaller one along the mismatched dimensions.",
              "predict": "What does `array([1, 2, 3]) + 10` produce, and which broadcasting idea explains it?"
            },
            {
              "id": "indexing-slicing-arrays",
              "name": "Indexing and slicing arrays",
              "fn": "Arrays are indexed and sliced like sequences but in multiple dimensions at once, selecting rows, columns, and subgrids.",
              "predict": "For a 3 by 4 array a, what does a[1] give you, and what selects one column from every row?"
            }
          ],
          "lesson": [
            {
              "title": "Arrays vs lists",
              "body": "Chapter 7 introduces **NumPy arrays**: collections whose elements are all the **same type**, stored for fast, whole-collection arithmetic. Where a list operation loops element by element in Python, an array operation applies to the **entire array at once**. Sections 7.1 to 7.13 build arrays, operate on them, and reshape them; the labs model their code on the chapter's section examples, as the LabAssist notes keep repeating.",
              "workedExample": {
                "title": "Whole-array arithmetic",
                "body": "```\nimport numpy as np\nvalues = np.array([1, 2, 3])\nvalues * 10        # array([10, 20, 30])\n```\nOne expression, every element: that is array-oriented programming."
              }
            },
            {
              "title": "Broadcasting",
              "body": "**Broadcasting** (Section 7.7, the model for Exercise 7.2) lets operations combine arrays of different shapes: the smaller array is conceptually stretched so the shapes match. A scalar broadcasts to every element; a row can broadcast across rows. The rules decide which shape pairs are compatible, and incompatible shapes raise an error instead of guessing.",
              "workedExample": {
                "title": "Scalar broadcast",
                "body": "```\nnp.array([1, 2, 3]) + 10   # array([11, 12, 13])\n```\nThe scalar 10 stretches to match the array's shape, so the addition is element by element."
              }
            },
            {
              "title": "Indexing and slicing arrays",
              "body": "Exercise 7.9 practices **indexing and slicing** on two-dimensional arrays (Section 7.10's examples are the model): one index selects a row, a pair selects a single element, and slices select column ranges or subgrids. The LabAssist note corrects the book: part (b) should say select **column 4**, not column 5. These selections are how portions of a dataset get pulled out for analysis.",
              "workedExample": {
                "title": "Row, element, column",
                "body": "For a 2D array a: a[1] is row 1 (the second row); a[1, 2] is the single element at row 1, column 2; a[:, 3] is column 3 from every row."
              }
            }
          ],
          "examples": [
            {
              "title": "The column typo (Exercise 7.9)",
              "scenario": "The book's Exercise 7.9 part (b) says 'Select column 5,' but the array work does not line up. What do you do?",
              "answer": "Follow the syllabus: the LabAssist note states part (b) has a typo and should say 'Select column 4.' LabAssist overrides the book when they conflict, which is the standing rule for every exercise in this workshop.",
              "piece": "indexing-slicing-arrays",
              "principle": "labassist-wins"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Broadcast trace",
              "prompt": "Predict the result of `np.array([[1, 2], [3, 4]]) + np.array([10, 20])`.",
              "solution": "array([[11, 22], [13, 24]]). The row [10, 20] broadcasts across both rows: it adds to the first row and the second row alike."
            },
            {
              "rung": "full",
              "title": "Select a column",
              "prompt": "For a 2D array `a`, write the expression selecting column 4 (index 3) from every row.",
              "solution": "`a[:, 3]`. The : keeps every row; the second index fixes the column."
            }
          ],
          "questions": [
            {
              "id": "py-ch7-q01",
              "type": "mc",
              "prompt": "What most distinguishes a NumPy array from a Python list?",
              "options": [
                "Arrays can hold strings and lists cannot",
                "Arrays hold elements of one type and support fast whole-array operations",
                "Arrays are always two-dimensional",
                "Lists cannot be indexed, arrays can"
              ],
              "answer": 1,
              "principle": "arrays-vs-lists",
              "difficulty": 1,
              "feedback": {
                "step": "Type design step.",
                "why": "Homogeneous elements plus vectorized operations are NumPy's reason to exist; lists are general, mixed, and looped over element by element.",
                "cue": "Same-type elements and whole-array math: that pairing is NumPy's identity."
              }
            },
            {
              "id": "py-ch7-q02",
              "type": "mc",
              "prompt": "What is `np.array([1, 2, 3]) + 10`?",
              "options": [
                "An error: shapes differ",
                "array([11, 12, 13])",
                "array([1, 2, 3, 10])",
                "array([10, 20, 30])"
              ],
              "answer": 1,
              "principle": "broadcasting",
              "difficulty": 1,
              "feedback": {
                "step": "Broadcasting step.",
                "why": "The scalar broadcasts to every element, so the addition is element by element: 1+10, 2+10, 3+10.",
                "cue": "A scalar next to an array stretches: broadcasting is the name for the stretch."
              }
            },
            {
              "id": "py-ch7-q03",
              "type": "production",
              "prompt": "Explain in one or two sentences what broadcasting does when a (2, 3) array is added to a (3,) array.",
              "solution": "Broadcasting stretches the smaller array along the mismatched dimension: the (3,) row is treated as if it were repeated for both rows of the (2, 3) array, so each row gets the same three values added element by element.",
              "principle": "broadcasting",
              "difficulty": 2,
              "feedback": {
                "step": "Mechanism step.",
                "why": "Compatibility is judged dimension by dimension from the right; a dimension of size 1 (or a missing row dimension) stretches to match. The (3,) array aligns with the columns and repeats down the rows.",
                "cue": "Different shapes in one operation: ask how the smaller one stretches."
              }
            },
            {
              "id": "py-ch7-q04",
              "type": "mc",
              "prompt": "For a two-dimensional array `a`, what does `a[:, 3]` select?",
              "options": [
                "Row 3",
                "Column index 3, from every row",
                "The element at row 3, column 3",
                "Every third element of the flattened array"
              ],
              "answer": 1,
              "principle": "indexing-slicing-arrays",
              "difficulty": 2,
              "feedback": {
                "step": "Two-index reading step.",
                "why": "In a[row, column] indexing, : in the row position keeps all rows and 3 in the column position fixes one column: a full column slice.",
                "cue": "Read the two slots separately: all rows, one column."
              }
            },
            {
              "id": "py-ch7-q05",
              "type": "mc",
              "prompt": "The book's Exercise 7.9(b) says 'Select column 5' but the syllabus disagrees. What is correct for the lab?",
              "options": [
                "Follow the book; the syllabus cannot change an exercise",
                "Select column 4, because the LabAssist note identifies the book text as a typo",
                "Select both and submit both answers",
                "Skip part (b)"
              ],
              "answer": 1,
              "principle": "labassist-wins",
              "difficulty": 1,
              "feedback": {
                "step": "Authority step.",
                "why": "The LabAssist note explicitly corrects part (b) to column 4. In this workshop the syllabus's LabAssist notes modify exercises and win conflicts, by the syllabus's own instruction to do exactly what the combination of exercise and notes asks.",
                "cue": "Book vs LabAssist conflict: LabAssist wins, every time in this course."
              }
            },
            {
              "id": "py-ch7-q06",
              "type": "mc",
              "prompt": "Exercise 7.2 (Broadcasting) tells you to model your code on what?",
              "options": [
                "The Chapter 5 list examples",
                "The broadcasting examples in Section 7.7",
                "Exercise 7.9's slicing code",
                "A genAI's suggested code"
              ],
              "answer": 1,
              "principle": "labassist-modeling",
              "difficulty": 1,
              "feedback": {
                "step": "LabAssist reading step.",
                "why": "The note for 7.2 says to model the code after Section 7.7's broadcasting examples, the same modeling instruction the notes give for 7.9 (Section 7.10) and 7.23 (Section 7.14.2).",
                "cue": "LabAssist notes repeatedly name the section whose examples are the template: read the note before writing code."
              }
            }
          ]
        },
        {
          "id": "lec6-pandas-intro",
          "title": "Intro to Pandas: Series and DataFrames (Section 7.14)",
          "provisional": "Built from the syllabus and the Canvas module overview only: the Week 5 lecture notebook is not held (the Learning Vault sync for this course is stale as of Oct 8, 2026), and the question pool is below the format minimum of a quiz plus three retest rounds. Treat lesson wording as the syllabus's framing, not the lecture's.",
          "pieces": [
            {
              "id": "series",
              "name": "Pandas Series",
              "fn": "A Series is a one-dimensional labelled array: values plus an index of labels, the bridge from NumPy to data work.",
              "predict": "What does a Series have that a plain NumPy array does not?"
            },
            {
              "id": "dataframes",
              "name": "Pandas DataFrames",
              "fn": "A DataFrame is a table of rows and named columns, the structure CSV data lands in, with selection and summary operations built in.",
              "predict": "What shape of data is a DataFrame, and what is one column of it called?"
            },
            {
              "id": "wrangling-intro",
              "name": "Data wrangling, first look",
              "fn": "Wrangling is cleaning and reshaping real data (missing values, types, selections) before analysis; Chapter 8 continues it with strings.",
              "predict": "Why does the course put wrangling right after the DataFrame introduction?"
            }
          ],
          "lesson": [
            {
              "title": "Pandas Series",
              "body": "Section 7.14 introduces **Pandas** on top of NumPy. A **Series** is a one-dimensional array **with an index**: every value carries a label, so data can be selected by name as well as by position. It is the single-column unit of Pandas work.",
              "workedExample": {
                "title": "Labelled values",
                "body": "A Series pairs values with index labels. A column pulled out of a DataFrame is a Series, which is why the two types are introduced together."
              }
            },
            {
              "title": "Pandas DataFrames",
              "body": "A **DataFrame** is the two-dimensional structure: rows of observations and **named columns**, each column a Series. Exercise 7.23 has students build and manipulate DataFrames modeled on Section 7.14.2's code, and Chapter 9 loads CSV files into DataFrames for real analysis, so this is the workshop's central data structure from here on.",
              "workedExample": {
                "title": "The table unit",
                "body": "Rows are observations, columns are variables, column names do the labelling. Nearly every later lab (8, 9, and the Applied Analytics work in the MSBA) starts by getting data into this shape."
              }
            },
            {
              "title": "Data wrangling, first look",
              "body": "The syllabus pairs Section 7.14 with **Intro to Pandas data wrangling**: real datasets arrive with missing values, wrong types, and columns to select or compute, and **wrangling** is the cleaning work that makes them analyzable. Lecture 5's Chapter 8 material continues the wrangling thread with string data.",
              "workedExample": {
                "title": "Why wrangle",
                "body": "Analysis functions assume clean, typed, selected data. Wrangling is the gap work between a raw file and an analyzable DataFrame, and the course treats it as a core skill, not a chore."
              }
            }
          ],
          "examples": [
            {
              "title": "DataFrames exercise (Exercise 7.23)",
              "scenario": "The Lecture 5 lab includes Exercise 7.23 on Pandas DataFrames. What does its LabAssist note instruct?",
              "answer": "Model your code after the code examples in Section 7.14.2. As with 7.2 and 7.9, the note names the section whose worked code is the template rather than leaving students to improvise the Pandas idioms.",
              "piece": "dataframes",
              "principle": "labassist-modeling"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Name the parts",
              "prompt": "A DataFrame holds exam results: one row per student, columns named Name, Score, and Grade. Identify the rows, the columns, and what one column is, as a type.",
              "solution": "Rows are the observations (one per student). Columns are the named variables. Any single column, such as Score, is a Series: values plus the row index as labels."
            },
            {
              "rung": "full",
              "title": "Series vs array",
              "prompt": "State the one structural addition a Series makes over a NumPy array, and why it matters for selecting data.",
              "solution": "An index of labels. Selection can then be by meaningful label (a name, a date) instead of only by integer position, which is how real datasets are addressed."
            }
          ],
          "questions": [
            {
              "id": "py-ch7b-q01",
              "type": "mc",
              "prompt": "A Pandas Series is best described as:",
              "options": [
                "A two-dimensional table",
                "A one-dimensional array of values with an index of labels",
                "A dictionary with numeric keys only",
                "A NumPy array that allows mixed types"
              ],
              "answer": 1,
              "principle": "series",
              "difficulty": 1,
              "feedback": {
                "step": "Structure step.",
                "why": "Series = values plus index. The labels are the addition over a bare NumPy array, and they are what DataFrame columns are made of.",
                "cue": "One dimension plus labels is a Series; add named columns of them and you have a DataFrame."
              }
            },
            {
              "id": "py-ch7b-q02",
              "type": "mc",
              "prompt": "In a DataFrame, one column extracted by itself is:",
              "options": [
                "A list",
                "A Series",
                "Another DataFrame with one row",
                "A NumPy scalar"
              ],
              "answer": 1,
              "principle": "dataframes",
              "difficulty": 1,
              "feedback": {
                "step": "Composition step.",
                "why": "A DataFrame is built from Series: each named column is a Series sharing the row index.",
                "cue": "Columns are Series; the table is the frame holding them together."
              }
            },
            {
              "id": "py-ch7b-q03",
              "type": "mc",
              "prompt": "What is data wrangling, as the syllabus introduces it with Section 7.14?",
              "options": [
                "Writing data to disk in a compressed format",
                "Cleaning and reshaping raw data (missing values, types, selections) so it can be analyzed",
                "Sorting a DataFrame by every column",
                "Converting Python code to SQL"
              ],
              "answer": 1,
              "principle": "wrangling-intro",
              "difficulty": 2,
              "feedback": {
                "step": "Definition step.",
                "why": "Wrangling is the preparation work between raw data and analysis; the course threads it through Lectures 5 and 6 (strings, then files and CSV).",
                "cue": "Raw to analyzable is wrangling's whole span."
              }
            },
            {
              "id": "py-ch7b-q04",
              "type": "mc",
              "prompt": "Per its LabAssist note, Exercise 7.23 (Pandas DataFrames) should be modeled on:",
              "options": [
                "The Chapter 6 dictionary examples",
                "The code examples in Section 7.14.2",
                "Exercise 7.9's slicing code",
                "The JupyterReference notebook"
              ],
              "answer": 1,
              "principle": "labassist-modeling",
              "difficulty": 1,
              "feedback": {
                "step": "LabAssist reading step.",
                "why": "The note points at Section 7.14.2's examples as the template, the same modeling pattern as the notes for Exercises 7.2 and 7.9.",
                "cue": "The LabAssist note names the model section; that pointer is what is being tested."
              }
            },
            {
              "id": "py-ch7b-q05",
              "type": "mc",
              "prompt": "Why do labels matter for the data this course works with?",
              "options": [
                "Labels make printing prettier",
                "Real observations are addressed by names and dates, not just positions, so labelled selection matches the data's meaning",
                "Labels are required for broadcasting",
                "Labels replace the need for types"
              ],
              "answer": 1,
              "principle": "series",
              "difficulty": 2,
              "feedback": {
                "step": "Purpose step.",
                "why": "Datasets are keyed by meaningful labels (students, dates, tickers). An index lets selection use those labels, which is Pandas' core convenience over raw arrays.",
                "cue": "Position-only access mismatches labelled real-world data; the index closes that gap."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lec7",
      "title": "Chapter 5 (Thu Oct 22): Chapter 8, Strings: A Deeper Look",
      "topics": [
        {
          "id": "lec7-strings",
          "title": "Strings in Depth and Pandas Wrangling with Text",
          "provisional": "Built from the syllabus and the Canvas module overview only: the Week 5 lecture notebook is not held (the Learning Vault sync for this course is stale as of Oct 8, 2026), and the question pool is below the format minimum of a quiz plus three retest rounds. Treat lesson wording as the syllabus's framing, not the lecture's.",
          "pieces": [
            {
              "id": "string-methods",
              "name": "String methods and formatting",
              "fn": "Strings carry methods for searching, splitting, joining, replacing, and case work, and formatted strings present values inside text.",
              "predict": "What do split and join do to each other, conceptually?"
            },
            {
              "id": "string-slicing",
              "name": "Slicing strings (Pig Latin pattern)",
              "fn": "Strings slice like lists: substrings by index ranges, first letters and remainders separable, which is what text transformations like Pig Latin are built from.",
              "predict": "For the word 'python', what are word[0] and word[1:]?"
            },
            {
              "id": "text-wrangling",
              "name": "Text as data: wrangling strings in Pandas",
              "fn": "Lecture 5 pairs Chapter 8 with Intro to Pandas Part 2: cleaning and extracting from text columns is data wrangling on strings.",
              "predict": "Why does a chapter on strings sit inside the Pandas wrangling thread of the course?"
            }
          ],
          "lesson": [
            {
              "title": "String methods and formatting",
              "body": "Chapter 8 goes deeper on **strings**: methods to search within text, **split** a string into pieces on a delimiter, **join** pieces back with a separator, replace substrings, strip whitespace, and change case, plus presenting values with **formatted strings**. These are the operations the Chapter 6 word exercise quietly assumed (splitting a sentence into words) now studied directly.",
              "workedExample": {
                "title": "Split and join, inverses",
                "body": "```\nwords = \"one two three\".split()     # ['one', 'two', 'three']\n\"-\".join(words)                    # 'one-two-three'\n```\nsplit breaks on whitespace by default; join reassembles with the separator you choose."
              }
            },
            {
              "title": "Slicing strings (Pig Latin pattern)",
              "body": "Strings are sequences, so Chapter 5's slicing applies unchanged: word[0] is the first character, word[1:] is the rest. Exercise 8.3, **Pig Latin**, is built entirely from these pieces: move the first letter to the end and add a suffix, with the LabAssist reminder that strings can be sliced like lists and arrays and that **all** of the exercise's conversion rules must be accounted for.",
              "workedExample": {
                "title": "The Pig Latin move",
                "body": "For a word w, the core transformation is w[1:] + w[0] plus the exercise's suffix. Every rule variant in the exercise is a condition on that slicing skeleton."
              }
            },
            {
              "title": "Text as data: wrangling strings in Pandas",
              "body": "The syllabus pairs Chapter 8 with **Intro to Pandas Part 2**, continuing Lecture 4's wrangling thread: real text columns need cleaning (case, whitespace, punctuation) and splitting before they can be grouped or counted. Chapter 8's methods are the toolkit; the DataFrame is where they get applied at scale.",
              "workedExample": {
                "title": "Same skills, bigger table",
                "body": "Normalizing case in Exercise 6.6 was string wrangling by hand. In a DataFrame the same operations run over a whole column at once, which is why the course teaches the single-string versions first."
              }
            }
          ],
          "examples": [
            {
              "title": "Integers to emojis (Exercise 8.8)",
              "scenario": "Exercise 8.8 converts integers to emoji characters. What two facts does it rest on, per the chapter's framing?",
              "answer": "Characters are integers under the hood (their Unicode values), and converting an integer code to its character is a built-in operation. The LabAssist note suggests researching the Unicode ranges for emoji and testing whether your system can print them all.",
              "piece": "string-methods",
              "principle": "characters-are-codes"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Slice a word",
              "prompt": "For `word = \"python\"`, give word[0], word[1:], and word[-1].",
              "solution": "word[0] is 'p'; word[1:] is 'ython'; word[-1] is 'n'. String indices behave exactly like list indices, including negatives."
            },
            {
              "rung": "full",
              "title": "Split and count",
              "prompt": "Write the expression that counts the words in the string `sentence`, splitting on whitespace.",
              "solution": "`len(sentence.split())`. split() with no argument breaks on runs of whitespace and returns the word list; len counts it."
            }
          ],
          "questions": [
            {
              "id": "py-ch8-q01",
              "type": "mc",
              "prompt": "What does `\"one two three\".split()` return?",
              "options": [
                "\"one two three\" unchanged",
                "[\"one\", \"two\", \"three\"]",
                "[\"one two\", \"three\"]",
                "3, the word count"
              ],
              "answer": 1,
              "principle": "split-join",
              "difficulty": 1,
              "feedback": {
                "step": "Method result step.",
                "why": "split with no argument breaks the string on whitespace and returns the list of words. Counting needs len applied to that list.",
                "cue": "split produces the pieces; it never counts them itself."
              }
            },
            {
              "id": "py-ch8-q02",
              "type": "mc",
              "prompt": "For `word = \"python\"`, the Pig Latin skeleton `word[1:] + word[0]` evaluates to:",
              "options": [
                "\"ythonp\"",
                "\"python\"",
                "\"pytho\" + \"n\"",
                "\"n\" + \"pytho\""
              ],
              "answer": 0,
              "principle": "string-slicing",
              "difficulty": 1,
              "feedback": {
                "step": "Slice assembly step.",
                "why": "word[1:] is 'ython' and word[0] is 'p'; concatenating gives 'ythonp', the move the exercise's suffix rules then extend.",
                "cue": "First letter plus the rest, reassembled in the new order: slicing does the whole move."
              }
            },
            {
              "id": "py-ch8-q03",
              "type": "mc",
              "prompt": "Per the Exercise 8.3 LabAssist note, the key reminder for Pig Latin is:",
              "options": [
                "Use NumPy for the conversion",
                "Strings can be sliced like lists and arrays, and every conversion rule in the exercise must be accounted for",
                "Only lowercase words need converting",
                "The suffix is the same for every word"
              ],
              "answer": 1,
              "principle": "labassist-wins",
              "difficulty": 2,
              "feedback": {
                "step": "LabAssist reading step.",
                "why": "The note's two points: the slicing technique transfers from Chapter 5, and partial rule coverage is the failure mode the exercise is designed to catch.",
                "cue": "A note that says 'account for all the rules' is warning you the edge cases are the test."
              }
            },
            {
              "id": "py-ch8-q04",
              "type": "mc",
              "prompt": "What does `\"-\".join([\"a\", \"b\", \"c\"])` produce?",
              "options": [
                "\"a-b-c\"",
                "\"abc-\"",
                "A list [\"a-b-c\"]",
                "An error: join is a list method"
              ],
              "answer": 0,
              "principle": "split-join",
              "difficulty": 1,
              "feedback": {
                "step": "Join direction step.",
                "why": "join is a string method: the separator string joins the iterable's elements into one string, 'a-b-c'.",
                "cue": "The separator owns the method: separator.join(pieces), not pieces.join(separator)."
              }
            },
            {
              "id": "py-ch8-q05",
              "type": "mc",
              "prompt": "Why is a strings chapter part of this course's Pandas wrangling thread?",
              "options": [
                "It is not; the pairing is a scheduling accident",
                "Text columns need cleaning and splitting before analysis, and Chapter 8's methods are the tools Pandas wrangling applies at scale",
                "Pandas cannot store strings without Chapter 8",
                "Strings are converted to DataFrames automatically"
              ],
              "answer": 1,
              "principle": "text-wrangling",
              "difficulty": 2,
              "feedback": {
                "step": "Course design step.",
                "why": "The syllabus explicitly pairs Chapter 8 with Intro to Pandas Part 2. Wrangling real data is largely text work: case, whitespace, delimiters.",
                "cue": "When a syllabus pairs two topics, the pairing itself is a claim about how they are used together."
              }
            },
            {
              "id": "py-ch8-q06",
              "type": "mc",
              "prompt": "Exercise 8.8 (integers to emojis) works because:",
              "options": [
                "Emojis are stored as image files in Python",
                "Characters correspond to integer Unicode values, and integers can be converted to their characters",
                "Strings and integers are the same type",
                "The print function translates numbers to pictures"
              ],
              "answer": 1,
              "principle": "characters-are-codes",
              "difficulty": 2,
              "feedback": {
                "step": "Representation step.",
                "why": "Every character has a Unicode code point; converting between the integer and the character is what makes the exercise (and all character arithmetic) possible.",
                "cue": "Text is numbers underneath: that is the fact the exercise is built to teach."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lec8",
      "title": "Chapter 6 (Thu Nov 5): Chapter 9, Files and Exceptions, and CSV Data with Pandas",
      "topics": [
        {
          "id": "lec8-files-exceptions",
          "title": "Files, Exceptions, and Loading CSV Data with Pandas",
          "provisional": "Built from the syllabus and the Canvas module overview only: the Week 6 lecture notebook is not held (the Learning Vault sync for this course is stale as of Oct 8, 2026), and the question pool is below the format minimum of a quiz plus three retest rounds. Treat lesson wording as the syllabus's framing, not the lecture's.",
          "pieces": [
            {
              "id": "text-files",
              "name": "Working with text files",
              "fn": "Programs read and write text files line by line or whole, and the with statement guarantees the file is closed when the block ends.",
              "predict": "Why does the course insist on the with statement for file work?"
            },
            {
              "id": "exception-handling",
              "name": "Exception handling",
              "fn": "try/except runs risky code and handles named exceptions instead of crashing; raising signals errors of your own.",
              "predict": "What happens to the rest of a try suite when its second line raises the exception the except names?"
            },
            {
              "id": "csv-pandas",
              "name": "CSV data with Pandas (diamonds pattern)",
              "fn": "Pandas loads a CSV file into a DataFrame in one call; Exercise 9.16 analyzes the diamonds dataset modeled on the Titanic walkthrough in Section 9.12.2.",
              "predict": "What does read_csv hand you, and why does the whole course converge on that answer?"
            }
          ],
          "lesson": [
            {
              "title": "Working with text files",
              "body": "Chapter 9 moves data out of the notebook: **text files** are opened, read (whole, or line by line), written, and closed. The **with statement** is the required pattern: it opens the file for the block and **closes it automatically** when the block exits, even if an error occurs inside. The chapter also covers JSON serialization, the text format Chapter 9 pairs with files for structured data.",
              "workedExample": {
                "title": "The with pattern",
                "body": "```\nwith open(\"grades.txt\") as file:\n    contents = file.read()\n```\nWhen the block ends, the file is closed, guaranteed. No separate close call to forget."
              }
            },
            {
              "title": "Exception handling",
              "body": "**Exception handling** separates the code that might fail from the code that responds: the **try** suite runs the risky statements; if one raises an exception the try names, the matching **except** suite handles it and the program continues instead of crashing with a traceback. Code can also **raise** its own exceptions to signal invalid states. This is the grown-up version of Chapter 2's tracebacks: same exceptions, now caught and managed.",
              "workedExample": {
                "title": "try and except",
                "body": "```\ntry:\n    value = int(text)\nexcept ValueError:\n    value = 0\n```\nA non-numeric text raises ValueError inside int; the except supplies the fallback instead of ending the program."
              }
            },
            {
              "title": "CSV data with Pandas (diamonds pattern)",
              "body": "The chapter's data science payoff: **Pandas loads CSV files into DataFrames** with read_csv, after which the wrangling and analysis from Lectures 4 and 5 apply. Exercise 9.16 works the **diamonds.csv** dataset, and its LabAssist note points at the **Titanic Disaster dataset walkthrough in Section 9.12.2** as the model: same load, describe, select, and summarize moves on a new dataset.",
              "workedExample": {
                "title": "One call to a DataFrame",
                "body": "```\nimport pandas as pd\ndiamonds = pd.read_csv(\"diamonds.csv\")\n```\nThe file's header row becomes the column names; every later operation is DataFrame work."
              }
            }
          ],
          "examples": [
            {
              "title": "Modeling on Titanic (Exercise 9.16)",
              "scenario": "Exercise 9.16 (diamonds.csv) is your first full CSV analysis. You have never seen the diamonds code. Per the LabAssist note, where is your template?",
              "answer": "Section 9.12.2's Titanic Disaster dataset code: model the diamonds analysis on those snippets. The dataset changes; the load-inspect-select-summarize sequence is the same, which is the skill being transferred.",
              "piece": "csv-pandas",
              "principle": "labassist-modeling"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Trace the handler",
              "prompt": "Trace what value holds after this code, when text is \"abc\":\n\n```\ntry:\n    value = int(text)\nexcept ValueError:\n    value = -1\n```",
              "solution": "value is -1. int(\"abc\") raises ValueError; the try suite stops at that line and the except suite supplies the fallback. The program never crashes."
            },
            {
              "rung": "full",
              "title": "Load a CSV",
              "prompt": "Write the two lines (import plus call) that load the file sales.csv into a DataFrame named sales.",
              "solution": "```\nimport pandas as pd\nsales = pd.read_csv(\"sales.csv\")\n```"
            }
          ],
          "questions": [
            {
              "id": "py-ch9-q01",
              "type": "mc",
              "prompt": "What does the with statement guarantee in file processing?",
              "options": [
                "The file is opened in write mode",
                "The file is closed when the block exits, even if an error occurs inside",
                "The file's contents are validated",
                "The file is backed up before changes"
              ],
              "answer": 1,
              "principle": "with-statement",
              "difficulty": 1,
              "feedback": {
                "step": "Resource guarantee step.",
                "why": "with manages the resource's lifetime: entry opens, exit closes, unconditionally. That guarantee is why the pattern is mandatory in the chapter.",
                "cue": "with is a promise about cleanup: whatever happens inside, the file closes."
              }
            },
            {
              "id": "py-ch9-q02",
              "type": "mc",
              "prompt": "When a statement inside a try suite raises the exception its except clause names, what happens?",
              "options": [
                "The whole program ends with a traceback",
                "The rest of the try suite is skipped and the except suite runs",
                "The statement is retried once automatically",
                "The exception is ignored and execution continues at the next line"
              ],
              "answer": 1,
              "principle": "try-except-flow",
              "difficulty": 1,
              "feedback": {
                "step": "Control flow step.",
                "why": "The exception transfers control out of the try suite at the failing line, into the matching except. Lines after the failure in the try never run.",
                "cue": "An exception is a jump: from the failing line straight to the handler."
              }
            },
            {
              "id": "py-ch9-q03",
              "type": "production",
              "prompt": "Write try/except code that converts the string `text` to an integer in the variable `number`, using 0 as the fallback when the conversion fails with a ValueError.",
              "solution": "```\ntry:\n    number = int(text)\nexcept ValueError:\n    number = 0\n```",
              "principle": "try-except-build",
              "difficulty": 2,
              "feedback": {
                "step": "Construction step.",
                "why": "The risky conversion goes in try; the named exception, ValueError, gets the fallback assignment in except. Other exceptions are not caught, by design.",
                "cue": "Risky line in try, named failure in except, fallback in the handler."
              }
            },
            {
              "id": "py-ch9-q04",
              "type": "mc",
              "prompt": "What does `pd.read_csv(\"diamonds.csv\")` return?",
              "options": [
                "A list of strings, one per line",
                "A DataFrame whose columns come from the file's header row",
                "A NumPy array of floats",
                "A dictionary of column lists"
              ],
              "answer": 1,
              "principle": "read-csv",
              "difficulty": 1,
              "feedback": {
                "step": "Return type step.",
                "why": "read_csv parses the CSV into the course's central structure, a DataFrame, using the header row as column names, ready for the Section 9.12.2 style analysis.",
                "cue": "CSV in, DataFrame out: that one conversion is Chapter 9's bridge to analysis."
              }
            },
            {
              "id": "py-ch9-q05",
              "type": "mc",
              "prompt": "Per its LabAssist note, Exercise 9.16 (diamonds.csv) should be modeled on:",
              "options": [
                "The Chapter 5 Matplotlib code",
                "The Titanic Disaster dataset snippets in Section 9.12.2",
                "Exercise 7.23's DataFrame construction",
                "The Jupyter Markdown reference"
              ],
              "answer": 1,
              "principle": "labassist-modeling",
              "difficulty": 2,
              "feedback": {
                "step": "LabAssist reading step.",
                "why": "The note names Section 9.12.2's Titanic walkthrough as the model, the same transfer pattern as the earlier modeling notes: same moves, new dataset.",
                "cue": "A familiar walkthrough on a new dataset is the transfer this course keeps training."
              }
            },
            {
              "id": "py-ch9-q06",
              "type": "mc",
              "prompt": "Chapter 9 pairs files with JSON serialization. What is JSON in this context?",
              "options": [
                "A binary database format",
                "A text format for representing structured data that files can store and programs can exchange",
                "A Python-only object dump that no other language reads",
                "A compression scheme for CSV files"
              ],
              "answer": 1,
              "principle": "json-intro",
              "difficulty": 2,
              "feedback": {
                "step": "Format purpose step.",
                "why": "JSON is a text based, language independent way to write structured data, so files holding it can be read by Python and by other tools, unlike Python specific pickling.",
                "cue": "Text, structured, exchangeable: JSON's three defining properties."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lec9",
      "title": "Chapter 6 (Thu Nov 5): Chapter 10, Object-Oriented Programming (Selections)",
      "topics": [
        {
          "id": "lec9-oop",
          "title": "Classes, Read-Only Properties, and Duck Typing",
          "provisional": "Built from the syllabus and the Canvas module overview only: the Week 6 lecture notebook is not held (the Learning Vault sync for this course is stale as of Oct 8, 2026), and the question pool is below the format minimum of a quiz plus three retest rounds. Treat lesson wording as the syllabus's framing, not the lecture's.",
          "pieces": [
            {
              "id": "custom-classes",
              "name": "Custom classes and objects",
              "fn": "A class defines a new type: data attributes describe state, methods define behavior, and objects are instances created from the class.",
              "predict": "What does a class definition give you that a dictionary of the same data does not?"
            },
            {
              "id": "readonly-properties",
              "name": "Read-only properties (Account pattern)",
              "fn": "A property exposes an attribute through a getter; with no setter, assignment from outside is refused, making the attribute read-only.",
              "predict": "How can an Account let you read its balance but forbid balance = 1000000 from outside?"
            },
            {
              "id": "inheritance-duck-typing",
              "name": "Inheritance and duck typing",
              "fn": "A subclass inherits and extends a base class; duck typing means code uses an object's methods without checking its class, so any object with the right methods works.",
              "predict": "Two unrelated classes both define earnings(). What lets one loop total both without type checks?"
            }
          ],
          "lesson": [
            {
              "title": "Custom classes and objects",
              "body": "Chapter 10 (sections 10.1 to 10.4, 10.7 to 10.9, and 10.17 per the syllabus) introduces **object-oriented programming**: a **class** bundles the data (**attributes**) and the operations (**methods**) for a kind of thing, and each **object** created from it is an independent instance with its own attribute values. The Time class in Section 10.4 is the chapter's running model.",
              "workedExample": {
                "title": "Class as a type factory",
                "body": "A class definition is a blueprint: it fixes what every instance holds and what every instance can do. Two Account objects share the class's methods but keep separate balances."
              }
            },
            {
              "title": "Read-only properties (Account pattern)",
              "body": "A **property** lets a class control access to its data: the **getter** runs when the attribute is read. Exercise 10.2 builds an **Account class with read-only properties**, modeling the getter syntax on Section 10.4.2's Time class: define the getter, offer **no setter**, and outside code can read the value but cannot assign to it, so the object's invariants stay under the class's control.",
              "workedExample": {
                "title": "Getter without setter",
                "body": "Reading account.balance invokes the property's getter and returns the private value. Assigning account.balance = 5 raises an error, because a property with no setter refuses assignment. That refusal is the feature."
              }
            },
            {
              "title": "Inheritance and duck typing",
              "body": "**Inheritance** lets a new class start from an existing one and add or override behavior, the CommissionEmployee to SalariedEmployee relationship Exercise 10.5 uses (its LabAssist note says the new class can mimic much of the model's syntax and code). **Duck typing** is Python's looser contract: code that calls an object's method does not check the object's class first; if it walks like a duck and quacks like a duck, it is treated as a duck. **Polymorphism** is the payoff: one call site, many classes, each supplying its own version of the method.",
              "workedExample": {
                "title": "One loop, many classes",
                "body": "A loop calling earnings() on a mixed list of employee objects works for every class that defines earnings(), related by inheritance or not. The method's presence is the only contract."
              }
            }
          ],
          "examples": [
            {
              "title": "Mimic the model (Exercise 10.5)",
              "scenario": "Exercise 10.5 asks for a SalariedEmployee class and you are staring at a blank cell. What does the LabAssist note tell you to do?",
              "answer": "Mimic the syntax and code of the CommissionEmployee class given in the chapter. The new class follows the model's structure, changing what salaried pay changes. Modeling on provided code is this course's recurring LabAssist move, here applied to class definitions.",
              "piece": "inheritance-duck-typing",
              "principle": "labassist-modeling"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Read the refusal",
              "prompt": "An Account class defines balance as a property with only a getter. Predict what `account.balance` prints and what `account.balance = 100` does.",
              "solution": "Reading prints the stored balance, because the getter runs. Assigning raises an AttributeError: a property without a setter is read-only from outside, which is exactly the protection Exercise 10.2 is built to demonstrate."
            },
            {
              "rung": "full",
              "title": "Duck typing in one sentence",
              "prompt": "State, in one sentence, why a function that calls obj.earnings() works for two unrelated employee classes.",
              "solution": "Because Python resolves the method on whatever object it receives at call time (duck typing), the function needs only that each object provides an earnings method; the classes' ancestry is irrelevant."
            }
          ],
          "questions": [
            {
              "id": "py-ch10-q01",
              "type": "mc",
              "prompt": "In a class definition, attributes and methods play which roles?",
              "options": [
                "Attributes are the behavior; methods are the stored data",
                "Attributes hold the object's state (data); methods define its behavior (operations)",
                "Both hold data; the difference is naming",
                "Attributes belong to the class only; methods belong to objects only"
              ],
              "answer": 1,
              "principle": "class-anatomy",
              "difficulty": 1,
              "feedback": {
                "step": "Anatomy step.",
                "why": "State vs behavior is the class split: attributes store what an object is, methods define what it does. Each instance carries its own attribute values.",
                "cue": "Data in attributes, actions in methods: every class question sorts parts into those two bins."
              }
            },
            {
              "id": "py-ch10-q02",
              "type": "mc",
              "prompt": "What makes a property read-only, in the Exercise 10.2 Account pattern?",
              "options": [
                "Naming the attribute with a leading underscore",
                "Defining a getter and providing no setter, so outside assignment is refused",
                "Making the class inherit from a built-in",
                "Storing the value in a tuple"
              ],
              "answer": 1,
              "principle": "readonly-properties",
              "difficulty": 2,
              "feedback": {
                "step": "Access control step.",
                "why": "The property mechanism enforces it: reads go through the getter (modeled on the Time class in Section 10.4.2), and with no setter defined, assignment raises an error. An underscore is only a convention and stops nothing.",
                "cue": "Convention suggests; the missing setter enforces. Only the mechanism actually refuses the assignment."
              }
            },
            {
              "id": "py-ch10-q03",
              "type": "production",
              "prompt": "Explain duck typing in one or two sentences, using a loop that totals pay for different kinds of employees.",
              "solution": "Duck typing means code uses an object through the methods it provides, without checking the object's class: a loop can call earnings() on CommissionEmployee and SalariedEmployee objects alike, and each object's own earnings method runs, as long as both classes define one.",
              "principle": "duck-typing",
              "difficulty": 2,
              "feedback": {
                "step": "Concept step.",
                "why": "The contract is behavioral, not genealogical: possessing the method is enough. Polymorphism is the result, different classes responding to the same call in their own ways.",
                "cue": "If it has the method, it plays the role: that is the duck test."
              }
            },
            {
              "id": "py-ch10-q04",
              "type": "mc",
              "prompt": "Per its LabAssist note, how should you build the SalariedEmployee class in Exercise 10.5?",
              "options": [
                "From scratch, avoiding the chapter's examples",
                "Mimic the syntax and code of the given CommissionEmployee class",
                "Copy a genAI's class definition and test it",
                "Inherit from the Account class of Exercise 10.2"
              ],
              "answer": 1,
              "principle": "labassist-modeling",
              "difficulty": 1,
              "feedback": {
                "step": "LabAssist reading step.",
                "why": "The note explicitly directs students to mimic CommissionEmployee's syntax and code for SalariedEmployee. It is the course's modeling pattern applied to OOP.",
                "cue": "When a LabAssist note names a model, the model's structure is the starting point, not a blank page."
              }
            },
            {
              "id": "py-ch10-q05",
              "type": "mc",
              "prompt": "What does a subclass get from inheritance?",
              "options": [
                "A copy of the base class's current objects",
                "The base class's attributes and methods as a starting point it can extend or override",
                "Automatic read-only properties",
                "Immunity from exceptions"
              ],
              "answer": 1,
              "principle": "inheritance",
              "difficulty": 1,
              "feedback": {
                "step": "Inheritance semantics step.",
                "why": "Inheritance reuses a base class's definition: the subclass starts with its state and behavior and specializes from there, which is how the employee classes in Exercise 10.5 relate.",
                "cue": "Inheritance is starting from, not copying: extend and override from a working base."
              }
            },
            {
              "id": "py-ch10-q06",
              "type": "mc",
              "prompt": "Why does the course restrict Chapter 10 to selected sections (10.1 to 10.4, 10.7 to 10.9, 10.17)?",
              "options": [
                "The other sections are not in the U.S. edition",
                "The syllabus names those selections as the workshop's coverage; lectures and labs are built on them",
                "The remaining sections are reserved for the MFE workshop only",
                "Chapter 10 has only those sections"
              ],
              "answer": 1,
              "principle": "syllabus-scope",
              "difficulty": 2,
              "feedback": {
                "step": "Scope step.",
                "why": "The Lecture 6 syllabus entry lists the selections explicitly, and the Module 6 reading assignment repeats them. Coverage questions in this workshop are answered by the syllabus's selection, not the book's table of contents.",
                "cue": "When a syllabus names sections, that list defines the course, whatever the book contains."
              }
            }
          ]
        }
      ]
    },
    {
      "id": "lec10",
      "title": "Chapter 7 (Thu Nov 12): Generative and Agentic AI Programming",
      "topics": [
        {
          "id": "lec10-genai-agents",
          "title": "OpenAI Python SDK, Agents SDK, and Codex",
          "provisional": "The syllabus marks this lecture as under development, with no reading assignment and optional labs (the OpenAI APIs are paid services). Content here is the syllabus's and Module 7 overview's framing only, and the question pool is below the format minimum. No lecture materials for this week are held.",
          "pieces": [
            {
              "id": "openai-sdk",
              "name": "Programming with the OpenAI Python SDK",
              "fn": "The SDK lets Python programs call OpenAI's models as an API: send prompts, receive generated responses, build on them in code.",
              "predict": "What changes when a model becomes something your program calls, instead of a chat window you type into?"
            },
            {
              "id": "agents-sdk",
              "name": "Agentic programming with the Agents SDK",
              "fn": "The Agents SDK structures programs where model-driven agents take steps, use tools, and pursue a task rather than answer once.",
              "predict": "How is an agent different from a single prompt and response?"
            },
            {
              "id": "codex-vibe",
              "name": "Codex, vibe coding, and proving AI code",
              "fn": "Codex generates and edits code from direction (vibe coding); the course's standing rule applies doubly: you cannot prove AI code correct unless you understand it.",
              "predict": "Deitel's syllabus argues Python skill is what lets you judge AI-generated code. State his core claim in one line."
            }
          ],
          "lesson": [
            {
              "title": "Programming with the OpenAI Python SDK",
              "body": "Lecture 7 replaces the traditional machine learning lecture (the cohort is concurrently in its MSBA machine learning class) with **generative AI programming**: demos of the **OpenAI Python SDK**, where a Python program sends requests to OpenAI's models and works with the responses programmatically. The syllabus notes the APIs are **paid services**, and this week's lab exercises are **optional**, costing a few dollars for those who experiment.",
              "workedExample": {
                "title": "Model as a callable service",
                "body": "The shift from the whole workshop lands here: after six lectures of writing every line yourself, the model becomes a component your code calls. The programming skills from Chapters 2 to 10 are what let you build around it and check what it returns."
              }
            },
            {
              "title": "Agentic programming with the Agents SDK",
              "body": "The **OpenAI Agents SDK** is demoed for **agentic AI**: programs where an agent works through a task in steps, deciding actions and using tools, rather than returning a single completion. The Module 7 overview names the trio for the week: generative AI programming with the OpenAI APIs, agent programming with the Agents SDK, and vibe coding with Codex.",
              "workedExample": {
                "title": "Answer vs agent",
                "body": "A single API call answers once. An agent loops: it plans a step, acts, observes the result, and continues until the task is done. The SDK supplies the scaffolding for that loop."
              }
            },
            {
              "title": "Codex, vibe coding, and proving AI code",
              "body": "**Codex** is demoed for **vibe coding and agentic engineering**: directing an AI to generate and modify code. The syllabus's GenAI section is the lecture's frame and the workshop's thesis: genAIs **hallucinate**, produce code that may not run or may be wrong, and **you cannot prove code correct unless you understand it**. That is why the AI policy all term forbade AI from solving exercises: the Python skill built in Lectures 1 to 6 is precisely the ability this lecture's tools demand.",
              "workedExample": {
                "title": "The course's closing argument",
                "body": "From the syllabus: your Python skills are critical for evaluating and proving code written by genAIs. Lecture 7's tools raise the stakes on that claim rather than retiring it."
              }
            }
          ],
          "examples": [
            {
              "title": "Why the ML lecture moved",
              "scenario": "Earlier years, Lecture 7 taught machine learning with scikit-learn. Why does this year's syllabus replace it with generative and agentic AI?",
              "answer": "Because by Lecture 7 the cohort is already in its MSBA machine learning class, so the workshop's final slot is worth more spent on generative and agentic AI programming: the OpenAI Python SDK, the Agents SDK, and Codex.",
              "piece": "openai-sdk",
              "principle": "course-design"
            }
          ],
          "practice": [
            {
              "rung": "worked",
              "title": "Judge the claim",
              "prompt": "A classmate says: 'Now that Codex writes the code, the Chapters 2 to 10 work was optional.' Answer with the syllabus's argument.",
              "solution": "The syllabus argues the opposite: genAIs hallucinate and produce code that may not run or may be subtly wrong, and you cannot prove code correct unless you understand it. The earlier chapters are what make the judgment possible."
            },
            {
              "rung": "full",
              "title": "Optional means optional",
              "prompt": "State the lab status for Lecture 7 week and why, per the syllabus.",
              "solution": "The lab exercises are optional, because the OpenAI APIs and Agents SDK are paid services; experimenting costs a few dollars for those who choose to."
            }
          ],
          "questions": [
            {
              "id": "py-ch11-q01",
              "type": "mc",
              "prompt": "What is new in Lecture 7 compared with earlier years' final lecture?",
              "options": [
                "It covers scikit-learn machine learning in more depth",
                "It replaces machine learning with generative and agentic AI: the OpenAI Python SDK, the Agents SDK, and Codex",
                "It reviews Chapters 2 to 10 for a final exam",
                "It introduces Pandas for the first time"
              ],
              "answer": 1,
              "principle": "course-design",
              "difficulty": 1,
              "feedback": {
                "step": "Syllabus change step.",
                "why": "The syllabus states the change directly: the cohort is already in its MSBA machine learning class by then, so the final lecture covers generative and agentic AI programming instead.",
                "cue": "A syllabus that announces a change and its reason is testing whether you registered both."
              }
            },
            {
              "id": "py-ch11-q02",
              "type": "mc",
              "prompt": "Why are Lecture 7's lab exercises optional?",
              "options": [
                "They are too difficult for the cohort",
                "The OpenAI APIs and Agents SDK are paid services, so experimenting costs money",
                "Bruin Learn cannot accept the file format",
                "The lecture was not recorded"
              ],
              "answer": 1,
              "principle": "optional-labs",
              "difficulty": 1,
              "feedback": {
                "step": "Logistics step.",
                "why": "The syllabus gives the reason plainly: paid APIs. Optional here means financially optional, not unimportant.",
                "cue": "Optional with a stated cost reason is different from optional because peripheral."
              }
            },
            {
              "id": "py-ch11-q03",
              "type": "mc",
              "prompt": "Which statement is the syllabus's core claim about genAI-written code?",
              "options": [
                "AI code can be trusted once it runs without errors",
                "You cannot prove code correct unless you understand it, and genAIs hallucinate, so Python skill is what makes their output judgeable",
                "AI code is always wrong and should never be used",
                "Prompt engineering replaces the need to read code"
              ],
              "answer": 1,
              "principle": "prove-ai-code",
              "difficulty": 2,
              "feedback": {
                "step": "Thesis step.",
                "why": "Running is not proving: code can run and still compute the wrong thing. The syllabus's position is that understanding is the prerequisite for trusting, which justified the term's AI policy.",
                "cue": "Runs is not right: the gap between them is exactly what understanding fills."
              }
            },
            {
              "id": "py-ch11-q04",
              "type": "mc",
              "prompt": "How does an agent, in the Agents SDK sense, differ from a single model call?",
              "options": [
                "It uses a larger model",
                "It works through a task in steps, acting and observing, rather than returning one response",
                "It never calls tools",
                "It is just a longer prompt"
              ],
              "answer": 1,
              "principle": "agents-concept",
              "difficulty": 2,
              "feedback": {
                "step": "Concept step.",
                "why": "Agency is the loop: plan, act, observe, repeat toward a goal. A single completion has no loop and no actions in the world.",
                "cue": "One response vs a working loop: the loop is the definition."
              }
            },
            {
              "id": "py-ch11-q05",
              "type": "production",
              "prompt": "In one or two sentences, state why this workshop's AI policy forbade AI from solving the weekly exercises, using the syllabus's reasoning.",
              "solution": "Because the exercises exist to build the Python understanding that lets you judge code, including AI-generated code: genAIs hallucinate and produce code that may not run or may be wrong, and you cannot prove such code correct, or even evaluate it, without the skill the exercises were building.",
              "principle": "prove-ai-code",
              "difficulty": 2,
              "feedback": {
                "step": "Policy rationale step.",
                "why": "The ban was never about the tools being useless; it protected the formation of the very judgment Lecture 7's tools require. Research and learning uses were always allowed.",
                "cue": "A policy's reason outlasts the policy: skill first is what makes the tools safe to use."
              }
            }
          ]
        }
      ]
    }
  ]
};
