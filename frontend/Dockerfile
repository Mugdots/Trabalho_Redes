FROM node:18
WORKDIR /app
COPY . .
RUN npm install express
COPY index.html ./index.html
COPY server.js ./server.js
CMD ["node", "server.js"]
EXPOSE 3000 