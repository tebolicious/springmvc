package guru.springframework.services;

import guru.springframework.domain.Product;

import java.util.List;

/**
 * Created by thendo on 2017/01/05.
 */
public interface ProductService {
    List<Product> listAllProducts();
    public String onSaleProducts();
    Product  getProductById(Integer id);
    Product saveOrUpdateProduct(Product product);
    void deleteProduct(Integer id);

}
