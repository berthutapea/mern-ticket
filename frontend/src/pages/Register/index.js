import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../features/auth/authSlice';
import { Footer, Loader } from '../../components';
import { SecondaryBtn } from "../../components";
import '../shared/Shared.css'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
        .unwrap()
        .then((user) => {
          toast.success(`Registered new user - ${user.name}`)
          navigate('/dashboard')
        })
        .catch(toast.error)
    }
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <section className='parent pt-20 my-20 heading text-center text-primary'>
        <h1 className='pt-10'>
          Register
        </h1>
        <p className='text-accent'>Please create an account to TiKons</p>
      </section>

      <section className='form text-primary text-center justify-center flex'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Confirm password'
              required
            />
          </div>
          <div className='form-group form-group flex justify-center'>
            <SecondaryBtn>
              <span>Register</span>
            </SecondaryBtn>
          </div>
          <div>
            <span>Have an account? </span>
            <Link to={'/login'}
              className="text-primary hover:text-accent">
              Login
            </Link>
          </div>
        </form>
      </section>
      <Footer />
    </>
  )
}

export default Register;
