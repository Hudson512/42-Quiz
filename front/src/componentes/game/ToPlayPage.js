import './To_play.css'
import Header from "../profile/header";
import Quiz from './game';

const data = [
    "person",
    "profile",
    "profile"
]

function ToPlay() {
    return (
        <>
            <Header dados={ data }/>
            <Quiz />
        </>
    );
}

export default ToPlay;