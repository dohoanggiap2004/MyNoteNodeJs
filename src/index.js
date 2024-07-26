const path = require("path");
const handlebars = require("express-handlebars");
const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const route = require("./routers");
const db = require("./config/db");
const methodOverride = require('method-override')
const session = require('express-session');
//Connect to mongodb
db.connect();

//indicate to static files
app.use("/public", express.static(path.join(__dirname, "public")));

//configure session
app.use(session({
  secret: 'dohoanggiap', // Thay đổi secret key cho ứng dụng của bạn
  resave: false,
  saveUninitialized: true,
  cookie: {
     secure: false,
    maxAge: 1000 * 60 * 60
  }
}));

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//http logger
app.use(morgan("combined"));

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    formatDate: (date) => {
      return new Date(date).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    }
  }
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(methodOverride('_method'))
//routers
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
