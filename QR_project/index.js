import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([{
    message: "Type in your URL: ",
    name: "URL",
  },
  ])
  .then((answers) => {
    const url = answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); // This will create a QR code image file named "qr_img.png" with the content of the URL.
    //PIPE is used to write the QR code image data to a file stream.
    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  // To run this code, make sure you have the 'inquirer', 'qr-image', and 'fs' modules installed. You can install them using npm:
  // npm install inquirer qr-image fs
  // WHAT TO WRITE IN TERMINAL TO RUN THE CODE:
  // node index.js
  // After running the code, it will prompt you to enter a URL. Once you enter the URL, it will generate a QR code image (qr_img.png) and save the URL in a text file (URL.txt).