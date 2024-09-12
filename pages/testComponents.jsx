import { RxButton } from 'react-icons/rx'
import Button from '../src/components/button/button'


export default function TestComponents (){
    return(
        <>
        <Button/>     
        <Button icon={true}></Button>
        <Button type='light'></Button>
        <Button type='light' icon={true} ></Button>
        </>
    )
}