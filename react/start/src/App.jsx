import './App.css'

function App() {

  return (
    <div className='main'>
      <Card image="https://images.unsplash.com/photo-1682685796063-d2604827f7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" heading="Beautiful Sunset" text="We have lost even this twilight." color="#FFDBC3"/>
      <Card image="https://images.unsplash.com/photo-1682685796766-0fddd3e480de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" heading="Beautiful Night" text="We have lost even this twilight." color="#5B9A8B"/>
      <Card image="https://images.unsplash.com/photo-1682685797208-c741d58c2eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" heading="Beautiful Morning" text="We have lost even this twilight." color="#FFC6AC"/>
      <Card image="https://images.unsplash.com/photo-1682685797527-63b4e495938f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" heading="Beautiful Dawn" text="We have lost even this twilight."/>
    </div>
  )
}

function Card(params) {
  let image = params.image;
  let heading = params.heading;
  let text = params.text;
  let color = params.color;
  return (
    <div style={{backgroundColor: color}} className='card'>
      <div className='image'>
        <img src={image} />
      </div>
      <div className='text'>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default App
