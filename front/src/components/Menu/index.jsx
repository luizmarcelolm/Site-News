'use client';

import './style.css'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Menu = () => {
    const [ menulateral, setMenuLateral ] = useState(false)
    const router = useRouter()

    return (
        <>
        <nav className='menu'>
             <button onClick={() => setMenuLateral(!menulateral)}>Menu</button>
             <div>Logo</div>
             <button onClick={() => router.push('/login')}>Login</button>
        </nav>

        { menulateral &&
           <div className='menu_lateral'>
            <div className='fechar' onClick={() => setMenuLateral(!menulateral)}>X</div>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
          </div>}
       </>
    )
}
export default Menu;