import S from './styles.module.css'


export function Button (props) {


    return (<a href={props.link} target='blank'>
        <button  className={S.button}>
            <img src={props.src} alt="" />
            {props.name}
        </button>
        </a>
    )
}