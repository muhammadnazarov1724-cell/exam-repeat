import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useData } from '../store/zustand'
import { deleteUser } from '../store/dataSlice'
import AddDiallog from './AddDiallog'
import InfoDialog from './InfoDialog'

export default function Home() {

    const {data} = useSelector((state) => state.data)
    let dispatch = useDispatch()
    const {dataZ, deleteUserZ} = useData()
    const [open, setOpen] = useState(false)
    const [info,SetInfo] = useState(false)
    const [info2,SetInfo2] = useState(false)

  return (
    <>
    <div>
        <button onClick={()=> setOpen(true)}>Add User</button>
        {data.map((el) => {
            return <div   key={el.id}>
                {dataZ.map((el2) => {
                   if(el.id == el2.id)
                   return <div key={el2.id}>
                    <h2>{el.name}</h2>
                    <img style={{width: '200px', height: '200px', borderRadius: '50%'}} src={el2.img} alt="" />
                    <h3>Age:{el.age}</h3>
                    <h4>{el2.status ? 'Active' : 'Inactive'}</h4>
                    <button onClick={()=> (deleteUserZ(el.id), dispatch(deleteUser(el.id)))}  >Delete</button>
                    <button onClick={()=> {
                        SetInfo(el)
                        SetInfo2(el2)
                    }}>Info</button>
                    </div>
                })}
            </div>
        })}
    </div>
    <AddDiallog open={open} setOpen={setOpen}/>
    <InfoDialog open={info} close={() => SetInfo(null)} el2={info2}/>
    </>
  )
}
