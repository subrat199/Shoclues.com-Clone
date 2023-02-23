import React from 'react'
import axios from 'axios'
import { useEffect,useReducer,useState} from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import {  useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import Productcard from './../Components/Productcard';
import Footer from './../Components/Footer';
import Carousel from './../Components/Carousel';
const initstate={
  products:[],
  isLoading:true,
  isError:""
}
const reducer = (state, action) => {
  switch (action.type) {
      case 'fetch_success':
        return {
          ...state,
          products: action.payload,
          isLoading: true,
          isError:false
        };
      case 'fetch_error':
        return {
          isLoading: false,
          isError:"something went wrong"
        };
      default:
        throw new Error();
    }
}
const getUrl=(url,sort,orderBy)=>{
if(sort && orderBy){
return (url=`${url}&_sort=${sort}&_order=${orderBy}`)
}
return url
}
const getCurrentPageUrl=(value)=>{
value=Number(value)
if(typeof value==="number" && value<=0){
  value=1;
}
if(!value){
  value=1;
}
return value;
}
const Store = () => {
  const [state, dispatch] = useReducer(reducer, initstate) 
    const [searchParams, setSearchParams] = useSearchParams();
    const [orderBy,setOrderBy]=useState("")
    const [page,setPage]=useState(getCurrentPageUrl(searchParams.get("page")) || 1)
    const sort='price'
    useEffect(() =>{
        getdata() 
    },[page,orderBy])
const getdata= () =>{
  let apiUrl=getUrl(`http://localhost:8080/products?_limit=4&_page=${page}`,sort,orderBy)
    axios
    .get(apiUrl)
    .then((res)=>{
        dispatch({
            type: 'fetch_success',
            payload: res.data,
        })
        })
    .catch((err)=>{dispatch({
            type: 'fetch_error',
            payload:[],
    })
    })
}
useEffect(()=>{
  let paramobj={page}
  if(orderBy){
    paramobj.orderBy=orderBy
  }
  setSearchParams(paramobj)
},[page,orderBy])
const styles={
borderRadius:'4px',
border:'1px solid black',
width:'50px',
marginBottom:'10px'
}
const {products,isLoading,isError}=state;
  return (
    <>
    <Carousel/>
     <div>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
        {
             products.map((product)=>{
                return (
                    <GridItem  key={product.id}>
                        <Productcard 
                        name={product.name} 
                        price={product.price} 
                        image={product.image}
                        Id={product.id}
                        rating={product.rating}
                        off={product.off}
                      
                        
                        />
                    </GridItem>
                )
            })
        }
        </Grid>
        <div>
          <button onClick={()=>setPage(page-1)} style={styles} disabled={page===1}>PREV</button>
          <button disabled={page===1}>{page}</button>
          <button onClick={()=>setPage(page+1)} style={styles}>NEXT</button>
        </div>
        <button onClick={()=>{setOrderBy('asc')}} style={{width:"150px",border:"1px solid grey"}} >ORDER BY ASC</button>
      <button onClick={()=>{setOrderBy('desc')}} style={{width:"150px",border:"1px solid grey"}}>ORDER BY DESC</button>
    </div>
    <Footer/>
    </>
      
  )
}

export default Store