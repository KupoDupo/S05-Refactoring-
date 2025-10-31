# Section 5 – Refactoring Code Smells in Practice

This activity is designed to help you practice identifying code smells and applying refactoring patterns to a real codebase in CMPM 121, Game Development Patterns.

## Fowler's Stinky Stanky Code Smells Found

Long Function: setup() does wayyyy too many things. It builds the HTML, adds all the needed elements from the document, and then adds three distinct clicker events. These three categories (and arguably the three different click event listeners) should all be in separate functions since they're all unrelated. This could be fixed with Extract Function.

Duplicate Code: All three event handlers (increment, decrement, reset - the three clicker events discussed above) have almost identical code which we probably don't need to explicitly say three distinct times then. This can also be fixed with Extract Function.

Shotgun Surgery: This is heavily related to Duplicate Code up above but I believe it still counts. Right now, if you want to change how the background changes color (consistently/correctly change) you have to modify all three of the event listeners - that's one logical change requiring editing in multiple places across the code. Fixing the Duplicate Code issue up above would fix this too. This, too, can be fixed by Extract Function.

Primitive Obsession/Global Data: These aren't the same code smell but their stanks are coming from the same bit of code - the global variable c and a and b and h. It's relying excessively on primitive data types (like built in data types) rather than making your own class or something like that. This could both be fixed by Replace Primitive with Object.

## Refactoring Patterns Applied and How They Improve the Code

Extract Function was applied to the setup() function and it fixed the Long Function, Duplicate Code, and Shotgun Surgery issues this code had. By splitting setup() into multiple functions the code become more readable, modular, and is more modifiable to any future programmers using this code.

Replace Primitive with Object was applied to global variables c, a, b, and h to fix the Global Data and Primitive Obsession code smells. This makes the data in this code more secure (since it takes what used to be global data and encapsulates it into its own class) and helps the code be more usable down the line and understandable - since key variables/data points are stored in their own class.

Note to self: do checks for possible NULLS since its just good practice.
