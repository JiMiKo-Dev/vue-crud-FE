FROM node:20

WORKDIR /user/src/test_view

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "dist"]