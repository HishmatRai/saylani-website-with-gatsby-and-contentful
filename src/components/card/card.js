import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 515,
  },
  media: {
    height: 210,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.saylaniwelfare.com/public_html/images/saylani/slider1.png"
        />
       <ul>
           <li>
               jhjk
           </li>
           <li>
               jhjk
           </li>
           <li>
               jhjk
           </li>
           <li>
               jhjk
           </li>
       </ul>

      </CardActionArea>
    </Card>
  );
}
