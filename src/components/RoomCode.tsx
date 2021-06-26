import copyImg from '../assets/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code)

        alert('Copiado para a área de transferência.')
    }
    return (
        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="copy room code" />
            </div>
            <span>Sala #McvUMYXx_XWbh5PgEGI</span>
        </button>
    )
}