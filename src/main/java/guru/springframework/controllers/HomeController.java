package guru.springframework.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by thendo on 2017/01/05.
 */
@Controller
public class HomeController {
    @RequestMapping("/Home")
    public String home(){
        return "home";
    }

    @RequestMapping("/Home/tes")
    public String test(){
        return "test";
    }
}
