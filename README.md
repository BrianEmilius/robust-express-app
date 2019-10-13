# Robust ExpressJS Application

This repository is an exploration into what practices are necessary and advisable for running a robust ExpressJS application in production.

[How to contribute](CONTRIBUTING.md)  
[Code of conduct](CODE_OF_CONDUCT.md)  
[List of contributors](CONTRIBUTORS.md)

## What does "robustness" mean?

We usually expect an application that runs in production to have almost 100% uptime and very few bugs. This is a two-sided problem that (a) speaks to the environment in which the application runs such as servers, networks, clients, and (b) is about the quality of code.

In order for an application to be robust it should follow these guidelines.

A robust application should

* fail gracefully
* distinguish between operational errors and programmatical errors
* validate user input where applicable
* work entirely asynchronously
* pass relevant tests before production (unit tests, build tests, UI tests, etc.)
* log errors to files in a standardized way
* implement a distributed system
* use cached responses

### Collaboration

It is not enough to consider the code itself or the environment in which the application is supposed to run. An application is only as robust as the team working on it.

To make collaboration robust, a few choices should be considered.

#### The language

This project is written mainly with TypeScript. This choice allows for fewer mistakes when communication is needed between interfaces.

The build-process of a TypeScript application lets us stage the various processes so we can better catch errors.

#### Code style

Individual code style preferences of the team members are unimportant. A common code style within a team gives everybody a sense of familiarity with the code. It also prevents cluttered PRs on version control platforms such as GitHub.

For this ESLint and Prettier makes good sense.

No code should be committed unless it passes at least the linting parser.

#### Documentation

Documentation is all-important. Code that is not documented should not be allowed to enter the code base.

A well-documented module or function tells the developer

* what the function does,
* what parameters it takes,
* what, if anything, the function returns,
* what errors can be expected, including error codes and their meaning.

This project uses JSDoc for documentation.

#### Peer-reviews

Any pull request should be subject to a peer-review before it is allowed to be merged.

The goal of peer-reviews is not to catch errors, but to spark discussions about feature implementation. Discussions are the basis of growth within a team. If errors are caught during a peer-review that is just added bonus.