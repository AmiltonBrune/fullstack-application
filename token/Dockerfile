FROM node:21.7.3-alpine3.18
RUN npm install -g npm@10.7.0
RUN mkdir -p /var/www/permission
WORKDIR /var/www/permission
ADD . /var/www/permission
RUN npm install
CMD npm run build && npm run start:prod
