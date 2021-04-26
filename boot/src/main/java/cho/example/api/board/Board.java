package cho.example.api.board;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "board")
public class Board {
    @Id
    @Column(name = "board_id")
    private Long boardId;

    @Column(name = "title")
    private String title;

}