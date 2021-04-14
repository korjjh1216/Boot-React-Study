package cho.example.api.address;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class AddressDto {
    private long boardId;
    private String name;
    private String addr;
    private String rdate;
}
