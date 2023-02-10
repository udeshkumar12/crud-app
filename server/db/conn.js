const mongoose =require("mongoose");
const DB = "mongodb://localhost27017/crudapp";

mongoose.connect(DB, {
    useNewUrlparser:true,
    useUnifiedTopology:true

}).then(()=> console.log("connection star")).catch((error) => console.log(error.message));