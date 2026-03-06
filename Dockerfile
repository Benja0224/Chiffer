FROM node:24-alpine
WORKDIR /
COPY . .
RUN npm install --omit=dev
CMD ["node", "index.js"]
EXPOSE 3000
