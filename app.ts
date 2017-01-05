import greeter = require('./greeter');  
import $ = require('jquery');

import api = require('./api');

$(() => {
  let host = new api.DefaultApi();
  
  host.get( (data: string) =>
    $(document.body).html(greeter(data))
  );
});