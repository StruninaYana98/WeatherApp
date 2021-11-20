import { GlobalSvgSelector } from '../../assets/svg/GlobalSvgSelector';
import s from './ErrorHandler.module.scss';


interface Props {
    message: string;
}


export const ErrorHandler = ({ message }: Props) => {
    return <div className={s.wrapper}>
        <div className={s.errorIcon}><GlobalSvgSelector scope="global" name="error" /></div>
        <p className={s.message}>
            {message}
        </p>

    </div>
}