import './FormSignup.css';

function FormSignup() {
    return (
        <>
            <div className="form-group">
                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" />
                        <span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                        <span className="icon is-small is-right"><i className="fas fa-check"></i></span>
                    </div>
                </div>

                <div className="field">
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="name" placeholder="name" />
                        <span className="icon is-small is-left"><i className="fas fa-envelope"></i></span>
                        <span className="icon is-small is-right"><i className="fas fa-check"></i></span>
                    </div>
                </div>

                <div className="field">
                    <div className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password" />
                        <span className="icon is-small is-left"><i className="fas fa-lock"></i></span>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button className="button is-success">
                            Inscription
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
  
export default FormSignup;