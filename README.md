# blackstone-backend

To execute this backend in develop mode follow these steps:

1- Open two shells of your preference
2- In first shell, execute "npm run ts", this will trigger automatic javascript building in file named "build"
3- In second shell execute "npm run dev", this will let you develop with nodemon and the compiled javascript index.js file

To execute this backend in production mode, follow these steps:

1- Optional: There is no need to execute a building command due to the automatic compiling with "npm run ts" and "npm run dev" but if you want to be sure, just execute "npm run build"
2- Execute "npm start"
3- Send ./build/index.js to your cloud service of your preference

IMPORTANT:
.env needs this variables to work

// CONFIG
NODE_ENV=production
PORT=5000
CORS=*

// MONGO
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=

// SECRET
AUTH_JWT_SECRET=
