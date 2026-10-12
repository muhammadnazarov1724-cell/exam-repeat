import React from 'react'

export default function InfoDialog({open, close, el2}) {
  return (
    <dialog open={open}>
        <div key={el2?.id}>
            <div key={open?.id}>
                <h1>{open?.name}</h1>
                <h2>{open?.age}</h2>
                <img src={el2.img} alt="" />
                <h3>{el2.status}</h3>
                <button onClick={close}>Close</button>
            </div>
        </div>
    </dialog>
  )
}
