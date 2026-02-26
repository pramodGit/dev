import db from "../config/db.js";

/* CREATE RIDE */
export const createRide = async (ride) => {
  const [result] = await db.query(
    `INSERT INTO rides 
    (driver_id, from_city, to_city, departure_time, seats_available, price)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [
      ride.driver_id,
      ride.from_city,
      ride.to_city,
      ride.departure_time,
      ride.seats_available,
      ride.price
    ]
  );

  return result;
};


/* SEARCH RIDES */
export const searchRides = async (filters) => {
  const [rows] = await db.query(
    `SELECT * FROM rides
     WHERE from_city = ?
     AND to_city = ?
     AND departure_time >= ?
     AND seats_available > 0`,
    [filters.from_city, filters.to_city, filters.date]
  );

  return rows;
};