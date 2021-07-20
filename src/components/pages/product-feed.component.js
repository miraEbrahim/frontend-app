import React, { Component } from "react";


export default class ProductFeed extends Component {
    render() {
        return (
            <div className="container-fluid">


           
         
            <div className="p-5 mb-4 bg-light  rounded-3">
                    <h2 className="blog-post-title" id="product-feed">Product Feed Requirement</h2>

                    <h2>Summary</h2>
                    <p>Describes the fields Taggstar requires in a product data feed to enable
                        features including Personal Shopper (product recommendations).</p>
                    <h2>General Requirements</h2>
                    <p>Taggstar is able to parse CSV and JSON and XML files. If a CSV file is supplied, the first row
                        should start with a header.
                        We can request a feed from a HTTP(S) URL, and we will fetch the feed once per day.
                        The data feed must mirror the product catalog used on the customer website. Also the feed -.</p>

                    <ul>
                        <li>Must have one record per product</li>
                        <li>Must be refreshed at least daily</li>
                        <li>Must not be a feed used for Pinterest, Facebook, etc with thousands of historical products.</li>
                        <li>Should not contain out of stock products</li>
                    </ul>
                    <h2>Fields</h2>
                    <p>For JSON and XML documents, we can map your fields name onto our standard field
                        names..</p>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>

                                    <th scope="col">Taggstar Name</th>
                                    <th scope="col">Description</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Id (required)</td>
                                    <td>Unique product id</td>

                                </tr>
                                <tr>
                                    <td> Title (required)</td>
                                    <td>Title, displayed above product image</td>

                                </tr>
                                <tr>
                                    <td>Brand (required)</td>
                                    <td> Brand name, display in product info box</td>
                                    </tr>
                                    <tr>
                                    <td>PDP URL (required) </td>
                                    <td>To enable click through to PDP</td>
                                    </tr>
                                    <tr>
                                    <td>Image URL(s) (required)</td>
                                    <td> URLs for mobile and desktop rendering</td>
                                    </tr>
                                    <tr>
                                    <td>Price (required)</td>
                                    <td> The price</td>
                                    </tr>
                                    <tr>
                                    <td>Sale price (optional)</td>
                                    <td> If on sale, the sale price</td>
                                    </tr>
                                    <tr>
                                    <td>category (required) </td>
                                    <td>Category ideally with syntax e.g. /First/Second/Third</td>
                                    </tr>
                                    <tr>
                                    <td>description (required)</td>
                                    <td>Full description of product.</td>
                                    </tr>
                                    <tr>
                                    <td>Add to Bag URL (optional) </td>
                                    <td>For when rendering an add to bag button.</td>
                                    </tr>
                                    
          </tbody>
        </table>
        </div>
              </div>
            </div>
                );
    }
}
