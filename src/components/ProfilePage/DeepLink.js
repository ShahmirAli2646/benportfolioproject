import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import ReactCardFlip from 'react-card-flip';
import Switch from '@mui/material/Switch';
import { Stack } from '@mui/material';
import { CardMedia } from '@mui/material';



const DeepLink = (props) => {
    return (
        <div>
            <Card style={{marginBottom:'50px'}}>
                <CardContent>
                    <Stack direction="row" spacing={2}>
                        <CardMedia style={{width:'11%'}}component="img"
                           
                            image={props.qr}
                            alt="Paella dish" />
                            <Stack direction="column" spacing={2}>
                            <Typography>{props.url}</Typography>
                            <Typography>{'Scan QR code or follow the link to save my smart buinsess card'}</Typography>
                            </Stack>
                            <Typography>{'Powered by UPDATE APP'}</Typography>
                    </Stack>
                </CardContent>
            </Card>
        </div>
    )
}
export default DeepLink
