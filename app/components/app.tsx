import * as React from 'react'
import { Container, ContainerListItem } from './containerListItem'
import { ContainerList } from './containerList'
import * as _ from 'lodash'

class AppState {
    containers?: Container[]
    stoppedContainers?: Container[]
}
// class React.Component<P = {}, S = {}, SS = any>
export class AppComponent extends React.Component<{}, AppState> {
    constructor() {
        super()

        const partitioned = _.partition(this.containers, (c: Container) => c.state == 'running')

        this.state = {
            containers: partitioned[0],
            stoppedContainers: partitioned[1]
        }
    }

    containers: Container[] = [
        {
            id: '1',
            name: 'test container',
            image: 'some image',
            state: 'running',
            status: 'Running'
        },
        {
            id: '2',
            name: 'another test container',
            image: 'some image',
            state: 'stopped',
            status: 'Running'
        },
        {
            id: '3',
            name: 'another test container 1',
            image: 'some image',
            state: 'stopped',
            status: 'Running'
        }
    ]

    render() {
        return (
            <div className="container">
                <h1 className="page-header">Docker Dashboard</h1>

                <ContainerList title="Running" containers={this.state.containers} />
                <ContainerList title="Stopped" containers={this.state.stoppedContainers} />
            </div>
        )
    }
}