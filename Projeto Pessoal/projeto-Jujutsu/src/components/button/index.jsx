import S from './styles.module.css'


export function Button (props) {


    return (
        <button  className={S.button}>
            <img src={props.src} alt="" />
            {props.name}
        </button>
    )
}