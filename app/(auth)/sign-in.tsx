import Button from '@/components/Button'
import CustomInput from '@/components/CustomInput'
import { signIn } from '@/lib/appwrite'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

const SignIn = () => {


    const [isSubmitting , setIsSubmitting] = useState(false)

    const [form , setForm] = useState({
        email :'',
        password :"" 
    })


    const submit = async ()=>{

        const {email , password}= form;

        if(!email || ! password){
            return Alert.alert("Error", "Enter valid email and password")
        }

        setIsSubmitting(true)

        try{

            await signIn({email, password})

            Alert.alert('Success', "User sign in successfully")

            router.replace('/')

        }

        catch(err){

            Alert.alert("Error", err?.message)

        }

        finally{
            setIsSubmitting(false )
        }

    }
  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>

    <CustomInput label='Email' 
    value={form.email} 
    onChangeText={(mail)=>{setForm((prev)=> ({ ...prev, email:mail}))}} 
    placeholder='Enter your email' keyboardType="email-address"/>

    <CustomInput label='Password' 
    value={form.password}
    onChangeText={(password)=>{setForm((prev)=> ({ ...prev, password:password}))}} 
    placeholder='Enter your password' keyboardType="default"
    secureTextEntry={true}
    
    />

    <Button title='Sign in' onPress={()=> submit()} isLoading={isSubmitting}/>

    <View className='flex flex-row justify-center mt-5 gap-2'>
        <Text className='base-regular text-gray-100'>
            Don't have an account?  
        </Text>

        <Link href={'/sign-up'} className='base-bold text-primary'>Sign up</Link>
    </View>
    </View>
  )
}

export default SignIn 