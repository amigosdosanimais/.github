import { RxButton } from 'react-icons/rx'
import Button from '../src/components/button/button'


export default function TestComponents (){
    return(
        <>
        <div>
            <Button type='dark'/>
            <Button type='dark' icon></Button>
            <Button type='default' icon></Button>
            <Button type='light'></Button>
            <Button type='light' icon={true} ></Button>
        </div>
        <div>
            <Button type='dark' disabled/>
            <Button type='dark' icon disabled></Button>
            <Button type='default' icon disabled></Button>
            <Button type='light' disabled></Button>
            <Button type='light' icon={true} disabled ></Button>
        </div>
        <div>
            <Button type='dark' shadow/>
            <Button type='dark' icon shadow></Button>
            <Button type='default' icon shadow></Button>
            <Button type='light' shadow></Button>
            <Button type='light' shadow icon={true} ></Button>
        </div>
        <div>
            <Button type='light' icon width='200px' text='Cadastrar' shadow></Button>
        </div>
        </>
    )
}