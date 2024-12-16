import React, { useState } from 'react'
import './index.css'
import  {auth, googleProvider, fbProvider, githubProvider} from './firebase';


const App = () => {

    const [user, setUSer] =useState(null);
    const googleLogin = async() =>{
        try{
            await auth.signInWithPopup(googleProvider); 
            setUSer(await auth.currentUser);
        }catch (error){

        }
    }
    const fbLogin = async() =>{
        try{
            await auth.signInWithPopup(fbProvider); 
            setUSer(await auth.currentUser);
        }catch (error){

        }
    }

    const githubLogin = async() =>{
        try{
            await auth.signInWithPopup(githubProvider); 
            setUSer(await auth.currentUser);
        }catch (error){

        }
    }
    console.log(user);

  return (
    <section>
        <div>
            <div className='buttonContainer' onClick={googleLogin}>
                <img src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
                alt="">   
                </img>
                <button>Google Login</button>
            </div>
            <div className='buttonContainer' onClick={fbLogin}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png"
                alt="">
                   
                </img>
                <button>Facebook Login</button>
            </div>
            <div className='buttonContainer' onClick={githubLogin}>
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="">
                   
                </img>
                <button>Github Login</button>
            </div>
        </div>
        <h1> Email </h1>
    </section>
  )
}

export default App