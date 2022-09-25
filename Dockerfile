FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3050
EXPOSE 80
CMD ["npm" , "start"]