package guru.springframework.services;

import guru.springframework.domain.Product;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;
import java.util.List;

/**
 * Created by thendo on 2017/01/06.
 */
@Service
@Profile("jpadao")
public class ProductServiceJpaDaoimp implements  ProductService  {
    private EntityManagerFactory emf;
    @PersistenceUnit
    public void setEmf(EntityManagerFactory emf) {
        this.emf = emf;
    }

    @Override
    public List<Product> listAllProducts() {
        EntityManager em = emf.createEntityManager();
        return  em.createQuery("from Product",Product.class).getResultList();
    }

    @Override
    public String onSaleProducts() {
        return null;
    }

    @Override
    public Product getProductById(Integer id) {
         EntityManager em = emf.createEntityManager();
         return  em.find(Product.class,id);
    }

    @Override
    public Product saveOrUpdateProduct(Product product) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        Product savedProduct = em.merge(product);
        em.getTransaction().commit();
        return  savedProduct;
    }

    @Override
    public void deleteProduct(Integer id) {
     EntityManager em = emf.createEntityManager();
     em.getTransaction().begin();
     em.remove(em.find(Product.class,id));
     em.getTransaction().commit();
    }
}
