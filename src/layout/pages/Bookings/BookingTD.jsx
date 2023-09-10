
const BookingTD = ({ booking, handleDelete }) => {

    const { _id, img, service, date, price } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
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
                <button className="btn btn-ghost btn-xs rounded bg-[#FF3811] text-white">details</button>
            </th>
        </tr>
    );
};

export default BookingTD;