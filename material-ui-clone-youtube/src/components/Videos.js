import React, { useState, useEffect } from "react";
import { Toolbar, Box, Typography, Grid, Avatar } from "@material-ui/core";

import { videoApi } from "../services/videoApi";
import { channelApi } from "../services/channelApi";

function VideosComponent({ classes }) {
  const [videos, setVideos] = useState([]);

  function viewsDescription(views) {
    if (views < 1000000)
      return `${views
        .toString()
        .substring(0, views.length - 3)} mil visualizações`;
    else {
      const decimal = Number(
        views.toString().substring(views.length - 6, views.length - 5)
      );

      if (decimal)
        return `${Number(
          views.toString().substring(0, views.length - 6)
        )},${decimal} mi de visualizações`;
      else
        return `${Number(
          views.toString().substring(0, views.length - 6)
        )} mi de visualizações`;
    }
  }

  function dateDescription(publishedAt) {
    const date = new Date(publishedAt);
    const now = new Date();
    const days =
      Math.abs(now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    if (days < 7) {
      return `há ${days.toFixed(0) - 1} dias`;
    } else if (days < 30) {
      return `há ${(days / 7).toFixed(0) - 1} semanas`;
    } else if (days < 365) {
      return `há ${(days / 30).toFixed(0) - 1} meses`;
    } else return `há ${(days / 365).toFixed(0) - 1} anos`;
  }

  useEffect(() => {
    let newVideos = [];
    videoApi.get().then((response) => {
      response.data.items.forEach(async (item) => {
        const responseChannel = await channelApi(item.snippet.channelId).get();
        const avatar =
          responseChannel.data.items[0].snippet.thumbnails.high.url;

        newVideos.push({
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          views: viewsDescription(item.statistics.viewCount),
          date: dateDescription(item.snippet.publishedAt),
          thumb: item.snippet.thumbnails.maxres.url,
          avatar,
        });
      });
      setVideos(newVideos);
    });
  }, []);

  return (
    <Box>
      <Toolbar />
      <Typography variant="h5" color="textPrimary" style={{ fontWeight: 600 }}>
        Recomendados
      </Typography>
      <Grid container spacing={4}>
        {videos.map((item, index) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <img
                style={{ width: "100%" }}
                alt={item.title}
                src={item.thumb}
              />
              <div className={classes.divAvatar}>
                <Avatar alt={item.channel} src={item.avatar} />
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`${item.views} •`}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.date}
                  </Typography>
                </Box>
              </div>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default VideosComponent;
