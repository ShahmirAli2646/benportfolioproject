import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import src from '../../assets/test.jpg'
import ReactCardFlip from 'react-card-flip';
import Switch from '@mui/material/Switch';
import { Stack } from '@mui/material';
import { CardMedia } from '@mui/material';


const BuisnessCard = (props) => {
    const [isFlipped, setState] = React.useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        if (isFlipped === false) {
            setState(true)
        }
        else {
            setState(false)
        }
    }


    return (
        <div style={{ marginTop: '130px' }}>
            <Typography style={{ textAlign: 'left', marginBottom: '20px' }}>{props.username}</Typography>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

                <Card sx={{ minWidth: 475, marginBottom: '20px' }}>
                    <CardHeader style={{flexDirection:'row-reverse'}} avatar={
                        <Avatar  alt="Remy Sharp" src={props.photo} />
                    } />
                    <CardContent>
                        <CardMedia component="img"
                            
                            image={props.cardfront}
                            alt="Paella dish" />

                    </CardContent>
                    <Switch onClick={handleClick} />

                </Card>



                <Card sx={{ minWidth: 475, marginBottom: '20px' }}>
                <CardHeader style={{flexDirection:'row-reverse'}} avatar={
                        <Avatar  alt="Remy Sharp" src={props.photo} />
                    } />
                    <CardContent>
                        <CardMedia component="img"
                            
                            image={props.cardback}
                            alt="Paella dish" />

                    </CardContent>

                    <Switch onClick={handleClick} defaultChecked />

                </Card>

            </ReactCardFlip>
            <Stack style={{justifyContent:'center'}} direction="row" spacing={2}>
                <Button variant="outlined" href={props.fb}>Facebook</Button>
                <Button variant="outlined" href={props.insta}>Instagram</Button>
                <Button variant="outlined" href={props.linkin}>LinkedIn</Button>
            </Stack>
        </div>

    )
}
export default BuisnessCard
