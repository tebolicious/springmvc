package guru.springframework.controllers;

import guru.springframework.services.Country;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.jws.WebMethod;
import java.awt.*;
import java.util.List;
import java.util.ArrayList;

/**
 * Created by thendo on 2017/01/09.
 */
@RestController
public class CountryController {
    @RequestMapping(value = "/countries", method = RequestMethod.GET,headers="Accept=application/json")
    public List<Country> getCountries()
    {
        List<Country> listOfCountries = new ArrayList<Country>();
        listOfCountries=createCountryList();
        return listOfCountries;

    }

    @RequestMapping(value = "/country/{id}", method = RequestMethod.GET,headers="Accept=application/json")
    public Country getCountryById(@PathVariable int id)
    {
        List<Country> listOfCountries = new ArrayList<Country>();
        listOfCountries=createCountryList();

        for (Country country: listOfCountries) {
            if(country.getId()==id)
                return country;
        }

        return null;
    }

    // Utiliy method to create country list.
    public List<Country> createCountryList()
    {
        Country indiaCountry=new Country(1, "India");
        Country chinaCountry=new Country(4, "China");
        Country nepalCountry=new Country(3, "Nepal");
        Country bhutanCountry=new Country(2, "Bhutan");

        List<Country> listOfCountries = new ArrayList<Country>();
        listOfCountries.add(indiaCountry);
        listOfCountries.add(chinaCountry);
        listOfCountries.add(nepalCountry);
        listOfCountries.add(bhutanCountry);
        return listOfCountries;
    }


}

