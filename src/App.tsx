import * as React from 'react';
import { BrowserRouter as Router, Route, Link, LinkProps } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import { Welcome } from './pages/Welcome';
import Comparing from './pages/Comparing';
import { Rating } from './pages/Rating';

export const RouterLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <Link innerRef={ref} {...props} />
));

export const App = () => {
    return (
        <Router>
            <ButtonGroup fullWidth  variant="contained" size="medium">
                <Button color="primary" component={RouterLink} to="/comparing">
                    Comparing
                </Button>
                <Button color="primary" component={RouterLink} to="/rating">
                    Rating
                </Button>
            </ButtonGroup>
            <Route exact path={'/'}>
                <Welcome />
            </Route>
            <Route exact path={'/comparing'}>
                <Comparing />
            </Route>
            <Route exact path={'/rating'}>
                <Rating />
            </Route>
        </Router>
    );
}
