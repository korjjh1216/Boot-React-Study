package cho.example.api.article;

import org.springframework.stereotype.Component;


@Component
public class ArticleDto {
    private long ArticleId;
    private String writer;
    private String email;
    private String subject;
    private String content;
    private String rdate;

    public String getWriter() {
        return this.writer;
    }

    public void setWriter(String writer){
        this.writer=writer;
    }

    public String getEmail(){
        return this.email;
    }

    public  void setEmail(String email){
        this.email=writer;
    }

    public String toString(){
        return "Writer:" + this.writer +"email:" +this.email;
    }

    public String getSubject(){
        return  this.subject;
    }

    public void setSubject(String subject){
        this.subject = subject;
    }

}
