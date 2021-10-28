import Pagination from "../pagination/pagination";
import BlogEntries from "../blogEntries/blogEntries";
import Aside from "../aside/aside";

function Main() {
    return (
        /*Page content*/
        <div class="container">
            <div class="row">
                {/*Blog entries*/}
                <BlogEntries/>
                    {/*}Pagination*/}
                    <Pagination/>
                {/*}Side widgets*/}
                <Aside/>
            </div>
        </div>
    );
}

export default Main;
