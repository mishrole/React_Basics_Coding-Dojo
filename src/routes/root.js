import { Redirect, Switch, Route } from 'react-router-dom';

const Root = () => {
    return (
        <Switch>
            <Route path="/home" />
            <Redirect from = "/" to = "/home" />
        </Switch>
    )
}

export default Root