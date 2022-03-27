# Currency Exhcange

#### By Todd Pangilinan

A website that allows users to check the dollar against global currencies.

## Technologies Used

* NPM
* HTML
* CSS
* JavaScript
* GIT
* Bootstrap
* JQuery
* API

## Description:
Using APIs, this website takes user input to deliver information about exchange rates. Requires a successful API call, using/hiding an API key, and a user interface that allows for user input. I decided to use two different endpoints of the API. The first pulls "pair" data, choosing two currency. USD is fixed within the endpoint, and then the user input from the dropdown is inserted to the endpoint. The other API endpoint pulls the full exchange data, which is used for the manual entry option, where users entry which currency they want to convert to, as well as the "check all" option, where the user's USD amount is converted to all available currencies.

## Setup/Installation Requirements

* If you don't have Git installed on your machine, follow these [instructions.](https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-and-github)
* Via your terminmal, navigate to the directory you want to store my files in.
* Clone my git hub directory by typing or cutting pasting: "git clone https://github.com/pangtodd/exchange_rate.git" into your terminal.
* open files in a code editor of your choice.
* NOTE: this project was created in a Mac environment. If you are setting this up on a different kind of machine, please double check the package.json configurations to make sure it will work with your machine (ie, scripts with multiple actions must have a "&" instead of a ";"). 
* open terminal or bash, and navigate to the root level of the project, enter "npm install".
* this project does require an API key. You will need to also need to do the following:
* go to https://www.exchangerate-api.com/ and get a free key.
* in the project file, make sure there is a .env file (create it if not). In the .env file on line one, type in, "API_KEY=", followed by the API key/token you got from exchangerate-api.com.

## Known Bugs

* As of 3/26/2022, no known bugs
* email pang.todd@gmail.com if you notice any problems or have feedback

## License

[MIT](https://opensource.org/licenses/MIT)
Copyright (c) Todd Pangilinan 

## Contact Information
pang.todd@gmail.com