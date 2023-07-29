import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { getTicket, closeTicket } from '../../features/tickets/ticketSlice';
import { getNotes, createNote } from '../../features/notes/noteSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { BackButton, Footer, Loader, NoteItem, SecondaryBtn } from '../../components';
import '../Ticket/Ticket.css';

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
}

Modal.setAppElement('#root')

function Ticket() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [noteText, setNoteText] = useState('')
  const { ticket } = useSelector((state) => state.tickets)

  const { notes } = useSelector((state) => state.notes)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { ticketId } = useParams()

  useEffect(() => {
    dispatch(getTicket(ticketId)).unwrap().catch(toast.error)
    dispatch(getNotes(ticketId)).unwrap().catch(toast.error)
  }, [ticketId, dispatch])

  // Close ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId))
      .unwrap()
      .then(() => {
        toast.success('Ticket Closed')
        navigate('/tickets')
      })
      .catch(toast.error)
  }

  // Create note submit
  const onNoteSubmit = (e) => {
    e.preventDefault()
    dispatch(createNote({ noteText, ticketId }))
      .unwrap()
      .then(() => {
        setNoteText('')
        closeModal()
      })
      .catch(toast.error)
  }

  // Open/close modal
  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  if (!ticket) {
    return <Loader />
  }

  return (
    <>
      <div className='ticket-page parent pt-20 my-20 text-center text-primary'>
        <header className='ticket-header'>
          <BackButton />
          <h2 className='font-medium'>
            Ticket ID : {ticket._id} <span className=''></span>
            <span className={`border-b w-20 rounded-full border-accent ${ticket.status === 'new' ? 'bg-green-500' : 'bg-red-500'
              }`}>
              <p className="text-black text-center">{ticket.status}</p>
            </span>
          </h2>
          <h3>
            <span className='font-medium'>Data Submitted </span> : {new Date(ticket.createdAt).toLocaleString('en-US')}
          </h3>
          <h3> <span className='font-medium'>Seating </span> : {ticket.seating}</h3>
          <h3> <span className='font-medium'>Payment </span> : {ticket.payment}</h3>
          <hr />
          <div className='ticket-desc'>
            <h3 className='font-medium'>Description of Issue : </h3>
            <p>{ticket.description}</p>
          </div>
          <h2 className='font-medium py-2'>Notes</h2>
        </header>

        {ticket.status !== 'closed' && (
          <SecondaryBtn onClick={openModal}>
            <FaPlus /> Add Note
          </SecondaryBtn>
        )}

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Add Note'
        >
          <h2>Add Note</h2>
          <button className='btn-close ' onClick={closeModal}>
            X
          </button>
          <form onSubmit={onNoteSubmit}>
            <div className='form-group flex justify-center text-primary'>
              <textarea
                name='noteText'
                id='noteText'
                className='form-control'
                placeholder='Note text'
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              ></textarea>
            </div>
            <div className='form-group flex justify-center'>
              <SecondaryBtn className='btn' type='submit'>
                Submit
              </SecondaryBtn>
            </div>
          </form>
        </Modal>

        {notes ? (
          notes.map((note) => <NoteItem key={note._id} note={note} />)
        ) : (
          <Loader />
        )}

        {ticket.status !== 'closed' && (
          <button onClick={onTicketClose} className='primary-button' >
            <span>
              Close Ticket
            </span>
          </button>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Ticket;
