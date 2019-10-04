/**
 * Defines utility methods used for integration with external content. Public JavaScript methods defined under
 * "gw.api" package are usually safe to be invoked from outside of Guidewire codebase.
 *
 * For example,
 *
 *     var oldValue = gw.api.Util.getValue('MyPage:MyDV:MyField');
 *
 *     gw.api.Util.setValue('MyPage:MyDV:MyField', newValue);
 *
 * Or to set/get values in a batch mode,
 *
 *     var oldValues = gw.api.Util.getValues(['MyPage:MyField1', 'MyPage:MyField2']);
 *
 *     gw.api.Util.setValues({'MyPage:MyField1' : value1, 'MyPage:MyField1' : value2});
 *
 *
 * The above methods are typically invoked by content under PCF TemplatePanel, which automatically converts
 * a PCF element reference to its client side id for the JavaScript call. For example,
 *
 *
 *     <TemplatePanel>
 *
 *       <ReferencedWidget widget="colorCode"/>
 *
 *       <![CDATA[
 *         <script>
 *           function selectColor(color) {
 *             gw.api.Util.setValue('${colorCode}', color);
 *           }
 *         </script>
 *       ...
 *       ]]>
 *     </TemplatePanel>
 *
 *
 */

Ext.define('gw.api.Util', {

    /** @private */
    singleton: true,
    uses: ['gw.Util'],

    /**
     * Returns value of a DetailView Input element
     * @param {String} id Client id of the input element
     * @returns {String} The client side value of input element
     */
    getValue : function (id) {
      var comp = Ext.getCmp(id);
      return gw.Util.getFieldValue(comp);
    },

    /**
     * Get values of multiple DetailView Input elements in a batch mode
     * @param {Array} ids Array of client ids
     * @returns {Array} an array of client side values of the given input elements
     */
    getValues : function (ids) {
      var me = this;
      if (Ext.isArray(ids)) {
        return Ext.Array.map(ids, function(id) {
          return me.getValue(id);
        });
      }

      return null;
    },

    /**
     * Sets the user value for a DetailView Input element.
     * @param {String} id Client id of the input element
     * @param {String} value The user value to set
     */
    setValue : function (id, value) {
      var comp = Ext.getCmp(id);
      gw.Util.setValue(comp, value);
    },

    /**
     * Sets values for multiple DetailView input elements in a batch mode.
     * @param map A map with keys as client input element ids and values as the corresponding value to set
     */
    setValues : function (map) {
      var me = this;
      if (Ext.isObject(map)) {
        Ext.Object.each(map, function(key, value) {
          me.setValue(key, value);
        });
      }
    },

    /**
     * For use by a template panel, to call the panel's server side action handler with the given JSON
     * object as its argument. This function will cause a full UI refresh.
     *
     * The dataOnly argument, if true, tells the server to respond with only updated UI data.
     * WARNING: No layout changes will be applied if this parameter is true! This will keep the TemplatePanel
     * from being re-created. Do not attempt to navigate or alter the UI layout in the action taken when
     * dataOnly = true.
     */
    submitTemplateAction: function (templatePanelId, json, dataOnly) {
        if(dataOnly) {
            gw.app.requestDataUpdate(templatePanelId, templatePanelId + "_templateAction", JSON.stringify(json));
        } else {
            gw.app.invokeEvent(templatePanelId + "_templateAction", JSON.stringify(json), dataOnly);
        }
    },

    /**
     * For use by a template panel, to call the panel's server side update handler with the given JSON
     * object as its argument. This function will not block or refresh the UI, and the success function
     * will be called with the result of the update handler. The optional error handler will be called
     * if the call to the server fails for any reason. The error handler should be used to do any template
     * specific clean up, but does not need to display any message; the normal server error handler will
     * be called once it returns.
     */
    updateTemplate: function (templatePanelId, json, success, error) {
      var params = {
        __templatePanelId: templatePanelId,
        templateJson: JSON.stringify(json)
      };
      params[gw.app.CSRF_TOKEN_PARAM_KEY] = gw.app.getCsrfToken();
      Ext.Ajax.request({
        url: gw.app.getServerUrl(),
        params: params,
        method: "POST",
        success: function(response) {
          success(JSON.parse(response.responseText));
        },
        failure: function(response) {
          error(JSON.parse(response.responseText));
        }
      });
    }
  }
);
