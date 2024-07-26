import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles from './sidebar.module.css';

export default function SidebarComponent(){

    return(
        <Sidebar>
            <Menu
             menuItemStyles={{
                Menu:{
                    backgroundColor:'gray'
                    
                },
                button: {
                    [`&.active`]: {
                    backgroundColor: '#13395e',
                    color: '#b6c8d9',
                    },
                }
    }}>
                
                <SubMenu label="Charts">
                <MenuItem> Pie charts </MenuItem>
                <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
            </Menu>
        </Sidebar>
    )
}