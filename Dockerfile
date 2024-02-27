FROM node:latest
COPY app.js /app/ 
COPY package.json /app/ 
WORKDIR /app
RUN npm i 
CMD ["node", "app.js"]