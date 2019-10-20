import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


export interface IRatingState {
}

export interface IRatingProps {
}

export class Rating extends React.PureComponent<IRatingProps, IRatingState> {
    constructor(props: IRatingProps) {
        super(props);

        this.state = {
        };
    }
    
    public render() {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" mt={6}>
                <Paper>
                    <Box p={24} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4">Rating!</Typography>
                        <List component="nav" aria-label="main mailbox folders">
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar src={require("../images/0.png")} />
                                </ListItemAvatar>
                                <ListItemText primary="Alina" />
                            </ListItem>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar src={require("../images/1.png")} />
                                </ListItemAvatar>
                                <ListItemText primary="Masha" />
                            </ListItem>
                        </List>
                    </Box>
                </Paper>
            </Box>
        );
    }
}
