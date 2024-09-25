const url="https://fation-shoes.onrender.com/add_order"


export  const orderPostApi= async(submitData)=>{
    return await fetch(url,{
          method:"POST",
          headers:{
              "Content-type":"application/json"
          },
          body:JSON.stringify(submitData)
      })
  }