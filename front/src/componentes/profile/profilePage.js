import './Profile.css';
import Header from "./header";
import ProfileDetails from "./profile_details";
import { useEffect, useState } from 'react';

const serverUrl = 'http://localhost:8000';

const data = [
    "games",
    "game",
    "To play"
];

function Profile() {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        // Verifica se os dados já estão no LocalStorage
        const cachedProfileData = localStorage.getItem('profileData');

        if (cachedProfileData) {
            // Se houver dados no LocalStorage, os utiliza
            setProfileData(JSON.parse(cachedProfileData));
            console.log('Dados carregados do cache.');
        } else {
            // Se não houver, faz a requisição
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get('code');

            if (code) {
                fetch(`${serverUrl}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ code: code })
                })
                .then(response => response.json())
                .then(data => {
                    setProfileData(data);
                    localStorage.setItem('profileData', JSON.stringify(data));
                    console.log('Dados carregados da API e armazenados no cache.');
                })
                .catch(error => {
                    document.getElementById('loading').textContent = 'Erro ao obter dados.';
                    console.error(`Erro ao obter dados:, ${error}`)
                });
            } else {
                document.getElementById('loading').textContent = 'Código de autorização não encontrado.';
                console.error('Código de autorização não encontrado.');
            }
        }
    }, []);

    return (
        <>
            <Header dados={data} />
            {profileData ? (
                <ProfileDetails profile={profileData} />
            ) : (
                <p id='loading'>Carregando dados do perfil...</p>
            )}
        </>
    );
}

export default Profile;
