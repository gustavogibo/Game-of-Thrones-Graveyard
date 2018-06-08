# Game of Thrones Graveyard 

![image](./readme/screenshot.png)

In the Game of Thrones, you die... or you die. Choose the fate of the unfortunate (or not) characters of this amazing TV show!

## Getting Started :floppy_disk:

### Prerequisites :open_file_folder:
Make sure you have node.js installed on your computer! You can download it via the installer on the official site
```
https://nodejs.org/en/download/
```

In your terminal navigate to your specified folder, type the following to install all required packages listed in package.json:
```
npm install
```

From the db folder. Run the schema.sql and seeds.sql in your SQL tool of choice (i.e MySQL).

Update the following information "<>" in connection.js from the config folder.
```
connection = mysql.createConnection({
    host: "<enter host>",
    port: <enter port numbers>,
    user: "<enter user>",
    password: "<enter password>",

    database: "gameofthrones"
});
```

Start the server by writing in terminal:
```
node server.js
```

The deployed version of this app is hosted on heroku [here](https://stormy-island-41089.herokuapp.com/)

To view this app locally on your machine type `node server.js` into your terminal to intialize the app. This will set up a local server on your computer. Navigate to the server in your browser by visiting `http://localhost:8080/`

To end the sever connection simply hold down `ctrl + c` inside of your terminal.

## Built With
* HTML5 & CSS3
* [Bootstrap](https://getbootstrap.com/) - CSS framework
* [JQuery](https://jquery.com/)
* [Javascript](https://www.javascript.com/) - programming language
* [Node.js](https://nodejs.org/en/) - javascript runtime
* [Express.js](https://expressjs.com/) - routing framework
* [MySQL](https://www.mysql.com/) - Database

### NPM Packages
* [Express](https://www.npmjs.com/package/express)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Path](https://www.npmjs.com/package/path)
* [mysql](https://www.npmjs.com/package/mysql)

## Author :key:
* **Gustavo Gibo** - [gustavogibo](https://github.com/gustavogibo)