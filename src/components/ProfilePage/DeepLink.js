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
import Link from '@mui/material/Link';
import power from '../../assets/Powered-by.png'



const DeepLink = (props) => {
    return (
        <div>
            <Card style={{ marginBottom: '40px', backgroundColor: '#EEEEEE', }} >
                <CardContent>
                    <Stack direction="row" spacing={2}>
                        <CardMedia style={{ width: '17%' }} component="img"

                            image={props.qr}
                            alt="Paella dish" />
                        <Stack direction="column" spacing={2}>
                            <Link style={{ textAlign: "left" }} href={props.url}>{props.url}</Link>
                            <Typography style={{ textAlign: "left" }}>{'Scan QR code or follow the link to save my smart buinsess card'}</Typography>
                        </Stack>
                        <img style={{ width: '19%', height: '60px' }} src={power} />
                    </Stack>
                </CardContent>
            </Card>
        </div>
    )
}
export default DeepLink
