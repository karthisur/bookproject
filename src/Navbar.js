import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'
import './Navbar.css'



export default function Navbar() {
    const [activeItem,setactiveItem]=useState();

    return (
        
        <div>
           
            
            <Segment inverted>
                <Menu  secondary pointing inverted>
                    <Menu.Item>
                        <img src='logo.png' className='photo'/>
                    
                        
                    </Menu.Item>
                    <Menu.Item>
                    <h4  className='App'>Book Shop</h4>
                        
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='Home'
                            as={Link} to = '/home'
                        active={activeItem === 'home'}
                         onClick={()=>setactiveItem('home')}
                        >
                            Home
                        </Menu.Item>

                        <Menu.Item
                            name='about'
                            as={Link} to = '/about'
                        active={activeItem === 'about'}
                        onClick={()=>setactiveItem('about')}
                        >
                            About
                        </Menu.Item>

                        <Menu.Item
                            name='Book'
                            as={Link} to = '/book'
                         active={activeItem === 'book'}
                         onClick={()=>setactiveItem('Book')}
                        >
                            Book
                        </Menu.Item>
                        <Menu.Item
                            name='Order'
                            as={Link} to = '/order'
                         active={activeItem === 'order'}
                         onClick={()=>setactiveItem('order')}
                        >
                            Order
                        </Menu.Item>
                        <Menu.Item
                            name='Contact'
                            as={Link} to = '/contact'
                         active={activeItem === 'contact'}
                         onClick={()=>setactiveItem('contact')}
                        >
                            Contact
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Segment>
           


            

            
        



        </div>
        
    )
}
