import React from 'react';
import { useState} from 'react';
import s from "./LocationSelector.module.scss";

interface Props {
    selected: string;
    options: string[];
}

export const LocationSelector = ({ selected, options }: Props) => {
    const [expanded, toggleExpand] = useState(false);
    const selectRef = React.createRef<HTMLDivElement>();
    
    function expandDropdown(){
        toggleExpand(true);
    }
    document.addEventListener('click',(event)=>{
        if(selectRef.current && !(selectRef.current as any).contains(event.target)){
            toggleExpand(false);
  
        }

    })

    return (
        <div className={s.selectDropdown} ref={selectRef}>
            <input className={s.selected} value={selected} onClick={expandDropdown}></input>
            <ul className={`${s.options} ${expanded? s.expanded : s.closed}`} >
                {
                    options.map((option)=>(
                        <li className={s.option} value={s.option}>
                            {option}
                        </li>)
                    )

                }

            </ul>

        </div>
    )
}