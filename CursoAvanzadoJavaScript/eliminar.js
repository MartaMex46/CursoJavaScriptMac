const fs = require("fs");

fs.readFile("ejemplo.json", "utf-8", (error, archivo) => {
    if(error){
        console.log(error);
    }

    console.log(archivo);
});