import { useState, useEffect, useEffectEvent } from 'react'

function AutoSaveForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const saveData = useEffectEvent(() => {
                console.log("Form Data:", formData)
            })

    useEffect(() => {
        const intervel = setInterval(() => {
            saveData()
        }, 3000)

        return () => clearInterval(intervel)
    }, [])

  return (
    <form action="">
        <input type="text" name="name" placeholder="Enter name" v
        alue={formData.name} 
        onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <br /><br />
        <input type="email" name="email" placeholder="Enter email" 
        value={formData.email} 
        onChange={(e) => setFormData({...formData, email: e.target.value})} />
    </form>
  )
}

export default AutoSaveForm