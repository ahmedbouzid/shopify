
import f from './flex.module.scss'
const Flex = () => {
    return (
<div>
<div className={f.parent}>
            <div className={f.children}></div>
            <div className={f.children}></div>
            <div className={f.children}></div>
            <div className={f.children}></div>
        </div>

        <div className={f.parent1}>
            <div className={f.children1}></div>
            <div className={f.children1}></div>
            <div className={f.children1}></div>
            <div className={f.children1}></div>
        </div>
</div>
        
    )
}
export default Flex ;