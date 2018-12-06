FROM node:8.9.4-alpine

ENV TZ Europe/Moscow

ADD webpack.config.js /tmp/webpack.config.js
ADD package.json /tmp/package.json
ADD package-lock.json /tmp/package-lock.json
ADD tsconfig.json /tmp/tsconfig.json
RUN cd /tmp && npm install

RUN mkdir -p /var/www && cp -a /tmp/node_modules /var/www/

ADD . /var/www/
WORKDIR /var/www

RUN npm run build

CMD ["npm", "run", "start"]
