const fs = require('fs');

function get_all_users(req, res) {
     fs.readFile("./db/db.json", 'utf-8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
        }
        
        const user_data = JSON.parse(data);

        res.json(user_data);
        
   })
}

module.exports = {get_all_users};