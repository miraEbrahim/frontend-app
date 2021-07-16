import React, {Component} from "react";
import SwaggerUI from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";

  export default class Swagger extends Component {
render(){
  return (
    <div className="">
      <SwaggerUI url="http://localhost:8081/taggstar.json" />
    </div>
  );
}
}
