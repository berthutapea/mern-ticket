import { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { Footer, Loader } from '../../components'
import '../shared/Shared.css'
import { SecondaryBtn } from "../../components";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

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

        const userData = {
            email,
            password,
        }

        dispatch(login(userData))
            .unwrap()
            .then((user) => {
                toast.success(`Logged in as ${user.name}`)
                navigate('/dashboard')
            })
            .catch(toast.error)
    }

    if (isLoading) {
        return <Loader />
    }

    return (
        <>
            <section className='parent pt-20 my-20 heading text-center text-primary'>
                <h1 className='pt-10'>
                    Login
                </h1>
                <p className='text-accent'>Please log in to TiKons</p>
            </section>

            <section className='form text-primary text-center justify-center flex'>
                <form onSubmit={onSubmit}>
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
                    <div className='form-group flex justify-center'>
                        <SecondaryBtn>
                            <span>Login</span>
                        </SecondaryBtn>
                    </div>
                    <div>
                        <span className='text-primary'>Don't have an account? </span>
                        <Link to={'/register'}
                            className="text-primary hover:text-accent">
                            Register
                        </Link>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Login;
