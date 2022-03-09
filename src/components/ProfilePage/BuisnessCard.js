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
import Popover from '@mui/material/Popover';
import email from '../../assets/email.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import location from '../../assets/location.png'
import site from '../../assets/site.png'
import twitter from '../../assets/twitter.png'
import whatsapp from '../../assets/whatsapp.png'
import youtube from '../../assets/youtube.png'
import QRcodeicon from '../../assets/QRcodeicon.png'



const BuisnessCard = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleQRClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
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

                <Card sx={{ minWidth: 475, marginBottom: '20px', border: "none", boxShadow: "none", }}>
                    <CardHeader style={{ flexDirection: 'row-reverse' }} avatar={

                        <Avatar style={{ cursor: 'pointer' }} alt="Remy Sharp" src={QRcodeicon} onClick={handleQRClick}>

                        </Avatar>
                    } />
                    <CardContent>



                        <CardMedia style={{ width: '650px' }}
                            component="img"



                            image={props.cardfront}
                            alt="Paella dish" />

                    </CardContent>
                    <Switch onClick={handleClick} />

                </Card>



                <Card sx={{ minWidth: 475, marginBottom: '20px' }}>
                    <CardHeader style={{ flexDirection: 'row-reverse' }} avatar={
                        <Avatar style={{ cursor: 'pointer' }} alt="Remy Sharp" src={props.qr} onClick={handleQRClick}>

                        </Avatar>


                    } />
                    <CardContent>
                        <CardMedia component="img"

                            image={props.cardback}
                            alt="Paella dish" />

                    </CardContent>

                    <Switch onClick={handleClick} defaultChecked />

                </Card>

            </ReactCardFlip>
            <Stack style={{ justifyContent: 'center' }} direction="row" spacing={2}>
                {!!props.fb ? (
                    <a href={props.fb}><img style={{ width: '50%' }} src={facebook} ></img> </a>
                ) : ''}
                {!!props.insta ? (
                    <a href={props.insta}><img style={{ width: '50%' }} src={instagram} /></a>
                ) : ''}
                {!!props.linkin ? (
                    <a href={props.linkin}><img style={{ width: '50%' }} src={linkedin} /></a>
                ) : ''}

                {!!props.twitter ? (
                    <a href={props.twitter}><img style={{ width: '50%' }} src={twitter} /></a>
                ) : ''}
                {!!props.whatsapp ? (
                    <a href={props.whatsapp}><img style={{ width: '50%' }} src={whatsapp} /></a>
                ) : ''}
                {!!props.youtube ? (
                    <a href={props.youtube}><img style={{ width: '50%' }} src={youtube} /></a>
                ) : ''}
                {!!props.url ? (
                    <a href={props.url}><img style={{ width: '50%' }} src={site} /></a>
                ) : ''}
                {!!props.mail ? (
                    <a href={props.mail}><img style={{ width: '50%' }} src={email} /></a>
                ) : ''}
            </Stack>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <img src={props.qr} />
            </Popover>
        </div>

    )
}
export default BuisnessCard
