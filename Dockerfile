
# Use official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .


RUN npm run build

# Expose the app on port 3030
EXPOSE 3030

# Start the Next.js app in production mode
CMD ["npm", "start"]
RUN npm i -g pm2
RUN pm2 start "npm start" --name "new"
RUN pm2 startup 
RUN pm2 save
RUN pm2 ls -la
