package guru.springframework.services;

import guru.springframework.domain.Artist;
import java.util.List;
/**
 * Created by thendo on 2017/01/09.
 */
public interface ArtistService {
    List<Artist> listAllArtist();
    Artist getArtistById(Integer id);
    Artist saveOrUpdateArtist(Artist artist);
    void  deleteArtist(Integer id);
}
