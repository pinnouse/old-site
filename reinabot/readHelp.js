$.getJSON("https://bitbucket.org/pinnouse/reinabot/raw/HEAD/help.json", (json) => {
    let help = new Map();
    json.categories.forEach(element => {
        let temp = [];
        element.commands.forEach((command, index) => {
            temp[index] = command;
        });
        help.set(element.category, temp);
    });
    
    var prefix = "!";
    help.forEach((category, name) => {
        let table = "<table>"
            + "<tr>"
                + "<th>Name</th><th>Description</th><th>Usage</th><th>Arguments</th>" //Headers
            + "</tr>";
        category.forEach((command) => {
            table += "<tr>";
            table += `<td>${command.name}</td>`; //Name
            table += `<td>${command.description}</td>`; //Description

            let arguments = "";
            let reqArgs = [];
            if (command.reqArgs) { //Required
                command.reqArgs.forEach((argument, i) => {
                    reqArgs[i] = `&lang;${argument}&rang;`;
                    arguments += `<span aria-label="Required">${reqArgs[i]}</span> `;
                });
            }
            
            let optArgs = [];
            if (command.optArgs) { //Optional
                command.optArgs.forEach((argument, i) => {
                    optArgs[i] = `&lbrack;${argument}&rbrack;`;
                    arguments += `<span aria-label="Optional">${optArgs[i]}</span> `;
                });
            }
            
            table += "<td>"; //Usage
            command.usage.forEach((usage, i) => {
                if (i > 0)
                    table += " or ";

                let totalArgs = "";
                if (reqArgs.length > 0)
                    totalArgs += " " + reqArgs.join(" ");
                if (optArgs.length > 0)
                    totalArgs += " " + optArgs.join(" ");

                if (!command.altUsage) {
                    table += `<span aria-label="${prefix}${usage}${totalArgs}">${usage}</span>`;
                } else {
                    table += `<span aria-label="${prefix}${command.altUsage[i]}${totalArgs}">${usage}</span>`;
                }
            });
            table += "</td>"; //End usage
            
            table += "<td>"; //Arguments
            if (arguments === "")
                arguments = "<i>none</i>";
            table += arguments;
            table += "</td>"; //End arguments

            table += "</tr>";
        });
        table += "</table>";
        
        name = name.replace(/`/g, "&#39;");
        $(".commands").append(`<h2>${name}</h2>${table}`);
    });
});