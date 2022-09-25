import{ useState, useEffect} from 'react'
/*eslint-disable*/
export default function UsersData() {
  const [Users,setData] =useState([])

  const getData=() => {
     fetch('https://imgmgt.api.preci.cloud/api/SlideImages')
    .then(res => res.json())
    
      .then(data => {
        console.log(data)
        setData(data)
        

      })
  }

  useEffect(() => {
    getData()
  },[]) 
}

