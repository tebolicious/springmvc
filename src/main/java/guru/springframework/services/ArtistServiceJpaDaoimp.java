package guru.springframework.services;

import guru.springframework.domain.Artist;
import guru.springframework.domain.Product;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceUnit;
import java.util.List;

/**
 * Created by thendo on 2017/01/09.
 */
@Service
public class ArtistServiceJpaDaoimp implements  ArtistService {
    private EntityManagerFactory emf;
    @PersistenceUnit
    public void setEmf(EntityManagerFactory emf) {
        this.emf = emf;
    }

    @Override
    public List<Artist> listAllArtist() {
        EntityManager em = emf.createEntityManager();
        return  em.createQuery("from Artist",Artist.class).getResultList();
    }

    @Override
    public Artist getArtistById(Integer id) {
        EntityManager em = emf.createEntityManager();
        return  em.find(Artist.class,id);
    }

    @Override
    public Artist saveOrUpdateArtist(Artist artist) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        Artist savedArtist = em.merge(artist);
        em.getTransaction().commit();
        return  savedArtist;
    }

    @Override
    public void deleteArtist(Integer id) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.remove(em.find(Artist.class,id));
        em.getTransaction().commit();
    }
}
