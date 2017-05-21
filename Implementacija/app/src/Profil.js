import React, { Component } from 'react';
import './css/Profil.css';
var md5 = require('js-md5');

class Profil extends Component {

	constructor(props){
		super(props);
		this.state = {user: Object.assign({}, this.props.user),
						errorCodes: [],
						status: null,
						sifra1: "",
						sifra2: "",
						sifra: "",
						poruka1: this.props.poruka1,
					};
  		this.onChangeSifra1 = this.onChangeSifra1.bind(this);
			this.onChangeSifra2 = this.onChangeSifra2.bind(this);
			this.onChangeSifra = this.onChangeSifra.bind(this);
    	this.submitProfile = this.submitProfile.bind(this);
    	this.validacija = this.validacija.bind(this);
	}

	onChangeSifra(event){
		this.setState({sifra: event.target.value});
	}
	onChangeSifra1(event){
		this.setState({sifra1: event.target.value});
	}
	onChangeSifra2(event){
		this.setState({sifra2: event.target.value});
	}


	validacija(){
		var nextErrorCodes = [];

		if (this.state.sifra1.length <= 4){
			nextErrorCodes.push("DS");
		}

		if (this.state.sifra1 !== this.state.sifra2){
			nextErrorCodes.push("NS");
		}

		if(this.state.sifra1 === this.state.sifra){
			nextErrorCodes.push("SS");
		}

		if(this.state.user.password !== md5(this.state.sifra)){
			nextErrorCodes.push("PS");
		}

		this.setState({errorCodes: nextErrorCodes});
		return nextErrorCodes.length === 0;
	}

	submitProfile(){
		if (this.validacija()){
			this.props.onProfileSubmit(this.state);
		}
	}
PrikazPoruke() {
	if (this.state.poruka1==="Y")
	        alert("Uspješno ste promijenili šifru.");
	else
			alert("Šifra nije promijenjena.");

	this.setState({poruka1: null});
}

  	render() {
  	const trenutniUser = Object.assign({}, this.state);

    return (
    	<div>
			<h1 className="main-naslov profil-naslov">Pregled studentskog profila</h1>
	<div className="form-horizontal profil-forma center-block">

       {this.state.poruka1 ? this.PrikazPoruke() : null}

					<div className="form-group profil-form-group">
						<label  className="col-sm-2 control-label">Korisničko ime:</label>
						<div className="col-sm-2 control-label">
								<span>{this.state.user.username}</span>
						</div>
				 	</div>
			  <div className="form-group profil-form-group">
			    <label  className="col-sm-2 control-label">Ime:</label>
			    <div className="col-sm-2 control-label">
							<span>{this.state.user.ime}</span>
			 		</div>
			 </div>

			 <div className="form-group profil-form-group">
				 <label  className="col-sm-2 control-label">Prezime:</label>
				 <div className="col-sm-2 control-label">
						 <span>{this.state.user.prezime}</span>
				 </div>
			</div>

			<div className="form-group profil-form-group">
				<label  className="col-sm-2 control-label">JMBG:</label>
				<div className="col-sm-2 control-label">
						<span>{this.state.user.jmbg}</span>
				</div>
		 </div>

		 <div className="form-group profil-form-group">
			 <label  className="col-sm-2 control-label">Datum rođenja:</label>
			 <div className="col-sm-2 control-label">
					 <span>{this.state.user.datumRodjenja}</span>
			 </div>
		</div>
		<div className="form-group profil-form-group">
		 <label  className="col-sm-2 control-label">Mjesto rođenja:</label>
		 <div className="col-sm-2 control-label">
				 <span>{this.state.user.mjestoRodjenja}</span>
		 </div>
	 </div>
		<div className="form-group profil-form-group">
			<label  className="col-sm-2 control-label">Spol:</label>
			<div className="col-sm-2 control-label">
					<span>{(this.state.user.spol === "M") ? "Muški" : "Ženski"}</span>
			</div>
	 </div>
	 <div className="form-group profil-form-group">
		 <label  className="col-sm-2 control-label">Adresa:</label>
		 <div className="col-sm-2 control-label">
				 <span>{this.state.user.adresa}</span>
		 </div>
	</div>
	<div className="form-group profil-form-group">
 	 <label  className="col-sm-2 control-label">Telefon:</label>
 	 <div className="col-sm-2 control-label">
 			 <span>{this.state.user.telefon}</span>
 	 </div>
 	</div>
 	<div className="form-group profil-form-group">
		<label  className="col-sm-2 control-label">Email:</label>
		<div className="col-sm-2 control-label">
				<span>{this.state.user.email}</span>
		</div>
 	</div>
</div>


<div>
<h2 className="main-naslov profil-naslov">Izmjena šifre</h2>
<div className="form-horizontal profil-forma center-block">
	<form className="form-horizontal profil-forma center-block">

	  		  <div className="form-group profil-form-group">
			    <label htmlFor="password1" className="col-sm-2 control-label">Nova šifra:</label>
			    <div className="col-sm-2">
			      <input type="password" className="form-control" id="password1" placeholder="Nova šifra" onChange={this.onChangeSifra1} />
			    </div>
			  </div>

				{this.state.errorCodes.find(x => x === "DS")
			? <div className="row error-row">
				<div className="col-sm-2">
				</div>
				<div className="col-sm-9">
					<span>Šifra je prekratka.</span>
				</div>
			</div>
			:
			null
			}
				<div className="form-group profil-form-group">
				<label htmlFor="password2" className="col-sm-2 control-label">Nova šifra:</label>
				<div className="col-sm-2">
					<input type="password" className="form-control" id="password2" placeholder="Nova šifra" onChange={this.onChangeSifra2}   />
				</div>
			</div>


  			  {this.state.errorCodes.find(x => x === "NS")
			  ? <div className="row error-row">
			  	<div className="col-sm-2">
			  	</div>
			    <div className="col-sm-9">
			    	<span>Šifre nisu jednake.</span>
			    </div>
			  </div>
			  :
			  null
			  }
				<div className="form-group profil-form-group">
				<label htmlFor="password" className="col-sm-2 control-label">Stara šifra:</label>
				<div className="col-sm-2">
					<input type="password" className="form-control" id="password" placeholder="Stara šifra" onChange={this.onChangeSifra}   />
				</div>
			</div>

				{this.state.errorCodes.find(x => x === "SS")
			? <div className="row error-row">
				<div className="col-sm-2">
				</div>
				<div className="col-sm-9">
					<span>Nova i stara šifra su jednake.</span>
				</div>
			</div>
			:
			null
			}

			{this.state.errorCodes.find(x => x === "PS")
		? <div className="row error-row">
			<div className="col-sm-2">
			</div>
			<div className="col-sm-9">
				<span>Unijeli ste pogrešnu šifru.</span>
			</div>
		</div>
		:
		null
		}

			  <div className="form-group profil-form-group">
			    <div className="col-sm-6 status-profil">
			    	{this.state.status === "US"?
			    		<span className="status-profil-uspjeh">Šifra je uspješno promijenjena!</span>
			    			: null
		    		}
			    	{this.state.status === "ER"?
			    		<span className="status-profil-error">Greška pri mijenjanju šifre!</span>
			    			: null
		    		}

			    </div>

			    <div className="col-sm-6">
			      <button type="button" className="btn btn-primary" onClick={this.submitProfile}>Promijeni šifru</button>
			    </div>
			  </div>
			</form>
		</div>
</div>
</div>
    );
  }
}

export default Profil;
