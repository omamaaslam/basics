import style from './page.module.css'
export default function Mycomp(props: any) {
    return (
        <>
            <p>User name is <span className={style.userName}>{props.name}</span></p>
        </>
    );
}