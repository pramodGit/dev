import * as Ride from "../models/ride.model.js";

/* Publish Ride */
export const publish = async (req, res) => {
  try {
    const result = await Ride.createRide(req.body);
    res.json({ success: true, rideId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


/* Search Ride */
export const search = async (req, res) => {
  try {
    const rides = await Ride.searchRides(req.query);
    res.json(rides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};