import express from "experess";
import cos from "cors";

const app = express();
app.use(cors());

app.listen(4000, () => console.log("app is running"));
