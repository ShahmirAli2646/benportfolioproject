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
import qrfinal from '../../assets/qrfinal.png'



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


                <Card sx={{ minWidth: '540px', marginBottom: '20px', position: "relative", border: "none", boxShadow: "none", justifyContent: "left", alignItems: "left", }}>
                    {/* <CardHeader style={{ flexDirection: 'row-reverse' }} avatar={

                        <Avatar style={{ cursor: 'pointer' }} alt="Remy Sharp" src={QRcodeicon} onClick={handleQRClick}>

                        </Avatar>
                    } /> */}
                    <CardContent style={{ width: '102%', alignContent: 'left', position: 'relative', left: '-14px' }}>

                        {/* <QrCode2Icon color="disabled" fontSize="large" style={{}} /> */}
                        <Avatar style={{ cursor: 'pointer', position: 'relative', left: '86%', top: "70px", height: '50px', width: "50px", }} alt="Remy Sharp" src={qrfinal} onClick={handleQRClick}></Avatar>
                        <CardMedia


                            style={{
                                width: '103%', borderRadius: "4%",
                            }}
                            component="img"
                            image={props.cardfront}
                            alt="Paella dish"

                        />

                    </CardContent>
                    <Switch onClick={handleClick} />

                </Card>



                <Card sx={{ minWidth: '540px', marginBottom: '20px', position: "relative", border: "none", boxShadow: "none", justifyContent: "left", alignItems: "left", }}>
                    {/* <CardHeader style={{ flexDirection: 'row-reverse' }} avatar={
                        <Avatar style={{ cursor: 'pointer' }} alt="Remy Sharp" src={props.qr} onClick={handleQRClick}>

                        </Avatar>


                    } /> */}
                    <Avatar style={{ cursor: 'pointer', position: 'relative', left: '86%', top: "70px", height: '50px', width: "50px", }} alt="Remy Sharp" src={qrfinal} onClick={handleQRClick}></Avatar>
                    <CardContent style={{ width: '102%', alignContent: 'left', position: 'relative', left: '-14px' }}>

                        <CardMedia component="img"
                            style={{ width: '103%', borderRadius: "4%" }}
                            image={props.cardback}
                            alt="Paella dish" />

                    </CardContent>

                    <Switch onClick={handleClick} defaultChecked />

                </Card>

            </ReactCardFlip>
            <Stack style={{ justifyContent: 'center' }} direction="row" spacing={2}>
                {!!props.fb ? (
                    <a href={props.fb}><img style={{ width: '50px', height: '50px' }} src={facebook} ></img> </a>
                ) : ''}
                {!!props.insta ? (
                    <a href={props.insta}><img style={{ width: '50px', height: '50px' }} src={instagram} /></a>
                ) : ''}
                {!!props.linkin ? (
                    <a href={props.linkin}><img style={{ width: '50px', height: '50px' }} src={linkedin} /></a>
                ) : ''}

                {!!props.twitter ? (
                    <a href={props.twitter}><img style={{ width: '50px', height: '50px' }} src={twitter} /></a>
                ) : ''}
                {!!props.whatsapp ? (
                    <a href={props.whatsapp}><img style={{ width: '50px', height: '50px' }} src={whatsapp} /></a>
                ) : ''}
                {!!props.youtube ? (
                    <a href={props.youtube}><img style={{ width: '50px', height: '50px' }} src={youtube} /></a>
                ) : ''}
                {!!props.url ? (
                    <a href={props.url}><img style={{ width: '50px', height: '50px' }} src={site} /></a>
                ) : ''}
                {!!props.mail ? (
                    <a href={props.mail}><img style={{ width: '50px', height: '50px' }} src={email} /></a>
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
