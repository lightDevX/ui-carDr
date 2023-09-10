/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../routes/Auth/AuthProvider/AuthProvider";
import BookingTD from "./BookingTD";


const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/checkout?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingTD
                            key={booking._id}
                            booking={booking}
                        ></BookingTD>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Bookings;