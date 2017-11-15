# Northcoders Katas

From the first week after you learn how to do TDD, two katas will be released every Saturday for you to complete during the week.

1. Fork this repository to your own GitHub account because you will be pushing your own solutions to it.

2. Clone your fork of this repository to your local machine and `cd` into it:

  ```
  $ git clone <your fork's URL>
  $ cd part-time-katas-november-2017
  ```

3. Run this command in your terminal:

`$ echo "mocha **/*.spec.js" > .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit`


4. Add Northcoders' version of the repo as a git remote called `upstream`:

  ```
  $ git remote add upstream https://github.com/northcoders/part-time-katas-november-2017.git
  ```

5. Every Saturday we will release new katas. Pull the new data from Northcoders' remote repo.

  ```
  $ git pull upstream master
  ```

6. Once you have today's kata, navigate into its folder and install all its dependecies. You also have access to an npm script to run tests. 

  ```
  $ cd calculateDivisors
  $ npm install
  $ npm test
  ```

7. Work on the kata and commit changes as needed. When you are happy with your solution, push all your changes to your forked repo. If you haven't finished them by the end of the week, feel free to do so later on, but make sure you keep your forked copy up to date. You should push to your fork frequently:

  ```
  $ git push origin master
  ```
