import * as React from 'react'
import { Container, ContainerListItem } from './containerListItem'

//TODO: abstract class or class better
//cannot use protected be cause this abstract class. Becasue the props of this module which inherted from 
//here be declare by other class
export abstract class ContainerListProps {
    containers: Container[]
    title?: string
}

export class ContainerList extends React.Component<ContainerListProps, {}>{
    // using the spread operator (the ...c part) to apply the properties on Container to the component
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.containers.length == 0 ? "No containers to show" : ""}</p>
                <div className="row">
                    {this.props.containers.map((c: Container) => <ContainerListItem key={c.name} {...c} />)}
                </div>
            </div>
        )
    }
}