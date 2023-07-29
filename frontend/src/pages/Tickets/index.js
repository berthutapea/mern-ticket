import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from '../../features/tickets/ticketSlice';
import { BiSearch } from 'react-icons/bi';
import { Loader, BackButton, Footer } from '../../components';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Tickets() {
  const { tickets } = useSelector((state) => state.tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (!tickets) {
    return <Loader />;
  }

  return (
    <>
      <div className="rounded-sm border border-stroke px-5 pt-20 pb-2.5 shadow-default sm:px-7.5 xl:pb-1 mt-6 parent my-20">
        <BackButton />
        <div className="flex justify-between items-center mt-4 flex-col md:flex-row md:justify-between">
          <div className="relative flex-2 mb-4 md:mb-0">
            <input
              type="text"
              placeholder="Type to search.."
              className="rounded-lg border-[1.5px] border-stroke bg-transparent py-2 pl-10 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter  left-0 text-primary"
            />
            <span className="absolute left-2 py-3 text-xl">
              <BiSearch />
            </span>
          </div>
        </div>

        <div className="max-w-full overflow-x-auto py-4">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-center">
                <th className="py-4 px-4 font-medium text-black">
                  Date
                </th>
                <th className="py-4 px-4 font-medium text-black">
                  Seating
                </th>
                <th className="py-4 px-4 font-medium text-black">
                  Payment
                </th>
                <th className="py-4 px-4 font-medium text-black">
                  Status
                </th>
                <th className="py-4 px-4 font-medium text-black">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => {
                return (
                  <tr className='text-center'
                    key={ticket._id}>
                    <td className='border-b border-accent py-5 px-4'>
                      <p className='text-black '>{new Date(ticket.createdAt).toLocaleString('en-US')}</p>
                    </td>
                    <td className='border-b border-accent py-5 px-4'>
                      <p className='text-black '>{ticket.seating}</p>
                    </td>
                    <td className='border-b border-accent py-5 px-4'>
                      <p className='text-black '>{ticket.payment}</p>
                    </td>
                    <td className="border-b rounded-full border-accent">
                      <p
                        className={`rounded-full ${ticket.status === "new" ? "bg-green-500" : "bg-red-500"
                          } h-8 w-50`}
                      >
                        <p className="text-black py-1">{ticket.status}</p>
                      </p>
                    </td>


                    <td className='border-b border-accent py-5 px-4'>
                      <Link to={`/ticket/${ticket._id}`}
                        className='flex justify-center'>
                        <button className='hover:text-black'>
                          <FaRegEye className="text-primary text-2xl hover:text-accent text-center" />
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>
      </div >
      <Footer />
    </>
  );
}

export default Tickets;
