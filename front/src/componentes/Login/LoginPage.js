import './Login.css'

function Login() {
  const  loginIntra = () => {
    window.location.href = 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-2ecf03adfd0a8767bb4982ed08af26ad48f8520203ab560647328bedc1890cdd&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fprofile&response_type=code'
  }
  return (
    <div >
      <header>
        <button className="btn btn-large waves-effect waves-light center" onClick={loginIntra}>Entrar com 42</button>
      </header>
    </div>
    
  );
}

export default Login;
