import * as React from 'react';
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


const Rating = (props: any) => {
    const topFive = Object.keys(props.rating).sort((a,b) => props.rating[b] - props.rating[a]).slice(0, 5);
    return (
        <Box display="flex" justifyContent="center" alignItems="center" mt={6}>
            <Paper>
                <Box p={6} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4">Rating!</Typography>
                    <List component="nav" aria-label="main mailbox folders">
                        {
                            topFive.map(id => (
                                <ListItem button key={id}>
                                    <ListItemAvatar>
                                        <Avatar src={require(`../images/${id}.png`)} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Alina" secondary={`Number of likes: ${props.rating[id]}`}/>
                                </ListItem>
                            ))
                        }
                        
                    </List>
                </Box>
            </Paper>
        </Box>
    );
}

const mapStateToProps = (state: any) => ({
    rating: state.rating,
})

export default connect(mapStateToProps)(Rating)