FROM node

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview", "--", "--host"]
