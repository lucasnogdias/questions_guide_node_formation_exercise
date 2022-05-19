# Guia de Perguntas

Small project built on the sixth module of the [Node.js Class](https://www.udemy.com/course/formacao-nodejs/) by Victor Lima.

It serves a small web application where you ask questions or answer to questions that have been posted by someone else.

## Stack and Dependencies

- Node.js (v26.14.2)
- npm (v8.5.0)
- Nodemon
- Express
- MySQL
- Sequelize
- EJS
- Bootstrap (v4.5.3)

All other dependencies can be found on our `packages.json` file.

## Installing and Running the project

### Install
If you don't already have, install [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) (npm should come bundled with Node.js so you probably won't have to worry about this), [Nodemon](https://www.npmjs.com/package/nodemon) and [MySQL](https://www.mysql.com/).
After installing those base dependencies you can clone this repository to a local folder on your computer (you'll need to install [git](https://git-scm.com/) to do this).
Once you have the basic dependencies and the project repository cloned on your development machine, go to the root folder of the project and run `npm install` to get the remaining dependencies that are managed by *npm*.
We have one last dependency that is not being handled by npm, which is Bootstrap. Download the compiled [Bootstrap CSS and JS](https://getbootstrap.com/docs/4.5/getting-started/download/) and unzip the css files to our `public/css` folder, and the js files to our `public/js` folder.

### Running the project
First we'll have to create a new database called `guiaPerguntas` on MySQL. This is the database we'll use for the project. 
With the database created open your `/database/database.js` file and change the value of the parameter `[DB_PASSWORD_HERE]` to your MySQL root password on `new Sequelize` function. Do not commit your DB password to the repository.

With the DB setup we can run the project. Go to the root folder of the project and run `nodemon index.js` and the server should start running. If all goes well you'll see a message on your console that says `"App running on port 8080"`. Open your browser of choice and navigate to `localhost:8080` to start using the app.

