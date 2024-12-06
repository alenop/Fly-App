import { Router, Request, Response } from 'express';
import {FakeBdd} from '../../dataService/fakeBdd';
import { Book } from '../../models/Book';
const router = Router();
const database = new FakeBdd();

// Book a flight
router.post('/', bookFlight);

// Get bookings for a user
router.get('/user/:userId', getUserBookings);

// Delete a booking
router.delete('/:id', deleteBooking);

export default router;