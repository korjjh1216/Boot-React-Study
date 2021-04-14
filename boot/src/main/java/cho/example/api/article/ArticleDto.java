package cho.example.api.article;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class ArticleDto {
    private long ArticleId;
    private String name;
    private String email;
    private String subject;
    private String content;
    private String rdate;
}
