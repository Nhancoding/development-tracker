# development-tracker

## Description

As a developer myself, I understand the importance of having a streamlined process for managing projects and associated contracts. I wanted to create a tool that would make it easy for developers to create projects and manage contracts associated with those projects, in order to streamline their workflows and make their lives easier.

I built this project in order to provide developers with an easy-to-use tool for managing projects and contracts. By creating a restfulAPI, I aimed to make it possible for developers to integrate this tool into their existing workflows and systems, in order to maximize efficiency and reduce the amount of time spent on administrative tasks.

This project solves the problem of project and contract management for developers. By providing a simple, intuitive interface for creating and managing projects, and attaching contracts to those projects, developers can reduce the amount of time and effort spent on administrative tasks, and focus more on their core development work.

During the development of this project, I learned a lot about restfulAPI design and development, as well as project and contract management best practices. I also gained experience working with different development tools and technologies, and learned how to build a scalable and extensible system that can be easily customized and integrated into existing workflows.


## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

First we start by downloading all of the packages we will be using. For our projct we use npm install express, sequalize, bcrypt, connect-session, dotenv, mysql2. To get the mysql environment runing, you want type "mysql -uroot -p" then enter your password. You will need to run this to drop the database everytime you start a new server. A new technology npm packages that we chose is cloudinary which allows a user to upload images. Since this is an npm package we simply npm i cloudinary. Additinal steps with cloudinary requires a user to create an account on their website. Then you must copy over the configuration which includes your unique "cloud name, api key, and api secret. Lastly to tie cloudinary to the front end, you must also copy over your widget snippet to the front end of your code.
## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

