import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createTicket } from '../../features/tickets/ticketSlice';
import { BackButton, Footer, SecondaryBtn } from '../../components';
import '../shared/Shared.css'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [seating, setSeating] = useState('Platinum')
  const [payment, setPayment] = useState('Bank BRI')
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ seating, payment, description }))
      .unwrap()
      .then(() => {
        navigate('/tickets')
        toast.success('New ticket created!')
      })
      .catch(toast.error)
  }

  return (
    <>
      <section className='parent pt-25 my-20 heading text-center text-primary'>
        <div className='pt-4'>
          <BackButton />
        </div>
        <h1 className='pt-10'>Create New Ticket</h1>
        <p className='text-accent' >Please fill out the form below</p>
      </section>

      <section className='form text-primary text-center justify-center grid'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' className='form-control' value={name} disabled />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type='text' className='form-control' value={email} disabled />
        </div>
        {/* </div> */}
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='seating'>Seating</label>
            <select
              name='seating'
              id='seating'
              value={seating}
              onChange={(e) => setSeating(e.target.value)}
            >
              <option value='Platinum'>Platinum</option>
              <option value='Gold'>Gold</option>
              <option value='Silver'>Silver</option>
              <option value='Reguler'>Reguler</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='payment'>Payment</label>
            <select
              name='payment'
              id='payment'
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value='Bank BRI'>Bank BRI</option>
              <option value='Bank BCA'>Bank BCA</option>
              <option value='Gopay'>Gopay</option>
              <option value='Dana'>Dana</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group form-group flex justify-center'>
            <SecondaryBtn >
              <span>Submit</span>
            </SecondaryBtn>
          </div>
        </form>
      </section>
      <Footer />
    </>
  )
}

export default NewTicket;
