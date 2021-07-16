import React, { Component } from "react";


export default class ApiSpec extends Component {
    render() {
        return (
            <div className="">

                <article className="blog-post">
                    <h3 className="blog-post-title" id="api-spec">REST API V2 Specification</h3>

                    <h2>Introduction</h2>
                    <p>Connect to the API using <code>https://api.taggstar.com</code></p>
                    <p>Using the SSL endpoint is strongly recommended although HTTP is still supported for legacy reasons.</p>
                    <h2>Usage</h2>
                    <ul>
                        <li>API responses should not be cached</li>
                        <li>Strings are case sensitive</li>
                        <li>URI encode product identifers when passed in the URL</li>
                        <li>Timestamps are unix epoch time in milliseconds in UTC</li>
                        <li>Obtain the siteKey value from your Customer Success Manager or the Dashboard</li>
                        <li>The dashboard <code>https://dashboard.taggstar.com/</code></li>

                    </ul>
                    <h2>Integration Methods</h2>
                    <p>There are two methods of integrating your website with Taggstar, front end and server side (or other application, e.g. native app). In the front end method Taggstar manages JavaScript client code on your behalf and this code runs in a website visitor’s web browser. This code handles API communication, datalayer parsing, keeping state across requests, and message UI display among other things.</p>
                    <p>In a server side integration, the API can be called using a HTTP client written in any language such as PHP, Java,Python, etc. If this is the integration method chosen you will need to manage a number of concerns that would normally be handled in the JavaScript client. The concerns fit into two categories, API Concerns, and UI Concerns.</p>
                    <h4>API Concerns</h4>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>

                                    <th scope="col">API Object</th>
                                    <th scope="col"> Taggstar JavaScript Client</th>
                                    <th> Other Client - Server Side, Native mobile app, etc.</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Visitor Object Generation and Persistance</td>
                                    <td>Handles visitor identifier generation and session identifier, and persistance in a cookie.</td>
                                    <td>Must be handled by the client.</td>

                                </tr>
                                <tr>
                                    <td>Experiment Object Generation and Persistance</td>
                                    <td>Handles persistance of this object that is returned in API responses when an experiment is configured and must be sent in most other API requests.</td>
                                    <td>Must be handled by the client.</td>
                                </tr>
                                <tr>
                                    <td>Device detection</td>
                                    <td>Handles detection of mobile, tablet, desktop and sending the device type to API.</td>
                                    <td>Must be handled by the client.</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </article>
            </div>
        );
    }
}
