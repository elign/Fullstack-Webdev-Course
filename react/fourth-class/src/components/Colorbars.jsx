
function Colorbars(props) {

    const colors = props?.colors;

    const colorBar = colors.map((color) => {
        return (
            <div key={color} style={{backgroundColor: `${color}`}} className="color-bar">
                {color}
            </div>
        )
    })
    return (
        <div className="color-bars">
            {colorBar}
        </div>
    )
}

export default Colorbars;