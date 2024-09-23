
//import Image from 'next/image'
import '../styles/session.scss';
import ClockIcon from '../../public/clock.svg'
interface Props {
    title: string;
    duration: string;
    img: string;
    alt: string;
    text: string;
}

const Session: React.FC<Props> = ({ alt, title, duration, img, text }) => {

    return (
        <div className="session">
            <img src={img} alt={alt} className="session__img" />
            <svg className="session__like">
                <use xlinkHref="../../public/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="session__name">{title}</h5>
            <div className="session__duration">
               <img src={ClockIcon} />

                <p>{duration}</p>
            </div>
            <div className="session__description">

                <p>{text}</p>
            </div>
        </div>

    )
}


export default Session;
