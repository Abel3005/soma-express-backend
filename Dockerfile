# Base image with Node 18.20.8
FROM node:18.20.8-bullseye

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Expose port for Fly.io
EXPOSE 5000

# Start the Next.js server
CMD ["node", "server.js"]