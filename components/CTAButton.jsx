import React from 'react'
import { Button } from './ui/button'
import { LogInIcon, UserPlus } from 'lucide-react'
import Link from 'next/link'

const CTAButton = ({ text }) => {
    return (
        <Button variant={'default'} className={text === 'Login' ? 'bg-blue-600 hover:bg-blue-700 text-white font-bold hover:cursor-pointer' : 'bg-rose-600 hover:bg-rose-700 text-white font-bold hover:cursor-pointer'}>
            <Link rel="nofollow" target="_blank" href="https://in999.club/#/register?invitationCode=46776342898">
                {text === 'Login' ? <LogInIcon className="mr-2 h-4 w-4 inline" /> : <UserPlus className="mr-2 h-4 w-4 inline" />} {text}
            </Link>
        </Button>
    )
}

export default CTAButton