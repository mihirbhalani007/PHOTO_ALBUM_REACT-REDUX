import { useFetchAlbumQuery } from "../store/Apis/albumsApi";
import Skeleton from "./Skeleton";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumQuery(user);

  let content;

  if (isLoading) {
    content = <Skeleton times={5} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos of the album
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div>ALbums for {user.name}</div>
      <div>{content}</div>
    </div>
  );
}
export default AlbumList;
