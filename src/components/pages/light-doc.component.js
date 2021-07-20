import React, { Component } from "react";
export default class LightDoc extends Component {
  render() {
    return (
      <div className="container-fluid">


           
         
             <div className="p-5 mb-4 bg-light  rounded-3">
          <h2 className="blog-post-title" id="light-doc">taggstar Light Library</h2>
          <p>Taggstar Lite is a cut down version of the full integration code that Taggstar uses on desktop
            and mobile websites. It is designed to work both in the browser and in Node.js environment.</p>
          <h2>Installation</h2>
          <h6>In a browser:</h6>
          <pre><code className="language-plaintext highlighter-rouge">&lt;script src="//cdn.taggstar.com/libs/taggstar_lite_v1.0.0.min.js&gt;&lt;script&gt;</code></pre>
          <h6>Using npm:</h6>
          <pre><code className="language-plaintext highlighter-rouge">$ npm i --save taggstar-lite</code></pre>
          <p className="text-danger">Note: The package is still under development.</p>
          <h2>Why Taggstar Lite?</h2>
          <p>Taggstar Lite allows developers to use the Taggstar API to retrieve social proof messages
            without having to manage:</p>
          <ul>
            <li>Cookies</li>
            <li>Client side error handling issues</li>
          </ul>
          <h2>Usage</h2>
          <h6>In a browser:</h6>
          <p>Example index.html :</p>
          <pre><code className="language-plaintext highlighter-rouge">&lt;script&gt;taggstarLite.productRequest('taggstarcom',&#123;
            id: 'prd1',
            name: 'product 1',
            price: 10,
            category: '/category 1'&#125;, &#123;
            experienceId: 'treatment',
            &#125;).then(function(data) {// success
            }).catch(function(err) {// error
            });&lt;script&gt;</code></pre>
          <h6>Using npm:</h6>
          <p>Example index.js :</p>
          <pre><code className="language-plaintext highlighter-rouge">
            import &#123;productRequest&#125; from 'taggstar-lite'
            productRequest('taggstarcom', &#123;
            id: 'prd1',
            name: 'product 1',
            price: 10,
            category: '/category 1'
            &#125;, &#123;
            experienceId: 'treatment',
            &#125;).then(function(data) &#123;
            // success
            &#125;).catch(function(err)  &#123;// error
            &#125;);
          </code></pre>
          <h2>Methods</h2>
          <p>The following methods are available for developers. Detail of each parameter is explained
            below.</p>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Method name</th>
                  <th scope="col">Parameters</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>productRequest</td>
                  <td>( key, productJson, options )</td>
                  <td>Mainly used on PDP. Allows to post and get social proof messages for unique products.</td>
                </tr>
                <tr>
                  <td>categoryRequest</td>
                  <td>( key, categoryJson, options )</td>
                  <td>Mainly used on PLP. Allows to post and get social proof messages for a product list.</td>
                </tr>
                <tr>
                  <td>basketRequest</td>
                  <td>( key, basketJson, options )</td>
                  <td>Mainly used on the basket page. Allows to post a list of products and get social proof messages for them on the basket page.</td>
                </tr>
                <tr>
                  <td>conversionRequest</td>
                  <td>( key, orderJson, options, dimensions )</td>
                  <td>Mainly used on the confirmation page. Allows to post an order on the confirmation page.</td>
                </tr>
                <tr>
                  <td>eventtRequest</td>
                  <td>( key, eventJson, options, pageType )</td>
                  <td>Mainly used on PLP or PDP. Allows to post an event (eg. add to basket).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Parameters</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Req?</th>
                  <th scope="col">Data Type</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>key</td>
                  <td>+</td>
                  <td>string</td>
                  <td>Site key</td>
                </tr>
                <tr>
                  <td>productJson</td>
                  <td>+</td>
                  <td>Object</td>
                  <td>Object used for <code>productRequest</code> method</td>
                </tr>
                <tr>
                  <td className="text-center">id</td>
                  <td>+</td>
                  <td>String</td>
                  <td>Product id</td>
                </tr>
                <tr>
                  <td className="text-center">name</td>
                  <td></td>
                  <td>String</td>
                  <td>Product name</td>
                </tr>
                <tr>
                  <td className="text-center">price</td>
                  <td></td>
                  <td>Number</td>
                  <td>Product price</td>
                </tr>
                <tr>
                  <td className="text-center">category</td>
                  <td></td>
                  <td>String</td>
                  <td>Product category</td>
                </tr>
                <tr>
                  <td className="text-center">variant</td>
                  <td></td>
                  <td>object </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">stock</td>
                  <td></td>
                  <td>Array of object </td>
                  <td></td>
                </tr>

                <tr>
                  <td>categoryJson</td>
                  <td>+</td>
                  <td>Object</td>
                  <td>Object used for <code>categoryRequest</code> method</td>
                </tr>
                <tr>
                  <td className="text-center">category</td>
                  <td>+</td>
                  <td>String</td>
                  <td>Category name</td>

                </tr>
                <tr>
                  <td className="text-center">products</td>
                  <td>+</td>
                  <td>Array of strings</td>
                  <td>List of product ids (limited to 100)</td>
                </tr>
                <tr>
                  <td>basketJson</td>
                  <td>+</td>
                  <td>Object</td>
                  <td>Object used for <code>basketRequest</code> method</td>
                </tr>
                <tr>
                  <td className="text-center">lineItems</td>
                  <td>+</td>
                  <td>Array of object </td>
                  <td></td>
                </tr>
                <tr>
                  <td>orderJson</td>
                  <td>+</td>
                  <td>Object</td>
                  <td>Object used for <code>conversionRequest</code> method</td>
                </tr>
                <tr>
                  <td className="text-center">id</td>
                  <td>+</td>
                  <td>String</td>
                  <td>Order id</td>
                </tr>
                <tr>
                  <td className="text-center">totalPrice</td>
                  <td>+</td>
                  <td>Number</td>
                  <td>Total price of order</td>
                </tr>
                <tr>
                  <td className="text-center">currency</td>
                  <td>+</td>
                  <td>String</td>
                  <td>Currency of order. Default is GBP</td>
                </tr>
                <tr>
                  <td className="text-center">orderItems</td>
                  <td>+</td>
                  <td>Array of object </td>
                  <td></td>
                </tr>
                <tr>
                  <td>pageType</td>
                  <td>+</td>
                  <td>String</td>
                  <td>Provided for <code>eventRequest</code> method for page type. Should be one of these values: [ product, category, basket, conversion ]</td>
                </tr>
                <tr>
                  <td>eventJson</td>
                  <td>+</td>
                  <td>Object</td>
                  <td>Object used for <code>conversionRequest</code> method</td>
                </tr>
                <tr>
                  <td className="text-center">category</td>
                  <td>+</td>
                  <td>String</td>
                  <td>Category of event (eg. basket for add to basket event)</td>
                </tr>
                <tr>
                  <td className="text-center">name</td>
                  <td>+</td>
                  <td>String</td>
                  <td>Name of event (eg. add for add to basket event)</td>
                </tr>
                <tr>
                  <td className="text-center">data</td>
                  <td>+</td>
                  <td>Object </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="text-center">eventGroupId</td>
                  <td>+</td>
                  <td>String</td>
                  <td><code>result.evenGroupId</code> of a previous request (eg. result of <code>productRequest</code> or <code>categoryRequest</code> )</td>
                </tr>
                <tr>
                  <td>Options</td>
                  <td></td>
                  <td>Object</td>
                  <td>Object used to provide additional parameters</td>
                </tr>
                <tr>
                  <td className="text-center">local</td>
                  <td></td>
                  <td>String</td>
                  <td>Locale info</td>
                </tr>
                <tr>
                  <td className="text-center">deviceType</td>
                  <td></td>
                  <td>String</td>
                  <td>One of the following values: [ tablet , desktop , mobile ]. If not provided, it is figured out by AWS</td>
                </tr>
                <tr>
                  <td className="text-center">provider</td>
                  <td></td>
                  <td>String</td>
                  <td>One of the following values: [ client , server ]. Experiment provider info. If Taggstar is an experiment provider then it should be set as server . If a 3rd party experiment provider is used then it must be set as client . Default is server</td>
                </tr>
                <tr>
                  <td className="text-center">experienceId</td>
                  <td></td>
                  <td>String</td>
                  <td>Experience id. Must be provided if using a 3rd party experiment tool ( provider: client ).</td>
                </tr>
                <tr>
                  <td className="text-center">cookiePath</td>
                  <td></td>
                  <td>Object</td>
                  <td>First-party cookie path. Default is ‘/’</td>
                </tr>
                <tr>
                  <td className="text-center">errorSendingProbability</td>
                  <td></td>
                  <td>Number</td>
                  <td>Percent of client side error sending rate. Should be between [ 0,1 ]. Default is 0.1</td>
                </tr>
                <tr>
                  <td className="text-center">tagg</td>
                  <td></td>
                  <td>object </td>
                  <td></td>
                </tr>
                <tr>
                  <td>dimensions</td>
                  <td></td>
                  <td>object </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <h2>Data type definitions inside parameters</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm table-hover">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Req?</th>
                    <th scope="col">Data Type</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>key</td>
                    <td>+</td>
                    <td>string</td>
                    <td>Site key</td>
                  </tr>
                  <tr>
                    <td>variant
                      <tr><td className="text-center"> key/value pair (any propName)
                      </td></tr>
                      <tr><td>stock</td></tr>
                      <tr><td className="text-center">quantity</td></tr>
                      <tr><td className="text-center">variant</td></tr>
                    </td>
                    <td></td>
                    <td>Object
                      <td>-</td>
                      <tr><td>Array of object</td></tr>
                      <tr><td>Number</td></tr>
                      <tr><td>Object</td></tr>
                    </td>
                    <td>In order to get “Low Stock Message” (LSQ), these parameters should be provided.</td>
                  </tr>

                  <tr>
                    <td>lineItems</td>
                    <td></td>
                    <td>Array of object </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-center">id</td>
                    <td>+</td>
                    <td>String</td>
                    <td>Product item id</td>
                  </tr>
                  <tr>
                    <td className="text-center">unitPrice</td>
                    <td>+</td>
                    <td>Number</td>
                    <td>Product item unit price</td>
                  </tr>
                  <tr>
                    <td className="text-center">quantity</td>
                    <td>+</td>
                    <td>Number</td>
                    <td>Product item quantity</td>
                  </tr>
                  <tr>
                    <td className="text-center">variant</td>
                    <td>+</td>
                    <td>Object</td>
                    <td>In order to get “Low Stock Message” (LSQ), these parameters should be provided.</td>
                  </tr>
                  <tr>
                    <td className="text-center">stock</td>
                    <td>+</td>
                    <td>array of Object</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>orderItems</td>
                    <td></td>
                    <td>Array of object </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-center">id</td>
                    <td>+</td>
                    <td>String</td>
                    <td>Product item id</td>
                  </tr>
                  <tr>
                    <td className="text-center">unitPrice</td>
                    <td>+</td>
                    <td>Number</td>
                    <td>Product item unit price</td>
                  </tr>
                  <tr>
                    <td className="text-center">quantity</td>
                    <td>+</td>
                    <td>Number</td>
                    <td>Product item quantity</td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>+</td>
                    <td>Object </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td className="text-center">label</td>
                    <td>+</td>
                    <td>String</td>
                    <td>Eg. product id for add to basket event</td>
                  </tr>
                  <tr>
                    <td className="text-center">value</td>
                    <td>+</td>
                    <td>Number</td>
                    <td>Eg. quantity for add to basket event</td>
                  </tr>
                  <tr>
                    <td>tagg</td>
                    <td></td>
                    <td>Object</td>
                    <td>Should be used on QA. Instead of using this object, all keys can be used from query string. Eg. instead of <code>fakeData</code> , taggFakeData can be used from query string. Query string tagg values override <code>tagg</code> object</td>
                  </tr>
                  <tr>
                    <td className="text-center">debug</td>
                    <td></td>
                    <td>boolean</td>
                    <td>Set to be as <code>true</code> in order to receive debug object on response object</td>
                  </tr>
                  <tr>
                    <td className="text-center">env</td>
                    <td></td>
                    <td>string</td>
                    <td>Switch between environments. Possible values are <code>qa</code> and <code>prod</code> Default is <code>prod</code></td>
                  </tr>
                  <tr>
                    <td className="text-center">experienceId</td>
                    <td></td>
                    <td>string</td>
                    <td>Experience id</td>
                  </tr>
                  <tr>
                    <td className="text-center">experimentId  <td className="text-center">experimentGroup</td></td>
                    <td></td>
                    <td>string <td>string</td></td>
                    <td>Experiment id/group. If the experiment provider is Taggstar then these values can be used to force the experiment to be executed.</td>
                  </tr>
                  <tr>
                    <td className="text-center">fakeData</td>
                    <td></td>
                    <td>string</td>
                    <td>Fake data value. Comma seperated message types. Eg. CAP,QP</td>
                  </tr>
                  <tr>
                    <td>dimensions
                      <tr><td className="text-center"> key/value pair (any propName)</td></tr>
                    </td>
                    <td></td>
                    <td>Object</td>
                    <td>Additional dimension values for <code>conversionRequest</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2>Response Object</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm table-hover">
                <thead>
                  <tr>
                    <th scope="col">Key</th>
                    <th scope="col">Example</th>
                    <th scope="col">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>result</td>
                    <td><code>"result": &#123;"moduleRunId": "2aa95f9f7e93c6d1", "eventGroupId": "9f8edc1971fbc528",
                      "success": true
                      &#125;
                    </code></td>
                    <td>Returns every time.<code>"eventGroupId"</code> may be used for the <code>eventRequest</code> method. This object can be checked for success of method call</td>
                  </tr>
                  <tr>
                    <td>socialProof</td>
                    <td><code>"socialProof": [ &#123;
                      "product": &#123;
                      "id": "WE34Z"
                      &#125;,
                      "messages": [
                      &#123;
                      "category": "AUDIENCE",
                      "code": "CAP",
                      "data": "13",
                      "message": "<strong>Popular
                        !</strong>13 People looking at this right
                      now"
                      &#125;
                      ]
                      &#125;
                      ]
                    </code></td>
                    <td>If <code>result.success</code> is <code>true</code> then this array may contain messages for each send product id.</td>
                  </tr>
                  <tr>
                    <td>experiment</td>
                    <td><code>"experiment":  &#123;
                      "id": "tvc1",
                      "group": "treatment",
                      "state": "running"
                      &#125;
                    </code></td>
                    <td>If an experiment is executed by Taggstar, this object is returned for the id and group of the experiment that executed.</td>
                  </tr>
                  <tr>
                    <td>debug</td>
                    <td><code>"debug":  &#123;
                      "processed": true,
                      "deviceType": "DESKTOP",
                      "locale": "en-GB",
                      "experienceId": "treatment",
                      "ruleSetId": "product-module-v1",
                      "messageBundleId": "boohoo-default",
                      "eventResult": "none"
                      &#125;
                    </code></td>
                    <td>If debug is set as true from query string ( <code>taggDebug</code> ) or
                      <code>options.tagg.debug</code> parameter, then it is returned to inform.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h2>Examples</h2>
            <h6>productRequest</h6>
            <p>Returns fake data messages (CAP and QPH) in German(de-DE) for product id “WE34Z” on QA env.</p>
            <p><code>productRequest('taggstarcom', &#123;
              id: 'WE34Z',
              category: '/Dresses',
              &#125;, &#123;
              locale: 'de-DE',
              tagg: &#123;
              debug: true,
              env: 'qa',
              fakeData: 'CAP,QPH'
              &#125;
              &#125;).then(function(data) &#123;
              //
              &#125;).catch(function(err) &#123;
              //
              &#125;);</code></p>
            <h6>categoryRequest</h6>
            <p>Returns message(s) (if there exist) in default language for product ids [“WE34Z”, “SE321”] on PROD env.</p>
            <p>
              <code>
                categoryRequest('taggstarcom', &#123;
                products: ['WE34Z', 'SE321'],
                category: 'Women/Trousers'
                &#125;, &#123;
                deviceType: 'desktop'
                &#125;).then(function(data) &#123;
                //
                &#125;).catch(function(err) &#123;
                //
                &#125;);
              </code>
            </p>
            <h6>basketRequest</h6>
            <p>Returns message(s) (if there exist) in default language for product ids [“WE34Z”, “SE321”] with variants and for experience id as treatment on PROD env. If there exist returns messages containing LSQ.</p>
            <p>
              <code>
                basketRequest('taggstarcom',  &#123;
                lineItems: [ &#123;
                id: 'WE34Z',
                quantity: 1,
                unitPrice: 55.00,
                variant:  &#123;
                size: 'UK 8'
                &#125;,
                stock: [ &#123;
                quantity: 2,
                variant:  &#123;
                size: 'UK 8'
                &#125;
                &#125;]
                &#125;,  &#123;
                id: 'SE321',
                quantity: 2,
                unitPrice: 22.50,
                variant:  &#123;
                size: 'XXL'
                &#125;,
                stock: [ &#123;
                quantity: 20,
                variant:  &#123;
                size: 'XXL'
                &#125;
                &#125;]
                &#125;]
                &#125;,  &#123;
                provider: 'client',
                experienceId: 'treatment'
                &#125;).then(function(data)  &#123;
                //
                &#125;).catch(function(err)  &#123;
                //
                &#125;);

              </code>
            </p>
            <h6>conversionRequest</h6>
            <p>Posts order details for product id “WE34Z” on QA env.</p>
            <p>
              <code>
                conversionRequest('taggstarcom',  &#123;
                id: '3764827482788',
                totalPrice: 20.00,
                currency: 'EUR',
                orderItems: [ &#123;
                id: 'WE34Z',
                'quantity': 2,
                'unitPrice': 10.00
                &#125;]
                &#125;,  &#123;
                tagg:  &#123;
                env: 'qa'
                &#125;
                &#125;).then(function(data)  &#123;
                //
                &#125;).catch(function(err)  &#123;
                //
                &#125;);
              </code>
            </p>
            <h6>eventRequest</h6>
            <p>Posts event details for product id “WE34Z” on PROD env when “Add to Basket” button
              clicked on PDP.</p>
            <p>
              <code>
                eventRequest('taggstarcom', 'product', &#123;
                category: 'basket',
                name: 'add',
                data: &#123;
                label: 'WE34Z',
                value: 2
                &#125;,
                eventGroupId: 'b2fca8f2e123913'
                &#125;
                ).then(function(data) &#123;
                //
                &#125;).catch(function(err) &#123;
                //
                &#125;);
              </code>
            </p>
            <h6>Response Object</h6>
            <p><code>
            &#123;
                "result": &#123;
                "moduleRunId": "2aa95f9f7e93c6d1",
              "eventGroupId": "9f8edc1971fbc528",
              "success": true
              &#125;,
              "experiment": &#123;
                "id": "tvc1",
              "group": "treatment",
              "state": "running"
              &#125;,
              "socialProof": [
                &#123;
                "product": &#123;
                "id": "WE34Z"
                &#125;,
              "messages": [
                &#123;
                "category": "AUDIENCE",
              "code": "CAP",
              "data": "13",
              "message": "<strong>Popular!</strong>13 People looking at this
              right now"
              &#125;
              ]
              &#125;
              ],
              "debug": &#123;
                "processed": true,
              "deviceType": "DESKTOP",
              "locale": "en-GB",
              "experienceId": "treatment",
              "ruleSetId": "product-module-v1",
              "messageBundleId": "default",
              "eventResult": "none"
              &#125;
              &#125;
            </code></p>
          </div>
       </div>
       </div>
      
    );
  }
}
