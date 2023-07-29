import { Link } from 'react-router-dom';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';
import '../shared/Shared.css'
import { Footer, SecondaryBtn } from "../../components";

function Dashboard() {
  return (
    <>
      <section className='heading parent pt-20 my-20 heading text-center text-primary'>
        <h1 className='pt-12'>Buy Now Raisa Tickets!</h1>
        <p className='text-accent'>Please choose from an option below</p>
      </section>
      <div className="grid justify-center sm:flex sm:justify-center translate-y-[-20%] sm:translate-y-[-0%]">
        <Link to="/new-ticket"
          className="primary-button">
          <span>Create Ticket</span>
          <span>
            <FaQuestionCircle />
          </span>
        </Link>
      </div>
      <Link to="/tickets" className="grid justify-center sm:flex  sm:justify-center translate-y-[-20%] sm:translate-y-[-0%] mt-8">
        <SecondaryBtn>
          <span>View My Tickets</span>
          <span>
            <FaTicketAlt />
          </span>
        </SecondaryBtn>
      </Link>
      <Footer />
    </>
  )
}

export default Dashboard;
