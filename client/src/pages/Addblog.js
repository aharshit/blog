import React from "react";
function Addblog(){
    return(
    <>
    <h1>
        Add blog
    </h1><br/>
    <form>
        title<input name="title" type="text"/><br/>
        description<textarea ></textarea><br/>
        thumbnail<input name="thumbnail" type="file"/><br/>
        category
        <select>
            <option>select</option>
        </select><br/>
        <button>submit</button>

    </form>
    </>
    )
}
export default Addblog;