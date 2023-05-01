FROM node:lts-slim
WORKDIR /usr/app
COPY package*.json .
RUN npm install --production
COPY . .
RUN npm run build
CMD ["npm", "start"]
