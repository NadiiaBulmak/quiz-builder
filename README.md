# Fullstack Quiz App

A simple Fullstack Quiz Application built with **React**, **TypeScript**, **Chakra UI**, **Node.js**, **Express**, and **Prisma**.  
It allows creating quizzes, listing them.  

## Project Structure
/backend

/frontend

## Prerequisites

- Node.js >= 20  
- Docker & Docker Compose (for database)  
- npm or yarn  


## Backend Setup
### 1. Install dependencies
```bash
cd backend
npm install
```
### 2.  Create .env file(replace with correct variables)
example:
```markdown
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/quizzes?schema=public"
CLIENT_URL=http://localhost:5173
PORT=3000
```
### 3.  Setup PostgreSQL with Docker
Create a docker-compose.yml (in project root or /backend) like this:
```markdown
version: '3.8'

services:
  db:
    image: postgres:16
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
      POSTGRES_DB: quizdb
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

### 4.  Run Docker
```bash
docker-compose up -d
```

### 5.  Run Prisma migrations
```bash
npx prisma migrate dev --name init

npx prisma generate
```
### 6.  Start the backend
Development:
```bash
npm run dev
```
Production:
```bash
npm run build

npm start
```
## Frontend Setup

### 1. Install dependencies
```bash
cd ..
cd frontend

npm install
```
### 2.  Create .env file(replace with correct variables)
example:
```markdown
VITE_BACKEND_URL=http://localhost:3000
```
### 3.  Create .env file(replace with correct variables)
```bash
npm run dev
```

## Creating a Sample Quiz
If you test app via Posman, you can use this example of body for POST request:
```markdown
{
  "title": "My First Quiz",
  "questions": [
    {
      "text": "Is the sky blue?",
      "type": "BOOLEAN",
      "options": [
        { "text": "Yes", "isCorrect": true },
        { "text": "No", "isCorrect": false }
      ]
    },
    {
      "text": "Select prime numbers",
      "type": "CHECKBOX",
      "options": [
        { "text": "2", "isCorrect": true },
        { "text": "4", "isCorrect": false },
        { "text": "7", "isCorrect": true }
      ]
    }
  ]
}

{
  "title": "Red Quiz updated",
  "questions": [
    {
      "text": "Is the Earth red?",
      "type": "BOOLEAN",
      "options": [
        { "text": "Yes", "isCorrect": true },
        { "text": "No", "isCorrect": false }
      ]
    },
    {
      "text": "Write the capital of France",
      "type": "INPUT"
    }
  ]
}
```
