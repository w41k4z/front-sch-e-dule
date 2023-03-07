function Banner() {
    return (
        <div className="jumbotron jumbotron-fluid position-relative overlay-bottom">
            <div className="container text-center my-5 py-5">
                <h1 className="text-white mt-4 mb-4">Learn to Learn</h1>
                <h1 className="text-white display-1 mb-5">Platform Education</h1>
                <div className="mx-auto mb-5">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Courses</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="./">Courses 1</a>
                                <a className="dropdown-item" href="./">Courses 2</a>
                                <a className="dropdown-item" href="./">Courses 3</a>
                            </div>
                        </div>
                        <input type="text" className="form-control border-light" placeholder="Keyword" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary px-4 px-lg-5">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;