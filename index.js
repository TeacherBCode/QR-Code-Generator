import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([
        {
            name: "URL",
            type: "input",
            message: "Please enter your link to generate a QR code:",
        },
    ])
    .then((answer) => {
        const url = answer.URL;
        console.log("Site you Entered: " + url);

//To create a QR code Image
        let qr_png = qr.image(url, {type: 'png'});
        qr_png.pipe(fs.createWriteStream("qr_code.png"));

// To savee the Url as Test
        fs.writeFile("URL.txt", url, (err) => {
            if (err) throw err;
            console.log("The URL file has been saved!");
        });
    });
