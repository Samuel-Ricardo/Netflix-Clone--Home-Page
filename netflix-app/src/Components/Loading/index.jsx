import { Height } from '@material-ui/icons'
import React from 'react'
import './Loading.css'

export default ({src, exitTime}) => {

    const [exit, setExit] = React.useState(false)

    if(exitTime > 0){

         
        setTimeout (() => {

            setExit(true)

        }, exitTime) 


        return(

            <div>

                {exit ? null
                        :
                    <div className='Loaded'>
                
                        <img src={src}>
                        </img>
                    
                    </div>
    }

            </div>
            
        )
    }

    return(
        
        <div className='Loading'>

            <img src={src}>
            </img>
            
        </div>
    )
}