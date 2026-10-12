import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/dataSlice'
import { useData } from '../store/zustand'

export default function AddDiallog({open, setOpen}) {

    const dispatch = useDispatch()
    const {addUserZ} = useData() 

    const addNewUser = (e) => {
        e.preventDefault()
        const newUser = {
            name: e.target.name.value,
            age: e.target.age.value,
            img: e.target.img.value,
            id: Date.now()
        }
        dispatch(addUser(newUser))
        addUserZ(newUser)
        setOpen(!open)
        e.target.reset()
    }

  return (
    <dialog open={open}>
        <form onSubmit={(e)=> addNewUser(e)}>
            <input name="name" placeholder='Name...' required/>
            <input name="age" placeholder='Age...' required/>
            <input name="img" placeholder='Url...' required/>
            <button type='submit'>Add</button>
            <button onClick={()=> setOpen(!open)}>Close</button>
        </form>
    </dialog>
  )
}
