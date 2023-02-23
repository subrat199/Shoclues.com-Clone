import React from 'react'

const Search = () => {
  const [text,setText]=React.useState('')
  const [data, setData] = React.useState([])
  const handleChange = (e) => {
    setText(e.target.value)
}
const handleClick=()=>{
  getdata()
  setText("")
}
const getdata =async () =>{
try {
  const res=await fetch(`http://localhost:8080/products?q=${text}`)
  const res2=await res.json()
 setData(res2)
} catch (error) {
  console.log(error)
}
}
  return (
    <div>
      <div>
      <input type="text" style={{border:'1px solid red',width:"200px",marginTop:"20px",borderRadius:"10px"}} onChange={handleChange} value={text} placeholder={"Enter The Product"}/> <br />
      <button onClick={handleClick} style={{}}>Search</button>
      </div>
      {
       data.map((el)=>{
      return (
      <div key={el.id}>
        <img src={el.image} alt="" />
        <h5>{el.name}</h5>
        <h5>{el.price}</h5>
      </div>
      )
       })
      }
    </div>
  )
}

export default Search