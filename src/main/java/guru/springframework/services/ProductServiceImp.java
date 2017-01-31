package guru.springframework.services;

import guru.springframework.domain.Product;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;
import java.util.function.BiFunction;

/**
 * Created by thendo on 2017/01/05.
 */
@Service
@Profile("map")
public class ProductServiceImp implements ProductService {
    private Map<Integer, Product> products;

    public ProductServiceImp() {
        loadProducts();
    }

    @Override
    public List<Product> listAllProducts() {
        return new ArrayList<>(products.values());
    }

    public Product getProductById(Integer id) {
        return products.get(id);
    }

    @Override
    public Product saveOrUpdateProduct(Product product) {
        if (product != null) {
            if (product.getId() == null) {
                product.setId(getNextKey());
            }
            products.put(product.getId(), product);
            return product;
        }else{
            throw  new RuntimeException("Product can not be null");
        }
    }

    @Override
    public void deleteProduct(Integer id) {
        products.remove(id);
    }


    private  Integer getNextKey(){
        return Collections.max(products.keySet()) + 1;
    }
    private void loadProducts(){
        products = new HashMap<>();
        Product product1 = new Product();
        product1.setId(1);
        product1.setDescription("Product 1");
        product1.setPrice(new BigDecimal("12.99"));
        product1.setImageUrl("image url 1");

        products.put(1,product1);
        Product product2 = new Product();
        product2.setId(2);
        product2.setDescription("Product 2");
        product2.setPrice(new BigDecimal("12.99"));
        product2.setImageUrl("image url 2");

        products.put(2,product2);


    }
    public String onSaleProducts(){
      return "On sale product is Nike ask every one";
    }
}
