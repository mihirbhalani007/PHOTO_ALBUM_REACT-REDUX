import { useFetchAlbumQuery } from "../store";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumQuery(user);
  console.log(data, error, isLoading);
  return <div>ALbums for {user.name}</div>;
}

export default AlbumList;
