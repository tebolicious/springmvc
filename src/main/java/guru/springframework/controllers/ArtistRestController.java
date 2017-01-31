package guru.springframework.controllers;

import guru.springframework.domain.Artist;
import guru.springframework.domain.Product;
import guru.springframework.services.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by thendo on 2017/01/09.
 */
@RestController
public class ArtistRestController {
    private ArtistService artistService;
    @Autowired
    public void setArtistService(ArtistService artistService) {
        this.artistService = artistService;
    }
    @CrossOrigin()
    @RequestMapping("/getAllArtist")
    public List<Artist> listArtists(){
        List<Artist> listOfArtists = new ArrayList<Artist>();
        listOfArtists=artistService.listAllArtist();
        return listOfArtists;

    }
}
