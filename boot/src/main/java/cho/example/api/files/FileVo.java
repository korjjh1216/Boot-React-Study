package cho.example.api.files;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "files")
public class FileVo {
    @Id
    @Column(name = "file_id")
    private Long filesId;

    @Column(name = "original_fname")
    private String originalFname;

    @Column(name = "save_fname")
    private String saveFname;

    @Column(name = "fsize")
    private long fsize;

}
