import { ChangeEvent } from "react";
import { Album } from "./AlbumVoting";
import React from "react";

type Props = {
  album: Album;
  onChange: (updatedAlbum: Album) => void;
}

export const AlbumItem = React.memo(({ album, onChange }: Props) => {

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange({
      ...album,
      [e.target.name]: e.target.value
    });
  }

  return <p>
    Title:
    <input
      value={album.title}
      name="title"
      onChange={handleChange}
    />

    Rating
    <input
      type="number"
      name="rating"
      value={album.rating}
      onChange={handleChange}
    />
  </p>
})