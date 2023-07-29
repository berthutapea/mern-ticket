import { FaArrowCircleLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import SecondaryBtn from '../SecondaryBtn';

const BackButton = () => {
    const navigate = useNavigate()
    return (
        <SecondaryBtn
            onClick={() => navigate(-1)}>
            <FaArrowCircleLeft /> Back
        </SecondaryBtn>
    )
}

export default BackButton;
