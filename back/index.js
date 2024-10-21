const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const UID = "u-s4t2ud-2ecf03adfd0a8767bb4982ed08af26ad48f8520203ab560647328bedc1890cdd";
const SECRET = "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";
const redirectURI = "http://localhost:3000/profile";
const token_url = "https://api.intra.42.fr/oauth/token";


app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    const { code } = req.body;
    if (!code)
        return res.status(400).send("Código de autorização não fornecido.");
    const data = {
        grant_type: 'authorization_code',
        client_id: UID,
        client_secret: SECRET,
        redirect_uri: redirectURI,
        code: code
    };
    try {
        const response = await axios.post(token_url, data);
        const access_token = response.data.access_token;
        
        const user_info_response = await axios.get("https://api.intra.42.fr/v2/me", {
            headers: { Authorization: `Bearer ${access_token}` }
        });

        console.log(`Status 200 - req feita por: ${user_info_response.data.usual_full_name}`);
        return res.status(200).json(user_info_response.data);
    } catch (error) {
        console.error('Erro ao trocar o código por token:', error.response ? error.response.data : error.message);
        res.status(500).send('Erro ao trocar o código por token');
    }
});

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});
