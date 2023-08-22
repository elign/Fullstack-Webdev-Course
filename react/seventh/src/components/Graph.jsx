export default function Graph({ data }) {

    for (let i = 1; i < data.length; i++) {
        let percentage = data[i].population / data[0].population * 100;
        data[i].percentage = percentage;
    }

    console.log(data)

    return (
        <div className="graphs">
            {
                data.map((val, idx) => <Bar key={idx} country={val.country} population={val.population} percentage={val.percentage} />)
            }
        </div>
    )
}

function Bar(props) {
    return (
        <div>
            <div>{props.country} : {props.population}</div>
            <div className="bar" style={{ width: `${props.percentage}%` }}>

            </div>
        </div>
    )
}