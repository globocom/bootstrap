/* ============================================================
 * bootstrap-select.js v1
 * http://www.github.com/globocom/bootstrap/javascript.html#select
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* SELECT CLASS DEFINITION
  * ========================= */
  var Select = function (element) {
      // var $el = $(element).on('click.dropdown.data-api', this.toggle);

      // $('html').on('click.dropdown.data-api', function () {
      //     $el.parent().removeClass('open');
      // });
  };

  Select.prototype = {
      
  };

  /* SELECT PLUGIN DEFINITION
   * ========================== */

   $.fn.select = function (option) {
       return this.each(function () {
           var $this = $(this);
           var data = $this.data('select');

           if (!data) $this.data('select', (data = new Select(this)));
           if (typeof option == 'string') data[option].call($this);
       });
  };

  $.fn.select.Constructor = Select;

  /* APPLY TO SELECT DROPDOWN ELEMENTS
   * =================================== */

  // $(document)
  //   .on('click.dropdown.data-api touchstart.dropdown.data-api', clearMenus)
  //   .on('click.dropdown touchstart.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
  //   .on('click.dropdown.data-api touchstart.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
  //   .on('keydown.dropdown.data-api touchstart.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);