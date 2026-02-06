import { useState, useEffect } from 'react'

function withData({WrapComponent, url}) {
  return function EnhanceComponent(){
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return <WrapComponent data={data} />
  }
}

export default withData