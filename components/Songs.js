import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistyAtom'
import Song from './Song'

function Songs() {
  const playlist = useRecoilValue(playlistState)
  return (
    <div className="flex flex-col space-y-2 px-8 pb-28 text-white">
      {playlist?.tracks.items.map((track, index) => (
        <Song key={track.track.id} track={track} order={index} />
      ))}
    </div>
  )
}

export default Songs