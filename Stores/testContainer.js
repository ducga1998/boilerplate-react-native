import { Container } from 'unstated-x'
class TestContainer extends Container {
    constructor() {
        this.state = {
            route: ''
        }
    }

}

export const testContainer = new TestContainer({
    route: 'home'
})