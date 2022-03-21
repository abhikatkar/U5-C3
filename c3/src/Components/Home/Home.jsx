

export const Home = () => {
    return(
        <div className="homeContainer">
        <h2 style={{ textAlign: "center" }}>Home</h2>
        <div className="sort">
        <button>Sort by Title Asc</button>
        <button>Sort by Title Desc</button>
        <button>Sort by Price Asc</button>
        <button>Sort by Price Desc</button>
    </div>
      </div>
    )
}