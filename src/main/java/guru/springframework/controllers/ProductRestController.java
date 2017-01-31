package guru.springframework.controllers;

import guru.springframework.domain.Product;
import guru.springframework.services.Country;
import guru.springframework.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by thendo on 2017/01/09.
 */
@RestController
public class ProductRestController {
    private ProductService productService;
    @Autowired
    public void setProductService(ProductService productService) {
        this.productService = productService;
    }
    @RequestMapping("/ProductsRest")
    public List<Product> listProducts(){
        List<Product> listOfProducts = new ArrayList<Product>();
        listOfProducts=productService.listAllProducts();
        return listOfProducts;

    }
    @RequestMapping(value = "/ProductsRest/{id}", method = RequestMethod.GET,headers="Accept=application/json")
    public Product getProductById(@PathVariable int id)
    {

       if(productService.getProductById(id) != null){
        Product product = new Product();
        product = productService.getProductById(id);
        return product;
       }else{
           return  null;
       }
    }


}
