
import f from './flex.module.scss'
const Flex = () => {
    return (
        <div className={f.parent}>
            <div className={f.children}></div>
            <div className={f.children}></div>
            <div className={f.children}></div>
            <div className={f.children}></div>
        </div>
    )
}
export default Flex ;