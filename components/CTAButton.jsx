import React from 'react'
import { Button } from './ui/button'
import { LogInIcon, UserPlus } from 'lucide-react'

const CTAButton = ({ text }) => {
    return (
        <Button variant={'default'} className={text === 'Login' ? 'bg-blue-600 hover:bg-blue-700 text-white font-bold hover:cursor-pointer' : 'bg-rose-600 hover:bg-rose-700 text-white font-bold hover:cursor-pointer'}>
            {text === 'Login' ? <LogInIcon className="mr-2 h-4 w-4" /> : <UserPlus className="mr-2 h-4 w-4" />} {text}
        </Button>
    )
}

export default CTAButton