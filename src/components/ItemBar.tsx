import React from 'react'
import { ItemBarProps } from '../interfaces/components'
import { BarBackground, BarBorder} from '../styles'

export const ItemBar = ({title, size=0, background="#acdeaa"}:ItemBarProps) => {
    return (
        <div style={{width: '100%'}}>
            <p>{title}: {size} </p>
            <BarBorder>
                <BarBackground backgroundColor={background} size={size*100/200} />
            </BarBorder>
        </div>
    )
}
