import type { CSSProperties } from "react";




const firstName = 'Fernando!!';
const lastName = 'Herrera';

const favoriteGames = ['elder ring', 'smash', 'metal gear'];

const isActive = true;

const address = {
    zipCode: '123-ABC',
    country: 'Canada'
}

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 20,
    padding: 10,
}

export function MyAwesomeApp() {

    return (
        <>
            <h1> {firstName} </h1>
            <h3> {lastName} </h3>

            <p>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p
                style={myStyles}
            >
                {JSON.stringify(address)}</p>
        </>
    )
}


