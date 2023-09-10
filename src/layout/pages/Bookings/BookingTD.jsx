

const BookingTD = ({ booking }) => {

    const { img, customerName, date, price } = booking;

    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customerName}</div>
                    </div>
                </div>
            </td>
            <td>
                <p>${price}</p>
            </td>
            <td>
                <p>{date}</p>
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingTD;