import CopyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss'

type RoomCodeType = {
  code: string;
}

export function RoomCode(props: RoomCodeType) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={CopyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}