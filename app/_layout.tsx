import useAuthStore from '@/store/auth.store';
import * as Sentry from '@sentry/react-native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from 'react';
import "./globals.css";

Sentry.init({
  dsn: 'https://656e7a25e07c453b9b53c47ecef2e119@o4504782718173184.ingest.us.sentry.io/4504782734295040',

  // Adds more context data to events (IP address, cookies, user, etc.)
  // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
  sendDefaultPii: true,

  // Configure Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1,
  integrations: [Sentry.mobileReplayIntegration(), Sentry.feedbackIntegration()],

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: __DEV__,
});




export default Sentry.wrap(function RootLayout() {

  const {isLoading, fetchAuthenticatedUser } = useAuthStore()


  // const pathname = usePathname();
  
  // console.log('Current pathname:', pathname);

  const  [loaded, error]  = useFonts({
    "Quicksand-Bold" : require('../assets/fonts/Quicksand-Bold.ttf'),

    "Quicksand-Medium" : require('../assets/fonts/Quicksand-Medium.ttf'),
    "Quicksand-Regular" : require('../assets/fonts/Quicksand-Regular.ttf'),
    "Quicksand-SemiBold" : require('../assets/fonts/Quicksand-SemiBold.ttf'),
    "Quicksand-Light" : require('../assets/fonts/Quicksand-Light.ttf'),  

  })


  useEffect(()=>{

    if(error) throw error

    if(loaded) SplashScreen.hideAsync();

  }, [loaded, error])


  useEffect(()=>{


    console.log('This was fired')

    fetchAuthenticatedUser()

  }, [])


  if(!loaded || isLoading) return null
  return <Stack screenOptions={{
    headerShown:false
  }}/>;
});


