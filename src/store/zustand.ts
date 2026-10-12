import { create } from "zustand";

export const useData = create((set) => ({
        dataZ: [
        {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59lCDx9SR_Q64olSPUtBE1zUX6roKMPAWr-rFLwmWaQ&s=10',
        status: true,
        id: 1
        },
        {
        img: 'https://cdn.artphotolimited.com/images/5ca5bf82ce46dc3d348294d2/1000x1000/lion-d-afrique-dans-le-vent-african-lion.jpg',
        status: false,
        id: 2
        },
    ],
    deleteUserZ: (id) => set((state) => ({dataZ: state.dataZ.filter(el => el.id != id)} )),
    addUser: (user) => set((state) => ({ data: [...state.data, user]})),


}))

