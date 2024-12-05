"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON requests
app.use(express_1.default.json());
// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express with TypeScript!');
});
// Global error handler (optional)
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
