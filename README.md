# Guessing game

:warning: **Please note that you mustn't open PRs that contains the answers to this repo!**

However, PRs with the fixes or proposals are welcomed!

## Task
Your task is to implement `GuessingGame` class

#### Methods:

##### `setRange(min, max)`
this method accepts min and max value of range of number to guess

##### `guess()`
this method returns solution candidate (you make an assumption based on range and previous assumptions)

##### `lower()`
this method is called if prev call of `guess()` returned number which is greater than answer

##### `greater()`
this method is called if prev call of `guess()` returned number which is lower than answer

Your implementation should use [binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm) under the hood to pass all tests

You can find even more examples in `test.js`

**Active usage of [documentation](https://developer.mozilla.org/en-US/) is strongly recommended!**

## Prepare and test
1. Install Node.js
2. Fork this repository: https://github.com/rolling-scopes-school/guessing-game/
3. Clone your newly created repo: `https://github.com/<%your_github_username%>/guessing-game/`
4. Go to folder `guessing-game`
5. To install all dependencies use `npm install`
6. Read the task description. Try to understand the idea. You can see the tests prepared if you don't understand it.
7. Write your code in `src/index.js`.

    Uncomment methods setRange, guess, lower, greater.

    Remove the throwing error line from constructor:
    ```javascript
        throw new Error('Not implemented'); 
    ```
    Implement the metods by any way and verify your solution by running tests until the failed test become passed (green).
8. Save the solution and run `npm test` in command line.
9. You will see the number of passing and pending tests.

## Submit to [rs app](https://app.rs.school/)
1. Commit and push your solutions to your fork
2. Open rs app and login
3. Go to submit task page
4. Select your task (JS: Guessing-game)
5. Press submit button and enjoy

## Notes
* We recommend you to use nodejs of version 22. If you using any of features that does not supported by node `v22`, score won't be submitted.
* Installing nodejs `v22` is optional, you can run jobs using your version and not use methods that are not in nodejs `v22`.
* Please be sure that each of your test in limit of 30sec.
* You will get 0 (zero) if you have any eslint's errors or warnings.

## FAQ
**Question:** I use Windows machine and have received a lot of errors like "Expected linebreaks to be 'LF' but found 'CRLF'". How to handle it?

**Answer**:
- First, you need to install Gitbash properly: you need to choose option "Checkout as-is, commit as-is" in section "Configuring the line ending conversions". It'll let you download repos with line endings set "as-is" as well as commit. In other words, not to change them at all, because by default it converts them.
- Second, install `editorconfig` plugin to your editor. For VS Code you can find it here:
https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

  I'll let you apply some rules when you saving your files in the repo. This plugin will use config-file `.editorconfig` that you can see in the root folder. It lets you save the file with needed line endings, trim whitespaces, etc.
- Finally, you need to apply linter's autofix feature in order to fix all linebreaks that was already changed to "CLRF":
```
$ npm run lint -- --fix
``` 

**Question:** Execution of tests "hangs" on one of them and does not display the result. What to do?<br>
**Answer**: Check your solution for an infinite loop, fix it, and rerun the test.

**Question:** The solution in the local repository succeeds and all tests are "green", but in the application some tests don't count. What to do?<br>
**Answer**: [Update your repository fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork), update the local repository from the fork, run tests and fix your solution. After fixing, resubmit your solution for testing.

___
The task based on https://github.com/rolling-scopes-school/js-assignments.
