const register_api = (restapis) => {
  let codeData = ``;
  restapis
    .filter((item) => {
      return (
        item.enabled &&
        typeof item.className !== "undefined" &&
        item.className !== ""
      );
    })
    .map((item) => {
      let className = item.className.toLowerCase();
      codeData += `        $${className} = new API\\${item.className}();
        $${className}->register_routes();\n\n`;
    });

  return codeData.trim();
};

export const apiSnippetCode = (data, restapis) => {
  let register_api_data = register_api(restapis);

  let code = `<?php

namespace ${data.baseNamespace};

/**
 * API Class
 */
class API {

    /**
     * Initialize the class
     */
    function __construct() {
        add_action( 'rest_api_init', [ $this, 'register_api' ] );
    }

    /**
     * Register the API
     *
     * @return void
     */
    public function register_api() {
        ${register_api_data}
    }
}`;

  return code;
};
