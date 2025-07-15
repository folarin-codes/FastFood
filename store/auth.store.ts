 import { getCurrentUser } from '@/lib/appwrite';
import { User } from '@/type';
import * as Sentry from '@sentry/react-native';
import { create } from 'zustand';



 type authState = {
    isAuthenticated : Boolean,
    user : User | null,
    isLoading : Boolean,
    setIsAuthenticated : (value: Boolean) => void,
    setUser : (user: User | null) => void,
    setLoading : (value : boolean) => void
    fetchAuthenticatedUser : ()=> Promise<void>;
 }

 const useAuthStore = create<authState>((set)=>({

    isAuthenticated: false,
    isLoading: false,
    user :null,
    setIsAuthenticated : (value  )=> set({ isAuthenticated : value}),
    setUser: (userData  )=> set({ user : userData}),
    setLoading: (loading  )=> set({ isLoading : loading}),
    fetchAuthenticatedUser : async()=>{
        set({isLoading : true})

        try{

            console.log('This was fired as well')

            const user = await getCurrentUser()


            // console.log('user ', user)


            if(user){

                set({isAuthenticated:true , user: user as User})
 
            }

            else{
                set({isAuthenticated:false , user: null})
            }
        }
        catch(e:Error | Event | any){
            console.log('error ', e)
            set({isLoading : false, user:null })
            Sentry.captureEvent(e);
        }
        finally{
            set({isLoading : false})
        }
    }
 }))


 export default useAuthStore;