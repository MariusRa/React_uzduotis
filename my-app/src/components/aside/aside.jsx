import Search from "../search/search";
import Categories from "../categories/categories";
import Side from "../side/side";

function Aside() {
    return (
        <div className="col-lg-4">
            {/*}Search widget*/}
            <Search/>
            {/*}Categories widget*/}
            <Categories/>
            {/*}Side widget*/}
            <Side/>
        </div>
    );
}

export default Aside;
