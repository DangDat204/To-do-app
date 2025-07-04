# Use official Node.js LTS image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Expose port (default 4000, can be overridden by env)
EXPOSE 4000

# Set environment variables (can be overridden by docker-compose)
ENV PORT=4000
ENV ALLOWED_ORIGINS=*

# Start the server
CMD ["npm", "start"] 