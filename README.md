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


When you enter this application, the first thing you will see on the home page are login and sign up prompt. For new users, you will need to create an account, but returning users can simply login. To create an account enter your name, email, and password. After you created an account, you will automatically be logged in. Currently you are in the profile page, and for new users there will obviously be no projects yet. To add a project, simply click on the "add new" link under add project header. This will route us to a new page where we can enter our new project's information. Fill out the project name, deadline, and description. Users also have the option to upload an image with their new project. After you have filled out the credentials you can click the submit button. This will route us to the create contracts page. As a developer we understand projects will have many contractors, so here is where you can keep track of the contracts your project have with contractors. Here you can name the contract, enter the description, and add the cost. Once you've submitted the contract, you will be able to continue adding contracts until you are satisfied. When all the contracts are submitted, you can click the "Finished" button. This routes you to your profile page with all of your created projects and contract. By now, you have used majority of the application. From this profile page you can continue to create more projects or log off if you are done.

    ```md
    ![alt text](assets/images/screenshot.png)
    ```
<img width="943" alt="Screenshot_20230216_124314" src="https://user-images.githubusercontent.com/119919710/219314408-df9b59c1-325a-4016-8482-a0586d1ad8d9.png">

## Credits

Andrew Kim: github.com/kiman21
Connor McLaughlin: github.com/ConnorMcLaughlin2022
Nhan Duong: github.com/nhancoding
Tyler Vu: github.com/tvu328

