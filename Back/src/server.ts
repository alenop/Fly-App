import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import routerUser from './routes/userRoutes'; // Assuming you have userRoutes
import routerFlights from './routes/flightRoutes';
import routerAirports from './routes/airportRoutes'
import routerBook from './routes/bookRoutes';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());



// Apply CORS middleware globally
app.use(cors());

// Use the user routes
app.use('/user', routerUser);

//use flights routes
app.use('/flights', routerFlights);

//use airports routes
app.use('/airports', routerAirports);

app.use('/book',routerBook);

// Define a simple route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

// Global error handler (optional)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).send('Internal Server Error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
