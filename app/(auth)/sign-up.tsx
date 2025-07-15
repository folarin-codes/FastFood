import Button from '@/components/Button'
import CustomInput from '@/components/CustomInput'
import { createUser } from '@/lib/appwrite'
import * as Sentry from '@sentry/react-native'


import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'

const SignUp = () => {
  const [isSubmitting , setIsSubmitting] = useState(false)

  const [form , setForm] = useState({
    name:"",
      email :'',
      password :"" 
  })


  const submit = async ()=>{

    const {email, name , password} = form;

      if(!name || !email || !password){
        return Alert.alert("Error", "Enter valid email and password")
      }

      setIsSubmitting(true)

      try{

        await createUser({email, password, name});

          Alert.alert('Success', "User sign up successfully")

          router.replace('/')

      }

      catch(err){

          Alert.alert("Error", err?.message)
          Sentry.captureEvent(err)

      }

      finally{
          setIsSubmitting(false )
      }

  }
return (
  <View className='gap-10 bg-white rounded-lg p-5 mt-5'>


  <CustomInput label='Full name' 
  value={form.name} 
  onChangeText={(name)=>{setForm((prev)=> ({ ...prev, name:name}))}} 
  placeholder='Enter your full name' />

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

  <Button title='Sign up' onPress={()=> submit()} isLoading={isSubmitting}/>

  <View className='flex flex-row justify-center mt-5 gap-2'>
      <Text className='base-regular text-gray-100'>
          Already have an account?  
      </Text>

      <Link href={'/sign-in'} className='base-bold text-primary'>Sign in</Link>
  </View>
  </View>
)
}

export default SignUp