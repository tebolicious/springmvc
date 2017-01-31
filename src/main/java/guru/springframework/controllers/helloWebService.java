package guru.springframework.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.jws.WebService;
import java.util.concurrent.atomic.AtomicLong;


@Controller
@RequestMapping("/helloWebService")
public class helloWebService {
   private static final  String templete = "Hello, %s!";
   private  final AtomicLong counter = new AtomicLong();


   public String helloWebserviceTest(String s){
        return "Hello "+ s;

    }
}
