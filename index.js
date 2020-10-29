const express  = require("express");
const cors     = require("cors");

const admin           = require("./routes/api/admin");
const serviceprovider = require("./routes/api/serviceprovider");
const customer        = require("./routes/api/customer");
const task            = require("./routes/api/postTask");
const connectDB       = require("./config/database");


const app = express();
app.use(cors());
app.use("/api/admin", admin);
app.use("/api/serviceprovider", serviceprovider);
app.use("/api/customer", customer);
app.use("/api/postTask", task);
connectDB();
const port = process.env.PORT || 5555;
app.listen(port,()=> console.log(`Activating project on port ${port}...`));