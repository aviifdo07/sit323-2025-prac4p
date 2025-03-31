

# Calculator Microservice

## Introduction
This document serves as a guide for setting up and using the Calculator Microservice. This service provides basic arithmetic operations (addition, subtraction, multiplication, division) via a REST API. It is built using Node.js and Express.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js - Download and install Node.js from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- npm (Node Package Manager) - Comes with Node.js

## Setting Up Your Project

### Step 1: Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone <repository-url>
cd calculator-service
```

### Step 2: Install Dependencies
Navigate to the project directory and install the required Node modules:
```bash
npm install
```

### Step 3: Start the Server
Run the following command to start the microservice:
```bash
node app.js
```
You should see a message indicating that the server is running on port 3000.

## API Endpoints
The microservice supports the following endpoints:
- **POST /add** - Takes two numbers and returns their sum.
- **POST /subtract** - Takes two numbers and returns their difference.
- **POST /multiply** - Takes two numbers and returns their product.
- **POST /divide** - Takes two numbers and returns their quotient.

### Using the Endpoints
To use the endpoints, send POST requests with JSON payloads specifying the numbers to operate on. For example:
```json
{
  "num1": 10,
  "num2": 5
}
```

## Testing the Service
You can test the API using tools like Postman or by sending requests via curl. Here's an example curl command to test the addition endpoint:
```bash
curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d '{"num1": 10, "num2": 5}'
```

## Error Handling
The service includes basic error handling for invalid input types and division by zero errors. Errors will return a status code of 400 along with a descriptive message.

## Documentation
The source code is fully documented to explain the functionality and structure. Each endpoint and its working are described in the code comments.

## Conclusion
This README provides all the necessary instructions to set up and use the Calculator Microservice. By following these steps, you can deploy and test the service in your local development environment.

---

### Additional Tips:
- **Customize the README**: Ensure that the repository URL and any specific instructions related to your project setup are correctly included.
- **Detailed Comments**: Include detailed comments in your `app.js` and any other supplementary files to help users and developers understand the codebase better.
- **Testing Details**: Provide clear examples of how to test each endpoint, possibly including more detailed scenarios or edge cases.
