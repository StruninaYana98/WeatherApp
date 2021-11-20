import s from './Loader.module.scss';



interface Props {

}
export const Loader = (props: Props) => {

    return <div className={s.loaderWrapper}>
        <div className={s.loader}>
            <div></div>
            <div></div>
        </div>
    </div>
}