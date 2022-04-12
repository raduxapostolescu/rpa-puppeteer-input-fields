# Automate account creation

This is an example on how to automate an account creation when having data in the form of an `.xlsx` file.

<br>
<br>

Assumptions:
1. `.xlsx` table header will be the same
2. you will convert data form the table to `JSON`

<br>

Tools:
1. [Puppeteer](https://www.npmjs.com/package/puppeteer) headless browser.
2. node.js 

In this example you will allways have to name the `JSON` file the same. This can be bypassed with a bit more work. It can be done such that on file upload (on a company owned website) the file will automatically be transformed into a `JSON` and keep it's own naming convention. 

This can be automated even further by running setting up a `cron` job to start whenever a SNOW ticket has all the required info (etc.).
   