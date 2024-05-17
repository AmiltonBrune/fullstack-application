FROM node:21.7.3-alpine3.18
RUN npm install -g npm@10.7.0
RUN mkdir -p /var/www/image-service
RUN mkdir -p /var/www/image-service/uploads
RUN chmod -R 777 /var/www/image-service/uploads 
WORKDIR /var/www/image-service
ADD . /var/www/image-service
RUN npm install
CMD npm run build && npm run start:prod
