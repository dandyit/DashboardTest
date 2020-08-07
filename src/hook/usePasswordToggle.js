import React,{useState} from 'react';

const usePasswordToggle = ()=>{
    const [visible, setVisibility] = useState(false);

    // const Icon = visible ? 'Show' : 'Hide';
    // const Icon = (
    //     icon = {visible ? 'Show' : 'Hide'}
    // onclick={()=> setVisibility(visiblity => !visiblity)}
    // );

    function Icon(){
        setVisibility(!visible);
    }

    const InputType = visible ? 'text' : 'password';

    return [InputType, Icon]
}

export default usePasswordToggle;