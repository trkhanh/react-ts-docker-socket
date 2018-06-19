import * as React from 'react'
import { ContainerListItem, Container } from './containerListItem'
import { ContainerList } from './containerList'

import * as _ from 'lodash'
import * as io from 'socket.io-client'
let socket = io.connect()

class AppState {
    containers?: Container[]
    stoppedContainers?: Container[]
}

// class React.Component<P = {}, S = {}, SS = any>
export class AppComponent extends React.Component<{}, AppState> {

    constructor() {
        super()
        this.state = {
            containers: [],
            stoppedContainers: []
        }

        //Listening for "containers.list" 
        //using socket.on(string, callback()) 
        //callback= handlerFunction(containers: any){ }

        socket.on('containers.list', (containers: any) => {

            const partitioned = _.partition(containers, (c: Container) => c.state == 'running')
            
            this.state = {
                containers: partitioned[0].map(this.mapContainer),
                stoppedContainers: partitioned[1].map(this.mapContainer)
            }
        })
    }

    componentDidMount() {
        socket.emit('containers.list');
    }

    mapContainer(container: any): Container {
        return {
            id: container.Id,
            name: _.chain(container.Names)
                .map((n: string) => n.substr(1))
                .join(", ")
                .value(),
            state: container.State,
            status: `${container.State} (${container.Status})`,
            image: container.Image
        }
    }

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