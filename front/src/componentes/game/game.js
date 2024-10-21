
function Quiz() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card center">
                        <div className="card-image">
                            <img src={require('../../img/42\ Quiz\ logo.png')} alt=""/>
                        </div>
                        <div className="card-content">
                            <span className="card-title">Quem é o cadete?</span>
                        </div>
                        <div className="card-action card-resp">
                            <button className="waves-effect waves-light btn"><i className="material-icons left">face</i>Hudson Mateque</button>
                            <button className="waves-effect waves-light btn"><i className="material-icons left">face</i>Walter Alexandre</button>
                            <button className="waves-effect waves-light btn"><i className="material-icons left">face</i>Lourenço António</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Quiz;