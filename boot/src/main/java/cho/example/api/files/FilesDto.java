package cho.example.api.files;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class FilesDto {
    private long seqf;
    private String ofname;
    private String sfname;
    private long fsize;
    private long seq;
}
