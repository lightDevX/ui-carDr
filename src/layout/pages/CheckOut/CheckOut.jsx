import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../routes/Auth/AuthProvider/AuthProvider";

const CheckOut = () => {

    const service = useLoaderData();
    const { _id, title, price } = service;

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            customerName: name,
            date,
            email,
            service: _id,
            price: price
        }
        console.log(order);
    }

    return (
        <div>
            <h3>Check Out Data:  {title}</h3>
            <form onSubmit={handleBooking}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} placeholder="email" name="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Book Order" className="btn btn-primary" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default CheckOut;