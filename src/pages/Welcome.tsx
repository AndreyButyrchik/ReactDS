import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { RouterLink } from '../App';

export const Welcome = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" mt={6}>
            <Paper>
                <Box p={24} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                    <Typography variant="h1">Welcome!</Typography>
                    <Button component={RouterLink} to="/comparing">Start using</Button>
                </Box>
            </Paper>
        </Box>
    );
}
