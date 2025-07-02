FROM node:22

WORkDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npx", "nodemon", "./src/server.js"]


