import React, { Fragment, useContext, useState, useEffect } from "react";
import { context } from "../MyContextApi";
import axios from "axios";

export const MyPlaylist = () => {
  const { playlist, token } = useContext(context);
  const [trackId, setTrackId] = useState("");
  const [track, setTrack] = useState([]);

  const trackIdOfPlaylist = playlist.map((item) => {
    return item.id;
  });

  useEffect(() => {
    setTrackId(trackIdOfPlaylist[0]);
    console.log(trackId);

    const fetchTrackData = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${trackId}/tracks`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setTrack(response.data.items);
      } catch (error) {
        console.log(error);
      }
    };

    if (token && trackId) {
      fetchTrackData();
    }
  }, [trackId, token]);

  console.log(track);

  return (
    <div className="w-full h-full">
      <div className="mt-10 flex justify-between px-[13%]">
        <h1 className="font-extrabold text-2xl mb-5">My Playlist</h1>
        <p className="font-medium text-xl mb-5">Show All</p>
      </div>
      <div>
        {playlist.map((item) => (
          <Fragment key={item.id}></Fragment>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 text-center gap-5 text-[12px] w-4/5">
          <p className="text-lg font-bold my-5 tracking-wide">Title</p>
          <p className="text-lg font-bold my-5 tracking-wide">Artist</p>
          <p className="text-lg font-bold my-5 tracking-wide">Time</p>
          <p className="text-lg font-bold my-5 tracking-wide"> Album</p>
          {track.map((trackItem) => (
            <Fragment key={trackItem.id}>
              <div className="w-3/5">
                <p>{trackItem.track.name}</p>
              </div>

              <div>
                {trackItem.track.artists.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </div>
              <div>
                <p>{trackItem.added_at}</p>
              </div>
              <div className="w-3/5">
                <p>{trackItem.track.album.name}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
