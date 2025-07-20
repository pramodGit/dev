# Use official Node.js base image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (for better caching)
COPY package*.json ./

# Install app dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your app's source code
COPY . .

# Expose the port your app runs on (update if it's not 4300)
EXPOSE 4300

# Command to start the app
CMD ["npm", "start"]
