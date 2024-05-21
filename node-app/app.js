
const fs = require('fs').promises;
// const { program } = require("commander");

// const randomNummer = Math.floor(Math.random() * 100) + 1;
// console.log("Random nummer: ", randomNummer);

// const orderQuantity = 4;
// const pricePerTumbler = 49;
// const message = "Price of order is: ";

// console.log(message, orderQuantity * pricePerTumbler);


// fs.readFile('blog-post.txt', 'utf-8').then(content => {
//     console.log("current content: ", content)
// }).catch(error => {
//     console.log("Error:", error)
// });

// const newUser = {
//     id: 1,
//     username: "Nero",
//     email: "arman@example.com"
// }

// const filename = "user-db.json";

// fs.writeFile(filename, JSON.stringify(newUser), 'utf-8').then(() => {
//     console.log("User data was updated succesfully")
// }).catch(error => {
//     console.log("Error: ", error)
// })

// const newMessage = "User1: I'm good, so nice to see you again?";

// fs.appendFile("chat.txt", newMessage + "\n").then(() => {
//     console.log("message added to chat log")
// }).catch(error => {
//     console.error(error)
// });

// fs.readFile("new-task.txt", "utf-8").then(content => {
//     console.log(content)
//     return fs.appendFile("tasks.txt", content + "\n" )
// }).catch(error => {
//     console.error(error)
// });

// console.log(process.argv);

// const arg = process.argv.slice(2);
// let start = 0;
// arg.map((item) => {start += parseFloat(item);})
// // const sum = arg.reduce((total, num) => total + parseFloat(num), 0);
// console.log("Sum: ", start);


// program.version('1.0.0').command('greet <firstName> <lastName> <bijNaam>').action((firstName, lastName, bijNaam) => {
//     console.log(`hello, ${firstName} ${lastName}, ${bijNaam}, it's brilliant to see you again!`)
// })

// program.parse(process.arg);

const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question("Please enter your name: ", (name) => {
//     console.log(`hello ${name}!`);
//     rl.close();
// });

const fortunes = [
    "You'll find unexpected joy in little things",
    "A new opportunity will open doors for you",
    "Adventure is just around the corner",
    "Embrace change and good things",
    "Patience will bring you great rewards",
];

// rl.question("Welcome to the fortuneteller. What is your name? ", (name) => {
//     const randomIndex = Math.floor(Math.random() * fortunes.length);
//     const randomFortune = fortunes[randomIndex];

//     console.log(`Hello ${name}, Your fortune today: ${randomFortune}`);

//     rl.close();
// })

const minNumber = 0;
const maxNumber = 100;
const secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

let attempts = 0;

function isValidGuess(guess) {
    return !isNaN(guess)
    && guess >= minNumber
    && guess <= maxNumber;
}
// console.log('Welcome to the Guess the Number game!');
// playGame();

// function playGame() {
//     rl.question(`Guess a number between ${minNumber} and ${maxNumber}: `, (guess) => {
//         const guessNumber = parseInt(guess);
//         attempts++;

//         if(isValidGuess(guessNumber)) {
//             if (guessNumber === secretNumber) {
//                 saveResult(`Game was won in ${attempts}`);
//                 console.log(`Congrats, guessed the right number in ${attempts} attempts!`);
//             } else if (guessNumber <= secretNumber) {
//                 console.log('Try higher ↑↑')
//                 playGame();
//             } else if (guessNumber >= secretNumber) {
//                 console.log("Try lower ↓↓");
//                 playGame();
//             } else {
//                 console.log("That's not a valid number, try again.");
//                 playGame();
//             }
//         }
//     })
// }

// async function saveResult(result) {
//     try {
//         await fs.appendFile('game_results.txt', `${result} attempts\n`);
//         console.log('result has been saved');
//     } catch(error) {
//         console.log("failed to save game results");
//     }
// }


// async function listDirectoryContents(directoryPath) {
//   try {
//     const files = await fs.readdir(directoryPath);
//     console.log("Directory Contents:", files);
//   } catch (err) {
//     console.error("Error reading directory:", err.message);
//   }
// }

// listDirectoryContents("./");

// async function processDictonaryContents(directoryPath)  {
//     try {
//         const files = await fs.readdir(directoryPath);
//         const fileStatsPromises = files.map(async (file) => {
//             const filePath = `${directoryPath}${file}`;
//             const stats = await fs.stat(filePath)

//             return {name: file, stats};
//         });

//         const fileStats = await Promise.all(fileStatsPromises);
//         console.log("Detailed file information:", fileStats);
//     } catch (error) {
//         console.error("Error processing directory contents:", error);
//     }
// }


async function processDictonaryContents(directoryPath)  {
    try {
        const items = await fs.readdir(directoryPath);
        const fileList = [];
        let totalFiles = 0;
        let totalSize = 0;
        let largestFile = {name: "", size: 0};

        const fileStatsPromises = items.map(async (item) => {
            const filePath = `${directoryPath}${item}`;
            const stats = await fs.stat(filePath);
            const isAFile = stats.isFile();
            const size = stats.size;

            if(isAFile) {
                totalFiles ++;
                totalSize += size;
                fileList.push({name: item, size});

                if(stats.size > largestFile.size) {
                    largestFile = {name: item, size};
                }
            }
            return {name: item, size};

        });

        await Promise.all(fileStatsPromises);
        // number of items
        const numberOfItems = items.length;
        console.log("Number of items:", numberOfItems);
        console.log("Number of files:", totalFiles);
        console.log("Total size (files):", totalSize, "bytes");
        console.log("Largest file:", largestFile.name, "Size:", largestFile.size, "bytes");
        console.log("\nFiles:");
        fileList.map(file => {
            console.log(file.name, "Size:", file.size, "bytes");
        })
    } catch (error) {
        console.error("Error processing directory contents:", error);
    }
}

processDictonaryContents("./");

const express = require('express');
const app = express();

// app.get("/", (req, res) => {
//     res.send("this is the user page");
// });

// app.post('/', (req, res) => {
//     res.send(`user created`)
// });

app.get(`/users`, (req, res) => {
    // const userId = req.params.id;
    // Fetch user data based on userId.
    res.send(`User details for ID 7.`);
  });