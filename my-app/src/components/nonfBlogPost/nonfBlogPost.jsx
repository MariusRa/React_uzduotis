import BlogPost from "../blogPost/blogPost";
import BlogPost1 from "../blogPost1/blogPost";

function NonFBlogPost(){
    return (
        <div className="row">
            <div className="col-lg-6">
                {/*}Blog post*/}
                <BlogPost/>
                {/*}Blog post*/}
                <BlogPost/>
            </div>
            <div className="col-lg-6">
                {/*}Blog post*/}
                <BlogPost1/>
                {/*}Blog post*/}
                <BlogPost1/>
            </div>
        </div>
    );
}

export default NonFBlogPost;
