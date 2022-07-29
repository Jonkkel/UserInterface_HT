
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
    const { name, text, badge, distance } = props;
    return (
        <Card sx={{ minWidth: 275, borderRadius: 4 }}>
            <CardContent sx={{ textAlign: 'start' }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Profile
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {distance}
                </Typography>
                {badge ?
                    <Box>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Reason
                        </Typography>
                        <Divider />
                        <Box
                            sx={{ display: 'flex' }}>
                            {badge}
                            <Typography variant="body2" component="div" sx={{ my: 0.3, ml: 0.2 }}>
                                {text}
                            </Typography>
                        </Box>
                    </Box>
                    :
                    <></>
                }


            </CardContent>
        </Card>
    );
}