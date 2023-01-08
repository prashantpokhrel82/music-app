import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((store) => store.player);
  const { id: artistId } = useParams();
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  console.log(artistId);

  console.log(artistData);

  if (isFetchingArtistDetails) {
    return <Loader title="Loading Artist Details" />;
  }
  if (error) {
    <Error />;
  }

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      {/* <RelatedSongs
        data={artistData?.data[0]?.views?.top - songs.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      /> */}
    </div>
  );
};

export default ArtistDetails;
