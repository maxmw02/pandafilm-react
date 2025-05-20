import { create } from 'zustand'
import { db } from './firebase'
import { doc, getDoc } from 'firebase/firestore'

export const useUserStore = create((set) => ({
    currentUser: null,
    fetchUserInfo: async (uid) => {
        if(!uid) return set({currentUser: null})

            try {
                const docRef = doc(db, "user", uid)
                const docSnap = await getDoc(docRef)

                if(docSnap.exists()) {
                    set({currentUser: docSnap.data()})
                }
                else {
                    set({currentUser: null})
                }
            }

            catch(error) {
                console.log(error)
                return set({currentUser: null})
            }
    }
}))