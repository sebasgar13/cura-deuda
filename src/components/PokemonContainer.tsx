import { PokemonContainerProps } from '../interfaces/components'
import { ContainerStart } from '../styles'

export const PokemonContainer = ({children, title, titleFull=false}:PokemonContainerProps) => {
    return (
        <ContainerStart>
            <h4 style={{width: titleFull? '100%': 'auto'}}>{title}</h4>
            <div style={{width: titleFull? '100%': 'auto'}}>
                {children}
            </div>
        </ContainerStart>
    )
}
