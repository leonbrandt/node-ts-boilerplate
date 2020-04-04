FROM node:13
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run clean && npm run build
CMD ["npm", "start"]
