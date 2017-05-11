package ba.isss.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import ba.isss.models.Obavjestenje;
import ba.isss.services.ObavjestenjeService;

@RestController
@RequestMapping(path="/obavjestenja")
public class ObavjestenjaController {
	

	@Autowired
    private ObavjestenjeService studentService;
     
    @RequestMapping(value="/find")
    @ResponseBody
    public Iterable<Obavjestenje> find(@RequestParam("student_id") Integer id) {
    	return studentService.findByStudent(id);
    }

}
