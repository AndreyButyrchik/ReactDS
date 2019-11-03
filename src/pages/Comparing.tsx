import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux'
import { likeGirl } from '../actions/index';


const styles = {
    media: {
      height: 200,
      width: 200,
    },
};


export interface IComparingState {
    firstPhotoNumber: number;
    secondPhotoNumber: number;
}

export interface IComparingProps {
}

class Comparing extends React.PureComponent<any, any> {
    
    constructor(props: any) {
        super(props);

        this.state = {
            firstPhotoNumber: 0,
            secondPhotoNumber: 0,
        };

        this.changeGirls = this.changeGirls.bind(this);
    }

    public componentDidMount() {
        this.setState({
            firstPhotoNumber: this._getRandomArbitrary(0, 990),
            secondPhotoNumber: this._getRandomArbitrary(0, 990),
        })
    }

    public changeGirls = (event: any, id: any) => {
        this.props.likeGirl(id);
        this.setState({
            firstPhotoNumber: this._getRandomArbitrary(0, 990),
            secondPhotoNumber: this._getRandomArbitrary(0, 990),
        });
    }

    private _getRandomArbitrary = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    public render() {
        const {classes} = this.props;

        return (
            <Box display="flex" justifyContent="center" alignItems="center" mt={6}>
                <Paper>
                    <Box p={12} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                        <Typography variant="h4">Choose a girl!</Typography>
                        <Box display="flex" alignItems="center">
                            <Box m={6}>
                                <Card>
                                    <CardActionArea onClick={e => this.changeGirls(e, this.state.firstPhotoNumber)}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require(`../images/${this.state.firstPhotoNumber}.png`)}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Box>
                            <Box m={6}>
                                <Card>
                                    <CardActionArea onClick={e => this.changeGirls(e, this.state.secondPhotoNumber)}>
                                        <CardMedia
                                            className={classes.media}
                                            image={require(`../images/${this.state.secondPhotoNumber}.png`)}
                                        />
                                    </CardActionArea>
                                </Card>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    likeGirl: (id: number) => dispatch(likeGirl(id))
})


export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles)(Comparing));