import style from '../../styles/title.module.css'
import Link from 'next/link'

export default function Title(props) {
    return (
        <div className={style.container}>
            <h2>{props.title}</h2>
            <h6><Link href='/'><span style={{'fontSize': '38px'}}>&larr;</span>ΠΙΣΩ ΣΤΟ ΜΕΝΟΥ</Link></h6>
        </div>
    );
}