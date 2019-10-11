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
* validate user input where applicaple
* work asynchronously
* pass relevant tests before production (unit tests, build tests, mock tests, etc.)
* log errors to files in a standardized way
* implement a distributed system