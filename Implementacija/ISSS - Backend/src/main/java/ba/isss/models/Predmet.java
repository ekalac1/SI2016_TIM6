package ba.isss.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="predmet")
public class Predmet  {
	public Predmet() {
    	
    }
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	
	private String naziv;
	private Integer semestar;
	private String opis;
	@ManyToOne(targetEntity=Profesor.class)
    @JoinColumn(name="profesor_id")
    private Profesor profesor;
	
	@ManyToOne(targetEntity=Odsjek.class)
    @JoinColumn(name="odsjek_id")
    private Odsjek odsjek;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getNaziv() {
		return naziv;
	}

	public void setNaziv(String naziv) {
		this.naziv = naziv;
	}

	public Integer getSemestar() {
		return semestar;
	}

	public void setSemestar(Integer semestar) {
		this.semestar = semestar;
	}


    public Odsjek getOdsjek(){
    	return odsjek;
    }
    
	public void setOdsjek(Odsjek odsjek) {
		this.odsjek = odsjek;
	}
	
	public Profesor getProfesor(){
    	return profesor;
    }
    
	public void setProfesor(Profesor profesor) {
		this.profesor = profesor;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}
}
