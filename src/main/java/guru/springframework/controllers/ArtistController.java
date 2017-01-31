package guru.springframework.controllers;

import guru.springframework.domain.Artist;
import guru.springframework.domain.Product;
import guru.springframework.services.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by thendo on 2017/01/09.
 */
@Controller
public class ArtistController {
    private ArtistService artistService;
    @Autowired
    public void setArtist(ArtistService artistService) {
        this.artistService = artistService;
    }

    @RequestMapping("/Artist/new")
    public String newArtist(Model model){
        model.addAttribute("artist",new Artist());
        return "artisform";
    }
    @RequestMapping("/Artist/edit/{id}")
    public String editArtist(@PathVariable Integer id, Model model){
        model.addAttribute("artist", artistService.getArtistById(id));
        return "artisform";
    }
    @RequestMapping("/Artist/delete/{id}")
    public String deleteArtist(@PathVariable Integer id){
       artistService.deleteArtist(id);
       return "redirect:/Artist";
    }
    @RequestMapping(value="/Artist",method = RequestMethod.POST)
    public  String saveOrUpdateProduct(Artist artist, Model model){
        Artist saveArtist = artistService.saveOrUpdateArtist(artist);
        model.addAttribute("artist",saveArtist);
        return  "artistshow";
    }
    @RequestMapping("/Artist")
    public String listArtists(Model model){

        return  "artistpage";
    }
}
