import React, { Component } from "react";


export default class DataSurvey extends Component {
    render() {
        return (
            <main className="">

<section className=" text-center container justify-content-center">
            <div className="row">
                <div className="mx-auto col-8">
                    <h1 className="mt-5 mb-3">Data Survey</h1>
                    <p className="lead text-muted">data attributes that Taggstar would like to collect from each page in
                        order to power our social proof.</p>
                </div>
            </div>
           
                <div className="mx-auto mt-5 col">
                    <nav>
                        <div className="nav nav-tabs justify-content-center " id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-pdp-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-pdp" type="button" role="tab" aria-controls="nav-home"
                                aria-selected="true">Product Page</button>
                            <button className="nav-link" id="nav-plp-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-plp" type="button" role="tab" aria-controls="nav-profile"
                                aria-selected="false">Category Page</button>
                            <button className="nav-link" id="nav-basket-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-basket" type="button" role="tab" aria-controls="nav-contact"
                                aria-selected="false">Basket Page</button>
                            <button className="nav-link" id="nav-con-tab" data-bs-toggle="tab"
                                data-bs-target="#nav-con" type="button" role="tab" aria-controls="nav-contact"
                                aria-selected="false">Confirmation Page</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-pdp" role="tabpanel"
                            aria-labelledby="nav-pdp-tab">
                            <div className="mx-auto col-8">
                                <h5 className="mt-5 mb-3">Product Page</h5>
                                <p className="lead text-muted">data attributes that Taggstar would like to collect from each page in
                                    order to power our social proof.</p>
                            </div>
                            <div className="col-12 py-2">
                                <button className="btn btn-primary" type="button" href="/pdp">Start the Survey</button>
                            </div>
                            
                        </div>
                        <div className="tab-pane fade" id="nav-plp" role="tabpanel" aria-labelledby="nav-plp-tab">
                            <div className="mx-auto col-8">
                                <h5 className="mt-5 mb-3">Category Page</h5>
                                <p className="lead text-muted">data attributes that Taggstar would like to collect from each page in
                                    order to power our social proof.</p>
                            </div>
                            <div className="col-12 py-2">
                                <button className="btn btn-primary" type="button" href="/plp">Start the Survey</button>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-basket" role="tabpanel" aria-labelledby="nav-basket-tab">
                            <div className="mx-auto col-8">
                                <h5 className="mt-5 mb-3">Basket Page</h5>
                                <p className="lead text-muted">data attributes that Taggstar would like to collect from each page in
                                    order to power our social proof.</p>
                            </div>
                            <div className="col-12 py-2">
                                <button className="btn btn-primary" type="button" href="/basket">Start the Survey</button>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="nav-con" role="tabpanel" aria-labelledby="nav-con-tab">
                                <div className="mx-auto col-8">
                                    <h5 className="mt-5 mb-3">Confirmation Page</h5>
                                    <p className="lead text-muted">data attributes that Taggstar would like to collect from each page in
                                        order to power our social proof.</p>
                                </div>
                                <div className="col-12 py-2">
                                    <button className="btn btn-primary" type="button" href="/conv">Start the Survey</button>
                                </div>
                                </div>
                    </div>
                </div>
        </section>
           
         
          </main>
        );
    }
}
