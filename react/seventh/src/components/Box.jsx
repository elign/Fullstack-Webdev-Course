export default function Box ({box}) {

    return (
        <div className="box flex" style={{backgroundColor: box.color}}>
            {box.val}
        </div>
    )
}