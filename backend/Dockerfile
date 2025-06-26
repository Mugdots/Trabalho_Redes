FROM node:18
WORKDIR /app
COPY package.json
COPY index.js 
RUN npm install
RUN npm i mongo-express@github:mongo-express/mongo-express
CMD ["node", "index.js"]
EXPOSE 5000 
