# To take base image of node from docker hub
FROM node:16-alpine
# To set our default working directory as /app
WORKDIR /app
# To copy from source-destination(/app)
COPY package*.json ./

RUN npm install
# Copy all files to /app
COPY . ./
# Informs docker that container listens on ports at runtime (does not actually publish the port)
EXPOSE 3000
# There can only be one CMD instruction in a Dockerfile
CMD [ "npm" , "run", "serve" ]