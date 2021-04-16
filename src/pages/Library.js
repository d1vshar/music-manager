import LibraryCard from "./Library_card"
function Library(){
    return(
        <div className="library">
        <h1>Library</h1>
        <div className="libCard">
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
            <LibraryCard/>
        </div>
        </div>
    );
}
export default Library;