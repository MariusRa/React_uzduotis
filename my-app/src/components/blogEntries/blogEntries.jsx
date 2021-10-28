import FBlogPost from "../fBlogPost/fBlogPost";
import NonFBlogPost from "../nonfBlogPost/nonfBlogPost";

function BlogEntries() {
    return(
        <div className="col-lg-8">
            {/*Featured blog post*/}
            <FBlogPost/>
            {/*Nested row for non-featured blog posts-*/}
            <NonFBlogPost/>
        </div>
    );
}

export default BlogEntries;
